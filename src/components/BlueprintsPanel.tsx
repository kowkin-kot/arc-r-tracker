import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Check, Search } from 'lucide-react';
import { Blueprint } from '../types';
import { ItemImage } from './ItemImage';

interface BlueprintsPanelProps {
  blueprints: Blueprint[];
  collectedBlueprints: string[];
  toggleBlueprint: (id: string) => void;
  search: string;
}

const rarityColors: Record<string, string> = {
  Common: 'bg-slate-400',
  Uncommon: 'bg-green-500',
  Rare: 'bg-blue-500',
  Epic: 'bg-purple-500',
  Legendary: 'bg-orange-500'
};

export const BlueprintsPanel: React.FC<BlueprintsPanelProps> = ({ 
  blueprints, 
  collectedBlueprints, 
  toggleBlueprint,
  search: externalSearch
}) => {
  const [filter, setFilter] = useState<'all' | 'collected' | 'missing'>('all');

  const filteredBlueprints = useMemo(() => {
    let result = blueprints;

    // External search or internal category filter
    if (externalSearch.trim()) {
      const s = externalSearch.toLowerCase();
      result = result.filter(b => 
        b.name.toLowerCase().includes(s) || 
        b.ruName.toLowerCase().includes(s) ||
        b.type.toLowerCase().includes(s)
      );
    }

    if (filter === 'collected') {
      result = result.filter(b => collectedBlueprints.includes(b.id));
    } else if (filter === 'missing') {
      result = result.filter(b => !collectedBlueprints.includes(b.id));
    }

    return result.sort((a, b) => {
      const collectedA = collectedBlueprints.includes(a.id);
      const collectedB = collectedBlueprints.includes(b.id);
      if (collectedA !== collectedB) return collectedA ? 1 : -1;
      return a.name.localeCompare(b.name);
    });
  }, [blueprints, collectedBlueprints, filter, externalSearch]);

  const stats = useMemo(() => {
    return {
      total: blueprints.length,
      collected: collectedBlueprints.length,
      percent: Math.round((collectedBlueprints.length / blueprints.length) * 100)
    };
  }, [blueprints, collectedBlueprints]);

  return (
    <div id="blueprints-panel" className="mt-4 px-3 sm:px-0">
      {/* Stats Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
              <BookOpen className="text-blue-400" size={24} />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Коллекция Чертежей</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.percent}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-400">{stats.collected} / {stats.total} ({stats.percent}%)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {(['all', 'collected', 'missing'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  filter === f
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {f === 'all' ? 'Все' : f === 'collected' ? 'Собрано' : 'Не хватает'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blueprints List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 pb-32">
        <AnimatePresence mode="popLayout">
          {filteredBlueprints.map(bp => (
            <motion.div
              layout
              key={bp.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={() => toggleBlueprint(bp.id)}
              className={`relative cursor-pointer group rounded border flex items-center transition-all overflow-hidden min-h-[78px] py-1 ${
                collectedBlueprints.includes(bp.id)
                  ? 'bg-slate-900/40 border-slate-800 opacity-50'
                  : 'bg-slate-900 border-slate-800 active:bg-slate-800 hover:border-blue-500/50'
              }`}
            >
              {/* Compact Image */}
              <div className="relative w-[78px] self-stretch shrink-0 bg-slate-950 flex items-center justify-center border-r border-slate-800/50">
                <ItemImage 
                  name={bp.name} 
                  src={bp.image}
                  isBlueprint={true}
                  className={`w-full h-full border-none rounded-none ${collectedBlueprints.includes(bp.id) ? 'grayscale' : ''}`}
                />
                
                {/* Rarity Marker */}
                <div className={`absolute top-0 left-0 w-1 h-full ${rarityColors[bp.rarity]}`} />

                {collectedBlueprints.includes(bp.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Check className="text-green-500/80" size={18} strokeWidth={3} />
                  </div>
                )}
              </div>
              
              <div className="px-2.5 flex-grow min-w-0 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-1 overflow-hidden">
                  <span className={`text-[8px] font-bold uppercase truncate ${collectedBlueprints.includes(bp.id) ? 'text-slate-600' : 'text-slate-400'}`}>
                    {bp.type}
                  </span>
                </div>
                <h3 className={`font-bold text-[13px] leading-tight truncate transition-colors ${collectedBlueprints.includes(bp.id) ? 'text-slate-500' : 'text-white'}`}>
                  {bp.ruName}
                </h3>
                <h4 className="text-[9px] text-slate-500 font-mono italic truncate mt-0.5">
                  {bp.name}
                </h4>
                <p className="text-slate-600 text-[9px] leading-none truncate mt-1">{bp.source}</p>
              </div>

              <div className="pr-2.5 pl-1 shrink-0">
                <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                  collectedBlueprints.includes(bp.id)
                    ? 'text-green-500'
                    : 'bg-slate-950/50 text-slate-800 border border-slate-800'
                }`}>
                  <Check size={12} strokeWidth={4} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredBlueprints.length === 0 && (
        <div className="text-center py-20">
          <BookOpen size={48} className="mx-auto text-slate-800 mb-4" />
          <h3 className="text-slate-400 font-medium">Чертежи не найдены</h3>
          <p className="text-slate-600 text-sm mt-1">Попробуйте изменить фильтры</p>
        </div>
      )}
    </div>
  );
};
