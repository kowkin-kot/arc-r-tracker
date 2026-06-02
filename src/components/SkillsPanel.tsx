import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Shield, Zap, Plus, Minus, Info, Lock } from 'lucide-react';
import { skillsList } from '../data/db';
import { Skill } from '../types';

const MAX_TOTAL_POINTS = 76;

const CATEGORY_COLORS: Record<string, { main: string; text: string; bg: string; border: string; glow: string }> = {
  CONDITIONING: { 
    main: '#10b981', // emerald-500
    text: 'text-emerald-400', 
    bg: 'bg-emerald-500', 
    border: 'border-emerald-400',
    glow: 'rgba(16, 185, 129, 0.6)'
  },
  MOBILITY: { 
    main: '#f59e0b', // amber-500
    text: 'text-amber-400', 
    bg: 'bg-amber-500', 
    border: 'border-amber-400',
    glow: 'rgba(245, 158, 11, 0.6)'
  },
  SURVIVAL: { 
    main: '#ef4444', // red-500
    text: 'text-red-400', 
    bg: 'bg-red-500', 
    border: 'border-red-400',
    glow: 'rgba(239, 68, 68, 0.6)'
  }
};

const CATEGORY_RU: Record<string, string> = {
  CONDITIONING: 'ПОДГОТОВКА',
  MOBILITY: 'МОБИЛЬНОСТЬ',
  SURVIVAL: 'ВЫЖИВАНИЕ'
};

