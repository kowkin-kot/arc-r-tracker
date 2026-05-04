/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Scroll } from 'lucide-react';

interface ItemImageProps {
  name: string;
  className?: string;
  isBlueprint?: boolean;
  src?: string;
}

export const ItemImage: React.FC<ItemImageProps> = ({ name, className = "", isBlueprint = false, src }) => {
  const [hasError, setHasError] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [retryCount, setRetryCount] = useState(0);
  
  useEffect(() => {
    setHasError(false);
    setRetryCount(0);
    
    // Priority: 1. Passed src, 2. ArcTracker CDN, 3. Wiki FilePath
    if (src) {
      setImgUrl(src);
    } else {
      const cleanName = name.replace(/"/g, '');
      const slug = cleanName.toLowerCase().replace(/\s+/g, '_').replace(/\./g, '').replace(/'/g, '');
      
      // Исползуем бесплатный CDN (arctracker) как дефолтный и самый стабильный 
      setImgUrl(`https://cdn.arctracker.io/items/${slug}.png`);
    }
  }, [name, isBlueprint, src]);

  const handleError = () => {
    const cleanName = name.replace(/"/g, '');
    const defaultFileName = cleanName.replace(/ /g, '_') + '.png';
    const slug = cleanName.toLowerCase().replace(/\s+/g, '_').replace(/\./g, '').replace(/'/g, '');
    const metaforgeSlug = cleanName.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace(/'/g, '');

    const fallbacks = [
      // Retry 1: ArcTracker CDN (items usually have snake_case slug) - No Blueprint suffix
      `https://cdn.arctracker.io/items/${slug}.png`,
      // Retry 2: Прямая ссылка без _Blueprint (но через CDN)
      `https://wsrv.nl/?url=arcraiders.wiki/wiki/Special:FilePath/${encodeURIComponent(defaultFileName)}&w=128&output=webp`,
      // Retry 3: Metaforge Items WEBP
      `https://metaforge.app/images/arc-raiders/items/${metaforgeSlug}.webp`,
      // Retry 4: Metaforge Items PNG
      `https://metaforge.app/images/arc-raiders/items/${metaforgeSlug}.png`,
      // Retry 5: Metaforge Weapons 
      `https://metaforge.app/images/arc-raiders/weapons/${metaforgeSlug}.png`,
      // Retry 6: Metaforge Mods/Gadgets
      `https://metaforge.app/images/arc-raiders/gadgets/${metaforgeSlug}.png`,
      `https://metaforge.app/images/arc-raiders/mods/${metaforgeSlug}.png`,
      // Retry 7: Raw Wiki Link (без CDN)
      `https://arcraiders.wiki/wiki/Special:FilePath/${encodeURIComponent(defaultFileName)}`
    ];

    if (retryCount < fallbacks.length) {
      setImgUrl(fallbacks[retryCount]);
      setRetryCount(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };
  
  return (
    <div 
      id={`image-container-${name.toLowerCase().replace(/\s+/g, '-')}`} 
      className={`w-12 h-12 shrink-0 bg-slate-950 rounded border border-slate-800 flex items-center justify-center overflow-hidden shadow-inner group-hover/card:border-slate-600 transition-colors ${className}`}
    >
      {hasError || !imgUrl ? (
        <div className="flex flex-col items-center justify-center gap-0.5 opacity-20 text-slate-400">
          {isBlueprint ? <Scroll size={16} /> : <ImageIcon size={16} />}
          <span className="text-[7px] uppercase font-bold text-center leading-none">{hasError ? 'NO IMG' : 'WAIT'}</span>
        </div>
      ) : (
        <img 
          id={`image-img-${name}`}
          src={imgUrl} 
          alt={name} 
          onError={handleError}
          className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};
