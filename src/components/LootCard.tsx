/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Info, Coins, Layers, Wrench, Star, CheckCircle2, AlertTriangle, Trash2, Target, ClipboardList } from 'lucide-react';
import { ProcessedItem } from '../types';
import { ItemImage } from './ItemImage';
import { motion } from 'motion/react';
import { questsList } from '../data/db';

const rarityStyles = {
  Legendary: { color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10', label: 'Легендарное' },
  Epic: { color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10', label: 'Эпическое' },
  Rare: { color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10', label: 'Редкое' },
  Uncommon: { color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/10', label: 'Необычное' },
  Common: { color: 'text-gray-400', border: 'border-gray-500/30', bg: 'bg-gray-500/10', label: 'Обычное' }
};

const recMap = {
  quest_target: {
    label: 'НУЖНО ДЛЯ КВЕСТА',
    style: 'bg-purple-600/90 text-white border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]',
    icon: Target
  },
  must_keep: { 
    label: 'ТОП ЛУТ (БРАТЬ!)', 
    style: 'bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]', 
    icon: Star
  },
  keep: { 
    label: 'ОДНОЗНАЧНО БРАТЬ', 
    style: 'bg-green-600/90 text-white border-green-500', 
    icon: CheckCircle2
  },
  situational: { 
    label: 'ПО СИТУАЦИИ', 
    style: 'bg-yellow-600/90 text-white border-yellow-500', 
    icon: AlertTriangle
  },
  drop: { 
    label: 'МУСОР (ВЫБРОСИТЬ)', 
    style: 'bg-slate-700 text-slate-300 border-slate-600', 
    icon: Trash2
  }
};

interface LootCardProps {
  item: ProcessedItem;
  onClick?: () => void;
}

export const LootCard: React.FC<LootCardProps> = ({ item, onClick }) => {
  const rStyle = rarityStyles[item.rarity];
  const recConf = { ...recMap[item.currentRec as keyof typeof recMap] || recMap.drop };
  const RecIcon = recConf.icon;

  if (item.currentRec === 'quest_target') {
    if (item.isQuestTarget && item.isWorkshopActive) {
      recConf.label = 'нужно для квестов и верстаков';
    } else if (item.isWorkshopActive) {
      recConf.label = 'Нужно для верстака';
    } else if (item.isQuestTarget) {
      recConf.label = 'Нужно для квеста';
    }
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      id={`loot-card-${item.id}`}
      onClick={onClick}
      className={`bg-slate-900 rounded-lg border overflow-hidden flex flex-col transition-all h-full cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.05)] ${item.isQuestTarget || item.isScrappyActive ? 'border-purple-500/60 shadow-[0_0_15px_rgba(147,51,234,0.1)]' : 'border-slate-800'}`}
    >
      <div id={`rarity-header-${item.id}`} className={`px-2 py-1 border-b flex justify-between items-center ${rStyle.bg} ${rStyle.border}`}>
        <span className={`text-[9px] font-bold uppercase tracking-widest ${rStyle.color}`}>
          {rStyle.label}
        </span>
        <span className="text-[9px] font-medium text-slate-500 bg-black/20 px-1.5 py-0.5 rounded leading-none">
          {item.type}
        </span>
      </div>

      <div className="p-2 flex-grow flex flex-col gap-2">
        <div className="flex gap-2.5 items-start">
          <ItemImage name={item.name} src={item.image} />
          <div className="flex-grow min-w-0">
            <h2 id={`item-title-${item.id}`} className="text-sm font-bold text-white leading-tight truncate">{item.ruName}</h2>
            <h3 className="text-[10px] text-slate-500 font-mono truncate">{item.name}</h3>
            
            <div className={`mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[9px] font-bold uppercase tracking-tight ${recConf.style}`}>
              <RecIcon size={10} />
              <span>{recConf.label}</span>
            </div>
          </div>
        </div>

        <div className="space-y-1 text-[11px]">
          {item.usedFor && (
            <div className="flex items-start gap-1.5">
              <Info size={12} className="text-blue-400 mt-0.5 shrink-0" />
              <span className="text-slate-300 leading-tight line-clamp-2">{item.usedFor}</span>
            </div>
          )}
          
          {item.dismantle && (
            <div className="flex items-start gap-1.5">
              <Wrench size={12} className="text-orange-400 mt-0.5 shrink-0" />
              <span className="text-slate-400 leading-tight italic line-clamp-1">{item.dismantle}</span>
            </div>
          )}

          {item.quests && item.quests.length > 0 && (
            <div className="flex items-start gap-1.5 mt-1 border-t border-purple-500/20 pt-1">
              <ClipboardList size={12} className="text-purple-400 mt-0.5 shrink-0" />
              <div className="text-purple-300 leading-tight line-clamp-2">
                Для квестов: {item.quests.map(qId => questsList.find(q => q.id === qId)?.nameRu || qId).join(', ')}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto pt-2 grid grid-cols-2 gap-1.5">
          <div className="bg-black/30 rounded px-1.5 py-1 flex items-center gap-1.5 border border-slate-800/40">
            <Coins size={12} className="text-yellow-500 shrink-0" />
            <span className="font-mono text-slate-300 text-[10px]">{new Intl.NumberFormat('ru-RU').format(item.value)}</span>
          </div>
          <div className="bg-black/30 rounded px-1.5 py-1 flex items-center gap-1.5 border border-slate-800/40">
            <Layers size={12} className="text-slate-400 shrink-0" />
            <span className="font-mono text-slate-300 text-[10px]">{item.stack} шт.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