export const SkillsPanel: React.FC<{ 
  search: string;
  skillPoints: Record<string, number>;
  setSkillPoints: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  extraPoints: number;
  setExtraPoints: React.Dispatch<React.SetStateAction<number>>;
}> = ({ search, skillPoints, setSkillPoints, extraPoints, setExtraPoints }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  const currentMaxPoints = MAX_TOTAL_POINTS + extraPoints;

  const pointsByCategory = useMemo(() => {
    const counts: Record<string, number> = { CONDITIONING: 0, MOBILITY: 0, SURVIVAL: 0 };
    skillsList.forEach(skill => {
      if (counts[skill.category] !== undefined) {
        counts[skill.category] += (skillPoints[skill.id] || 0);
      }
    });
    return counts;
  }, [skillPoints]);

  const totalPointsSpent = useMemo(() => {
    return Object.values(skillPoints).reduce((sum: number, pts: number) => sum + pts, 0);
  }, [skillPoints]);

  const checkIsUnlocked = (skill: Skill, currentPoints: Record<string, number>, catPointsMap: Record<string, number>) => {
    // 1. Basic dependency check (prerequisites)
    // For start nodes (no prereqs), it's always true.
    // For other nodes, at least ONE prerequisite must have points.
    const hasPrereqs = skill.prerequisiteNodeIds.length === 0 || 
                       skill.prerequisiteNodeIds.some(preId => (currentPoints[preId] || 0) > 0);
    
    if (!hasPrereqs) return false;

    // 2. Category point thresholds for Major skills
    if (skill.isMajor) {
      const catPts = catPointsMap[skill.category] || 0;
      
      // Tier 2 Major Skills (middle of tree)
      if (skill.position.y < 50 && skill.position.y > 20) {
        if (catPts < 15) return false;
      }
      
      // Tier 3 Major Skills (top of tree)
      if (skill.position.y <= 20) {
        if (catPts < 36) return false;
      }
    }

    return true;
  };

  const isUnlocked = (skill: Skill) => {
    return checkIsUnlocked(skill, skillPoints, pointsByCategory);
  };

  const canAddPoint = (skill: Skill) => {
    if (totalPointsSpent >= currentMaxPoints) return false;
    if ((skillPoints[skill.id] || 0) >= skill.maxPoints) return false;
    return isUnlocked(skill);
  };

  const canRemovePoint = (skill: Skill) => {
    if ((skillPoints[skill.id] || 0) <= 0) return false;
    
    // If we're removing the last point, we must check if any other active skills 
    // would become "locked" as a result (either due to broken link or dropped point threshold).
    if (skillPoints[skill.id] === 1) {
      const nextPoints = { ...skillPoints, [skill.id]: 0 };
      const nextCatPoints = { ...pointsByCategory };
      nextCatPoints[skill.category] -= 1;

      // Check all skills that currently have at least one point
      for (const s of skillsList) {
        if (s.id !== skill.id && (skillPoints[s.id] || 0) > 0) {
          if (!checkIsUnlocked(s, nextPoints, nextCatPoints)) {
            return false;
          }
        }
      }
    }
    
    return true;
  };

  const handleAddPoint = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const skill = skillsList.find(s => s.id === id);
    if (skill && canAddPoint(skill)) {
      setSkillPoints(prev => ({
        ...prev,
        [id]: (prev[id] || 0) + 1
      }));
    }
  };

  const handleRemovePoint = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const skill = skillsList.find(s => s.id === id);
    if (skill && canRemovePoint(skill)) {
      setSkillPoints(prev => ({
        ...prev,
        [id]: Math.max(0, (prev[id] || 0) - 1)
      }));
    }
  };

  const resetPoints = () => {
    setSkillPoints({});
    setSelectedSkill(null);
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-wrap justify-between items-center bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-lg gap-4">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Доступно очков</span>
            <span className={`text-2xl font-black ${totalPointsSpent >= currentMaxPoints ? 'text-red-500' : 'text-blue-400'}`}>
              {currentMaxPoints - totalPointsSpent} <span className="text-slate-600 text-sm font-normal">/ {currentMaxPoints}</span>
            </span>
          </div>
          
          <div className="h-10 w-[1px] bg-slate-800"></div>
          
          <div className="flex flex-col">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest group flex items-center gap-1">
              Бонус (Вайп)
              <Info size={12} className="text-slate-500" />
            </span>
            <div className="flex items-center gap-3 mt-1">
              <button 
                onClick={() => setExtraPoints(p => Math.max(0, p - 1))}
                className="w-6 h-6 flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-400 hover:text-white transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="text-lg font-black text-white w-6 text-center">{extraPoints}</span>
              <button 
                onClick={() => setExtraPoints(p => p + 1)}
                className="w-6 h-6 flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-400 hover:text-white transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-slate-800 hidden sm:block"></div>

          <div className="flex flex-col">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Прогресс</span>
            <div className="w-32 sm:w-48 h-2 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${(totalPointsSpent / currentMaxPoints) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        <button 
          onClick={resetPoints}
          className="px-4 py-2 bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-900/50 rounded-lg text-xs font-bold transition-all"
        >
          СБРОСИТЬ ВСЕ
        </button>
      </div>

      <div className="relative w-full h-[600px] sm:h-[750px] bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-auto custom-scrollbar">
        <div 
          className="relative h-full"
          style={{ minWidth: '1024px', minHeight: '800px' }}
        >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Connections (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
            </marker>
          </defs>
          {skillsList.map(skill => {
            return skill.prerequisiteNodeIds.map(preReqId => {
              const preReq = skillsList.find(s => s.id === preReqId);
              if (!preReq) return null;
              
              const x1 = preReq.position.x;
              const y1 = preReq.position.y;
              const x2 = skill.position.x;
              const y2 = skill.position.y;
              
              const isActive = (skillPoints[preReq.id] || 0) > 0 && (skillPoints[skill.id] || 0) > 0;
              const isAvailable = (skillPoints[preReq.id] || 0) > 0;
              const color = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.CONDITIONING;
              
              return (
                <line 
                  key={`${preReq.id}-${skill.id}`}
                  x1={`${x1}%`} 
                  y1={`${y1}%`} 
                  x2={`${x2}%`} 
                  y2={`${y2}%`} 
                  stroke={isActive ? color.main : isAvailable ? "#475569" : "#1e293b"} 
                  strokeWidth={isActive ? "3" : "2"}
                  strokeDasharray={isActive ? "none" : "5,5"}
                  className="transition-all duration-500"
                />
              );
            });
          })}
        </svg>

        {/* Nodes */}
        {skillsList.map(skill => {
          const points = skillPoints[skill.id] || 0;
          const unlocked = isUnlocked(skill);
          const isMaxed = points >= skill.maxPoints;
          const isMatched = search && (skill.nameRu.toLowerCase().includes(search.toLowerCase()) || skill.nameEn.toLowerCase().includes(search.toLowerCase()));
          const color = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.CONDITIONING;
          
          return (
            <div
              key={skill.id}
              className="absolute"
              style={{ 
                left: `${skill.position.x}%`, 
                top: `${skill.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: selectedSkill?.id === skill.id ? 40 : 10
              }}
            >
              <div className="relative group">
                <button
                  onClick={() => setSelectedSkill(skill)}
                  onContextMenu={(e) => { e.preventDefault(); handleRemovePoint(skill.id); }}
                  className={`relative flex items-center justify-center transition-all duration-300 ${
                    skill.isMajor 
                      ? 'w-16 h-16 rounded-lg rotate-45 border-2 shadow-lg' 
                      : 'w-12 h-12 rounded-full border-2 shadow-md'
                  } ${
                    !unlocked 
                      ? 'bg-slate-900 border-slate-800 text-slate-700 cursor-not-allowed opacity-60' 
                      : points > 0
                        ? isMaxed
                          ? `${color.bg} border-white text-white`
                          : `${color.bg}/80 ${color.border} text-white`
                        : `bg-slate-800 border-slate-600 text-slate-400 hover:border-white hover:text-white`
                  } ${isMatched ? 'ring-4 ring-amber-500/50 scale-110 shadow-[0_0_25px_rgba(245,158,11,0.6)]' : ''}`}
                  style={{
                    boxShadow: points > 0 ? `0 0 20px ${color.glow}` : undefined
                  }}
                >
                  <div className={`${skill.isMajor ? '-rotate-45' : ''}`}>
                    {!unlocked ? <Lock size={skill.isMajor ? 24 : 18} /> : (
                      <>
                        {skill.category === 'CONDITIONING' && <Shield size={skill.isMajor ? 28 : 20} />}
                        {skill.category === 'MOBILITY' && <Zap size={skill.isMajor ? 28 : 20} />}
                        {skill.category === 'SURVIVAL' && <Cpu size={skill.isMajor ? 28 : 20} />}
                      </>
                    )}
                  </div>
                </button>

                {/* Points Counter Bubble */}
                {unlocked && (
                  <div className={`absolute -bottom-1 -right-1 bg-slate-950 border border-slate-700 text-[10px] font-black px-1.5 py-0.5 rounded-full z-20 text-white transform rotate-0 pointer-events-none`}>
                    <span className={points > 0 ? color.text : 'text-slate-500'}>{points}</span>
                    <span className="text-slate-600">/</span>
                    <span>{skill.maxPoints}</span>
                  </div>
                )}

                {/* Quick Add Button (Desktop hover) */}
                {unlocked && !isMaxed && (
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleAddPoint(skill.id, e)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-30"
                  >
                    <Plus size={14} />
                  </motion.button>
                )}
              </div>
            </div>
          );
        })}

        {/* Branch Labels */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around px-8 pointer-events-none">
          {[
            { id: 'CONDITIONING', name: 'CONDITIONING', label: 'Подготовка' },
            { id: 'MOBILITY', name: 'MOBILITY', label: 'Мобильность' },
            { id: 'SURVIVAL', name: 'SURVIVAL', label: 'Выживание' }
          ].map(cat => {
            const color = CATEGORY_COLORS[cat.id];
            const pts = pointsByCategory[cat.id];
            return (
              <div key={cat.id} className="flex flex-col items-center gap-1">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${pts > 0 ? color.text : 'text-slate-600'}`}>
                  {cat.label}
                </span>
                <div className={`px-3 py-1 rounded-full border bg-slate-950/80 backdrop-blur-sm text-xs font-black transition-all duration-500 ${
                  pts > 0 ? `${color.border} ${color.text}` : 'border-slate-800 text-slate-500'
                }`} style={{ boxShadow: pts > 0 ? `0 0 10px ${color.glow}` : undefined }}>
                  {pts} ОЧКОВ
                </div>
              </div>
            );
          })}
        </div>

        </div>
        {/* Skill Info Panel Overlay */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute top-4 left-4 sm:left-auto right-4 z-50 overflow-hidden sm:w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl"
            >
                {/* Decorative category badge */}
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  {selectedSkill.category === 'CONDITIONING' && <Shield size={120} />}
                  {selectedSkill.category === 'MOBILITY' && <Zap size={120} />}
                  {selectedSkill.category === 'SURVIVAL' && <Cpu size={120} />}
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded ${CATEGORY_COLORS[selectedSkill.category].bg}/20 ${CATEGORY_COLORS[selectedSkill.category].text} text-[10px] font-black uppercase tracking-widest`}>
                        {CATEGORY_RU[selectedSkill.category] || selectedSkill.category}
                      </span>
                      {selectedSkill.isMajor && (
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest">
                          КЛЮЧЕВОЙ
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight">{selectedSkill.nameRu}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Plus className="rotate-45" size={24} />
                  </button>
                </div>

                <div className="space-y-4 relative z-10">
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {selectedSkill.descriptionRu}
                  </p>

                  {selectedSkill.impactedSkillRu && (
                    <div className="flex items-center gap-2 text-xs py-2 px-3 bg-slate-950/50 border border-slate-800 rounded-lg">
                      <Info size={14} className={`${CATEGORY_COLORS[selectedSkill.category].text} shrink-0`} />
                      <span className="text-slate-400">Влияет на: <span className={`${CATEGORY_COLORS[selectedSkill.category].text} font-bold`}>{selectedSkill.impactedSkillRu}</span></span>
                    </div>
                  )}

                  <div className="pt-4 border-top border-slate-800">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Уровень улучшения</span>
                        <div className="flex gap-1.5 mt-1">
                          {Array.from({ length: selectedSkill.maxPoints }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                                i < (skillPoints[selectedSkill.id] || 0) ? `${CATEGORY_COLORS[selectedSkill.category].bg}` : 'bg-slate-800'
                              }`}
                              style={{ boxShadow: i < (skillPoints[selectedSkill.id] || 0) ? `0 0 8px ${CATEGORY_COLORS[selectedSkill.category].glow}` : undefined }}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-white font-black text-lg">
                        {skillPoints[selectedSkill.id] || 0} <span className="text-slate-600">/</span> {selectedSkill.maxPoints}
                      </span>
                    </div>

                    {!isUnlocked(selectedSkill) ? (
                      <div className="flex flex-col gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl transition-all">
                        <div className="flex items-center justify-center gap-2 text-red-400 text-xs font-bold uppercase">
                          <Lock size={14} /> ЗАБЛОКИРОВАНО
                        </div>
                        
                        {/* Requirement hints */}
                        <div className="text-[10px] text-slate-500 space-y-1">
                          {selectedSkill.prerequisiteNodeIds.length > 0 && selectedSkill.prerequisiteNodeIds.every(preId => (skillPoints[preId] || 0) === 0) && (
                            <p className="flex items-center gap-1">
                              <span className="w-1 h-1 bg-slate-500 rounded-full" />
                              Требуются предшествующие навыки
                            </p>
                          )}
                          {selectedSkill.isMajor && selectedSkill.position.y < 50 && (
                            <p className={`flex items-center gap-1 ${pointsByCategory[selectedSkill.category] >= (selectedSkill.position.y <= 20 ? 36 : 15) ? 'text-emerald-500' : 'text-red-400'}`}>
                              <span className="w-1 h-1 bg-current rounded-full" />
                              Требуется {selectedSkill.position.y <= 20 ? 36 : 15} очков в категории {selectedSkill.category === 'CONDITIONING' ? 'Подготовка' : selectedSkill.category === 'MOBILITY' ? 'Мобильность' : 'Выживание'}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          disabled={!canRemovePoint(selectedSkill)}
                          onClick={() => handleRemovePoint(selectedSkill.id)}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs transition-all ${
                            canRemovePoint(selectedSkill)
                              ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                              : 'bg-slate-900 text-slate-700 border border-slate-800 cursor-not-allowed'
                          }`}
                        >
                          <Minus size={16} /> УБРАТЬ
                        </button>
                        <button
                          disabled={!canAddPoint(selectedSkill)}
                          onClick={() => handleAddPoint(selectedSkill.id)}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs transition-all ${
                            canAddPoint(selectedSkill)
                              ? `${CATEGORY_COLORS[selectedSkill.category].bg} hover:brightness-110 text-white shadow-lg shadow-blue-900/20`
                              : 'bg-slate-900 text-slate-700 border border-slate-800 cursor-not-allowed'
                          }`}
                        >
                          <Plus size={16} /> УЛУЧШИТЬ
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

