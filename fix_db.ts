
import fs from 'fs';

const filePath = 'src/data/db.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the first occurrence of id: acoustic_guitar
const firstItemIndex = content.indexOf('"id": "acoustic_guitar"');
if (firstItemIndex === -1) {
  console.error("Could not find acoustic_guitar");
  process.exit(1);
}

// Find the last { before acoustic_guitar
const lastBraceBeforeItem = content.lastIndexOf('{', firstItemIndex);

// Find export const projectsList: Project[] = [
const projectsListStart = content.indexOf('export const projectsList: Project[] = [');

// We want to keep projectsList until its correct closing brace.
// But projectsList itself was broken by my earlier edit. 
// I'll just write a safe projectsList and itemsList.

const safeProjectsList = `export const projectsList: Project[] = [
  {
    "id": "trophy_display_project",
    "nameEn": "Trophy Display",
    "nameRu": "Витрина для трофеев",
    "phases": [
      {
        "nameEn": "Roaming Threats", "nameRu": "Блуждающие противники", "phase": 1,
        "requirements": [
          { "itemId": "rusted_bolts", "quantity": 3 },
          { "itemId": "pop_trigger", "quantity": 15 },
          { "itemId": "tick_pod", "quantity": 15 },
          { "itemId": "surveyor_vault", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Soaring Menaces", "nameRu": "Парящие угрозы", "phase": 2,
        "requirements": [
          { "itemId": "spotter_relay", "quantity": 10 },
          { "itemId": "expired_respirator", "quantity": 3 },
          { "itemId": "wasp_driver", "quantity": 20 },
          { "itemId": "hornet_driver", "quantity": 15 }
        ]
      },
      {
        "nameEn": "Ferocious Foes", "nameRu": "Свирепые враги", "phase": 3,
        "requirements": [
          { "itemId": "arc_performance_steel", "quantity": 10 },
          { "itemId": "shredder_gyro", "quantity": 5 },
          { "itemId": "leaper_pulse_unit", "quantity": 10 },
          { "itemId": "bastion_cell", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Dominant Dangers", "nameRu": "Доминирующие опасности", "phase": 4,
        "requirements": [
          { "itemId": "arc_synthetic_resin", "quantity": 10 },
          { "itemId": "magnetic_accelerator", "quantity": 10 },
          { "itemId": "rocketeer_driver", "quantity": 8 },
          { "itemId": "queen_reactor", "quantity": 3 }
        ]
      },
      {
        "nameEn": "Imposing Behemoths", "nameRu": "Грандиозные тяжеловессы", "phase": 5,
        "requirements": [
          { "itemId": "exodus_modules", "quantity": 5 },
          { "itemId": "geiger_counter", "quantity": 3 },
          { "itemId": "bombardier_cell", "quantity": 8 },
          { "itemId": "matriarch_reactor", "quantity": 3 }
        ]
      }
    ]
  },
  {
    "id": "expedition_project_s1",
    "nameEn": "Expedition Project (Expedition 1)",
    "nameRu": "Проект экспедиции (Экспедиция 1)",
    "phases": [
      {
        "nameEn": "Foundation", "nameRu": "Основа", "phase": 1,
        "requirements": [
          { "itemId": "metal_parts", "quantity": 150 },
          { "itemId": "rubber_parts", "quantity": 200 },
          { "itemId": "arc_alloy", "quantity": 80 },
          { "itemId": "steel_spring", "quantity": 15 }
        ]
      },
      {
        "nameEn": "Core Systems", "nameRu": "Базовые системы", "phase": 2,
        "requirements": [
          { "itemId": "durable_cloth", "quantity": 35 },
          { "itemId": "wires", "quantity": 30 },
          { "itemId": "electrical_components", "quantity": 30 },
          { "itemId": "cooling_fan", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Framework", "nameRu": "Каркас", "phase": 3,
        "requirements": [
          { "itemId": "light_bulb", "quantity": 5 },
          { "itemId": "battery", "quantity": 30 },
          { "itemId": "sensors", "quantity": 20 },
          { "itemId": "exodus_modules", "quantity": 1 }
        ]
      },
      {
        "nameEn": "Outfitting", "nameRu": "Обустройство", "phase": 4,
        "requirements": [
          { "itemId": "humidifier", "quantity": 5 },
          { "itemId": "advanced_electrical_components", "quantity": 5 },
          { "itemId": "magnetic_accelerator", "quantity": 3 },
          { "itemId": "leaper_pulse_unit", "quantity": 3 }
        ]
      },
      { "nameEn": "Load Stage", "nameRu": "Этап загрузки", "phase": 5, "requirements": [] },
      { "nameEn": "Departure", "nameRu": "Отправление", "phase": 6, "requirements": [] }
    ]
  },
  {
    "id": "avian_alarm_project",
    "nameEn": "Avian Alarm",
    "nameRu": "Пернатая тревога",
    "phases": [
      { "nameEn": "Initial Flock Intake", "nameRu": "Первоначальный сбор стаи", "phase": 1, "requirements": [] },
      {
        "nameEn": "Preliminary Signal Birds", "nameRu": "Пернатое предупреждение", "phase": 2,
        "requirements": [
          { "itemId": "tick_pod", "quantity": 7 },
          { "itemId": "canister", "quantity": 20 },
          { "itemId": "moss", "quantity": 12 },
          { "itemId": "twilight_compass_ship_model", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Secondary Validation Birds", "nameRu": "Дополнительное пернатое подтверждение", "phase": 3,
        "requirements": [
          { "itemId": "comet_igniter", "quantity": 3 },
          { "itemId": "fertilizer", "quantity": 10 },
          { "itemId": "rusted_tools", "quantity": 8 },
          { "itemId": "velocity_ship_model", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Heightened Alert Birds", "nameRu": "Повышенная пернатая готовность", "phase": 4,
        "requirements": [
          { "itemId": "vaporizer_regulator", "quantity": 1 },
          { "itemId": "water_filter", "quantity": 3 },
          { "itemId": "agave", "quantity": 8 },
          { "itemId": "sirena_dorata_ship_model", "quantity": 5 }
        ]
      },
      {
        "nameEn": "Critical Warning Birds", "nameRu": "Чрезвычайная пернатая ситуация", "phase": 5,
        "requirements": [
          { "itemId": "monolith_part", "quantity": 2 },
          { "itemId": "red_coral_jewelry", "quantity": 3 },
          { "itemId": "roots", "quantity": 4 },
          { "itemId": "leviathans_crown_ship_model", "quantity": 1 }
        ]
      }
    ]
  }
];

export const itemsList: Item[] = [
`;

const newContent = content.substring(0, projectsListStart) + safeProjectsList + content.substring(lastBraceBeforeItem);
fs.writeFileSync(filePath, newContent);
console.log("File fixed successfully");
