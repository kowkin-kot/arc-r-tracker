import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Coins, 
  Layers, 
  Wrench, 
  Search, 
  ShoppingBag, 
  Info, 
  ClipboardList, 
  MapPin,
  TrendingUp,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { ProcessedItem, Rarity } from '../types';
import { ItemImage } from './ItemImage';
import { questsList, projectsList } from '../data/db';

interface ItemDetailModalProps {
  item: ProcessedItem | null;
  onClose: () => void;
}

const rarityStyles: Record<Rarity, { color: string; bg: string; border: string; label: string }> = {
  Legendary: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', label: 'Легендарный' },
  Epic: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', label: 'Эпический' },
  Rare: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', label: 'Редкий' },
  Uncommon: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', label: 'Необычный' },
  Common: { color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/30', label: 'Обычный' },
};

const recMap = {
  must_keep: { label: 'Сохранить любой ценой', icon: TrendingUp, style: 'text-red-400 bg-red-400/10 border-red-400/20' },
  keep: { label: 'Ценный предмет', icon: Shield, style: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  situational: { label: 'Ситуативно', icon: HelpCircle, style: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
  drop: { label: 'Мусор / Продажа', icon: Trash2, style: 'text-slate-400 bg-slate-400/10 border-slate-400/20' },
  quest_target: { label: 'Нужно для квеста', icon: ClipboardList, style: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
};

// Fixed imports for the ones missing from top
import { Shield, HelpCircle, Trash2 } from 'lucide-react';

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const rStyle = rarityStyles[item.rarity];
  const recConf = recMap[item.currentRec as keyof typeof recMap] || recMap.drop;
  const RecIcon = recConf.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className={`p-4 border-b ${rStyle.bg} ${rStyle.border} flex justify-between items-start`}>
            <div className="flex gap-4">
              <ItemImage name={item.name} src={item.image} className="w-16 h-16 sm:w-20 sm:h-20 border-slate-700 bg-slate-950 p-2" />
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${rStyle.color}`}>
                  {rStyle.label} Item
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{item.ruName}</h2>
                <span className="text-xs text-slate-500 font-mono italic">{item.name}</span>
                
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700 uppercase font-bold tracking-tight">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
            {/* Recommendation Alert */}
            <div className={`p-3 rounded-lg border flex items-center gap-3 ${recConf.style}`}>
              <RecIcon size={20} className="shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Рекомендация рейда</p>
                <p className="text-sm font-medium">{recConf.label}</p>
              </div>
            </div>

            {/* Core Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Coins size={14} className="text-yellow-500" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Цена продажи</span>
                </div>
                <p className="text-lg font-mono text-white leading-none">
                  {new Intl.NumberFormat('ru-RU').format(item.value)} <span className="text-[10px] text-slate-500">RC</span>
                </p>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={14} className="text-blue-400" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Размер стака</span>
                </div>
                <p className="text-lg font-mono text-white leading-none">
                  {item.stack} <span className="text-[10px] text-slate-500">шт.</span>
                </p>
              </div>
            </div>

            {/* Details Sections */}
            <div className="space-y-4">
              {/* Used For */}
              {item.usedFor && (
                <section className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Lightbulb size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-none mt-0.5">Использование</h3>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-800/50">
                    <p className="text-slate-300 text-sm leading-relaxed">{item.usedFor}</p>
                    {item.quests && item.quests.length > 0 && (
                      <div className="mt-3 bg-purple-500/10 border border-purple-500/20 rounded-md p-2">
                        <div className="flex items-center gap-1.5 text-purple-400 text-[10px] font-bold uppercase mb-1.5">
                          <ClipboardList size={12} />
                          <span>Нужно для квестов:</span>
                        </div>
                        <ul className="list-disc list-inside text-xs text-purple-300/90 space-y-0.5">
                          {item.quests.map(qId => {
                            const qName = questsList.find(q => q.id === qId)?.nameRu || qId;
                            return <li key={qId}>{qName}</li>;
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}
              
              {!item.usedFor && item.quests && item.quests.length > 0 && (
                <section className="space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-400">
                    <ClipboardList size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-widest leading-none mt-0.5">Нужно для квестов</h3>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <ul className="list-disc list-inside text-sm text-purple-300 space-y-1">
                      {item.quests.map(qId => {
                        const qName = questsList.find(q => q.id === qId)?.nameRu || qId;
                        return <li key={qId}>{qName}</li>;
                      })}
                    </ul>
                  </div>
                </section>
              )}

              {item.projects && item.projects.length > 0 && (
                <section className="space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Wrench size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-widest leading-none mt-0.5">Нужно для проектов</h3>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <ul className="list-disc list-inside text-sm text-blue-300 space-y-1">
                      {item.projects.map((p, idx) => {
                        const projInfo = (projectsList as any[]).find(pr => pr.id === p.projectId);
                        const pName = projInfo?.nameRu || p.projectId;
                        const phaseName = projInfo?.phases?.find((ph: any) => ph.phase === p.phase)?.nameRu || '';
                        return (
                          <li key={`${p.projectId}-${p.phase}-${idx}`}>
                            <span className="font-semibold">{pName}</span> (Фаза {p.phase}: {phaseName})
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              )}

              {/* Dismantle */}
              {item.dismantle && (
                <section className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Wrench size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-none mt-0.5">Разбор на материалы</h3>
                  </div>
                  <div className="bg-orange-500/5 rounded-lg p-3 border border-orange-500/10">
                    <p className="text-orange-200/80 text-sm italic">{item.dismantle}</p>
                  </div>
                </section>
              )}

              {/* Where to find */}
              <section className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={16} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-none mt-0.5">Где искать</h3>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-800/50">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.source || 'Обычные контейнеры, сумки, ящики по всему миру.'}
                  </p>
                </div>
              </section>

              {/* Vendor */}
              {item.vendor && (
                <section className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShoppingBag size={16} />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-none mt-0.5">У торговцев</h3>
                  </div>
                  <div className="bg-blue-500/5 rounded-lg p-3 border border-blue-500/10">
                    <p className="text-blue-300 text-sm">Можно приобрести у: <span className="font-bold text-blue-200">{item.vendor}</span></p>
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="p-4 bg-slate-950/80 border-t border-slate-800 mt-auto">
            <button 
              onClick={onClose}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 active:scale-95"
            >
              Закрыть вьювер
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
