/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, X, Mic, ListTodo } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchHeaderProps {
  search: string;
  setSearch: (val: string) => void;
  isListening: boolean;
  speechSupported: boolean;
  handleVoiceSearch: () => void;
  showQuestsPanel: boolean;
  setShowQuestsPanel: (val: boolean) => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  search,
  setSearch,
  isListening,
  speechSupported,
  handleVoiceSearch,
  showQuestsPanel,
  setShowQuestsPanel
}) => {
  return (
    <div id="search-header" className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl px-3 sm:px-0 pb-3 pt-2 border-b border-slate-800 mb-4 shadow-lg">
      <div className="relative max-w-full flex items-center gap-2">
        <div className="relative flex-grow">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search size={20} />
          </div>
          <input 
            id="loot-search-input"
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск лута или оружия..." 
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-3.5 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner text-base"
          />
          {search && (
            <button 
              id="clear-search-btn"
              onClick={() => setSearch('')} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-2"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        {speechSupported && (
          <button
            id="voice-search-btn"
            onClick={handleVoiceSearch}
            className={`flex-shrink-0 p-3.5 rounded-xl border transition-all flex items-center justify-center ${
              isListening 
                ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse' 
                : 'bg-slate-900 border-slate-700 text-slate-400 active:bg-slate-800'
            }`}
          >
            <Mic size={20} className={isListening ? 'animate-bounce' : ''} />
          </button>
        )}
      </div>
    </div>
  );
};
