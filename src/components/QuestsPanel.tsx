/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Wrench, Cpu } from 'lucide-react';
import { questsList, projectsList } from '../data/db';
import { motion } from 'motion/react';
import { WorkshopType } from '../types';

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
}

export const QuestsPanel: React.FC<QuestsPanelProps> = ({ 
  completedQuests, 
  toggleQuest,
  completedProjectPhases,
  updateProjectPhase,
  scrappyLevel,
  setScrappyLevel,
  workshopLevels,
  updateWorkshopLevel,
  search = ''
}) => {
  const [questDetails, setQuestDetails] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'arctracker_quests.json')
      .then(r => r.json())
      .then(d => setQuestDetails(d.quests))
      .catch(e => console.error("Could not load quest details", e));
  }, []);

  const filteredQuests = React.useMemo(() => {
    if (!search.trim()) return questsList;
    const term = search.toLowerCase();
    return questsList.filter(q => 
      q.nameEn.toLowerCase().includes(term) || 
      q.nameRu.toLowerCase().includes(term) ||
      (q.trader && q.trader.toLowerCase().includes(term))
    );
  }, [search]);

  return (
    <div 
      id="quests-panel"
      className="mt-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-5 shadow-lg overflow-hidden mb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column: NPC Levels */}
        <div>
          <h3 className="text-white font-bold text-sm flex items-center gap-2 mb-4">
            <Cpu size={16} className="text-emerald-400" /> Уровни торговцев:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Scrappy */}
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-white">Плюшкин</span>
                <span className="text-xs text-slate-400">Уровень {scrappyLevel}</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setScrappyLevel(lvl)}
                    className={`flex-1 py-1.5 rounded text-xs font-bold transition-all ${
                      scrappyLevel >= lvl ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Workshops */}
            {(Object.keys(workshopLevels) as WorkshopType[]).map(type => {
              const translatedType = {
                Weapon: 'Оружие',
                Gear: 'Снаряжение',
                Med: 'Медпункт',
                Utility: 'Инструменты',
                Processing: 'Очистка',
                Explosives: 'Взрывчатка',
                Workbench: 'Верстак',
                Storage: 'Хранилище'
              }[type] || type;

              return (
              <div key={type} className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-white">{translatedType}</span>
                  <span className="text-xs text-slate-400">Ур. {workshopLevels[type]}</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(lvl => (
                    <button
                      id={`workshop-${type}-${lvl}`}
                      key={lvl}
                      onClick={() => updateWorkshopLevel(type, lvl)}
                      className={`flex-1 py-1.5 rounded text-xs font-bold transition-all ${
                        workshopLevels[type] >= lvl ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Projects */}
        <div id="projects-section">
          <h3 className="text-white font-bold text-sm flex items-center gap-2 mb-4">
            <Wrench size={16} className="text-blue-400" /> Проекты базы:
          </h3>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {projectsList.map(project => {
              const completedPhase = completedProjectPhases[project.id] || 0;
              return (
                <div key={project.id} className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white tracking-wider">
                    <Wrench size={14} className="text-blue-500" />
                    {project.nameRu}
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => updateProjectPhase(project.id, 0)}
                      className={`block w-full text-left px-3 py-2 rounded text-xs font-bold transition-all ${
                        completedPhase === 0
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50'
                          : 'bg-slate-800 text-slate-500 hover:bg-slate-700 hover:text-slate-300'
                      }`}
                    >
                      Не начато
                    </button>
                    {project.phases.map(phase => (
                      <button
                        key={phase.phase}
                        onClick={() => updateProjectPhase(project.id, phase.phase)}
                        className={`block w-full text-left px-3 py-2 rounded text-xs font-bold transition-all ${
                          completedPhase === phase.phase
                            ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.4)]'
                            : 'bg-slate-800 text-slate-500 hover:bg-slate-700 hover:text-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>Фаза {phase.phase}: {phase.nameRu}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="border-slate-800 my-8" />

      {/* Story Quests */}
      <div id="story-quests">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-bold text-sm flex items-center gap-2">
            <Target size={16} className="text-purple-400" /> Основные задания:
          </h3>
          {search && (
            <span className="text-xs text-slate-500">Найдено: {filteredQuests.length}</span>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuests.map(q => {
            const isCompleted = completedQuests.includes(q.id);
            const details = questDetails ? questDetails[q.id] : null;
            
            return (
              <div 
                key={q.id} 
                className={`flex flex-col p-4 bg-slate-950/50 rounded-xl border transition-all ${
                  isCompleted ? 'border-slate-800 opacity-60' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <input 
                    id={`quest-check-${q.id}`}
                    type="checkbox" 
                    checked={isCompleted} 
                    onChange={() => toggleQuest(q.id)} 
                    className="mt-1 rounded text-purple-500 bg-slate-900 border-slate-700 focus:ring-purple-500 w-5 h-5 shrink-0 transition-all cursor-pointer" 
                  />
                  <div>
                    <h4 className={`font-bold text-base ${isCompleted ? 'text-slate-500 line-through' : 'text-white'}`}>
                      {q.nameRu}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">
                        {q.trader}
                      </span>
                      {q.map && q.map.length > 0 && (
                        <span className="text-[10px] font-medium text-slate-500 uppercase">
                          {q.map.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {!isCompleted && details && (
                  <div className="mt-2 text-xs space-y-3">
                    {details.description?.ru && (
                      <p className="text-slate-400 italic leading-relaxed border-l-2 border-slate-800 pl-3">
                        {details.description.ru}
                      </p>
                    )}
                    
                    {details.objectives && details.objectives.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Цели:</p>
                        <ul className="space-y-1">
                          {details.objectives.map((obj: any, idx: number) => (
                            <li key={idx} className="flex gap-2 text-slate-300">
                              <span className="text-purple-500 text-[10px] mt-0.5">•</span>
                              <span>{obj.ru || obj.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {details.requiredItemIds && details.requiredItemIds.length > 0 && (
                      <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800/50">
                        <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Требуется:</p>
                        <div className="flex flex-wrap gap-2">
                          {details.requiredItemIds.map((req: any, idx: number) => (
                            <span key={idx} className="text-[10px] font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                              {req.itemId.replace(/_/g, ' ')} x{req.quantity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
