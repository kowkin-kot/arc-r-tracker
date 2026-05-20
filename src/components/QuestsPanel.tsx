/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Wrench, Cpu, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { questsList, projectsList, itemsList } from '../data/db';
import { motion, AnimatePresence } from 'motion/react';
import { WorkshopType } from '../types';

const TRADER_MAP: Record<string, string> = {
  'Shani': 'Шани',
  'Lance': 'Лэнс',
  'Tian Wen': 'Тянь Вэнь',
  'Celeste': 'Селеста',
  'Apollo': 'Аполлон',
  'Boss': 'Босс'
};

const MAP_NAME_MAP: Record<string, string> = {
  'stella_montis': 'Стелла Монтис',
  'the_blue_gate': 'Синие ворота',
  'buried_city': 'Погребенный город',
  'dam_battlegrounds': 'Поле битвы у дамбы',
  'the_spaceport': 'Космопорт',
  'riven_tides': 'Бурные потоки',
  '-21263888': 'Бурные потоки'
};

interface QuestsPanelProps {
  completedQuests: string[];
  toggleQuest: (id: string) => void;
  completedProjectPhases: Record<string, number>;
  updateProjectPhase: (projectId: string, phase: number) => void;
  scrappyLevel: number;
  setScrappyLevel: (l: number) => void;
  workshopLevels: Record<WorkshopType, number>;
  updateWorkshopLevel: (type: WorkshopType, level: number) => void;
  search?: string;
  itemsOverrides?: Record<string, any>;
}

const findItemRuName = (id: string, overrides: any = {}) => {
  const override = overrides[id];
  if (override?.ruName) return override.ruName;
  const item = itemsList.find(i => i.id === id);
  if (item?.ruName) return item.ruName;
  
  // Custom manual translations for common missing items
  const manualTranslations: Record<string, string> = {
    'monolith_part': 'Часть монолита',
    'roots': 'Корни',
    'moss': 'Мох',
    'agave': 'Агава',
    'canister': 'Канистра',
    'fertilizer': 'Удобрение',
    'twilight_compass_ship_model': 'Модель корабля «Twilight Compass»',
    'velocity_ship_model': 'Модель корабля «Velocity»',
    'sirena_dorata_ship_model': 'Модель корабля «Sirena Dorata»',
    'leviathans_crown_ship_model': 'Модель корабля «Leviathan\'s Crown»',
    'red_coral_jewelry': 'Украшение из красного коралла',
    'comet_igniter': 'Кометный воспламенитель',
    'vaporizer_regulator': 'Регулятор испарителя',
    'water_filter': 'Фильтр для воды',
    'rusted_tools': 'Ржавые инструменты',
    'dog_collar': 'Собачий ошейник',
    'alien_duck': 'Инопланетная уточка',
    'cat_bed': 'Кошачья лежанка',
    'robot_figurine': 'Фигурка робота',
    'cracked_bioscanner': 'Повреждённый биосканер',
    'durable_cloth': 'Прочная ткань',
    'tick_shell': 'Оболочка клеща',
    'synthesized_fuel': 'Синтезированное топливо',
    'crude_explosives': 'Грубая взрывчатка',
    'pop_trigger': 'Триггер «Попов»',
    'toaster': 'Тостер',
    'arc_motion_core': 'Ядро движения ARC',
    'fireball_burner': 'Горелка «Файерболов»',
    'power_cable': 'Силовой кабель',
    'electrical_components': 'Электрические компоненты',
    'hornet_driver': 'Драйвер Шершня',
    'wasp_driver': 'Драйвер «Осы»',
    'metal_parts': 'Металлические детали',
    'wires': 'Провода',
    'steel_spring': 'Стальная пружина',
    'arc_alloy': 'Сплав ARC',
    'cooling_fan': 'Охлаждающий вентилятор',
    'sensors': 'Датчики',
    'rubber_parts': 'Резиновые детали',
    'chemicals': 'Химикаты',
    'arc_synthetic_resin': 'Синтетическая смола ARC',
    'tick_pod': 'Капсула «Клещей»',
    'mini_centrifuge': 'Мини-центрифуга',
    'rusted_shut_medical_kit': 'Ржавый медкомплект',
    'advanced_mechanical_components': 'Продвинутые механические компоненты',
    'cooling_coil': 'Охлаждающий змеевик',
    'arc_high_strength_steel': 'Высокопрочная сталь ARC',
    'processor': 'Процессор',
    'matriarch_reactor': 'Реактор Матриарха',
    'magnetic_accelerator': 'Магнитный ускоритель',
    'queen_reactor': 'Реактор королевы',
    'humidifier': 'Увлажнитель',
    'microscope': 'Микроскоп',
    'advanced_electrical_components': 'Продвинутые электрические компоненты',
    'rocket_engine': 'Ракетный двигатель',
    'plastic_parts': 'Пластиковые детали',
    'fabric': 'Ткань',
    'industrial_battery': 'Промышленная батарея',
    'bastion_cell': 'Ячейка Бастиона',
    'laboratory_reagents': 'Лабораторные реагенты',
    'explosive_compound': 'Взрывчатое соединение',
    'rocketeer_driver': 'Драйвер «Рокитиров»',
    'surveyor_vault': 'Хранилище «Наблюдателей»',
    'arc_powercell': 'Энергоячейка ARC',
    'motor': 'Мотор',
    'arc_circuitry': 'Электроника ARC',
    'bombardier_cell': 'Ячейка «Бомбардиров»',
    'damaged_heat_sink': 'Повреждённый радиатор',
    'snitch_scanner': 'Сканер «Шпионов»',
    'fried_motherboard': 'Сгоревшая материнская плата',
    'leaper_pulse_unit': 'Импульсный блок «Прыгунов»',
    'rusted_gear': 'Ржавая шестерня',
    'sentinel_firing_core': 'Стреляющие ядра «Стражей»',
    'prickly_pear': 'Плоды кактуса',
    'very_comfortable_pillow': 'Очень удобная подушка',
    'antiseptic': 'Антисептик',
    'apricot': 'Абрикос',
    'lemon': 'Лимон',
    'mushroom': 'Гриб'
  };
  
  return manualTranslations[id] || id.replace(/_/g, ' ');
};

