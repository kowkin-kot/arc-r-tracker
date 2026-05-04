/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Wrench } from 'lucide-react';
import { questsList, projectsList } from '../data/db';
import { motion } from 'motion/react';
import { WorkshopType } from '../types';
import { Cpu } from 'lucide-react';

interface QuestsPanelProps {
  completedQuests: string[];
  toggleQuest: (id: string) => void;
  completedProjectPhases: Record<string, number>;
  updateProjectPhase: (projectId: string, phase: number) => void;
  scrappyLevel: number;
  setScrappyLevel: (l: number) => void;
  workshopLevels: Record<WorkshopType, number>;
  updateWorkshopLevel: (type: WorkshopType, level: number) => void;
}

export const QuestsPanel: React.FC<QuestsPanelProps> = ({ 
  completedQuests, 
  toggleQuest,
  completedProjectPhases,
  updateProjectPhase,
  scrappyLevel,
  setScrappyLevel,
  workshopLevels,
  updateWorkshopLevel
}) => {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      id="quests-panel"
      className="mt-3 bg-slate-900/95 border border-slate-700 rounded-xl p-5 shadow-lg backdrop-blur-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: NPC Levels */}
        <div>
          <h3 className="text-white font-bold text-sm flex items-center gap-2 mb-4">
            <Cpu size={16} className="text-emerald-400" /> Уровни торговцев:
          </h3>
          
          <div className="space-y-4">
            {/* Scrappy */}
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-white">Scrappy</span>
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
            {(Object.keys(workshopLevels) as WorkshopType[]).map(type => (
              <div key={type} className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-white">{type}</span>
                  <span className="text-xs text-slate-400">Уровень {workshopLevels[type]}</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(lvl => (
                    <button
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
            ))}
          </div>
        </div>

        {/* Right Column: Projects */}
        <div>
          <h3 className="text-white font-bold text-sm flex items-center gap-2 mb-4">
            <Wrench size={16} className="text-blue-400" /> Проекты базы:
          </h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
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

      <hr className="border-slate-800 my-6" />

      {/* Story Quests */}
      <div id="story-quests">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-sm flex items-center gap-2">
            <Target size={16} className="text-purple-400" /> Выполненные квесты:
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {questsList.map(q => (
            <label 
              key={q.id} 
              id={`quest-label-${q.id}`}
              className="flex items-center gap-2 text-sm text-slate-300 p-2.5 bg-slate-950/50 rounded-lg cursor-pointer hover:bg-slate-800 border border-slate-800/50 transition-colors select-none"
            >
              <input 
                id={`quest-check-${q.id}`}
                type="checkbox" 
                checked={completedQuests.includes(q.id)} 
                onChange={() => toggleQuest(q.id)} 
                className="rounded text-purple-500 bg-slate-900 border-slate-700 focus:ring-purple-500 w-4 h-4 shrink-0 transition-all cursor-pointer" 
              />
              <span className={completedQuests.includes(q.id) ? 'line-through text-slate-600 truncate' : 'truncate'}>{q.nameRu}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
