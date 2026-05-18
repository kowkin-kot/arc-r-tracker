/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Rarity = 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common';
export type ItemType = string;
export type Recommendation = 'must_keep' | 'keep' | 'situational' | 'drop' | 'quest_target';

export type WorkshopType = 'Weapon' | 'Gear' | 'Med' | 'Utility' | 'Processing' | 'Explosives' | 'Workbench' | 'Storage';

export interface WorkshopRequirement {
  type: WorkshopType;
  level: number;
}

export interface Blueprint {
  id: string;
  name: string;
  ruName: string;
  rarity: Rarity;
  type: string;
  source: string;
  image?: string;
}

export interface Item {
  id: string;
  name: string;
  ruName: string;
  rarity: Rarity;
  type: ItemType;
  usedFor: string;
  value: number;
  stack: number;
  rec: Recommendation;
  dismantle?: string;
  quests?: string[];
  scrappyReqs?: number[];
  workshopReqs?: WorkshopRequirement[];
  source?: string;
  vendor?: string;
  image?: string;
  projects?: { projectId: string; phase: number }[];
}

export interface ProcessedItem extends Item {
  currentRec: Recommendation;
  isQuestTarget: boolean;
  isScrappyActive: boolean;
  isWorkshopActive: boolean;
  isProjectTarget?: boolean;
}

export interface Quest {
  id: string;
  nameEn: string;
  nameRu: string;
  trader?: string;
  map?: string[];
  descriptionRu?: string;
  objectivesRu?: string[];
  requiredItems?: { itemId: string; quantity: number }[];
}

export interface ProjectPhase {
  nameEn: string;
  nameRu: string;
  phase: number;
  requirements: { itemId: string; quantity: number }[];
}

export interface Project {
  id: string;
  nameEn: string;
  nameRu: string;
  phases: ProjectPhase[];
}

export interface Skill {
  id: string;
  nameEn: string;
  nameRu: string;
  descriptionRu: string;
  category: string;
  maxPoints: number;
  position: { x: number; y: number };
  prerequisiteNodeIds: string[];
  isMajor?: boolean;
  impactedSkillRu?: string;
}