const QUEST_ALIASES: Record<string, string> = {
  'picking_up_the_pieces': 'ss1',
  'ss1': 'picking_up_the_pieces',
  
  'off_the_radar': 'ss4',
  'ss4': 'off_the_radar',
  
  'ss10r': 'a_symbol_of_unification',
  'a_symbol_of_unification': 'ss10r',
  
  'ss5': 'a_bad_feeling',
  'a_bad_feeling': 'ss5',
  
  'ss10w': 'back_on_top',
  'back_on_top': 'ss10w',
  
  'ss11': 'a_first_foothold',
  'a_first_foothold': 'ss11',
  
  'ss8a': 'what_goes_around',
  'what_goes_around': 'ss8a'
};

export const QuestsPanel: React.FC<QuestsPanelProps> = ({ 
  completedQuests, 
  toggleQuest,
  completedProjectPhases,
  updateProjectPhase,
  scrappyLevel,
  setScrappyLevel,
  workshopLevels,
  updateWorkshopLevel,
  search = '',
  itemsOverrides = {}
}) => {
  const [questDetails, setQuestDetails] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [expandedQuests, setExpandedQuests] = React.useState<Record<string, boolean>>({});
  const [expandedProjects, setExpandedProjects] = React.useState<Record<string, boolean>>({});
  const [activeTrader, setActiveTrader] = React.useState<string>('All');

  const findQuestInList = (id: string) => {
    let q = questsList.find(pq => pq.id === id);
    if (!q) {
      const alias = QUEST_ALIASES[id];
      if (alias) {
        q = questsList.find(pq => pq.id === alias);
      }
    }
    return q;
  };

  const isQuestIdCompleted = (id: string) => {
    if (completedQuests.includes(id)) return true;
    const alias = QUEST_ALIASES[id];
    if (alias && completedQuests.includes(alias)) return true;
    return false;
  };

  const workshopsData: Record<WorkshopType | 'Scrappy', any[]> = {
    Scrappy: [
      { level: 1, requirements: [], credits: 0 },
      { level: 2, requirements: [{ itemId: 'dog_collar', quantity: 1 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'lemon', quantity: 3 }, { itemId: 'apricot', quantity: 3 }], credits: 0 },
      { level: 4, requirements: [{ itemId: 'prickly_pear', quantity: 6 }, { itemId: 'olives', quantity: 6 }, { itemId: 'cat_bed', quantity: 1 }], credits: 0 },
      { level: 5, requirements: [{ itemId: 'mushroom', quantity: 12 }, { itemId: 'apricot', quantity: 12 }, { itemId: 'very_comfortable_pillow', quantity: 3 }], credits: 0 }
    ],
    Weapon: [
      { level: 1, requirements: [{ itemId: 'metal_parts', quantity: 20 }, { itemId: 'rubber_parts', quantity: 30 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'rusted_tools', quantity: 3 }, { itemId: 'mechanical_components', quantity: 5 }, { itemId: 'wasp_driver', quantity: 8 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'rusted_gear', quantity: 3 }, { itemId: 'advanced_mechanical_components', quantity: 5 }, { itemId: 'sentinel_firing_core', quantity: 4 }], credits: 0 }
    ],
    Gear: [
      { level: 1, requirements: [{ itemId: 'plastic_parts', quantity: 25 }, { itemId: 'fabric', quantity: 30 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'power_cable', quantity: 3 }, { itemId: 'electrical_components', quantity: 5 }, { itemId: 'wasp_driver', quantity: 5 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'industrial_battery', quantity: 3 }, { itemId: 'advanced_electrical_components', quantity: 5 }, { itemId: 'bastion_cell', quantity: 6 }], credits: 0 }
    ],
    Med: [
      { level: 1, requirements: [{ itemId: 'fabric', quantity: 50 }, { itemId: 'arc_alloy', quantity: 6 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'cracked_bioscanner', quantity: 2 }, { itemId: 'durable_cloth', quantity: 5 }, { itemId: 'tick_pod', quantity: 8 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'rusted_shut_medical_kit', quantity: 3 }, { itemId: 'antiseptic', quantity: 8 }, { itemId: 'surveyor_vault', quantity: 5 }], credits: 0 }
    ],
    Utility: [
      { level: 1, requirements: [{ itemId: 'plastic_parts', quantity: 50 }, { itemId: 'arc_alloy', quantity: 6 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'damaged_heat_sink', quantity: 2 }, { itemId: 'electrical_components', quantity: 5 }, { itemId: 'snitch_scanner', quantity: 6 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'fried_motherboard', quantity: 3 }, { itemId: 'advanced_electrical_components', quantity: 5 }, { itemId: 'leaper_pulse_unit', quantity: 4 }], credits: 0 }
    ],
    Processing: [
      { level: 1, requirements: [{ itemId: 'metal_parts', quantity: 60 }, { itemId: 'arc_powercell', quantity: 5 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'toaster', quantity: 3 }, { itemId: 'arc_motion_core', quantity: 5 }, { itemId: 'fireball_burner', quantity: 8 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'motor', quantity: 3 }, { itemId: 'arc_circuitry', quantity: 10 }, { itemId: 'bombardier_cell', quantity: 6 }], credits: 0 }
    ],
    Explosives: [
      { level: 1, requirements: [{ itemId: 'chemicals', quantity: 50 }, { itemId: 'arc_alloy', quantity: 6 }], credits: 0 },
      { level: 2, requirements: [{ itemId: 'synthesized_fuel', quantity: 3 }, { itemId: 'crude_explosives', quantity: 5 }, { itemId: 'pop_trigger', quantity: 5 }], credits: 0 },
      { level: 3, requirements: [{ itemId: 'laboratory_reagents', quantity: 3 }, { itemId: 'explosive_compound', quantity: 5 }, { itemId: 'rocketeer_driver', quantity: 3 }], credits: 0 }
    ],
    Workbench: [
      { level: 1, requirements: [], credits: 0 }
    ],
    Storage: [
      { level: 1, requirements: [], credits: 0 },
      { level: 2, requirements: [], credits: 0 },
      { level: 3, requirements: [], credits: 0 },
      { level: 4, requirements: [], credits: 0 },
      { level: 5, requirements: [], credits: 0 },
      { level: 6, requirements: [], credits: 0 },
      { level: 7, requirements: [], credits: 0 },
      { level: 8, requirements: [], credits: 0 },
      { level: 9, requirements: [], credits: 0 },
      { level: 10, requirements: [], credits: 0 }
    ]
  };

  const toggleExpand = (id: string) => {
    setExpandedQuests(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleProjectExpand = (id: string) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  React.useEffect(() => {
    async function loadQuests() {
      const urls = [
        'arctracker_quests.json',
        './arctracker_quests.json',
        '/arctracker_quests.json',
        import.meta.env.BASE_URL + 'arctracker_quests.json'
      ];
      
      let lastError = null;
      for (const url of urls) {
        try {
          const r = await fetch(url);
          if (!r.ok) {
            throw new Error(`HTTP status ${r.status}`);
          }
          const d = await r.json();
          if (d && d.quests) {
            setQuestDetails(d.quests);
            setIsLoading(false);
            return;
          }
        } catch (err) {
          lastError = err;
        }
      }
      
      console.error("Could not load quest details", lastError);
      setIsLoading(false);
    }
    
    loadQuests();
  }, []);

  const [activeTab, setActiveTab] = React.useState<'quests' | 'projects' | 'workshops'>('quests');

  const scrollToQuest = (id: string, trader?: string) => {
    let targetId = id;
    const dbQuest = findQuestInList(id);
    if (dbQuest) {
      targetId = dbQuest.id;
    }
    if (trader) {
      setActiveTrader(trader);
    } else if (dbQuest?.trader) {
      setActiveTrader(dbQuest.trader);
    } else {
      setActiveTrader('All');
    }
    setActiveTab('quests');
    setTimeout(() => {
      setExpandedQuests(prev => ({ ...prev, [targetId]: true }));
      const element = document.getElementById(`quest-${targetId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-2', 'ring-purple-500', 'ring-offset-2', 'ring-offset-slate-900');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-purple-500', 'ring-offset-2', 'ring-offset-slate-900');
        }, 3000);
      }
    }, 100);
  };

  const traders = React.useMemo(() => {
    const list = ['All', ...Object.keys(TRADER_MAP)];
    return list.filter(t => t === 'All' || questsList.some(q => q.trader === t));
  }, []);

  const filteredQuests = React.useMemo(() => {
    let list = questsList;
    if (activeTrader !== 'All') {
      list = list.filter(q => q.trader === activeTrader);
    }
    
    if (search.trim()) {
      const term = search.toLowerCase();
      list = list.filter(q => 
        q.nameEn.toLowerCase().includes(term) || 
        q.nameRu.toLowerCase().includes(term) ||
        (q.trader && q.trader.toLowerCase().includes(term))
      );
    }
    return list;
  }, [search, activeTrader]);

  const isQuestAvailable = (id: string) => {
    const details = questDetails ? (questDetails[id] || (QUEST_ALIASES[id] ? questDetails[QUEST_ALIASES[id]] : null)) : null;
    if (!details) return true;
    const prev = details.previousQuestIds || [];
    if (prev.length === 0) return true;
    return prev.every((pId: string) => isQuestIdCompleted(pId));
  };

  const sortedQuests = React.useMemo(() => {
    if (!questDetails) return filteredQuests;
    
    const detailsMap = questDetails || {};
    const memoDepth: Record<string, number> = {};

    const getDepth = (id: string, visited = new Set<string>()): number => {
      if (memoDepth[id] !== undefined) return memoDepth[id];
      if (visited.has(id)) return 0;
      visited.add(id);
      
      const qDetails = detailsMap[id] || (QUEST_ALIASES[id] ? detailsMap[QUEST_ALIASES[id]] : null);
      const prev = qDetails?.previousQuestIds || [];
      if (prev.length === 0) {
        memoDepth[id] = 0;
        return 0;
      }
      
      let maxDepth = 0;
      prev.forEach((pId: string) => {
        maxDepth = Math.max(maxDepth, getDepth(pId, visited));
      });
      
      memoDepth[id] = maxDepth + 1;
      return memoDepth[id];
    };
    
    return [...filteredQuests].sort((a, b) => {
      const isACompleted = isQuestIdCompleted(a.id);
      const isBCompleted = isQuestIdCompleted(b.id);
      if (isACompleted !== isBCompleted) return isACompleted ? 1 : -1;
      
      const isAAvailable = isQuestAvailable(a.id);
      const isBAvailable = isQuestAvailable(b.id);
      if (isAAvailable !== isBAvailable) return isAAvailable ? -1 : 1;

      const depthA = getDepth(a.id);
      const depthB = getDepth(b.id);
      if (depthA !== depthB) return depthA - depthB;
      return a.nameRu.localeCompare(b.nameRu);
    });
  }, [filteredQuests, questDetails, completedQuests]);

  React.useEffect(() => {
    if (!isLoading && questDetails) {
      const activeState: Record<string, boolean> = {};
      const uncompleted = sortedQuests.find(q => !completedQuests.includes(q.id));
      if (uncompleted) {
        activeState[uncompleted.id] = true;
      }
      setExpandedQuests(activeState);
    }
  }, [isLoading, questDetails, activeTrader, sortedQuests, completedQuests.length]);

  const getTraderStats = (trader: string) => {
    const traderQuests = questsList.filter(q => q.trader === trader);
    const completed = traderQuests.filter(q => completedQuests.includes(q.id)).length;
    return { completed, total: traderQuests.length };
  };

  return (
    <div 
      id="quests-panel"
      className="mt-3 bg-slate-950/20 border border-slate-800/50 rounded-2xl shadow-2xl overflow-hidden mb-20"
    >
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-800 bg-slate-900/50">
        {[
          { id: 'quests', label: 'Задания', icon: Target },
          { id: 'projects', label: 'Проекты базы', icon: Wrench },
          { id: 'workshops', label: 'Мастерские', icon: Cpu },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-bold transition-all border-b-2 ${
              activeTab === tab.id 
                ? 'border-purple-500 text-purple-400 bg-purple-500/5' 
                : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-0 sm:p-0">
        <AnimatePresence mode="wait">
          {activeTab === 'workshops' && (
            <motion.div 
              key="workshops"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Cpu size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Мастерские</h3>
                  <p className="text-xs text-slate-500">Уровни развития вашей базы</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-base font-bold text-white">Плюшкин</span>
                    <span className="text-xs font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">Уровень {scrappyLevel}</span>
                  </div>
                  <div className="flex gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map(lvl => (
                      <button 
                        key={lvl} 
                        onClick={() => setScrappyLevel(lvl)} 
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                          scrappyLevel >= lvl 
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                            : 'bg-slate-800/50 border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>

                  {scrappyLevel < 5 && (
                    <div className="p-4 bg-slate-950/50 rounded-xl border border-emerald-500/20">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3">Для уровня {scrappyLevel + 1}:</p>
                      <div className="space-y-2">
                        {workshopsData.Scrappy[scrappyLevel].credits > 0 && (
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Кредиты:</span>
                            <span className="font-bold text-emerald-400">{workshopsData.Scrappy[scrappyLevel].credits}</span>
                          </div>
                        )}
                        {workshopsData.Scrappy[scrappyLevel].requirements.map((req: any, idx: number) => (
                          <div key={idx} className="flex items-center justify-between text-xs text-slate-300">
                            <span>{findItemRuName(req.itemId, itemsOverrides)}:</span>
                            <span className="font-bold text-emerald-400">x{req.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {(Object.keys(workshopLevels) as WorkshopType[])
                  .filter(type => type !== 'Workbench' && type !== 'Storage')
                  .map(type => {
                    const translatedType = { 
                      Weapon: 'Оружейный верстак', 
                      Gear: 'Верстак для снаряжения', 
                      Med: 'Медицинская лаборатория', 
                      Utility: 'Верстак для инструментов', 
                      Processing: 'Очиститель', 
                      Explosives: 'Верстак для взрывчатки'
                    }[type] || type;
                    const currentLevel = workshopLevels[type];
                    const workshopReqs = workshopsData[type];
                    const typeMaxLevels = 3;
                    
                    return (
                      <div key={type} className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-base font-bold text-white">{translatedType}</span>
                          <span className="text-xs font-mono px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded">Ур. {currentLevel}</span>
                        </div>
                        <div className="flex gap-1.5 mb-6">
                          {Array.from({ length: typeMaxLevels }, (_, i) => i + 1).map(lvl => (
                            <button 
                              key={lvl} 
                              onClick={() => updateWorkshopLevel(type, lvl)} 
                              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                                currentLevel >= lvl 
                                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                                  : 'bg-slate-800/50 border-transparent text-slate-500 hover:text-slate-300'
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>

                        {currentLevel < typeMaxLevels && (
                          <div className="p-4 bg-slate-950/50 rounded-xl border border-blue-500/20">
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Для уровня {currentLevel + 1}:</p>
                            <div className="space-y-2">
                              {workshopReqs && workshopReqs[currentLevel] && (
                                <>
                                  {workshopReqs[currentLevel].credits > 0 && (
                                    <div className="flex items-center justify-between text-xs text-slate-400 pb-1.5 border-b border-slate-800/50">
                                      <span>Кредиты:</span>
                                      <span className="font-bold text-blue-400">{workshopReqs[currentLevel].credits}</span>
                                    </div>
                                  )}
                                  {workshopReqs[currentLevel].requirements.map((req: any, idx: number) => (
                                    <div key={idx} className="flex items-center justify-between text-xs text-slate-300">
                                      <span>{findItemRuName(req.itemId, itemsOverrides)}:</span>
                                      <span className="font-bold text-blue-400">x{req.quantity}</span>
                                    </div>
                                  ))}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div 
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Wrench size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Проекты базы</h3>
                  <p className="text-xs text-slate-500">Глобальные цели и улучшения</p>
                </div>
              </div>

              <div className="space-y-12">
                {(() => {
                  const available = projectsList.filter(p => (completedProjectPhases[p.id] || 0) < p.phases.length);
                  const completed = projectsList.filter(p => (completedProjectPhases[p.id] || 0) >= p.phases.length);

                  const renderProjectGroup = (title: string, projects: any[], type: 'available' | 'completed') => {
                    if (projects.length === 0) return null;
                    return (
                      <div className="space-y-6">
                        <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-3 ${type === 'completed' ? 'text-slate-600' : 'text-blue-400'}`}>
                          <span className={`w-2 h-2 rounded-full ${type === 'completed' ? 'bg-slate-700' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'}`} />
                          {title}
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[9px] text-slate-500 ml-auto">{projects.length}</span>
                        </h4>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                          {projects.map(project => {
                            const completedPhase = completedProjectPhases[project.id] || 0;
                            const isProjectExpanded = expandedProjects[project.id] !== undefined ? expandedProjects[project.id] : (type !== 'completed');
                            const isProjectCompleted = completedPhase >= project.phases.length;

                            return (
                              <div key={project.id} className={`bg-slate-900/40 rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${isProjectCompleted ? 'border-emerald-900/30' : 'border-slate-800'}`}>
                                <div 
                                  className={`p-5 border-b cursor-pointer select-none transition-colors ${isProjectCompleted ? 'bg-emerald-950/10 border-emerald-900/20 hover:bg-emerald-950/20' : 'bg-slate-800/20 border-slate-800 hover:bg-slate-800/30'}`}
                                  onClick={() => toggleProjectExpand(project.id)}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <Wrench size={18} className={isProjectCompleted ? 'text-emerald-500' : 'text-blue-500'} />
                                      <h4 className={`text-lg font-bold ${isProjectCompleted ? 'text-emerald-400 line-through' : 'text-white'}`}>{project.nameRu}</h4>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                                        isProjectCompleted 
                                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                      }`}>
                                        {isProjectCompleted ? 'ЗАВЕРШЕНО' : `ФАЗА ${completedPhase}/${project.phases.length}`}
                                      </span>
                                      <div className="text-slate-600 transition-transform duration-300" style={{ transform: isProjectExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={18} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence>
                                  {isProjectExpanded && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="p-2"
                                    >
                                      {!isProjectCompleted && (
                                        <button 
                                          onClick={() => updateProjectPhase(project.id, 0)} 
                                          className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all mb-2 flex items-center justify-between ${
                                            completedPhase === 0 
                                              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 ring-1 ring-blue-500/30' 
                                              : 'bg-slate-900/40 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                                          }`}
                                        >
                                          <span>НЕ НАЧАТО</span>
                                          {completedPhase === 0 && <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />}
                                        </button>
                                      )}
                                      
                                      <div className="space-y-2">
                                        {project.phases.map((phase) => {
                                          const isCurrent = completedPhase === phase.phase;
                                          const isPast = completedPhase > phase.phase;
                                          
                                          return (
                                            <div key={phase.phase} className="flex flex-col">
                                              <button 
                                                onClick={() => updateProjectPhase(project.id, phase.phase)} 
                                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all relative group overflow-hidden border ${
                                                  isCurrent 
                                                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                                                  : isPast
                                                    ? 'bg-slate-800/80 border-slate-700/50 text-slate-400'
                                                  : 'bg-slate-900/40 border-transparent text-slate-600 hover:bg-slate-800 hover:text-slate-400'
                                                }`}
                                              >
                                                <div className="flex items-center justify-between">
                                                  <div className="flex items-center gap-3">
                                                    <span className={`text-[10px] font-mono ${isCurrent ? 'text-blue-100' : 'text-slate-600'}`}>0{phase.phase}</span>
                                                    <span>{phase.nameRu}</span>
                                                  </div>
                                                  {isPast && <div className="text-emerald-500"><Check size={14} /></div>}
                                                  {isCurrent && <div className="animate-pulse w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />}
                                                </div>
                                              </button>
                                              
                                              {isCurrent && phase.requirements && phase.requirements.length > 0 && (
                                                <motion.div 
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  className="overflow-hidden bg-slate-950/40 mx-2 -mt-1 rounded-b-xl border-x border-b border-blue-500/30 p-4"
                                                >
                                                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Необходимые ресурсы:</p>
                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {phase.requirements.map((req, idx) => (
                                                      <div key={idx} className="flex items-center justify-between bg-slate-900 p-2 rounded-lg border border-slate-800">
                                                        <span className="text-xs text-slate-300 truncate mr-2">{findItemRuName(req.itemId, itemsOverrides)}</span>
                                                        <span className="text-xs font-mono font-bold text-blue-400 shrink-0">x{req.quantity}</span>
                                                      </div>
                                                    ))}
                                                  </div>
                                                </motion.div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  };

                  return (
                    <div className="space-y-12">
                      {renderProjectGroup('Текущие проекты', available, 'available')}
                      {renderProjectGroup('Завершенные проекты', completed, 'completed')}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
          {activeTab === 'quests' && (
            <motion.div 
              key="quests"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col lg:flex-row min-h-[600px]"
            >
              <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-800 p-4 bg-slate-950/20 shrink-0">
                <div className="flex items-center justify-between px-2 mb-4">
                  <h3 className="text-white font-bold text-xs uppercase tracking-widest text-slate-500">Торговцы</h3>
                  <div className="text-[10px] font-mono text-slate-600">{completedQuests.length}/{questsList.length}</div>
                </div>
                <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar">
                  {traders.map(t => {
                    const stats = t !== 'All' ? getTraderStats(t) : { completed: completedQuests.length, total: questsList.length };
                    const isActive = activeTrader === t;
                    return (
                      <button 
                        key={t} 
                        onClick={() => setActiveTrader(t)} 
                        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap lg:whitespace-normal group border ${
                          isActive 
                            ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20' 
                            : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                        }`}
                      >
                        <span>{t === 'All' ? 'Все задания' : (TRADER_MAP[t] || t)}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                          isActive ? 'bg-purple-400 text-purple-900 font-bold' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'
                        }`}>
                          {stats.completed}/{stats.total}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-8 bg-slate-900/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6 border-b border-slate-800 pb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <Target size={22} className="text-purple-400" />
                       <h3 className="text-2xl font-bold text-white">
                         {activeTrader === 'All' ? 'Все задания' : `${TRADER_MAP[activeTrader] || activeTrader}`}
                       </h3>
                    </div>
                    {activeTrader !== 'All' && (
                      <div className="flex items-center gap-4">
                        <div className="flex-1 max-w-xs bg-slate-800 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            className="bg-purple-500 h-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${(getTraderStats(activeTrader).completed / getTraderStats(activeTrader).total) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-400">
                          {Math.round((getTraderStats(activeTrader).completed / getTraderStats(activeTrader).total) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {search && <span className="text-[10px] uppercase font-mono font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">Найдено: {sortedQuests.length}</span>}
                    <button 
                      onClick={() => {
                        const allExpanded = sortedQuests.every(q => expandedQuests[q.id]);
                        const newState: Record<string, boolean> = {};
                        sortedQuests.forEach(q => newState[q.id] = !allExpanded);
                        setExpandedQuests(newState);
                      }} 
                      className="text-[10px] uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-lg border border-blue-500/20 hover:bg-blue-500/5 transition-all"
                    >
                      {sortedQuests.every(q => expandedQuests[q.id]) ? 'СВЕРНУТЬ ВСЕ' : 'РАЗВЕРНУТЬ ВСЕ'}
                    </button>
                  </div>
                </div>

                <div className="space-y-12">
                  {(() => {
                    const available = sortedQuests.filter(q => !isQuestIdCompleted(q.id) && isQuestAvailable(q.id));
                    const locked = sortedQuests.filter(q => !isQuestIdCompleted(q.id) && !isQuestAvailable(q.id));
                    const completed = sortedQuests.filter(q => isQuestIdCompleted(q.id));

                    const renderGroup = (title: string, quests: any[], type: 'available' | 'locked' | 'completed') => {
                      if (quests.length === 0) return null;
                      const colors = {
                        available: 'text-emerald-400',
                        locked: 'text-amber-500',
                        completed: 'text-slate-600'
                      };
                      return (
                        <div>
                          <h4 className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3 ${colors[type]}`}>
                            <span className={`w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]`} />
                            {title}
                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[9px] text-slate-400 ml-auto">{quests.length}</span>
                          </h4>
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {quests.map(q => {
                              const isCompleted = isQuestIdCompleted(q.id);
                               const isExpanded = expandedQuests[q.id] || false;
                               const details = questDetails ? (questDetails[q.id] || (QUEST_ALIASES[q.id] ? questDetails[QUEST_ALIASES[q.id]] : null)) : null;
                               const isUnlocked = isQuestAvailable(q.id);
                               const hasContent = !!(details && (
                                 (details.description?.ru || details.description?.en) ||
                                 (details.objectives && details.objectives.length > 0) ||
                                 (details.requiredItemIds && details.requiredItemIds.length > 0) ||
                                 (details.previousQuestIds && details.previousQuestIds.length > 0)
                              ));
                              
                              return (
                                <div 
                                  key={q.id} 
                                  id={`quest-${q.id}`}
                                  className={`flex flex-col p-5 bg-slate-900/40 rounded-2xl border transition-all duration-300 ${
                                    isCompleted 
                                      ? 'border-emerald-900/40 bg-emerald-950/5 opacity-60 grayscale-[0.3]' : 
                                    !isUnlocked 
                                      ? 'border-slate-800/80 bg-slate-950/20 opacity-80' :
                                      'border-slate-800 hover:border-slate-600 bg-slate-900/60 shadow-lg hover:shadow-purple-500/5'
                                  }`}
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="relative shrink-0">
                                      <input 
                                        type="checkbox" 
                                        checked={isCompleted} 
                                        onChange={(e) => { e.stopPropagation(); toggleQuest(q.id); }} 
                                        className="rounded-lg text-purple-500 bg-slate-950 border-slate-700 focus:ring-purple-500 w-6 h-6 shrink-0 transition-all cursor-pointer relative z-10 hover:scale-110 active:scale-90" 
                                      />
                                      {isCompleted && (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1.5, opacity: 0 }}
                                          className="absolute inset-0 bg-emerald-500 rounded-lg pointer-events-none"
                                        />
                                      )}
                                    </div>
                                    <div className="flex-1 cursor-pointer select-none" onClick={() => toggleExpand(q.id)}>
                                      <div className="flex justify-between items-start gap-3">
                                        <h4 className={`font-bold text-base sm:text-lg leading-tight transition-colors ${isCompleted ? 'text-slate-500 line-through' : 'text-white group-hover:text-purple-300'}`}>
                                          {q.nameRu}
                                        </h4>
                                        <div className="text-slate-600 shrink-0 mt-1 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                          <ChevronDown size={18} />
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap items-center gap-2 mt-3">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                                          {TRADER_MAP[q.trader as string] || q.trader}
                                        </span>
                                        
                                        {!isCompleted && (
                                          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${
                                            isUnlocked 
                                              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                                              : 'text-amber-500 bg-amber-500/10 border-amber-500/30'
                                          }`}>
                                            {isUnlocked ? 'ДОСТУПНО' : 'ЗАБЛОКИРОВАНО'}
                                          </span>
                                        )}

                                        {q.map && q.map.length > 0 && (
                                          <div className="flex gap-1.5 flex-wrap">
                                            {q.map.map(m => (
                                              <span key={m} className="text-[9px] font-bold text-slate-400 uppercase bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/30">
                                                {MAP_NAME_MAP[m.toLowerCase()] || m.replace(/_/g, ' ')}
                                              </span>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: 'auto', opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }} 
                                        className="overflow-hidden"
                                      >
                                        <div className="mt-5 text-[13px] space-y-5 pt-5 border-t border-slate-800/50">
                                          {hasContent ? (
                                            <>
                                              {details.description?.ru && (
                                                <p className="text-slate-400 italic font-mono leading-relaxed border-l-2 border-purple-500/30 pl-4 bg-purple-500/5 py-2 rounded-r-lg">
                                                  {details.description.ru}
                                                </p>
                                              )}
                                              
                                              {!isUnlocked && details.previousQuestIds && details.previousQuestIds.length > 0 && (
                                            <div className="p-4 bg-amber-950/10 rounded-xl border border-amber-900/20">
                                              <p className="text-[10px] font-bold text-amber-500 uppercase mb-3 tracking-[0.15em] flex items-center gap-2">
                                                <Target size={12} /> Требуется завершить:
                                              </p>
                                              <div className="flex flex-wrap gap-2">
                                                {details.previousQuestIds.map((pId: string) => {
                                                  const prevQuest = findQuestInList(pId);
                                                  return (
                                                    <button 
                                                      key={pId} 
                                                      onClick={(e) => { e.stopPropagation(); scrollToQuest(pId, prevQuest?.trader); }}
                                                      className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
                                                        isQuestIdCompleted(pId) 
                                                          ? 'text-slate-500 border-slate-800/50 line-through bg-slate-900/50' 
                                                          : 'text-amber-400 border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-400 active:scale-95'
                                                      }`}
                                                    >
                                                      {prevQuest?.nameRu || pId}
                                                    </button>
                                                  );
                                                })}
                                              </div>
                                            </div>
                                          )}

                                          {details.objectives && details.objectives.length > 0 && (
                                            <div className="space-y-3">
                                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Задачи:</p>
                                              <ul className="space-y-2.5">
                                                {details.objectives.map((obj: any, idx: number) => (
                                                  <li key={idx} className="flex gap-3 text-slate-300 leading-snug">
                                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isCompleted ? 'bg-slate-700' : 'bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]'}`} />
                                                    <span>{obj.ru || obj.en}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                          
                                          {details.requiredItemIds && details.requiredItemIds.length > 0 && (
                                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/50 shadow-inner group">
                                              <p className="text-[10px] font-bold text-blue-400 uppercase mb-3 tracking-widest flex items-center gap-2">
                                                <Wrench size={12} /> Предметы для квеста:
                                              </p>
                                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {details.requiredItemIds.map((req: any, idx: number) => (
                                                  <div key={idx} className="flex items-center justify-between text-[11px] font-bold text-slate-300 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-colors">
                                                    <span className="truncate mr-2">{findItemRuName(req.itemId, itemsOverrides)}</span>
                                                    <span className="text-blue-400 font-mono">x{req.quantity}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          )}
                                            </>
                                          ) : (
                                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center gap-2 py-6">
                                              <Target size={24} className="text-slate-600 mb-2 opacity-50" />
                                              <p className="text-slate-400 text-sm font-medium">Задачи для этого задания пока неизвестны</p>
                                            </div>
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    };

                    if (sortedQuests.length === 0) {
                      return <div className="py-24 text-center bg-slate-950/20 rounded-3xl border border-dashed border-slate-800 text-slate-500">Квесты не найдены</div>;
                    }

                    return (
                      <div className="space-y-16">
                        {renderGroup('Доступные задания', available, 'available')}
                        {renderGroup('Будущие задания', locked, 'locked')}
                        {renderGroup('Выполненные задания', completed, 'completed')}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
