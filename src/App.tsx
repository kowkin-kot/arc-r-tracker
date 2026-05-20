/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useCallback } from 'react';
import { Target, ShoppingCart, ExternalLink, AlertTriangle, BookOpen, Check, Cpu, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { itemsList as itemsData, blueprintsList as blueprints } from './data/db';
import { ProcessedItem, WorkshopType, Blueprint } from './types';
import { LootCard } from './components/LootCard';
import { SearchHeader } from './components/SearchHeader';
import { QuestsPanel } from './components/QuestsPanel';
import { BlueprintsPanel } from './components/BlueprintsPanel';
import { SkillsPanel } from './components/SkillsPanel';
import { ItemDetailModal } from './components/ItemDetailModal';

// Define recognition types for TS
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onstart: (ev: Event) => void;
  onresult: (ev: SpeechRecognitionEvent) => void;
  onerror: (ev: any) => void;
  onend: (ev: Event) => void;
}

declare global {
  interface Window {
    SpeechRecognition: { new (): SpeechRecognition };
    webkitSpeechRecognition: { new (): SpeechRecognition };
  }
}

let didPrefetchJson = false;
// Fetch large json early to avoid UI stutter on modal open
if (typeof window !== 'undefined' && !didPrefetchJson) {
  didPrefetchJson = true;
  (async () => {
    const urls = [
      'arctracker_items.json',
      './arctracker_items.json',
      '/arctracker_items.json',
      import.meta.env.BASE_URL + 'arctracker_items.json'
    ];
    for (const url of urls) {
      try {
        const r = await fetch(url);
        if (r.ok) {
          break;
        }
      } catch (e) {
        // quiet fallback
      }
    }
  })();
}

export default function App() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [showQuestItemsOnly, setShowQuestItemsOnly] = useState(false);
  const [showProjectItemsOnly, setShowProjectItemsOnly] = useState(false);
  const [activeTab, setActiveTab] = useState<'items' | 'blueprints' | 'quests' | 'skills'>('items');
  const [selectedItem, setSelectedItem] = useState<ProcessedItem | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, Partial<ProcessedItem>>>(() => {
    try {
      const saved = window.localStorage.getItem('arc_overrides');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const saveOverride = (itemId: string, data: Partial<ProcessedItem>) => {
    const newOverrides = { ...overrides, [itemId]: { ...overrides[itemId], ...data } };
    setOverrides(newOverrides);
    window.localStorage.setItem('arc_overrides', JSON.stringify(newOverrides));
  };

  const handleEditClick = () => {
    if (isEditMode) {
      setIsEditMode(false);
      return;
    }
    const pwd = prompt('Введите пароль для редактирования:');
    if (pwd === 'jfw!qe7Hge&') {
      setIsEditMode(true);
    } else if (pwd !== null) {
      alert('Неверный пароль');
    }
  };
  
  // Persistence for Quests
  const [completedQuests, setCompletedQuests] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem('arc_completed_quests');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persistence for Projects
  const [completedProjectPhases, setCompletedProjectPhases] = useState<Record<string, number>>(() => {
    try {
      const saved = window.localStorage.getItem('arc_completed_projects');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // Persistence for Blueprints
  const [collectedBlueprints, setCollectedBlueprints] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem('arc_collected_blueprints');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [scrappyLevel, setScrappyLevel] = useState<number>(() => {
    return parseInt(window.localStorage.getItem('arc_scrappy_level') || '1', 10);
  });

  const [workshopLevels, setWorkshopLevels] = useState<Record<WorkshopType, number>>(() => {
    const defaultData: Record<WorkshopType, number> = {
      Weapon: 0,
      Gear: 0,
      Med: 0,
      Utility: 0,
      Processing: 0,
      Explosives: 0,
      Workbench: 1,
      Storage: 0
    };
    try {
      const saved = window.localStorage.getItem('arc_workshop_levels');
      return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    } catch {
      return defaultData;
    }
  });

  const updateWorkshopLevel = (type: WorkshopType, level: number) => {
    const nextLevels = { ...workshopLevels, [type]: level };
    setWorkshopLevels(nextLevels);
    window.localStorage.setItem('arc_workshop_levels', JSON.stringify(nextLevels));
  };

  useEffect(() => {
    // Save to local storage whenever scrappyLevel changes
    window.localStorage.setItem('arc_scrappy_level', scrappyLevel.toString());
  }, [scrappyLevel]);

  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    try {
      window.localStorage.setItem('arc_completed_quests', JSON.stringify(completedQuests));
      window.localStorage.setItem('arc_completed_projects', JSON.stringify(completedProjectPhases));
      window.localStorage.setItem('arc_collected_blueprints', JSON.stringify(collectedBlueprints));
    } catch (e) {}
  }, [completedQuests, completedProjectPhases, collectedBlueprints]);

  useEffect(() => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const handleVoiceSearch = useCallback(() => {
    if (isListening) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU'; 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript.replace(/\.$/, '')); 
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  }, [isListening]);

  const toggleQuest = useCallback((qId: string) => {
    setCompletedQuests(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  }, []);

  const updateProjectPhase = useCallback((projectId: string, phase: number) => {
    setCompletedProjectPhases(prev => ({ ...prev, [projectId]: phase }));
  }, []);

  const toggleBlueprint = useCallback((bpId: string) => {
    setCollectedBlueprints(prev => 
      prev.includes(bpId) ? prev.filter(id => id !== bpId) : [...prev, bpId]
    );
  }, []);

  const types = useMemo(() => ['All', ...Array.from(new Set(itemsData.map(i => i.type)))], []);

  // Process items once based on quest/level status
  const processedItems = useMemo(() => {
    return itemsData.map(item => {
      let currentRec = item.rec;
      let isQuestTarget = false;
      let isProjectTarget = false;

      const override = overrides[item.id];
      const mergedItem = override ? { ...item, ...override } : item;

      if (mergedItem.quests && mergedItem.quests.length > 0) {
        const activeQuests = mergedItem.quests.filter(q => !completedQuests.includes(q));
        if (activeQuests.length > 0) isQuestTarget = true;
      }

      if (mergedItem.projects && mergedItem.projects.length > 0) {
        const activeProjects = mergedItem.projects.filter(p => !completedProjectPhases[p.projectId] || completedProjectPhases[p.projectId] < p.phase);
        if (activeProjects.length > 0) isProjectTarget = true;
      }

      if (isQuestTarget || isProjectTarget) currentRec = 'quest_target'; 

      return { ...mergedItem, currentRec, isQuestTarget, isProjectTarget } as ProcessedItem;
    });
  }, [completedQuests, completedProjectPhases, overrides]);

  // Apply filters and sorting
  const displayedItems = useMemo(() => {
    let filtered = processedItems;

    if (showQuestItemsOnly) filtered = filtered.filter(item => item.isQuestTarget);
    if (showProjectItemsOnly) filtered = filtered.filter(item => item.isProjectTarget);

    if (search.trim()) {
      const searchTerms = search.toLowerCase().split(/\s+/);
      filtered = filtered.filter(item => {
        const searchableString = `${item.name} ${item.ruName} ${item.type} ${item.dismantle || ''}`.toLowerCase();
        return searchTerms.every(term => searchableString.includes(term));
      });
    }

    if (filterType !== 'All') filtered = filtered.filter(item => item.type === filterType);

    // Sorting scores for recommendation buckets
    const scores = { quest_target: 5, must_keep: 4, keep: 3, situational: 2, drop: 1 };

    return filtered.sort((a, b) => {
      const scoreA = scores[a.currentRec as keyof typeof scores] || 0;
      const scoreB = scores[b.currentRec as keyof typeof scores] || 0;
      if (scoreB !== scoreA) return scoreB - scoreA;
      return b.value - a.value;
    });
  }, [processedItems, search, filterType, showQuestItemsOnly, showProjectItemsOnly]);

  return (
    <div id="main-container" className="min-h-screen bg-slate-950 font-sans sm:p-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <header id="app-header" className="mb-4 pt-3 px-3 sm:px-0">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-2">
                ARC Raiders <span className="text-blue-500">Лут Трекер</span>
                <span className="text-slate-800 text-xs font-normal cursor-default" title="Предметов в базе">{itemsData.length}</span>
                <button 
                  onClick={handleEditClick}
                  className={`ml-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isEditMode ? 'text-blue-500' : 'text-slate-900 hover:text-slate-800'}`}
                >
                  {isEditMode ? '[EDIT MODE ON]' : 'edit'}
                </button>
              </h1>
            </motion.div>
          </div>
        </header>

        <SearchHeader 
          search={search}
          setSearch={setSearch}
          isListening={isListening}
          speechSupported={speechSupported}
          handleVoiceSearch={handleVoiceSearch}
          showQuestsPanel={activeTab === 'quests'}
          setShowQuestsPanel={(val) => setActiveTab(val ? 'quests' : 'items')}
        />

        {/* Tab Switcher */}
        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-xl mb-4 border border-slate-800">
          <button
            onClick={() => setActiveTab('items')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'items' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <ShoppingCart size={16} />
            Предметы
          </button>
          <button
            onClick={() => setActiveTab('blueprints')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'blueprints' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <BookOpen size={16} />
            Чертежи
          </button>
          <button
            onClick={() => setActiveTab('quests')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'quests' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Target size={16} />
            Квесты
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'skills' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Cpu size={16} />
            Навыки
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'quests' && (
            <motion.div
              key="quests-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <QuestsPanel 
                scrappyLevel={scrappyLevel}
                setScrappyLevel={setScrappyLevel}
                completedQuests={completedQuests}
                toggleQuest={toggleQuest}
                workshopLevels={workshopLevels}
                updateWorkshopLevel={updateWorkshopLevel}
                completedProjectPhases={completedProjectPhases}
                updateProjectPhase={updateProjectPhase}
                search={search}
                itemsOverrides={overrides}
              />
            </motion.div>
          )}

          {activeTab === 'items' && (
            <motion.div
              key="items-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div id="filter-chips" className="mt-4 flex gap-2 overflow-x-auto pb-3 px-3 sm:px-0 scrollbar-hide">
                <button 
                  id="filter-quests-btn"
                  onClick={() => {
                    setShowQuestItemsOnly(!showQuestItemsOnly);
                    if (showProjectItemsOnly) setShowProjectItemsOnly(false);
                  }} 
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border active:scale-95 flex items-center gap-1.5 shrink-0 ${
                    showQuestItemsOnly 
                      ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.3)]' 
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <Target size={14} /> 
                  Активные квесты
                </button>
                
                <button 
                  id="filter-projects-btn"
                  onClick={() => {
                    setShowProjectItemsOnly(!showProjectItemsOnly);
                    if (showQuestItemsOnly) setShowQuestItemsOnly(false);
                  }} 
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border active:scale-95 flex items-center gap-1.5 shrink-0 ${
                    showProjectItemsOnly 
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)]' 
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <Wrench size={14} /> 
                  Проекты базы
                </button>

                <div className="w-px h-8 bg-slate-800 shrink-0 mx-1" />

                {types.map(type => (
                  <button 
                    key={type} 
                    id={`filter-type-${type.toLowerCase()}`}
                    onClick={() => setFilterType(type)} 
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border active:scale-95 shrink-0 ${
                      filterType === type 
                        ? 'bg-slate-200 text-slate-900 border-white' 
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {type === 'All' ? 'Все' : type}
                  </button>
                ))}
              </div>

              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-3 sm:px-0 py-4 pb-20">
                <AnimatePresence mode="popLayout">
                  {displayedItems.map((item: ProcessedItem) => (
                    <LootCard 
                      key={item.id} 
                      item={item} 
                      onClick={() => setSelectedItem(item)} 
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {displayedItems.length === 0 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 px-4">
                  <div className="mx-auto text-red-500 mb-4 flex justify-center"><AlertTriangle size={56} /></div>
                  <h3 className="text-2xl font-black text-white">Предмет не найден</h3>
                  <p className="text-slate-400 mt-3 max-w-md mx-auto text-lg leading-relaxed">
                    {search ? (
                      <>По запросу <strong className="text-white">"{search}"</strong> ничего нет.</>
                    ) : (
                      <>Ни один предмет не подходит под выбранные фильтры.</>
                    )}
                    <br/>
                    Возможно, вы ошиблись при вводе или предмета не существует.
                  </p>
                  <button 
                    id="reset-filters-btn"
                    onClick={() => {
                      setSearch(''); 
                      setFilterType('All'); 
                      setShowQuestItemsOnly(false);
                      setShowProjectItemsOnly(false);
                    }}
                    className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  >
                    Сбросить все фильтры
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === 'blueprints' && (
            <motion.div
              key="blueprints-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <BlueprintsPanel 
                blueprints={blueprints}
                collectedBlueprints={collectedBlueprints}
                toggleBlueprint={toggleBlueprint}
                search={search}
              />
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <SkillsPanel search={search} />
            </motion.div>
          )}
        </AnimatePresence>

        <ItemDetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
          isEditMode={isEditMode}
          onSaveOverride={saveOverride}
        />
      </div>
    </div>
  );
}
