import skillsData from './skills.json';
import { Item, Blueprint, Quest, Project, Skill } from "../types";

export const questsList: Quest[] = [
  {
    "id": "12_cold_storage",
    "nameEn": "Cold Storage",
    "nameRu": "Холодное хранилище",
    "trader": "Shani",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "12_in_my_image",
    "nameEn": "In My Image",
    "nameRu": "По образу и подобию",
    "trader": "Lance",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "12_snap_and_salvage",
    "nameEn": "Snap and Salvage",
    "nameRu": "Фотогеничные детали",
    "trader": "Tian Wen",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "a_dead_end",
    "nameEn": "A Dead End",
    "nameRu": "Тупик",
    "trader": "Shani",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "a_prime_specimen",
    "nameEn": "A Prime Specimen",
    "nameRu": "Превосходный образец",
    "trader": "Shani",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "a_rising_tide",
    "nameEn": "A Rising Tide",
    "nameRu": "Прилив",
    "trader": "Celeste",
    "map": [
      "buried_city",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "a_toxic_trail",
    "nameEn": "A Toxic Trail",
    "nameRu": "Ядовитый след",
    "trader": "Shani",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "a_wrench_in_the_works",
    "nameEn": "A Wrench in the Works",
    "nameRu": "Ключ в деле",
    "trader": "Celeste",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "battening_down",
    "nameEn": "Battening Down",
    "nameRu": "Меры предосторожности",
    "trader": "Apollo",
    "map": [
      "-21263888"
    ]
  },
  {
    "id": "bombing_run",
    "nameEn": "Bombing Run",
    "nameRu": "Заход на цель",
    "trader": "Shani",
    "map": []
  },
  {
    "id": "celestes_journals",
    "nameEn": "Celeste’s Journals",
    "nameRu": "Дневники Селесты",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "clamoring_for_attention",
    "nameEn": "Clamoring for Attention",
    "nameRu": "Привлечение внимания",
    "trader": "Shani",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "collision_course",
    "nameEn": "Collision Course",
    "nameRu": "Траектория столкновения",
    "trader": "Tian Wen",
    "map": []
  },
  {
    "id": "combat_recon",
    "nameEn": "Combat Recon",
    "nameRu": "Разведка боем",
    "trader": "Shani",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "deciphering_the_data",
    "nameEn": "Deciphering The Data",
    "nameRu": "Расшифровка данных",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "dust_on_the_wires",
    "nameEn": "Dust on the Wires",
    "nameRu": "Пыль на проводах",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "fragmented_logs",
    "nameEn": "Fragmented Logs",
    "nameRu": "Разрозненные записи",
    "trader": "Shani",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "furtive_meetings",
    "nameEn": "Furtive Meetings",
    "nameRu": "Плодотворные встречи",
    "trader": "Shani",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "groundbreaking",
    "nameEn": "Groundbreaking",
    "nameRu": "Первый шаг",
    "trader": "Apollo",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "keeping_an_eye_out",
    "nameEn": "Keeping an Eye Out",
    "nameRu": "Бдительное око",
    "trader": "Celeste",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "last_entry",
    "nameEn": "Last Entry",
    "nameRu": "Последняя запись",
    "trader": "Shani",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "line_in_the_sand",
    "nameEn": "Line in the Sand",
    "nameRu": "Линия на песке",
    "trader": "Celeste",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "movie_night",
    "nameEn": "Movie Night",
    "nameRu": "Киновечер",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "on_deaf_ears",
    "nameEn": "On Deaf Ears",
    "nameRu": "Проблемы со слухом",
    "trader": "Lance",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "on_the_map",
    "nameEn": "On The Map",
    "nameRu": "На карте",
    "trader": "Lance",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "outstanding_balance",
    "nameEn": "Outstanding Balance",
    "nameRu": "Непогашенный долг",
    "trader": "Tian Wen",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "paving_the_way",
    "nameEn": "Paving the Way",
    "nameRu": "Проложить путь",
    "trader": "Apollo",
    "map": [
      "the_blue_gate",
      "buried_city",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "safe_harbor",
    "nameEn": "Safe Harbor",
    "nameRu": "Тихая гавань",
    "trader": "Tian Wen",
    "map": [
      "-21263888"
    ]
  },
  {
    "id": "safe_passage",
    "nameEn": "Safe Passage",
    "nameRu": "Безопасный проход",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "settled_in_full",
    "nameEn": "Settled in Full",
    "nameRu": "В расчете",
    "trader": "Tian Wen",
    "map": []
  },
  {
    "id": "shoring_up_defenses",
    "nameEn": "Shoring Up Defenses",
    "nameRu": "Прибрежная оборона",
    "trader": "Apollo",
    "map": [
      "-21263888"
    ]
  },
  {
    "id": "picking_up_the_pieces",
    "nameEn": "Picking Up The Pieces",
    "nameRu": "Сбор по крупицам",
    "trader": "Shani",
    "map": [
      "the_spaceport",
      "buried_city",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10",
    "nameEn": "A Better Use",
    "nameRu": "Применение получше",
    "trader": "Tian Wen",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10a",
    "nameEn": "Greasing Her Palms",
    "nameRu": "Взяточные запчасти",
    "trader": "Celeste",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10b",
    "nameEn": "Dormant Barons",
    "nameRu": "Спящие «Бароны»",
    "trader": "Shani",
    "map": [
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10c",
    "nameEn": "Doctor's Orders",
    "nameRu": "Указания врача",
    "trader": "Lance",
    "map": []
  },
  {
    "id": "ss10d",
    "nameEn": "Mixed Signals",
    "nameRu": "Смешанный сигнал",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10e",
    "nameEn": "What We Left Behind",
    "nameRu": "Следы прошлого",
    "trader": "Tian Wen",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10f",
    "nameEn": "Medical Merchandise",
    "nameRu": "Медицинские товары",
    "trader": "Lance",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10g",
    "nameEn": "A Reveal in Ruins",
    "nameRu": "Что скрывают развалины",
    "trader": "Lance",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10h",
    "nameEn": "Broken Monument",
    "nameRu": "Поврежденный памятник",
    "trader": "Tian Wen",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10i",
    "nameEn": "Marked for Death",
    "nameRu": "Метка смерти",
    "trader": "Tian Wen",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10j",
    "nameEn": "Straight Record",
    "nameRu": "Поправки",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10k",
    "nameEn": "A Lay of the Land",
    "nameRu": "Рельеф местности",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss10l",
    "nameEn": "Market Correction",
    "nameRu": "Коррекция рынка",
    "trader": "Tian Wen",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10m",
    "nameEn": "Eyes on the Prize",
    "nameRu": "Вижу цель, не вижу препятствий",
    "trader": "Tian Wen",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10n",
    "nameEn": "Industrial Espionage",
    "nameRu": "Промышленный шпионаж",
    "trader": "Tian Wen",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10o",
    "nameEn": "Keeping the Memory",
    "nameRu": "В память о былом",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10p",
    "nameEn": "Echoes of Victory Ridge",
    "nameRu": "Эхо Хребта победы",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10q",
    "nameEn": "Unexpected Initiative",
    "nameRu": "Неожиданное дело",
    "trader": "Tian Wen",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10r",
    "nameEn": "A Symbol of Unification",
    "nameRu": "Символ единства",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10s",
    "nameEn": "Eyes in the Sky",
    "nameRu": "Взгляд в небеса",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10t",
    "nameEn": "Celeste’s Journals",
    "nameRu": "Дневники Селесты",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10u",
    "nameEn": "The Major’s Footlocker",
    "nameRu": "Личные вещи майора",
    "trader": "Tian Wen",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10v",
    "nameEn": "Out of the Shadows",
    "nameRu": "Из тени",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10w",
    "nameEn": "Back on Top",
    "nameRu": "Снова на вершине",
    "trader": "Tian Wen",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x",
    "nameEn": "A Balanced Harvest",
    "nameRu": "Достойный урожай",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x10",
    "nameEn": "Power Out",
    "nameRu": "Отключение энергии",
    "trader": "Celeste",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss10x11",
    "nameEn": "Flickering Threat",
    "nameRu": "Мерцающая угроза",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x12",
    "nameEn": "Bees!",
    "nameRu": "Пчелы!",
    "trader": "Celeste",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "ss10x13",
    "nameEn": "Espresso",
    "nameRu": "Эспрессо",
    "trader": "Apollo",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x14",
    "nameEn": "Life of a Pharmacist",
    "nameRu": "Жизнь аптекаря",
    "trader": "Lance",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x15",
    "nameEn": "Tribute to Toledo",
    "nameRu": "Дань уважения Толедо",
    "trader": "Celeste",
    "map": []
  },
  {
    "id": "ss10x16",
    "nameEn": "Digging Up Dirt",
    "nameRu": "Нарыть компромат",
    "trader": "Celeste",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x17",
    "nameEn": "Turnabout",
    "nameRu": "Разворот",
    "trader": "Celeste",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss10x18",
    "nameEn": "Building a Library",
    "nameRu": "Создавая библиотеку",
    "trader": "Apollo",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x19",
    "nameEn": "A New Type of Plant",
    "nameRu": "Новое растение",
    "trader": "Lance",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x2",
    "nameEn": "Untended Garden",
    "nameRu": "Запущенный сад",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x20",
    "nameEn": "Armored Transports",
    "nameRu": "Бронированные машины",
    "trader": "Tian Wen",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "ss10x3",
    "nameEn": "The Root of the Matter",
    "nameRu": "Суть проблемы",
    "trader": "Celeste",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x4",
    "nameEn": "Water Troubles",
    "nameRu": "Проблемы с водой",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x5",
    "nameEn": "Into the Fray",
    "nameRu": "В самое пекло",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x6",
    "nameEn": "Source of the Contamination",
    "nameRu": "Источник заражения",
    "trader": "Celeste",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss10x7",
    "nameEn": "Switching the Supply",
    "nameRu": "Смена груза",
    "trader": "Celeste",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss10x8",
    "nameEn": "A Warm Place To Rest",
    "nameRu": "Место покоя",
    "trader": "Apollo",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10x9",
    "nameEn": "Prescriptions of the Past",
    "nameRu": "Лекарства прошлого",
    "trader": "Lance",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss10y",
    "nameEn": "After Rain Comes",
    "nameRu": "После дождя",
    "trader": "Celeste",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss10z",
    "nameEn": "Our Presence up There",
    "nameRu": "Наше присутствие наверху",
    "trader": "Shani",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss11",
    "nameEn": "A First Foothold",
    "nameRu": "Первый плацдарм",
    "trader": "Apollo",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "ss11a",
    "nameEn": "Reduced to Rubble",
    "nameRu": "Одни только щепки",
    "trader": "Shani",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "ss11b",
    "nameEn": "Lost in Transmission",
    "nameRu": "Трудности связи",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "ss11b2",
    "nameEn": "Communication Hideout",
    "nameRu": "Убежище центра связи",
    "trader": "Shani",
    "map": [
      "buried_city"
    ]
  },
  {
    "id": "ss11bx",
    "nameEn": "With A Trace",
    "nameRu": "По горячим следам",
    "trader": "Shani",
    "map": [
      "the_blue_gate"
    ]
  },
  {
    "id": "ss2",
    "nameEn": "Clearer Skies",
    "nameRu": "Чистое небо",
    "trader": "Shani",
    "map": []
  },
  {
    "id": "ss3",
    "nameEn": "Trash Into Treasure",
    "nameRu": "Вторая жизнь мусора",
    "trader": "Shani",
    "map": []
  },
  {
    "id": "off_the_radar",
    "nameEn": "Off The Radar",
    "nameRu": "Уход в тень",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss5",
    "nameEn": "A Bad Feeling",
    "nameRu": "Дурное предчувствие",
    "trader": "Celeste",
    "map": []
  },
  {
    "id": "ss5a",
    "nameEn": "Hatch Repairs",
    "nameRu": "Ремонт люков",
    "trader": "Shani",
    "map": []
  },
  {
    "id": "ss6",
    "nameEn": "Down to Earth",
    "nameRu": "Приземленные загадки",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "ss7",
    "nameEn": "The Right Tool",
    "nameRu": "Подходящий инструмент",
    "trader": "Tian Wen",
    "map": []
  },
  {
    "id": "ss8",
    "nameEn": "Safe Passage",
    "nameRu": "Безопасный проход",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "ss8a",
    "nameEn": "What Goes Around",
    "nameRu": "Что посеешь...",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "ss8b",
    "nameEn": "Sparks Fly",
    "nameRu": "Искры летят",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "ss9",
    "nameEn": "The Trifecta",
    "nameRu": "Триада",
    "trader": "Shani",
    "map": [
      "buried_city",
      "the_spaceport",
      "the_blue_gate",
      "dam_battlegrounds"
    ]
  },
  {
    "id": "stable_housing",
    "nameEn": "Stable Housing",
    "nameRu": "Устойчивые дома",
    "trader": "Tian Wen",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "test_case",
    "nameEn": "Test Case",
    "nameRu": "Прецедент",
    "trader": "Apollo",
    "map": []
  },
  {
    "id": "the_clean_dream",
    "nameEn": "The Clean Dream",
    "nameRu": "Чистый сон",
    "trader": "Apollo",
    "map": [
      "the_spaceport",
      "the_blue_gate"
    ]
  },
  {
    "id": "the_league",
    "nameEn": "The League",
    "nameRu": "Лига",
    "trader": "Apollo",
    "map": [
      "dam_battlegrounds"
    ]
  },
  {
    "id": "the_stench_of_corruption",
    "nameEn": "The Stench of Corruption",
    "nameRu": "Попахивает коррупцией",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "waking_the_grid",
    "nameEn": "Waking the Grid",
    "nameRu": "Пробуждение сети",
    "trader": "Shani",
    "map": [
      "the_spaceport"
    ]
  },
  {
    "id": "with_a_view",
    "nameEn": "With a View",
    "nameRu": "С видом",
    "trader": "Shani",
    "map": [
      "stella_montis"
    ]
  },
  {
    "id": "worth_your_salt",
    "nameEn": "Worth Your Salt",
    "nameRu": "Мастер своего дела",
    "trader": "Celeste",
    "map": [
      "the_spaceport"
    ]
  }
];

export const projectsList: Project[] = [
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
{
    "id": "acoustic_guitar",
    "name": "Acoustic Guitar",
    "ruName": "Акустическая гитара",
    "rarity": "Legendary",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "4x Металлические детали, 6x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/acoustic_guitar.png"
  },
  {
    "id": "adrenaline_shot",
    "name": "Adrenaline Shot",
    "ruName": "Инъекция адреналина",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 300,
    "stack": 5,
    "dismantle": "1x Химикаты, 1x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/adrenaline_shot.png"
  },
  {
    "id": "advanced_arc_powercell",
    "name": "Advanced ARC Powercell",
    "ruName": "Продвинутая энергоячейка ARC",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 640,
    "stack": 5,
    "dismantle": "2x Энергоячейка ARC",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "high_gain_antenna_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "advanced_electrical_components",
    "name": "Advanced Electrical Components",
    "ruName": "Продвинутые электрические компоненты",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1750,
    "stack": 5,
    "dismantle": "1x Электрические компоненты, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 4
      },
      {
        "projectId": "expedition_project",
        "phase": 4
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 4
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 4
      }
    ]
  },
  {
    "id": "advanced_mechanical_components",
    "name": "Advanced Mechanical Components",
    "ruName": "Продвинутые механические компоненты",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1750,
    "stack": 5,
    "dismantle": "1x Механические компоненты, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/advanced_mechanical_components.png"
  },
  {
    "id": "agave",
    "name": "Agave",
    "ruName": "Агава",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 1000,
    "stack": 10,
    "dismantle": "3x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "agave_juice",
    "name": "Agave Juice",
    "ruName": "Сок агавы",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1800,
    "stack": 5,
    "dismantle": "1x Пустая бутылка из-под вина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/agave_juice.png"
  },
  {
    "id": "air_freshener",
    "name": "Air Freshener",
    "ruName": "Освежитель воздуха",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/air_freshener.png"
  },
  {
    "id": "alarm_clock",
    "name": "Alarm Clock",
    "ruName": "Будильник",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "6x Пластиковые детали, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/alarm_clock.png"
  },
  {
    "id": "alien_duck",
    "name": "Alien Duck",
    "ruName": "Инопланетная уточка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/alien_duck.png"
  },
  {
    "id": "ancient_fort_security_code",
    "name": "Ancient Fort Security Code",
    "ruName": "Код безопасности Древнего Форта",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/security_code.png"
  },
  {
    "id": "angled_grip_i",
    "name": "Angled Grip I",
    "ruName": "Угловая рукоятка I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/angled_grip_i.png"
  },
  {
    "id": "angled_grip_ii",
    "name": "Angled Grip II",
    "ruName": "Угловая рукоятка II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Скотч, 1x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/angled_grip_ii.png"
  },
  {
    "id": "angled_grip_iii",
    "name": "Angled Grip III",
    "ruName": "Угловая рукоятка III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/angled_grip_iii.png"
  },
  {
    "id": "antiseptic",
    "name": "Antiseptic",
    "ruName": "Антисептик",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "10x Химикаты",
    "rec": "situational",
    "quests": [
      "ss10c"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/antiseptic.png"
  },
  {
    "id": "anvil_i",
    "name": "Anvil I",
    "ruName": "Наковальня I",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/anvil.png"
  },
  {
    "id": "anvil_ii",
    "name": "Anvil II",
    "ruName": "Наковальня II",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "3x Механические компоненты, 3x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/anvil.png"
  },
  {
    "id": "anvil_iii",
    "name": "Anvil III",
    "ruName": "Наковальня III",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "4x Механические компоненты, 4x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/anvil.png"
  },
  {
    "id": "anvil_iv",
    "name": "Anvil IV",
    "ruName": "Наковальня IV",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "5x Механические компоненты, 5x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/anvil.png"
  },
  {
    "id": "anvil_splitter",
    "name": "Anvil Splitter",
    "ruName": "Разделитель Наковальни",
    "rarity": "Legendary",
    "type": "Модификации",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/anvil_splitter.png"
  },
  {
    "id": "aphelion",
    "name": "Aphelion",
    "ruName": "Афелий",
    "rarity": "Legendary",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 27500,
    "stack": 1,
    "dismantle": "1x Сложные детали оружия, 2x Магнитный ускоритель",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/aphelion.png"
  },
  {
    "id": "apricot",
    "name": "Apricot",
    "ruName": "Абрикос",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "3x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/apricot.png"
  },
  {
    "id": "arc_alloy",
    "name": "ARC Alloy",
    "ruName": "Сплав ARC",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 200,
    "stack": 15,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [
      "ss2"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 1
      },
      {
        "projectId": "expedition_project",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 1
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "arc_circuitry",
    "name": "ARC Circuitry",
    "ruName": "Электронная схема ARC",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/arc_circuitry.png"
  },
  {
    "id": "arc_coolant",
    "name": "ARC Coolant",
    "ruName": "Охлаждающее вещество ARC",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "16x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "high_gain_antenna_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "arc_flex_rubber",
    "name": "ARC Flex Rubber",
    "ruName": "Гибкая резина ARC",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "16x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "high_gain_antenna_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "arc_motion_core",
    "name": "ARC Motion Core",
    "ruName": "Движущее ядро ARC",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s4",
        "phase": 3
      }
    ]
  },
  {
    "id": "arc_performance_steel",
    "name": "ARC Performance Steel",
    "ruName": "Высокопрочная сталь ARC",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "12x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 3
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "arc_powercell",
    "name": "ARC Powercell",
    "ruName": "Энергоячейка ARC",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 270,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "a_prime_specimen"
    ],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "arc_synthetic_resin",
    "name": "ARC Synthetic Resin",
    "ruName": "Синтетическая смола ARC",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "14x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 4
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "arc_thermo_lining",
    "name": "ARC Thermo Lining",
    "ruName": "Термоподкладка ARC",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "16x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "high_gain_antenna_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "arpeggio_i",
    "name": "Arpeggio I",
    "ruName": "Арпеджио I",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 5500,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/arpeggio.png"
  },
  {
    "id": "arpeggio_ii",
    "name": "Arpeggio II",
    "ruName": "Арпеджио II",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 8000,
    "stack": 1,
    "dismantle": "3x Механические компоненты, 3x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/arpeggio.png"
  },
  {
    "id": "arpeggio_iii",
    "name": "Arpeggio III",
    "ruName": "Арпеджио III",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 11500,
    "stack": 1,
    "dismantle": "4x Механические компоненты, 4x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/arpeggio.png"
  },
  {
    "id": "arpeggio_iv",
    "name": "Arpeggio IV",
    "ruName": "Арпеджио IV",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 15000,
    "stack": 1,
    "dismantle": "5x Механические компоненты, 5x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/arpeggio.png"
  },
  {
    "id": "assessor_matrix",
    "name": "Assessor Matrix",
    "ruName": "Assessor Matrix",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "3x Продвинутая энергоячейка ARC, 1x Продвинутые механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "high_gain_antenna_project",
        "phase": 2
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "assorted_seeds",
    "name": "Assorted Seeds",
    "ruName": "Различные семена",
    "rarity": "Common",
    "type": "Растения",
    "usedFor": "",
    "value": 100,
    "stack": 100,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/assorted_seeds.png"
  },
  {
    "id": "bandage",
    "name": "Bandage",
    "ruName": "Бинт",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 250,
    "stack": 5,
    "dismantle": "2x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bandage.png"
  },
  {
    "id": "barricade_kit",
    "name": "Barricade Kit",
    "ruName": "Набор баррикад",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "4x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/barricade_kit.png"
  },
  {
    "id": "bastion_cell",
    "name": "Bastion Cell",
    "ruName": "Ячейка Бастиона",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 3x Сплав ARC",
    "rec": "situational",
    "quests": [
      "settled_in_full"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "battery",
    "name": "Battery",
    "ruName": "Батарея",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 250,
    "stack": 15,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [
      "ss3"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 3
      },
      {
        "projectId": "expedition_project",
        "phase": 3
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 3
      }
    ]
  },
  {
    "id": "bettina_i",
    "name": "Bettina I",
    "ruName": "Беттина I",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 8000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bettina.png"
  },
  {
    "id": "bettina_ii",
    "name": "Bettina II",
    "ruName": "Беттина II",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 11000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bettina.png"
  },
  {
    "id": "bettina_iii",
    "name": "Bettina III",
    "ruName": "Беттина III",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 14000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bettina.png"
  },
  {
    "id": "bettina_iv",
    "name": "Bettina IV",
    "ruName": "Беттина IV",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 18000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bettina.png"
  },
  {
    "id": "bicycle_pump",
    "name": "Bicycle Pump",
    "ruName": "Велосипедный насос",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "4x Канистра, 10x Металлические детали",
    "rec": "situational",
    "quests": [
      "the_league"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bicycle_pump.png"
  },
  {
    "id": "binoculars",
    "name": "Binoculars",
    "ruName": "Бинокль",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "4x Пластиковые детали, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/binoculars.png"
  },
  {
    "id": "blaze_grenade",
    "name": "Blaze Grenade",
    "ruName": "Пламенная граната",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1600,
    "stack": 5,
    "dismantle": "4x Металлические детали, 2x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blaze_grenade.png"
  },
  {
    "id": "blaze_grenade_trap",
    "name": "Blaze Grenade Trap",
    "ruName": "Лазерная ловушка: Огонь",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blaze_grenade_trap.png"
  },
  {
    "id": "bloated_tuna_can",
    "name": "Bloated Tuna Can",
    "ruName": "Вздутая банка тунца",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bloated_tuna_can.png"
  },
  {
    "id": "blue_gate_cellar_key",
    "name": "Blue Gate Cellar Key",
    "ruName": "Ключ от подвала Синих Врат",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blue_gate_cellar_key.png"
  },
  {
    "id": "blue_gate_communication_tower_key",
    "name": "Blue Gate Communication Tower Key",
    "ruName": "Ключ от Коммуникационной Башни у Синих Ворот",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blue_gate_communication_tower_key.png"
  },
  {
    "id": "blue_gate_confiscation_room_key",
    "name": "Blue Gate Confiscation Room Key",
    "ruName": "Ключ от комнаты конфиската Синих ворот",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blue_gate_confiscation_room_key.png"
  },
  {
    "id": "blue_gate_village_key",
    "name": "Blue Gate Village Key",
    "ruName": "Ключ от деревни Синих Врат",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blue_gate_village_key.png"
  },
  {
    "id": "blue_light_stick",
    "name": "Blue Light Stick",
    "ruName": "Синий химический фонарь",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 150,
    "stack": 5,
    "dismantle": "1x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/blue_light_stick.png"
  },
  {
    "id": "bobcat_i",
    "name": "Bobcat I",
    "ruName": "Бобкэт I",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для легкого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bobcat.png"
  },
  {
    "id": "bobcat_ii",
    "name": "Bobcat II",
    "ruName": "Бобкэт II",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для легкого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bobcat.png"
  },
  {
    "id": "bobcat_iii",
    "name": "Bobcat III",
    "ruName": "Бобкэт III",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 22000,
    "stack": 1,
    "dismantle": "4x Продвинутые механические компоненты, 4x Детали для легкого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bobcat.png"
  },
  {
    "id": "bobcat_iv",
    "name": "Bobcat IV",
    "ruName": "Бобкэт IV",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 27000,
    "stack": 1,
    "dismantle": "5x Продвинутые механические компоненты, 4x Детали для легкого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/bobcat.png"
  },
  {
    "id": "bombardier_cell",
    "name": "Bombardier Cell",
    "ruName": "Ячейка Бомбардира",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 3x Сплав ARC",
    "rec": "situational",
    "quests": [
      "bombing_run"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 5
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 4
      }
    ]
  },
  {
    "id": "breathtaking_snow_globe",
    "name": "Breathtaking Snow Globe",
    "ruName": "Захватывающий снежный шар",
    "rarity": "Epic",
    "type": "Ценности",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 4
      }
    ]
  },
  {
    "id": "broken_flashlight",
    "name": "Broken Flashlight",
    "ruName": "Сломанный фонарик",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Батарея, 6x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/broken_flashlight.png"
  },
  {
    "id": "broken_guidance_system",
    "name": "Broken Guidance System",
    "ruName": "Сломанная система наведения",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "4x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 4
      }
    ]
  },
  {
    "id": "broken_handheld_radio",
    "name": "Broken Handheld Radio",
    "ruName": "Сломанное портативное радио",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "3x Датчики, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/broken_handheld_radio.png"
  },
  {
    "id": "broken_taser",
    "name": "Broken Taser",
    "ruName": "Сломанный электрошокер",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Батарея, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/broken_taser.png"
  },
  {
    "id": "buried_city_hospital_key",
    "name": "Buried City Hospital Key",
    "ruName": "Ключ от болссницы Погребённого города",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/buried_city_hospital_key.png"
  },
  {
    "id": "buried_city_jkv_employee_access_card",
    "name": "Buried City JKV Employee Access Card",
    "ruName": "Карта доступа сотрудника JKV Погребённого города",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/buried_city_jkv_employee_access_card.png"
  },
  {
    "id": "buried_city_residential_master_key",
    "name": "Buried City Residential Master Key",
    "ruName": "Главный ключ от жилых районов Погребённого города",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/buried_city_residential_master_key.png"
  },
  {
    "id": "buried_city_town_hall_key",
    "name": "Buried City Town Hall Key",
    "ruName": "Ключ от мэрии в Погребенном городе",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/buried_city_town_hall_key.png"
  },
  {
    "id": "burletta_i",
    "name": "Burletta I",
    "ruName": "Бурлетта I",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 2900,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burletta.png"
  },
  {
    "id": "burletta_ii",
    "name": "Burletta II",
    "ruName": "Бурлетта II",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burletta.png"
  },
  {
    "id": "burletta_iii",
    "name": "Burletta III",
    "ruName": "Бурлетта III",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "3x Механические компоненты, 3x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burletta.png"
  },
  {
    "id": "burletta_iv",
    "name": "Burletta IV",
    "ruName": "Бурлетта IV",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "4x Механические компоненты, 4x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burletta.png"
  },
  {
    "id": "burned_arc_circuitry",
    "name": "Burned Arc Circuitry",
    "ruName": "Сгоревшая схема Arc",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burned_arc_circuitry.png"
  },
  {
    "id": "burnt_out_candles",
    "name": "Burnt-Out Candles",
    "ruName": "Сгоревшие свечи",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 640,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/burnt_out_candles.png"
  },
  {
    "id": "camera_lens",
    "name": "Camera Lens",
    "ruName": "Объектив камеры",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 5,
    "dismantle": "8x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "candle_holder",
    "name": "Candle Holder",
    "ruName": "Подсвечник",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "candleberries",
    "name": "Candleberries",
    "ruName": "Свечные ягоды",
    "rarity": "Rare",
    "type": "Растения",
    "usedFor": "",
    "value": 460,
    "stack": 10,
    "dismantle": "2x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 1
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 2
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 3
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 4
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "canister",
    "name": "Canister",
    "ruName": "Канистра",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "3x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "canto_i",
    "name": "Canto I",
    "ruName": "Канто I",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "canto_ii",
    "name": "Canto II",
    "ruName": "Канто II",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "canto_iii",
    "name": "Canto III",
    "ruName": "Канто III",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "canto_iv",
    "name": "Canto IV",
    "ruName": "Канто IV",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "cat_bed",
    "name": "Cat Bed",
    "ruName": "Кошачья лежанка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/cat_bed.png"
  },
  {
    "id": "celeste_journal",
    "name": "Celeste's Journal",
    "ruName": "Дневник Селесты",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "celestes_journals",
      "ss10t"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/celestes_journal.png"
  },
  {
    "id": "chemicals",
    "name": "Chemicals",
    "ruName": "Химикаты",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 50,
    "stack": 50,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 1
      }
    ]
  },
  {
    "id": "coffee_pot",
    "name": "Coffee Pot",
    "ruName": "Кофейник",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 3
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "combat_mk1",
    "name": "Combat Mk. 1",
    "ruName": "Бой 1",
    "rarity": "Uncommon",
    "type": "Аугментации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "3x Пластиковые детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/combat_i.png"
  },
  {
    "id": "combat_mk2",
    "name": "Combat Mk. 2",
    "ruName": "Бой 2",
    "rarity": "Rare",
    "type": "Аугментации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Электрические компоненты, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/combat_i.png"
  },
  {
    "id": "combat_mk3_aggressive",
    "name": "Combat Mk. 3 (Aggressive)",
    "ruName": "Боевой Mk. 3 (Агрессивный)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/combat_mk3_aggressive.png"
  },
  {
    "id": "combat_mk3_flanking",
    "name": "Combat Mk. 3 (Flanking)",
    "ruName": "Боевой Mk. 3 (Фланговый)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/combat_mk3_flanking.png"
  },
  {
    "id": "comet_igniter",
    "name": "Comet Igniter",
    "ruName": "Воспламенитель «Комета»",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Сплав ARC, 2x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [
      "collision_course"
    ],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 3
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "compensator_i",
    "name": "Compensator I",
    "ruName": "Компенсатор I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "5x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/compensator_i.png"
  },
  {
    "id": "compensator_ii",
    "name": "Compensator II",
    "ruName": "Компенсатор II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/compensator_ii.png"
  },
  {
    "id": "compensator_iii",
    "name": "Compensator III",
    "ruName": "Компенсатор III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/compensator_ii.png"
  },
  {
    "id": "complex_gun_parts",
    "name": "Complex Gun Parts",
    "ruName": "Сложные детали оружия",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "3x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/complex_gun_parts.png"
  },
  {
    "id": "coolant",
    "name": "Coolant",
    "ruName": "Охлаждающая жидкость",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "5x Химикаты, 2x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/coolant.png"
  },
  {
    "id": "cooling_coil",
    "name": "Cooling Coil",
    "ruName": "Охлаждающий змеевик",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "6x Химикаты, 2x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "cooling_fan",
    "name": "Cooling Fan",
    "ruName": "Охлаждающий вентилятор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "14x Пластиковые детали, 4x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 2
      }
    ]
  },
  {
    "id": "cracked_bioscanner",
    "name": "Cracked Bioscanner",
    "ruName": "Треснувший биосканер",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "3x Батарея, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/cracked_bioscanner.png"
  },
  {
    "id": "crash_mat",
    "name": "Crash Mat",
    "ruName": "Посадочный мат",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1200,
    "stack": 5,
    "dismantle": "6x Ткань, 3x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "crude_explosives",
    "name": "Crude Explosives",
    "ruName": "Самодельная взрывчатка",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 270,
    "stack": 10,
    "dismantle": "3x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/crude_explosives.png"
  },
  {
    "id": "crumpled_plastic_bottle",
    "name": "Crumpled Plastic Bottle",
    "ruName": "Смятая пластиковая бутылка",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "4x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/crumpled_plastic_bottle.png"
  },
  {
    "id": "dam_control_tower_key",
    "name": "Dam Control Tower Key",
    "ruName": "Ключ от диспетчерской вышки у дамбы",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_control_tower_key.png"
  },
  {
    "id": "dam_controlled_access_zone_key",
    "name": "Dam Controlled Access Zone Key",
    "ruName": "Ключ от зоны ограниченного доступа на Дамбе",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_testing_annex_key.png"
  },
  {
    "id": "dam_staff_room_key",
    "name": "Dam Staff Room Key",
    "ruName": "Ключ от комнаты персонала дамбы",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_staff_room_key.png"
  },
  {
    "id": "dam_surveillance_key",
    "name": "Dam Surveillance Key",
    "ruName": "Ключ от комнаты наблюдения дамбы",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_surveillance_key.png"
  },
  {
    "id": "dam_testing_annex_key",
    "name": "Dam Testing Annex Key",
    "ruName": "Ключ от испытательной пристройки плотины",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_testing_annex_key.png"
  },
  {
    "id": "dam_utility_key",
    "name": "Dam Utility Key",
    "ruName": "Ключ от подсобных помещений дамбы",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dam_utility_key.png"
  },
  {
    "id": "damaged_arc_motion_core",
    "name": "Damaged ARC Motion Core",
    "ruName": "Поврежденное движущее ядро ARC",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 5,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_arc_motion_core.png"
  },
  {
    "id": "damaged_arc_powercell",
    "name": "Damaged ARC Powercell",
    "ruName": "Повреждённая энергоячейка ARC",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 293,
    "stack": 5,
    "dismantle": "1x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_arc_powercell.png"
  },
  {
    "id": "damaged_fireball_burner",
    "name": "Damaged Fireball Burner",
    "ruName": "Поврежденная горелка огненного шара",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_fireball_burner.png"
  },
  {
    "id": "damaged_heat_sink",
    "name": "Damaged Heat Sink",
    "ruName": "Поврежденный теплопоглотитель",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "6x Металлические детали, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "damaged_hornet_driver",
    "name": "Damaged Hornet Driver",
    "ruName": "Поврежденный драйвер Шершня",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_hornet_driver.png"
  },
  {
    "id": "damaged_rocketeer_driver",
    "name": "Damaged Rocketeer Driver",
    "ruName": "Поврежденный драйвер Ракетчика",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "3x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_rocketeer_driver.png"
  },
  {
    "id": "damaged_snitch_scanner",
    "name": "Damaged Snitch Scanner",
    "ruName": "Поврежденный сканер Snitch",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 659,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_snitch_scanner.png"
  },
  {
    "id": "damaged_tick_pod",
    "name": "Damaged Tick Pod",
    "ruName": "Поврежденная оболочка Блохи",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_tick_pod.png"
  },
  {
    "id": "damaged_wasp_driver",
    "name": "Damaged Wasp Driver",
    "ruName": "Поврежденная оболочка Осы",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Сплав ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/damaged_wasp_driver.png"
  },
  {
    "id": "dart_board",
    "name": "Dart Board",
    "ruName": "Мишень для дартса",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dart_board.png"
  },
  {
    "id": "deadline",
    "name": "Deadline",
    "ruName": "Крайний срок",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 6000,
    "stack": 1,
    "dismantle": "1x Электронная схема ARC, 1x Взрывчатое вещество",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/deadline.png"
  },
  {
    "id": "defibrillator",
    "name": "Defibrillator",
    "ruName": "Дефибриллятор",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Мох, 1x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/defibrillator.png"
  },
  {
    "id": "deflated_football",
    "name": "Deflated Football",
    "ruName": "Сдутый футбольный мяч",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "9x Ткань, 9x Резиновые детали",
    "rec": "situational",
    "quests": [
      "the_league"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/deflated_football.png"
  },
  {
    "id": "degraded_arc_rubber",
    "name": "Degraded ARC Rubber",
    "ruName": "Изношенная резина ARC",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "11x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/degraded_arc_rubber.png"
  },
  {
    "id": "diving_goggles",
    "name": "Diving Goggles",
    "ruName": "Очки для плавания",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "12x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/diving_goggles.png"
  },
  {
    "id": "dockmasters_detector",
    "name": "Dockmaster's Detector",
    "ruName": "Детектор начальника порта",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dockmasters_detector.png"
  },
  {
    "id": "dodgers_note",
    "name": "Dodger's Note",
    "ruName": "Записка Доджера",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "dog_collar",
    "name": "Dog Collar",
    "ruName": "Собачий ошейник",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Ткань, 1x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dog_collar.png"
  },
  {
    "id": "dolabra",
    "name": "Dolabra",
    "ruName": "Долабра",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 27500,
    "stack": 1,
    "dismantle": "2x Магнитный ускоритель",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dolabra.png"
  },
  {
    "id": "doodly_duck",
    "name": "Doodly Duck",
    "ruName": "Разрисованная уточка",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/doodly_duck.png"
  },
  {
    "id": "door_blocker",
    "name": "Door Blocker",
    "ruName": "Блокиратор дверей",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/door_blocker.png"
  },
  {
    "id": "dried_out_arc_resin",
    "name": "Dried-Out ARC Resin",
    "ruName": "Высохшая смола ARC",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "9x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/dried_out_arc_resin.png"
  },
  {
    "id": "duct_tape",
    "name": "Duct Tape",
    "ruName": "Скотч",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "3x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 3
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "durable_cloth",
    "name": "Durable Cloth",
    "ruName": "Прочная ткань",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "6x Ткань",
    "rec": "situational",
    "quests": [
      "ss10c"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 2
      },
      {
        "projectId": "expedition_project",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 2
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "dusty_film_reel",
    "name": "Dusty Film Reel",
    "ruName": "Пыльная катушка с пленкой",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "a_dead_end"
    ],
    "projects": [],
    "image": ""
  },
  {
    "id": "electrical_components",
    "name": "Electrical Components",
    "ruName": "Электрические компоненты",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "3x Пластиковые детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 2
      },
      {
        "projectId": "expedition_project",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 2
      }
    ]
  },
  {
    "id": "empty_wine_bottle",
    "name": "Empty Wine Bottle",
    "ruName": "Пустая бутылка из-под вина",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "energy_clip",
    "name": "Energy Clip",
    "ruName": "Энергетический зажим",
    "rarity": "Rare",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 200,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/energy_clip.png"
  },
  {
    "id": "equalizer",
    "name": "Equalizer",
    "ruName": "Уравнитель",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 27500,
    "stack": 1,
    "dismantle": "1x Сложные детали оружия, 2x Магнитный ускоритель",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/equalizer.png"
  },
  {
    "id": "espresso_machine_parts",
    "name": "Espresso Machine Parts",
    "ruName": "Детали кофемашины",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10x13"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/espresso_machine_parts.png"
  },
  {
    "id": "esr_analyzer",
    "name": "ESR Analyzer",
    "ruName": "Анализатор СОЭ",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10g"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/esr_analyzer.png"
  },
  {
    "id": "exodus_modules",
    "name": "Exodus Modules",
    "ruName": "Модули Исхода",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 2750,
    "stack": 3,
    "dismantle": "2x Магнит, 2x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 5
      },
      {
        "projectId": "expedition_project_s1",
        "phase": 3
      },
      {
        "projectId": "expedition_project",
        "phase": 3
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 3
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 3
      }
    ]
  },
  {
    "id": "experimental_seed_sample",
    "name": "Experimental Seed Sample",
    "ruName": "Экспериментальный образец семян",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10x3"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/experimental_seed_sample.png"
  },
  {
    "id": "expired_pasta",
    "name": "Expired Pasta",
    "ruName": "Просроченные макароны",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/expired_pasta.png"
  },
  {
    "id": "expired_respirator",
    "name": "Expired Respirator",
    "ruName": "Просроченный респиратор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "4x Ткань, 8x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "explosive_compound",
    "name": "Explosive Compound",
    "ruName": "Взрывчатое вещество",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "2x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/explosive_compound.png"
  },
  {
    "id": "explosive_mine",
    "name": "Explosive Mine",
    "ruName": "Взрывная мина",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1500,
    "stack": 3,
    "dismantle": "1x Масло, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/explosive_mine.png"
  },
  {
    "id": "extended_barrel",
    "name": "Extended Barrel",
    "ruName": "Удлиненный ствол",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_barrel.png"
  },
  {
    "id": "extended_light_mag_i",
    "name": "Extended Light Mag I",
    "ruName": "Увеличенный магазин для легкого оружия I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_light_mag_i.png"
  },
  {
    "id": "extended_light_mag_ii",
    "name": "Extended Light Mag II",
    "ruName": "Увеличенный магазин для легкого оружия II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_light_mag_ii.png"
  },
  {
    "id": "extended_light_mag_iii",
    "name": "Extended Light Mag III",
    "ruName": "Увеличенный магазин для легкого оружия III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_light_mag_iii.png"
  },
  {
    "id": "extended_medium_mag_i",
    "name": "Extended Medium Mag I",
    "ruName": "Увеличенный магазин для оружия среднего калибра I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_medium_mag_i.png"
  },
  {
    "id": "extended_medium_mag_ii",
    "name": "Extended Medium Mag II",
    "ruName": "Увеличенный магазин для оружия среднего калибра II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_medium_mag_ii.png"
  },
  {
    "id": "extended_medium_mag_iii",
    "name": "Extended Medium Mag III",
    "ruName": "Увеличенный магазин для оружия среднего калибра III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_medium_mag_iii.png"
  },
  {
    "id": "extended_shotgun_mag_i",
    "name": "Extended Shotgun Mag I",
    "ruName": "Увеличенный магазин дробовика II",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_shotgun_mag_i.png"
  },
  {
    "id": "extended_shotgun_mag_ii",
    "name": "Extended Shotgun Mag II",
    "ruName": "Увеличенный магазин дробовика II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_shotgun_mag_ii.png"
  },
  {
    "id": "extended_shotgun_mag_iii",
    "name": "Extended Shotgun Mag III",
    "ruName": "Расширенный магазин для дробовика III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/extended_shotgun_mag_iii.png"
  },
  {
    "id": "fabric",
    "name": "Fabric",
    "ruName": "Ткань",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 50,
    "stack": 50,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/fabric.png"
  },
  {
    "id": "faded_photograph",
    "name": "Faded Photograph",
    "ruName": "Выцветшая фотография",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 640,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/faded_photograph.png"
  },
  {
    "id": "familiar_duck",
    "name": "Familiar Duck",
    "ruName": "Знакомая уточка",
    "rarity": "Epic",
    "type": "Ценности",
    "usedFor": "",
    "value": 7000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/familiar_duck.png"
  },
  {
    "id": "ferro_i",
    "name": "Ferro I",
    "ruName": "Ферро I",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 475,
    "stack": 1,
    "dismantle": "2x Металлические детали, 1x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ferro.png"
  },
  {
    "id": "ferro_ii",
    "name": "Ferro II",
    "ruName": "Ферро II",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "4x Металлические детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ferro.png"
  },
  {
    "id": "ferro_iii",
    "name": "Ferro III",
    "ruName": "Ферро III",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "6x Металлические детали, 1x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ferro.png"
  },
  {
    "id": "ferro_iv",
    "name": "Ferro IV",
    "ruName": "Ферро IV",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2900,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ferro.png"
  },
  {
    "id": "fertilizer",
    "name": "Fertilizer",
    "ruName": "Удобрение",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "2x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "film_reel",
    "name": "Film Reel",
    "ruName": "Кинопленка",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "fine_wristwatch",
    "name": "Fine Wristwatch",
    "ruName": "Изысканные наручные часы",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "fireball_burner",
    "name": "Fireball Burner",
    "ruName": "Горелка Огнешара",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [
      "test_case"
    ],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "firecracker",
    "name": "Firecracker",
    "ruName": "Петарда",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 5,
    "dismantle": "3x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/firecracker.png"
  },
  {
    "id": "firefly_burner",
    "name": "Firefly Burner",
    "ruName": "Горелка «Светлячок»",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Сплав ARC, 2x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [
      "test_case"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 3
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "fireworks_box",
    "name": "Fireworks Box",
    "ruName": "Коробка фейерверков",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Взрывчатое вещество",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/fireworks_box.png"
  },
  {
    "id": "first_wave_compass",
    "name": "First Wave Compass",
    "ruName": "Компас Первой Волны",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10h"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/first_wave_compass.png"
  },
  {
    "id": "first_wave_rations",
    "name": "First Wave Rations",
    "ruName": "Пайки Первой Волны",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10h"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/first_wave_rations.png"
  },
  {
    "id": "first_wave_tape",
    "name": "First Wave Tape",
    "ruName": "Кассета Первой Волны",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10h"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/first_wave_tape.png"
  },
  {
    "id": "flame_spray",
    "name": "Flame Spray",
    "ruName": "Пламенный балончик",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Канистра, 1x Горелка Огнешара",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/flame_spray.png"
  },
  {
    "id": "flashy_duck",
    "name": "Flashy Duck",
    "ruName": "Яркая уточка",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/flashy_duck.png"
  },
  {
    "id": "flow_controller",
    "name": "Flow Controller",
    "ruName": "Регулятор Потока",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 1x Датчики",
    "rec": "situational",
    "quests": [
      "12_snap_and_salvage"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/flow_controller.png"
  },
  {
    "id": "flushing_terminal_key",
    "name": "Flushing Terminal Key",
    "ruName": "Ключ от терминала Flushing",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/flushing_terminal_key.png"
  },
  {
    "id": "fossilized_lightning",
    "name": "Fossilized Lightning",
    "ruName": "Окаменевшая молния",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 4000,
    "stack": 1,
    "dismantle": "3x Взрывчатое вещество",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/fossilized_lightning.png"
  },
  {
    "id": "free_loadout_augment",
    "name": "Free Loadout Augment",
    "ruName": "Бесплатное улучшение снаряжения",
    "rarity": "Common",
    "type": "Аугментации",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "6x Пластиковые детали, 6x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/free_loadout_augment.png"
  },
  {
    "id": "frequency_modulation_box",
    "name": "Frequency Modulation Box",
    "ruName": "Коробка частотной модуляции",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "fried_motherboard",
    "name": "Fried Motherboard",
    "ruName": "Сгоревшая материнская плата",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Электрические компоненты, 5x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/fried_motherboard.png"
  },
  {
    "id": "fruit_mix",
    "name": "Fruit Mix",
    "ruName": "Фруктовый микс",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1800,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/fruit_mix.png"
  },
  {
    "id": "frying_pan",
    "name": "Frying Pan",
    "ruName": "Сковорода",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "garlic_press",
    "name": "Garlic Press",
    "ruName": "Пресс для чеснока",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "12x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/garlic_press.png"
  },
  {
    "id": "gas_grenade",
    "name": "Gas Grenade",
    "ruName": "Газовая граната",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Химикаты, 1x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/gas_grenade.png"
  },
  {
    "id": "gas_grenade_trap",
    "name": "Gas Grenade Trap",
    "ruName": "Лазерная ловушка: Газ",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 300,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/gas_grenade_trap.png"
  },
  {
    "id": "gas_mine",
    "name": "Gas Mine",
    "ruName": "Газовая мина",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Химикаты, 1x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/gas_mine.png"
  },
  {
    "id": "geiger_counter",
    "name": "Geiger Counter",
    "ruName": "Счётчик Гейгера",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3500,
    "stack": 3,
    "dismantle": "3x Батарея, 1x Модули Исхода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "gentle_duck",
    "name": "Gentle Duck",
    "ruName": "Нежная уточка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/gentle_duck.png"
  },
  {
    "id": "great_mullein",
    "name": "Great Mullein",
    "ruName": "Коровяк",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "2x Различные семена",
    "rec": "situational",
    "quests": [
      "ss10c"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/great_mullein.png"
  },
  {
    "id": "green_light_stick",
    "name": "Green Light Stick",
    "ruName": "Зеленый химический фонарь",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 150,
    "stack": 5,
    "dismantle": "1x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/green_light_stick.png"
  },
  {
    "id": "hairpin_i",
    "name": "Hairpin I",
    "ruName": "Заколка I",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 450,
    "stack": 1,
    "dismantle": "2x Металлические детали, 1x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hairpin_i.png"
  },
  {
    "id": "hairpin_ii",
    "name": "Hairpin II",
    "ruName": "Заколка II",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "4x Металлические детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hairpin_i.png"
  },
  {
    "id": "hairpin_iii",
    "name": "Hairpin III",
    "ruName": "Заколка III",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "6x Металлические детали, 1x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hairpin_i.png"
  },
  {
    "id": "hairpin_iv",
    "name": "Hairpin IV",
    "ruName": "Заколка IV",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2900,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hairpin_i.png"
  },
  {
    "id": "headphones",
    "name": "Headphones",
    "ruName": "Наушники",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "7x Резиновые детали, 1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/headphones.png"
  },
  {
    "id": "heavy_ammo",
    "name": "Heavy Ammo",
    "ruName": "Тяжелый патрон",
    "rarity": "Common",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 12,
    "stack": 60,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/heavy_ammo.png"
  },
  {
    "id": "heavy_fuze_grenade",
    "name": "Heavy Fuze Grenade",
    "ruName": "Тяжелая граната с детонатором",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1600,
    "stack": 3,
    "dismantle": "1x Масло, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/heavy_fuze_grenade.png"
  },
  {
    "id": "heavy_gun_parts",
    "name": "Heavy Gun Parts",
    "ruName": "Детали для тяжелого оружия",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 700,
    "stack": 5,
    "dismantle": "2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/heavy_gun_parts.png"
  },
  {
    "id": "heavy_shield",
    "name": "Heavy Shield",
    "ruName": "Тяжелый щит",
    "rarity": "Epic",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 5500,
    "stack": 1,
    "dismantle": "2x Электронная схема ARC, 1x Преобразователь напряжения",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/heavy_shield.png"
  },
  {
    "id": "herbal_bandage",
    "name": "Herbal Bandage",
    "ruName": "Травяной бинт",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 900,
    "stack": 5,
    "dismantle": "2x Различные семена, 5x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/herbal_bandage.png"
  },
  {
    "id": "horizontal_grip",
    "name": "Horizontal Grip",
    "ruName": "Горизонтальная Рукоятка",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "2x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/horizontal_grip.png"
  },
  {
    "id": "hornet_driver",
    "name": "Hornet Driver",
    "ruName": "Драйвер Шершня",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Электрические компоненты",
    "rec": "situational",
    "quests": [
      "ss9",
      "test_case"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "household_cleaner",
    "name": "Household Cleaner",
    "ruName": "Чистящее средство",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "11x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/household_cleaner.png"
  },
  {
    "id": "hullcracker_i",
    "name": "Hullcracker I",
    "ruName": "Взломщик корпусов I",
    "rarity": "Epic",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hullcracker.png"
  },
  {
    "id": "hullcracker_ii",
    "name": "Hullcracker II",
    "ruName": "Взломщик корпусов II",
    "rarity": "Epic",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hullcracker.png"
  },
  {
    "id": "hullcracker_iii",
    "name": "Hullcracker III",
    "ruName": "Взломщик корпусов III",
    "rarity": "Epic",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 4x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hullcracker.png"
  },
  {
    "id": "hullcracker_iv",
    "name": "Hullcracker IV",
    "ruName": "Взломщик корпусов IV",
    "rarity": "Epic",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 22000,
    "stack": 1,
    "dismantle": "4x Продвинутые механические компоненты, 5x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/hullcracker.png"
  },
  {
    "id": "humidifier",
    "name": "Humidifier",
    "ruName": "Увлажнитель",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Канистра, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 4
      }
    ]
  },
  {
    "id": "ice_cream_scooper",
    "name": "Ice Cream Scooper",
    "ruName": "Ложка для мороженого",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "7x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ice_cream_scooper.png"
  },
  {
    "id": "il_toro_i",
    "name": "Il Toro I",
    "ruName": "Эль-Торо I",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/il_toro.png"
  },
  {
    "id": "il_toro_ii",
    "name": "Il Toro II",
    "ruName": "Эль-Торо II",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "3x Механические компоненты, 3x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/il_toro.png"
  },
  {
    "id": "il_toro_iii",
    "name": "Il Toro III",
    "ruName": "Эль-Торо III",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "4x Механические компоненты, 4x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/il_toro.png"
  },
  {
    "id": "il_toro_iv",
    "name": "Il Toro IV",
    "ruName": "Эль-Торо IV",
    "rarity": "Uncommon",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "5x Механические компоненты, 5x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/il_toro.png"
  },
  {
    "id": "impure_arc_coolant",
    "name": "Impure ARC Coolant",
    "ruName": "Загрязненное охлаждающее вещество ARC",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "12x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/impure_arc_coolant.png"
  },
  {
    "id": "industrial_battery",
    "name": "Industrial Battery",
    "ruName": "Промышленная батарея",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Батарея, 7x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "industrial_charger",
    "name": "Industrial Charger",
    "ruName": "Промышленное зарядное устройство",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "5x Металлические детали, 1x Преобразователь напряжения",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s3",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 2
      }
    ]
  },
  {
    "id": "industrial_magnet",
    "name": "Industrial Magnet",
    "ruName": "Промышленный магнит",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Магнит, 4x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/industrial_magnet.png"
  },
  {
    "id": "ion_sputter",
    "name": "Ion Sputter",
    "ruName": "Ионный распылитель",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 6000,
    "stack": 3,
    "dismantle": "1x Модули Исхода, 4x Преобразователь напряжения",
    "rec": "situational",
    "quests": [
      "with_a_view"
    ],
    "projects": [
      {
        "projectId": "expedition_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "jolt_mine",
    "name": "Jolt Mine",
    "ruName": "Электрическая мина",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 850,
    "stack": 3,
    "dismantle": "1x Батарея, 2x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/jolt_mine.png"
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "ruName": "Юпитер",
    "rarity": "Legendary",
    "type": "Оружие",
    "usedFor": "",
    "value": 27500,
    "stack": 1,
    "dismantle": "1x Сложные детали оружия, 2x Магнитный ускоритель",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/jupiter.png"
  },
  {
    "id": "kettle_i",
    "name": "Kettle I",
    "ruName": "Чайник I",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 840,
    "stack": 1,
    "dismantle": "3x Металлические детали, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/kettle.png"
  },
  {
    "id": "kettle_ii",
    "name": "Kettle II",
    "ruName": "Чайник II",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "6x Металлические детали, 6x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/kettle.png"
  },
  {
    "id": "kettle_iii",
    "name": "Kettle III",
    "ruName": "Чайник III",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 3000,
    "stack": 1,
    "dismantle": "12x Металлические детали, 1x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/kettle.png"
  },
  {
    "id": "kettle_iv",
    "name": "Kettle IV",
    "ruName": "Чайник IV",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/kettle.png"
  },
  {
    "id": "kinetic_converter",
    "name": "Kinetic Converter",
    "ruName": "Кинетический преобразователь",
    "rarity": "Legendary",
    "type": "Модификации",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "2x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/kinetic_converter.png"
  },
  {
    "id": "laboratory_reagents",
    "name": "Laboratory Reagents",
    "ruName": "Лабораторные реагенты",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "16x Химикаты, 3x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/laboratory_reagents.png"
  },
  {
    "id": "lances_mixtape_5th_edition",
    "name": "Lance's Mixtape (5th Edition)",
    "ruName": "Микстейп Лэнса (5-е издание)",
    "rarity": "Epic",
    "type": "Ценности",
    "usedFor": "",
    "value": 10000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lances_mixtape_5th_edition.png"
  },
  {
    "id": "launcher_ammo",
    "name": "Launcher Ammo",
    "ruName": "Патрон для ракетницы",
    "rarity": "Rare",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 250,
    "stack": 24,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/launcher_ammo.png"
  },
  {
    "id": "leaper_pulse_unit",
    "name": "Leaper Pulse Unit",
    "ruName": "Импульсный блок Прыгуна",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 3x Сплав ARC",
    "rec": "situational",
    "quests": [
      "ss10x5"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 3
      },
      {
        "projectId": "expedition_project_s1",
        "phase": 4
      },
      {
        "projectId": "expedition_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "lemon",
    "name": "Lemon",
    "ruName": "Лимон",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "3x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lemon.png"
  },
  {
    "id": "leviathans_crown_ship_model",
    "name": "\"Leviathan's Crown\" Ship Model",
    "ruName": "Модель корабля «Leviathan's Crown»",
    "rarity": "Legendary",
    "type": "Ценности",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "library_book",
    "name": "Book",
    "ruName": "Книга",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "lidar_scanner",
    "name": "Lidar Scanner",
    "ruName": "Лидарный сканер",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10k"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lidar_scanner.png"
  },
  {
    "id": "light_ammo",
    "name": "Light Ammo",
    "ruName": "Легкий патрон",
    "rarity": "Common",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 4,
    "stack": 100,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/light_ammo.png"
  },
  {
    "id": "light_bulb",
    "name": "Light Bulb",
    "ruName": "Лампочка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 3
      },
      {
        "projectId": "expedition_project",
        "phase": 3
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "light_gun_parts",
    "name": "Light Gun Parts",
    "ruName": "Детали для легкого оружия",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 700,
    "stack": 5,
    "dismantle": "2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/light_gun_parts.png"
  },
  {
    "id": "light_impact_grenade",
    "name": "Light Impact Grenade",
    "ruName": "Легкая граната",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 5,
    "dismantle": "1x Химикаты, 1x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/light_impact_grenade.png"
  },
  {
    "id": "light_shield",
    "name": "Light Shield",
    "ruName": "Легкий щит",
    "rarity": "Uncommon",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "4x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/light_shield.png"
  },
  {
    "id": "lightweight_stock",
    "name": "Lightweight Stock",
    "ruName": "Облегченный приклад",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lightweight_stock.png"
  },
  {
    "id": "lil_smoke_grenade",
    "name": "Li'l Smoke Grenade",
    "ruName": "Маленькая дымовая граната",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 300,
    "stack": 5,
    "dismantle": "1x Химикаты, 1x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lil_smoke_grenade.png"
  },
  {
    "id": "looting_mk1",
    "name": "Looting Mk. 1",
    "ruName": "Добыча 1",
    "rarity": "Uncommon",
    "type": "Аугментации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "3x Пластиковые детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/looting_mk1.png"
  },
  {
    "id": "looting_mk2",
    "name": "Looting Mk. 2",
    "ruName": "Добыча 2",
    "rarity": "Rare",
    "type": "Аугментации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Электрические компоненты, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/looting_mk2.png"
  },
  {
    "id": "looting_mk3_cautious",
    "name": "Looting Mk. 3 (Cautious)",
    "ruName": "Мародёрство Mk. 3 (Осторожное)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/looting_mk3_cautious.png"
  },
  {
    "id": "looting_mk3_safekeeper",
    "name": "Looting Mk. 3 (Safekeeper)",
    "ruName": "Мародёрство Mk. 3 (Хранитель)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/looting_mk3_safekeeper.png"
  },
  {
    "id": "looting_mk3_survivor",
    "name": "Looting Mk. 3 (Survivor)",
    "ruName": "Добыча 3 (Выживший)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/looting_mk3_survivor.png"
  },
  {
    "id": "lure_grenade",
    "name": "Lure Grenade",
    "ruName": "Граната-приманка",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lure_grenade.png"
  },
  {
    "id": "lure_grenade_trap",
    "name": "Lure Grenade Trap",
    "ruName": "Лазерная ловушка: Приманка",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/lure_grenade_trap.png"
  },
  {
    "id": "magnet",
    "name": "Magnet",
    "ruName": "Магнит",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/magnet.png"
  },
  {
    "id": "magnetic_accelerator",
    "name": "Magnetic Accelerator",
    "ruName": "Магнитный ускоритель",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 5500,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 1x Движущее ядро ARC",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 4
      },
      {
        "projectId": "expedition_project_s1",
        "phase": 4
      }
    ]
  },
  {
    "id": "magnetron",
    "name": "Magnetron",
    "ruName": "Магнетрон",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 6000,
    "stack": 3,
    "dismantle": "1x Магнитный ускоритель, 1x Стальная пружина",
    "rec": "situational",
    "quests": [
      "12_snap_and_salvage"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/magnetron.png"
  },
  {
    "id": "major_aivas_mementos",
    "name": "Major Aiva's Mementos",
    "ruName": "Памятные вещи майора Айвы",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/major_aivas_mementos.png"
  },
  {
    "id": "major_aivas_patch",
    "name": "Major Aiva's Patch",
    "ruName": "Нашивка майора Айвы",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10p"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/major_aivas_patch.png"
  },
  {
    "id": "matriarch_reactor",
    "name": "Matriarch Reactor",
    "ruName": "Реактор Матриарха",
    "rarity": "Legendary",
    "type": "Ценности",
    "usedFor": "",
    "value": 11000,
    "stack": 1,
    "dismantle": "1x Магнитный ускоритель, 1x Энергетический стержень",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "mechanical_components",
    "name": "Mechanical Components",
    "ruName": "Механические компоненты",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "3x Металлические детали, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/mechanical_components.png"
  },
  {
    "id": "medium_ammo",
    "name": "Medium Ammo",
    "ruName": "Патрон среднего калибра",
    "rarity": "Common",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 6,
    "stack": 80,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/medium_ammo.png"
  },
  {
    "id": "medium_gun_parts",
    "name": "Medium Gun Parts",
    "ruName": "Детали для оружия среднего калибра",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 700,
    "stack": 5,
    "dismantle": "2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/medium_gun_parts.png"
  },
  {
    "id": "medium_shield",
    "name": "Medium Shield",
    "ruName": "Средний щит",
    "rarity": "Rare",
    "type": "Гаджеты",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Электронная схема ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/medium_shield.png"
  },
  {
    "id": "metal_brackets",
    "name": "Metal Brackets",
    "ruName": "Металлические скобы",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/metal_brackets.png"
  },
  {
    "id": "metal_parts",
    "name": "Metal Parts",
    "ruName": "Металлические детали",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 75,
    "stack": 50,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 1
      },
      {
        "projectId": "expedition_project",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "microscope",
    "name": "Microscope",
    "ruName": "Микроскоп",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 3x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/microscope.png"
  },
  {
    "id": "mini_centrifuge",
    "name": "Mini Centrifuge",
    "ruName": "Мини-центрифуга",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые механические компоненты, 2x Канистра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/mini_centrifuge.png"
  },
  {
    "id": "mod_components",
    "name": "Mod Components",
    "ruName": "Компоненты для модификаций",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 1750,
    "stack": 5,
    "dismantle": "1x Механические компоненты, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/mod_components.png"
  },
  {
    "id": "moisture_meter",
    "name": "Moisture Meter",
    "ruName": "Измеритель влажности",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10q"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/moisture_meter.png"
  },
  {
    "id": "moss",
    "name": "Moss",
    "ruName": "Мох",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 10,
    "dismantle": "3x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "motor",
    "name": "Motor",
    "ruName": "Мотор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Механические компоненты, 2x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/motor.png"
  },
  {
    "id": "mushroom",
    "name": "Mushroom",
    "ruName": "Гриб",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 1000,
    "stack": 10,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "music_album",
    "name": "Music Album",
    "ruName": "Музыкальный альбом",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "music_box",
    "name": "Music Box",
    "ruName": "Музыкальная шкатулка",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 5000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/music_box.png"
  },
  {
    "id": "muzzle_brake_i",
    "name": "Muzzle Brake I",
    "ruName": "Дульный тормоз I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "5x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/muzzle_brake_i.png"
  },
  {
    "id": "muzzle_brake_ii",
    "name": "Muzzle Brake II",
    "ruName": "Дульный тормоз II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/muzzle_brake_ii.png"
  },
  {
    "id": "muzzle_brake_iii",
    "name": "Muzzle Brake III",
    "ruName": "Дульный тормоз III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/muzzle_brake_iii.png"
  },
  {
    "id": "noisemaker",
    "name": "Noisemaker",
    "ruName": "Шумелка",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/noisemaker.png"
  },
  {
    "id": "number_plate",
    "name": "Number Plate",
    "ruName": "Номерной знак",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "3x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/number_plate.png"
  },
  {
    "id": "nutrient_meter",
    "name": "Nutrient Meter",
    "ruName": "Измеритель питательных веществ",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10q"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/nutrient_meter.png"
  },
  {
    "id": "official_shutdown_documentation",
    "name": "Official Shutdown Documentation",
    "ruName": "Официальная документация о прекращении работы",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "oil",
    "name": "Oil",
    "ruName": "Масло",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "3x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s4",
        "phase": 2
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "old_world_books",
    "name": "Old World Books",
    "ruName": "Книги Старого мира",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "12_cold_storage"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/old_world_books.png"
  },
  {
    "id": "olives",
    "name": "Olives",
    "ruName": "Оливки",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "2x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/olives.png"
  },
  {
    "id": "osprey_i",
    "name": "Osprey I",
    "ruName": "Ястреб I",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/osprey.png"
  },
  {
    "id": "osprey_ii",
    "name": "Osprey II",
    "ruName": "Ястреб II",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/osprey.png"
  },
  {
    "id": "osprey_iii",
    "name": "Osprey III",
    "ruName": "Ястреб III",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/osprey.png"
  },
  {
    "id": "osprey_iv",
    "name": "Osprey IV",
    "ruName": "Ястреб IV",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/osprey.png"
  },
  {
    "id": "padded_stock",
    "name": "Padded Stock",
    "ruName": "Мягкий приклад",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/padded_stock.png"
  },
  {
    "id": "painted_box",
    "name": "Painted Box",
    "ruName": "Расписная коробка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/painted_box.png"
  },
  {
    "id": "patrol_car_key",
    "name": "Patrol Car Key",
    "ruName": "Ключ от патрульной машины",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/patrol_car_key.png"
  },
  {
    "id": "photoelectric_cloak",
    "name": "Photoelectric Cloak",
    "ruName": "Фотоэлектрический плащ",
    "rarity": "Epic",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/photoelectric_cloak.png"
  },
  {
    "id": "pilgrims_peak_security_code",
    "name": "Pilgrim's Peak Security Code",
    "ruName": "Код безопасности Пилгримс Пик",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/security_code.png"
  },
  {
    "id": "plastic_parts",
    "name": "Plastic Parts",
    "ruName": "Пластиковые детали",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 60,
    "stack": 50,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project",
        "phase": 1
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "playing_cards",
    "name": "Playing Cards",
    "ruName": "Игральные карты",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 5000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/playing_cards.png"
  },
  {
    "id": "polluted_air_filter",
    "name": "Polluted Air Filter",
    "ruName": "Загрязненный воздушный фильтр",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "6x Ткань, 2x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/polluted_air_filter.png"
  },
  {
    "id": "pop_trigger",
    "name": "Pop Trigger",
    "ruName": "Поп-триггер",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 1
      }
    ]
  },
  {
    "id": "portable_tv",
    "name": "Portable TV",
    "ruName": "Портативный телевизор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "2x Батарея, 6x Провода",
    "rec": "situational",
    "quests": [
      "movie_night"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s4",
        "phase": 4
      }
    ]
  },
  {
    "id": "possibly_toxic_plant",
    "name": "Possibly Toxic Plant",
    "ruName": "Возможно ядовитое растение",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/possibly_toxic_plant.png"
  },
  {
    "id": "poster_of_natural_wonders",
    "name": "Poster of Natural Wonders",
    "ruName": "Плакат Чудеса природы",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/poster_of_natural_wonders.png"
  },
  {
    "id": "pottery",
    "name": "Pottery",
    "ruName": "Глиняная посуда",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/pottery.png"
  },
  {
    "id": "power_bank",
    "name": "Power Bank",
    "ruName": "Портативный аккумулятор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "2x Батарея, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/power_bank.png"
  },
  {
    "id": "power_cable",
    "name": "Power Cable",
    "ruName": "Кабель питания",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "4x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/power_cable.png"
  },
  {
    "id": "power_rod",
    "name": "Power Rod",
    "ruName": "Энергетический стержень",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 5000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Электронная схема ARC",
    "rec": "situational",
    "quests": [
      "ss10x15"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/power_rod.png"
  },
  {
    "id": "powered_descender",
    "name": "Powered Descender",
    "ruName": "Моторизованный спусковой механизм",
    "rarity": "Epic",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 2x Электронная схема ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/powered_descender.png"
  },
  {
    "id": "precision_gimbal",
    "name": "Precision Gimbal",
    "ruName": "Прецизионный подвес",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "prickly_pear",
    "name": "Prickly Pear",
    "ruName": "Опунция",
    "rarity": "Common",
    "type": "Растения",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "3x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/prickly_pear.png"
  },
  {
    "id": "processor",
    "name": "Processor",
    "ruName": "Процессор",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "1x Пластиковые детали, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/processor.png"
  },
  {
    "id": "projector",
    "name": "Projector",
    "ruName": "Проектор",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Процессор, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/projector.png"
  },
  {
    "id": "pulse_mine",
    "name": "Pulse Mine",
    "ruName": "Импульсная мина",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 470,
    "stack": 3,
    "dismantle": "6x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/pulse_mine.png"
  },
  {
    "id": "queen_reactor",
    "name": "Queen Reactor",
    "ruName": "Реактор королевы",
    "rarity": "Legendary",
    "type": "Ценности",
    "usedFor": "",
    "value": 11000,
    "stack": 1,
    "dismantle": "1x Магнитный ускоритель, 1x Энергетический стержень",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "radio",
    "name": "Radio",
    "ruName": "Радио",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Датчики, 1x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/radio.png"
  },
  {
    "id": "radio_relay",
    "name": "Radio Relay",
    "ruName": "Радиорелейная станция",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "2x Датчики, 2x Компонент динамика",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/radio_relay.png"
  },
  {
    "id": "raider_hatch_key",
    "name": "Raider Hatch Key",
    "ruName": "Ключ от рейдерского люка",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/raider_hatch_key.png"
  },
  {
    "id": "raiders_refuge_security_code",
    "name": "Raider's Refuge Security Code",
    "ruName": "Код безопасности Убежища Рейдеров",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/security_code.png"
  },
  {
    "id": "rattler_i",
    "name": "Rattler I",
    "ruName": "Трещетка I",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 1750,
    "stack": 1,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rattler.png"
  },
  {
    "id": "rattler_ii",
    "name": "Rattler II",
    "ruName": "Трещетка II",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 3000,
    "stack": 1,
    "dismantle": "12x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rattler.png"
  },
  {
    "id": "rattler_iii",
    "name": "Rattler III",
    "ruName": "Трещетка III",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "3x Механические компоненты, 1x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rattler.png"
  },
  {
    "id": "rattler_iv",
    "name": "Rattler IV",
    "ruName": "Трещетка IV",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "4x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rattler.png"
  },
  {
    "id": "recorder",
    "name": "Recorder",
    "ruName": "Флейта",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "10x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/recorder.png"
  },
  {
    "id": "red_coral_jewelry",
    "name": "Red Coral Jewelry",
    "ruName": "Украшение из красного коралла",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 5000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "red_light_stick",
    "name": "Red Light Stick",
    "ruName": "Красный химический фонарь",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 150,
    "stack": 5,
    "dismantle": "1x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/red_light_stick.png"
  },
  {
    "id": "reinforced_reception_security_code",
    "name": "Reinforced Reception Security Code",
    "ruName": "Код безопасности Усиленной Приёмной",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/security_code.png"
  },
  {
    "id": "remote_control",
    "name": "Remote Control",
    "ruName": "Пульт дистанционного управления",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "7x Пластиковые детали, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/remote_control.png"
  },
  {
    "id": "remote_raider_flare",
    "name": "Remote Raider Flare",
    "ruName": "Устройство дистанционного пуска рейдерской ракеты",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 270,
    "stack": 3,
    "dismantle": "1x Химикаты, 1x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/remote_raider_flare.png"
  },
  {
    "id": "renegade_i",
    "name": "Renegade I",
    "ruName": "Ренегат I",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/renegade.png"
  },
  {
    "id": "renegade_ii",
    "name": "Renegade II",
    "ruName": "Ренегат II",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/renegade.png"
  },
  {
    "id": "renegade_iii",
    "name": "Renegade III",
    "ruName": "Ренегат III",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/renegade.png"
  },
  {
    "id": "renegade_iv",
    "name": "Renegade IV",
    "ruName": "Ренегат IV",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/renegade.png"
  },
  {
    "id": "resin",
    "name": "Resin",
    "ruName": "Смола",
    "rarity": "Common",
    "type": "Растения",
    "usedFor": "",
    "value": 1000,
    "stack": 10,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/resin.png"
  },
  {
    "id": "ripped_safety_vest",
    "name": "Ripped Safety Vest",
    "ruName": "Рваный сигнальный жилет",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Прочная ткань, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ripped_safety_vest.png"
  },
  {
    "id": "riven_tides_classifed_records_keycard",
    "name": "Riven Tides Classifed Records Keycard",
    "ruName": "Карта-ключ к секретным архивам Riven Tides",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tides_classified_records_keycard.png"
  },
  {
    "id": "riven_tides_crane_house_keycard",
    "name": "Riven Tides Crane House Keycard",
    "ruName": "Карта-ключ к крановому домику Riven Tides",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tides_crane_house_keycard.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_102",
    "name": "Riven Tides Hotel Keycard No. 102",
    "ruName": "Карта-ключ отеля Riven Tides № 102",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_107",
    "name": "Riven Tides Hotel Keycard No. 107",
    "ruName": "Карта-ключ отеля Riven Tides № 107",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_113",
    "name": "Riven Tides Hotel Keycard No. 113",
    "ruName": "Карта-ключ отеля Riven Tides № 113",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_205",
    "name": "Riven Tides Hotel Keycard No. 205",
    "ruName": "Карта-ключ отеля Riven Tides № 205",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_208",
    "name": "Riven Tides Hotel Keycard No. 208",
    "ruName": "Карта-ключ отеля Riven Tides № 208",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_311",
    "name": "Riven Tides Hotel Keycard No. 311",
    "ruName": "Карта-ключ отеля Riven Tides № 311",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_hotel_keycard_no_404",
    "name": "Riven Tides Hotel Keycard No. 404",
    "ruName": "Карта-ключ отеля Riven Tides № 404",
    "rarity": "Common",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tide_keycard_generic.png"
  },
  {
    "id": "riven_tides_secure_storage_keycard",
    "name": "Riven Tides Secure Storage Keycard",
    "ruName": "Карта-ключ к охраняемому складу Riven Tides",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/riven_tides_secure_storage_keycard.png"
  },
  {
    "id": "rocket_thruster",
    "name": "Rocket Thruster",
    "ruName": "Ракетный двигатель",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "6x Металлические детали, 2x Синтезированное топливо",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rocket_thruster.png"
  },
  {
    "id": "rocketeer_driver",
    "name": "Rocketeer Driver",
    "ruName": "Драйвер Ракетчика",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 3x Сплав ARC",
    "rec": "situational",
    "quests": [
      "ss10v"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "roots",
    "name": "Roots",
    "ruName": "Корни",
    "rarity": "Uncommon",
    "type": "Растения",
    "usedFor": "",
    "value": 640,
    "stack": 10,
    "dismantle": "1x Различные семена",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "rope",
    "name": "Rope",
    "ruName": "Веревка",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "5x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rope.png"
  },
  {
    "id": "rosary",
    "name": "Rosary",
    "ruName": "Чётки",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rosary.png"
  },
  {
    "id": "rotary_encoder",
    "name": "Rotary Encoder",
    "ruName": "Поворотный энкодер",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "2x Электрические компоненты, 2x Процессор",
    "rec": "situational",
    "quests": [
      "with_a_view"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rotary_encoder.png"
  },
  {
    "id": "rubber_duck",
    "name": "Rubber Duck",
    "ruName": "Резиновая уточка",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rubber_duck.png"
  },
  {
    "id": "rubber_pad",
    "name": "Rubber Pad",
    "ruName": "Резиновый коврик",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "18x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rubber_pad.png"
  },
  {
    "id": "rubber_parts",
    "name": "Rubber Parts",
    "ruName": "Резиновые детали",
    "rarity": "Common",
    "type": "Материалы",
    "usedFor": "",
    "value": 50,
    "stack": 50,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 1
      }
    ]
  },
  {
    "id": "ruined_accordion",
    "name": "Ruined Accordion",
    "ruName": "Сломанный аккордеон",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "18x Резиновые детали, 3x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_accordion.png"
  },
  {
    "id": "ruined_augment",
    "name": "Ruined Augment",
    "ruName": "Испорченный аугмент",
    "rarity": "Common",
    "type": "Мусор",
    "usedFor": "",
    "value": 270,
    "stack": 1,
    "dismantle": "2x Пластиковые детали, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_augment.png"
  },
  {
    "id": "ruined_baton",
    "name": "Ruined Baton",
    "ruName": "Сломанная дубинка",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "6x Металлические детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_baton.png"
  },
  {
    "id": "ruined_handcuffs",
    "name": "Ruined Handcuffs",
    "ruName": "Сломанные наручники",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_handcuffs.png"
  },
  {
    "id": "ruined_parachute",
    "name": "Ruined Parachute",
    "ruName": "Испорченный парашют",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "10x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_parachute.png"
  },
  {
    "id": "ruined_riot_shield",
    "name": "Ruined Riot Shield",
    "ruName": "Разрушенный щит",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "10x Пластиковые детали, 6x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_riot_shield.png"
  },
  {
    "id": "ruined_tactical_vest",
    "name": "Ruined Tactical Vest",
    "ruName": "Испорченный тактический жилет",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "5x Ткань, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/ruined_tactical_vest.png"
  },
  {
    "id": "rusted_bolts",
    "name": "Rusted Bolts",
    "ruName": "Ржавые болты",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "rusted_gear",
    "name": "Rusted Gear",
    "ruName": "Ржавая шестиренка",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Механические компоненты, 4x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rusted_gear.png"
  },
  {
    "id": "rusted_shut_medical_kit",
    "name": "Rusted Shut Medical Kit",
    "ruName": "Аптечка со ржавым замком",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "1x Антисептик, 2x Шприц",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rusted_shut_medical_kit.png"
  },
  {
    "id": "rusted_tools",
    "name": "Rusted Tools",
    "ruName": "Ржавые инструменты",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "8x Металлические детали, 1x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "rusty_arc_steel",
    "name": "Rusty ARC Steel",
    "ruName": "Ржавая сталь ARC",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "8x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/rusty_arc_steel.png"
  },
  {
    "id": "sample_cleaner",
    "name": "Sample Cleaner",
    "ruName": "Очиститель образцов",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "14x Различные семена, 2x Электрические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/sample_cleaner.png"
  },
  {
    "id": "scout_patrol_note",
    "name": "Scout Patrol Note",
    "ruName": "Записка разведывательного патруля",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "secret_meeting_info",
    "name": "Secret Meeting Info",
    "ruName": "Информация о секретной встрече",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "seeker_grenade",
    "name": "Seeker Grenade",
    "ruName": "Самонаводящаяся граната",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 5,
    "dismantle": "1x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/seeker_grenade.png"
  },
  {
    "id": "sensors",
    "name": "Sensors",
    "ruName": "Датчики",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "1x Металлические детали, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 3
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "sentinel_firing_core",
    "name": "Sentinel Firing Core",
    "ruName": "Огневое ядро стража",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Сплав ARC, 2x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/sentinel_firing_core.png"
  },
  {
    "id": "shaker",
    "name": "Shaker",
    "ruName": "Шейкер",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "10x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shaker.png"
  },
  {
    "id": "shield_recharger",
    "name": "Shield Recharger",
    "ruName": "Устройство для перезарядки щита",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 520,
    "stack": 5,
    "dismantle": "4x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shield_recharger.png"
  },
  {
    "id": "shotgun_ammo",
    "name": "Shotgun Ammo",
    "ruName": "Патрон для дробовика",
    "rarity": "Common",
    "type": "Боеприпасы",
    "usedFor": "",
    "value": 20,
    "stack": 20,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shotgun_ammo.png"
  },
  {
    "id": "shotgun_choke_i",
    "name": "Shotgun Choke I",
    "ruName": "Чок для дробовика I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "5x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shotgun_choke_i.png"
  },
  {
    "id": "shotgun_choke_ii",
    "name": "Shotgun Choke II",
    "ruName": "Чок для дробовика II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shotgun_choke_ii.png"
  },
  {
    "id": "shotgun_choke_iii",
    "name": "Shotgun Choke III",
    "ruName": "Чок для дробовика III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shotgun_choke_iii.png"
  },
  {
    "id": "shotgun_silencer",
    "name": "Shotgun Silencer",
    "ruName": "Глушитель для дробовика",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shotgun_silencer.png"
  },
  {
    "id": "showstopper",
    "name": "Showstopper",
    "ruName": "Коронный номер",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2100,
    "stack": 5,
    "dismantle": "1x Электрические компоненты, 1x Преобразователь напряжения",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/showstopper.png"
  },
  {
    "id": "shrapnel_grenade",
    "name": "Shrapnel Grenade",
    "ruName": "Осколочная граната",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 800,
    "stack": 5,
    "dismantle": "1x Самодельная взрывчатка, 1x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/shrapnel_grenade.png"
  },
  {
    "id": "shredder_gyro",
    "name": "Shredder Gyro",
    "ruName": "Гироскоп Измельчителя",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Сплав ARC, 2x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 3
      },
      {
        "projectId": "expedition_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "signal_amplifier",
    "name": "Signal Amplifier",
    "ruName": "Усилитель сигнала",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "2x Электрические компоненты, 2x Преобразователь напряжения",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/signal_amplifier.png"
  },
  {
    "id": "silencer_i",
    "name": "Silencer I",
    "ruName": "Глушитель I",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Механические компоненты, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/silencer_i.png"
  },
  {
    "id": "silencer_ii",
    "name": "Silencer II",
    "ruName": "Глушитель II",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 2x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/silencer_ii.png"
  },
  {
    "id": "silencer_iii",
    "name": "Silencer III",
    "ruName": "Глушитель III",
    "rarity": "Epic",
    "type": "Модификации",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Компоненты для модификаций, 3x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/silencer_iii.png"
  },
  {
    "id": "silver_teaspoon_set",
    "name": "Silver Teaspoon Set",
    "ruName": "Набор серебряных чайных ложек",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/silver_teaspoon_set.png"
  },
  {
    "id": "simple_gun_parts",
    "name": "Simple Gun Parts",
    "ruName": "Простые детали для оружия",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 330,
    "stack": 10,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/simple_gun_parts.png"
  },
  {
    "id": "sirena_dorata_ship_model",
    "name": "\"Sirena Dorata\" Ship Model",
    "ruName": "Модель корабля «Sirena Dorata»",
    "rarity": "Epic",
    "type": "Ценности",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 4
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 4
      }
    ]
  },
  {
    "id": "smoke_grenade",
    "name": "Smoke Grenade",
    "ruName": "Дымовая граната",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "1x Канистра, 2x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/smoke_grenade.png"
  },
  {
    "id": "smoke_grenade_trap",
    "name": "Smoke Grenade Trap",
    "ruName": "Лазерная ловушка: Дым",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/smoke_grenade_trap.png"
  },
  {
    "id": "snap_blast_grenade",
    "name": "Snap Blast Grenade",
    "ruName": "Разрывная граната",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 800,
    "stack": 3,
    "dismantle": "1x Химикаты, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "flickering_flames_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "snap_hook",
    "name": "Snap Hook",
    "ruName": "Крюк с защелкой",
    "rarity": "Legendary",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 14000,
    "stack": 1,
    "dismantle": "1x Энергетический стержень, 3x Веревка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/snap_hook.png"
  },
  {
    "id": "snitch_scanner",
    "name": "Snitch Scanner",
    "ruName": "Сканер Стукача",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Электрические компоненты",
    "rec": "situational",
    "quests": [
      "ss9"
    ],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "snowball",
    "name": "Snowball",
    "ruName": "Снежок",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 10,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/snowball.png"
  },
  {
    "id": "spaceport_container_storage_key",
    "name": "Spaceport Container Storage Key",
    "ruName": "Ключ от хранилища контейнеров космопорта",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spaceport_control_tower_key.png"
  },
  {
    "id": "spaceport_control_tower_key",
    "name": "Spaceport Control Tower Key",
    "ruName": "Ключ от диспетчерской башни космопорта",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spaceport_control_tower_key.png"
  },
  {
    "id": "spaceport_trench_tower_key",
    "name": "Spaceport Trench Tower Key",
    "ruName": "Ключ от башни траншей космопорта",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spaceport_trench_tower_key.png"
  },
  {
    "id": "spaceport_warehouse_key",
    "name": "Spaceport Warehouse Key",
    "ruName": "Ключ от склада космопорта",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spaceport_trench_tower_key.png"
  },
  {
    "id": "speaker_component",
    "name": "Speaker Component",
    "ruName": "Компонент динамика",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "2x Пластиковые детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s4",
        "phase": 3
      }
    ]
  },
  {
    "id": "spectrometer",
    "name": "Spectrometer",
    "ruName": "Спектрометр",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spectrometer.png"
  },
  {
    "id": "spectrum_analyzer",
    "name": "Spectrum Analyzer",
    "ruName": "Анализатор спектра",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 3500,
    "stack": 3,
    "dismantle": "1x Модули Исхода, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spectrum_analyzer.png"
  },
  {
    "id": "spotter_relay",
    "name": "Spotter Relay",
    "ruName": "Передатчик Наводчика",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Электрические компоненты",
    "rec": "situational",
    "quests": [
      "combat_recon"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "spring_cushion",
    "name": "Spring Cushion",
    "ruName": "Пружинная подушка",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "2x Прочная ткань, 2x Стальная пружина",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/spring_cushion.png"
  },
  {
    "id": "stable_stock_i",
    "name": "Stable Stock I",
    "ruName": "Надежный приклад I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stable_stock_i.png"
  },
  {
    "id": "stable_stock_ii",
    "name": "Stable Stock II",
    "ruName": "Надежный приклад II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Скотч, 1x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stable_stock_ii.png"
  },
  {
    "id": "stable_stock_iii",
    "name": "Stable Stock III",
    "ruName": "Надежный приклад III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Скотч, 1x Компоненты для модификаций",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stable_stock_iii.png"
  },
  {
    "id": "stack_of_movie_tapes",
    "name": "Stack of Movie Tapes",
    "ruName": "Стопка видеокассет",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "movie_night"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stack_of_movie_tapes.png"
  },
  {
    "id": "statuette",
    "name": "Statuette",
    "ruName": "Статуэтка",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/statuette.png"
  },
  {
    "id": "steel_spring",
    "name": "Steel Spring",
    "ruName": "Стальная пружина",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 300,
    "stack": 15,
    "dismantle": "2x Металлические детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 1
      },
      {
        "projectId": "expedition_project",
        "phase": 1
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 1
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "stella_montis_archives_key",
    "name": "Stella Montis Archives Key",
    "ruName": "Ключ от архива Стелла Монтис",
    "rarity": "Epic",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stella_montis_archives_key.png"
  },
  {
    "id": "stella_montis_assembly_admin_key",
    "name": "Stella Montis Assembly Admin Key",
    "ruName": "Административный Ключ Сборочного Цеха Стелла Монтис",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stella_montis_assembly_admin_key.png"
  },
  {
    "id": "stella_montis_medical_storage_key",
    "name": "Stella Montis Medical Storage Key",
    "ruName": "Ключ от медицинского склада Стелла Монтис",
    "rarity": "Uncommon",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stella_montis_medical_storage_key.png"
  },
  {
    "id": "stella_montis_security_checkpoint_key",
    "name": "Stella Montis Security Checkpoint Key",
    "ruName": "Ключ от контрольно-пропускного пункта Стелла Монтис",
    "rarity": "Rare",
    "type": "Ключ доступа",
    "usedFor": "",
    "value": 100,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stella_montis_security_checkpoint_key.png"
  },
  {
    "id": "sterilized_bandage",
    "name": "Sterilized Bandage",
    "ruName": "Стерильный бинт",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "1x Антисептик, 1x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/sterilized_bandage.png"
  },
  {
    "id": "stitcher_i",
    "name": "Stitcher I",
    "ruName": "Сшиватель I",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 800,
    "stack": 1,
    "dismantle": "3x Металлические детали, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stitcher.png"
  },
  {
    "id": "stitcher_ii",
    "name": "Stitcher II",
    "ruName": "Сшиватель II",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "6x Металлические детали, 6x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stitcher.png"
  },
  {
    "id": "stitcher_iii",
    "name": "Stitcher III",
    "ruName": "Сшиватель III",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 3000,
    "stack": 1,
    "dismantle": "12x Металлические детали, 1x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stitcher.png"
  },
  {
    "id": "stitcher_iv",
    "name": "Stitcher IV",
    "ruName": "Сшиватель IV",
    "rarity": "Common",
    "type": "Оружие",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Механические компоненты, 2x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/stitcher.png"
  },
  {
    "id": "surge_coil",
    "name": "Surge Coil",
    "ruName": "Surge Coil",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2100,
    "stack": 3,
    "dismantle": "1x Электрические компоненты, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": ""
  },
  {
    "id": "surge_shield_recharger",
    "name": "Surge Shield Recharger",
    "ruName": "Устройство для мгновенной перезарядки щита",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1200,
    "stack": 5,
    "dismantle": "1x Электрические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/surge_shield_recharger.png"
  },
  {
    "id": "surveyor_vault",
    "name": "Surveyor Vault",
    "ruName": "Сейф Наблюдателя",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Сплав ARC, 1x Механические компоненты",
    "rec": "situational",
    "quests": [
      "ss10d"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 1
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "synthesized_fuel",
    "name": "Synthesized Fuel",
    "ruName": "Синтезированное топливо",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 700,
    "stack": 5,
    "dismantle": "1x Химикаты, 1x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/synthesized_fuel.png"
  },
  {
    "id": "syringe",
    "name": "Syringe",
    "ruName": "Шприц",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "2x Химикаты, 3x Пластиковые детали",
    "rec": "situational",
    "quests": [
      "ss10c"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/syringe.png"
  },
  {
    "id": "tactical_mk1",
    "name": "Tactical Mk. 1",
    "ruName": "Стратегия 1",
    "rarity": "Uncommon",
    "type": "Аугментации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "3x Пластиковые детали, 3x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_i.png"
  },
  {
    "id": "tactical_mk2",
    "name": "Tactical Mk. 2",
    "ruName": "Стратегия 2",
    "rarity": "Rare",
    "type": "Аугментации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Электрические компоненты, 1x Магнит",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_i.png"
  },
  {
    "id": "tactical_mk3_defensive",
    "name": "Tactical Mk. 3 (Defensive)",
    "ruName": "Тактический Mk. 3 (Оборонительный)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_mk3_defensive.png"
  },
  {
    "id": "tactical_mk3_healing",
    "name": "Tactical Mk. 3 (Healing)",
    "ruName": "Стратегия 3 (Лечение)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_mk3_healing.png"
  },
  {
    "id": "tactical_mk3_revival",
    "name": "Tactical Mk. 3 (Revival)",
    "ruName": "Стратегия 3 (Возрождение)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_mk3_revival.png"
  },
  {
    "id": "tactical_mk3_smoke",
    "name": "Tactical Mk. 3 (Smoke)",
    "ruName": "Тактический Mk. 3 (Дым)",
    "rarity": "Epic",
    "type": "Аугментации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tactical_iii_smoke.png"
  },
  {
    "id": "tagging_grenade",
    "name": "Tagging Grenade",
    "ruName": "Маркирующая граната",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Пластиковые детали, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tagging_grenade.png"
  },
  {
    "id": "tattered_arc_lining",
    "name": "Tattered Arc Lining",
    "ruName": "Потрепанная ARC-Подкладка",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "12x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tattered_arc_lining.png"
  },
  {
    "id": "tattered_clothes",
    "name": "Tattered Clothes",
    "ruName": "Рваная одежда",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "11x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tattered_clothes.png"
  },
  {
    "id": "telemetry_transceiver",
    "name": "Telemetry Transceiver",
    "ruName": "Телеметрический приемопередатчик",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/telemetry_transceiver.png"
  },
  {
    "id": "tempest_i",
    "name": "Tempest I",
    "ruName": "Буря I",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tempest.png"
  },
  {
    "id": "tempest_ii",
    "name": "Tempest II",
    "ruName": "Буря II",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tempest.png"
  },
  {
    "id": "tempest_iii",
    "name": "Tempest III",
    "ruName": "Буря III",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 22000,
    "stack": 1,
    "dismantle": "4x Продвинутые механические компоненты, 4x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tempest.png"
  },
  {
    "id": "tempest_iv",
    "name": "Tempest IV",
    "ruName": "Буря IV",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 27000,
    "stack": 1,
    "dismantle": "5x Продвинутые механические компоненты, 4x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tempest.png"
  },
  {
    "id": "thermostat",
    "name": "Thermostat",
    "ruName": "Термостат",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "7x Резиновые детали, 1x Датчики",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/thermostat.png"
  },
  {
    "id": "tick_pod",
    "name": "Tick Pod",
    "ruName": "Оболочка Блохи",
    "rarity": "Uncommon",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "2x Сплав ARC, 2x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 1
      },
      {
        "projectId": "avian_alarm_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "toaster",
    "name": "Toaster",
    "ruName": "Тостер",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "5x Пластиковые детали, 3x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/toaster.png"
  },
  {
    "id": "torn_blanket",
    "name": "Torn Blanket",
    "ruName": "Рваное одеяло",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "12x Ткань",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torn_blanket.png"
  },
  {
    "id": "torn_book",
    "name": "Torn Book",
    "ruName": "Порванная книга",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [
      "ss10x18"
    ],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torn_book.png"
  },
  {
    "id": "torrente_i",
    "name": "Torrente I",
    "ruName": "Торренте I",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torrente.png"
  },
  {
    "id": "torrente_ii",
    "name": "Torrente II",
    "ruName": "Торренте II",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torrente.png"
  },
  {
    "id": "torrente_iii",
    "name": "Torrente III",
    "ruName": "Торренте III",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torrente.png"
  },
  {
    "id": "torrente_iv",
    "name": "Torrente IV",
    "ruName": "Торренте IV",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/torrente.png"
  },
  {
    "id": "trailblazer",
    "name": "Trailblazer",
    "ruName": "Первопроходец",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2200,
    "stack": 3,
    "dismantle": "2x Самодельная взрывчатка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/trailblazer.png"
  },
  {
    "id": "trigger_nade",
    "name": "Trigger 'Nade",
    "ruName": "Управляемая граната",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Химикаты, 1x Процессор",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/trigger_nade.png"
  },
  {
    "id": "tropical_duck",
    "name": "Tropical Duck",
    "ruName": "Тропическая уточка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 15,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/tropical_duck.png"
  },
  {
    "id": "turbine_compressor",
    "name": "Turbine Compressor",
    "ruName": "Турбинный компрессор",
    "rarity": "Epic",
    "type": "Мусор",
    "usedFor": "",
    "value": 5000,
    "stack": 3,
    "dismantle": "1x Электронная схема ARC, 1x Движущее ядро ARC",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/turbine_compressor.png"
  },
  {
    "id": "turbo_pump",
    "name": "Turbo Pump",
    "ruName": "Турбонасос",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "1x Механические компоненты, 3x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/turbo_pump.png"
  },
  {
    "id": "twilight_compass_ship_model",
    "name": "\"Twilight Compass\" Ship Model",
    "ruName": "Модель корабля «Twilight Compass»",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "unusable_weapon",
    "name": "Unusable Weapon",
    "ruName": "Непригодное оружие",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "4x Металлические детали, 5x Простые детали для оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/unusable_weapon.png"
  },
  {
    "id": "vaporizer_regulator",
    "name": "Vaporizer Regulator",
    "ruName": "Регулятор испепелителя",
    "rarity": "Epic",
    "type": "Материалы",
    "usedFor": "",
    "value": 6000,
    "stack": 3,
    "dismantle": "1x Продвинутые электрические компоненты, 2x Электронная схема ARC",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 4
      },
      {
        "projectId": "expedition_project_s4",
        "phase": 4
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 2
      },
      {
        "projectId": "high_gain_antenna_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "vase",
    "name": "Vase",
    "ruName": "Ваза",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vase.png"
  },
  {
    "id": "velocity_ship_model",
    "name": "\"Velocity\" Ship Model",
    "ruName": "Модель корабля «Velocity»",
    "rarity": "Rare",
    "type": "Ценности",
    "usedFor": "",
    "value": 3000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 3
      }
    ]
  },
  {
    "id": "venator_i",
    "name": "Venator I",
    "ruName": "Охотник I",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 7000,
    "stack": 1,
    "dismantle": "1x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/venator.png"
  },
  {
    "id": "venator_ii",
    "name": "Venator II",
    "ruName": "Охотник II",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/venator.png"
  },
  {
    "id": "venator_iii",
    "name": "Venator III",
    "ruName": "Охотник III",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/venator.png"
  },
  {
    "id": "venator_iv",
    "name": "Venator IV",
    "ruName": "Охотник IV",
    "rarity": "Rare",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 3x Детали для оружия среднего калибра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/venator.png"
  },
  {
    "id": "vertical_grip_i",
    "name": "Vertical Grip I",
    "ruName": "Вертикальная рукоятка I",
    "rarity": "Common",
    "type": "Модификации",
    "usedFor": "",
    "value": 640,
    "stack": 1,
    "dismantle": "6x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vertical_grip_i.png"
  },
  {
    "id": "vertical_grip_ii",
    "name": "Vertical Grip II",
    "ruName": "Вертикальная рукоятка II",
    "rarity": "Uncommon",
    "type": "Модификации",
    "usedFor": "",
    "value": 2000,
    "stack": 1,
    "dismantle": "1x Скотч, 1x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vertical_grip_ii.png"
  },
  {
    "id": "vertical_grip_iii",
    "name": "Vertical Grip III",
    "ruName": "Вертикальная рукоятка III",
    "rarity": "Rare",
    "type": "Модификации",
    "usedFor": "",
    "value": 5000,
    "stack": 1,
    "dismantle": "2x Скотч, 2x Механические компоненты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vertical_grip_iii.png"
  },
  {
    "id": "very_comfortable_pillow",
    "name": "Very Comfortable Pillow",
    "ruName": "Очень удобная подушка",
    "rarity": "Uncommon",
    "type": "Ценности",
    "usedFor": "",
    "value": 2000,
    "stack": 3,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/very_comfortable_pillow.png"
  },
  {
    "id": "vita_shot",
    "name": "Vita Shot",
    "ruName": "Витаминная сыворотка",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 2200,
    "stack": 3,
    "dismantle": "4x Химикаты, 1x Шприц",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vita_shot.png"
  },
  {
    "id": "vita_spray",
    "name": "Vita Spray",
    "ruName": "Вита-спрей",
    "rarity": "Epic",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 3400,
    "stack": 1,
    "dismantle": "1x Антисептик, 1x Канистра",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vita_spray.png"
  },
  {
    "id": "volcanic_rock",
    "name": "Volcanic Rock",
    "ruName": "Вулканическая порода",
    "rarity": "Common",
    "type": "Разное",
    "usedFor": "",
    "value": 270,
    "stack": 5,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/volcanic_rock.png"
  },
  {
    "id": "voltage_converter",
    "name": "Voltage Converter",
    "ruName": "Преобразователь напряжения",
    "rarity": "Rare",
    "type": "Материалы",
    "usedFor": "",
    "value": 500,
    "stack": 5,
    "dismantle": "1x Резиновые детали, 1x Провода",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 5
      }
    ]
  },
  {
    "id": "vulcano_i",
    "name": "Vulcano I",
    "ruName": "Вулкан I",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 10000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 2x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vulcano.png"
  },
  {
    "id": "vulcano_ii",
    "name": "Vulcano II",
    "ruName": "Вулкан II",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 13000,
    "stack": 1,
    "dismantle": "2x Продвинутые механические компоненты, 3x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vulcano.png"
  },
  {
    "id": "vulcano_iii",
    "name": "Vulcano III",
    "ruName": "Вулкан III",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 17000,
    "stack": 1,
    "dismantle": "3x Продвинутые механические компоненты, 4x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vulcano.png"
  },
  {
    "id": "vulcano_iv",
    "name": "Vulcano IV",
    "ruName": "Вулкан IV",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 22000,
    "stack": 1,
    "dismantle": "4x Продвинутые механические компоненты, 5x Детали для тяжелого оружия",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/vulcano.png"
  },
  {
    "id": "wasp_driver",
    "name": "Wasp Driver",
    "ruName": "Драйвер Осы",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 640,
    "stack": 3,
    "dismantle": "2x Сплав ARC",
    "rec": "situational",
    "quests": [
      "ss9"
    ],
    "projects": [
      {
        "projectId": "trophy_display_project",
        "phase": 2
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "water_filter",
    "name": "Water Filter",
    "ruName": "Водяной фильтр",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "3x Канистра, 2x Резиновые детали",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "avian_alarm_project",
        "phase": 4
      },
      {
        "projectId": "flickering_flames_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "water_pump",
    "name": "Water Pump",
    "ruName": "Водяной насос",
    "rarity": "Rare",
    "type": "Мусор",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "4x Металлические детали, 2x Масло",
    "rec": "situational",
    "quests": [],
    "projects": [
      {
        "projectId": "weather_monitor_system_project",
        "phase": 4
      }
    ]
  },
  {
    "id": "white_flag",
    "name": "White Flag",
    "ruName": "Белый флаг",
    "rarity": "Uncommon",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 640,
    "stack": 5,
    "dismantle": "5x Ткань, 1x Пластиковые детали",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/white_flag.png"
  },
  {
    "id": "wind_sprite_ship_model",
    "name": "\"Wind Sprite\" Ship Model",
    "ruName": "Модель корабля «Wind Sprite»",
    "rarity": "Common",
    "type": "Ценности",
    "usedFor": "",
    "value": 1000,
    "stack": 1,
    "dismantle": "",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/wind_sprite_ship_model.png"
  },
  {
    "id": "wires",
    "name": "Wires",
    "ruName": "Провода",
    "rarity": "Uncommon",
    "type": "Материалы",
    "usedFor": "",
    "value": 200,
    "stack": 15,
    "dismantle": "2x Резиновые детали",
    "rec": "situational",
    "quests": [
      "ss3"
    ],
    "projects": [
      {
        "projectId": "expedition_project_s1",
        "phase": 2
      },
      {
        "projectId": "expedition_project",
        "phase": 2
      },
      {
        "projectId": "expedition_project_s3",
        "phase": 2
      },
      {
        "projectId": "weather_monitor_system_project",
        "phase": 2
      }
    ]
  },
  {
    "id": "wolfpack",
    "name": "Wolfpack",
    "ruName": "Волчья стая",
    "rarity": "Epic",
    "type": "Оружие",
    "usedFor": "",
    "value": 6000,
    "stack": 1,
    "dismantle": "1x Движущее ядро ARC, 1x Взрывчатое вещество",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/wolfpack.png"
  },
  {
    "id": "yellow_light_stick",
    "name": "Yellow Light Stick",
    "ruName": "Желтый химический фонарь",
    "rarity": "Common",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 150,
    "stack": 5,
    "dismantle": "1x Химикаты",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/yellow_light_stick.png"
  },
  {
      "id": "zipline",
    "name": "Zipline",
    "ruName": "Зиплайн",
    "rarity": "Rare",
    "type": "Медикаменты",
    "usedFor": "",
    "value": 1000,
    "stack": 3,
    "dismantle": "1x Металлические детали, 1x Веревка",
    "rec": "situational",
    "quests": [],
    "projects": [],
    "image": "https://cdn.arctracker.io/items/zipline.png"
  }];

export const blueprintsList: Blueprint[] = [
{
    "id": "angled_grip_ii_blueprint",
    "name": "Angled Grip II Blueprint",
    "ruName": "Чертеж — Угловая рукоятка II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/angled_grip_ii.png"
  },
  {
    "id": "angled_grip_iii_blueprint",
    "name": "Angled Grip III Blueprint",
    "ruName": "Чертеж — Угловая рукоятка III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/angled_grip_iii.png"
  },
  {
    "id": "anvil_blueprint",
    "name": "Anvil Blueprint",
    "ruName": "Чертеж — Наковальня",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/anvil_blueprint.png"
  },
  {
    "id": "aphelion_blueprint",
    "name": "Aphelion Blueprint",
    "ruName": "Чертеж — Афелий",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/aphelion.png"
  },
  {
    "id": "barricade_kit_blueprint",
    "name": "Barricade Kit Blueprint",
    "ruName": "Чертёж набора баррикад",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/barricade_kit.png"
  },
  {
    "id": "bettina_blueprint",
    "name": "Bettina Blueprint",
    "ruName": "Чертеж — Беттина",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/bettina_blueprint.png"
  },
  {
    "id": "blaze_grenade_blueprint",
    "name": "Blaze Grenade Blueprint",
    "ruName": "Чертёж огненной гранаты",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/blaze_grenade.png"
  },
  {
    "id": "blue_light_stick_blueprint",
    "name": "Blue Light Stick Blueprint",
    "ruName": "Чертёж синего светящегося стержня",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/blue_light_stick_blueprint.png"
  },
  {
    "id": "bobcat_blueprint",
    "name": "Bobcat Blueprint",
    "ruName": "Чертеж — Бобкэт",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/bobcat.png"
  },
  {
    "id": "burletta_blueprint",
    "name": "Burletta Blueprint",
    "ruName": "Чертеж Бурлетты",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/burletta.png"
  },
  {
    "id": "canto_blueprint",
    "name": "Canto Blueprint",
    "ruName": "Канто Чертеж",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": ""
  },
  {
    "id": "combat_mk3_aggressive_blueprint",
    "name": "Combat Mk. 3 (Aggressive) Blueprint",
    "ruName": "Чертёж Боевой Mk. 3 (Агрессивный)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/combat_mk3_aggressive.png"
  },
  {
    "id": "combat_mk3_flanking_blueprint",
    "name": "Combat Mk. 3 (Flanking) Blueprint",
    "ruName": "Чертеж — Боевой Mk. 3 (Фланговый)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/combat_mk3_flanking.png"
  },
  {
    "id": "compensator_ii_blueprint",
    "name": "Compensator II Blueprint",
    "ruName": "Чертёж компенсатора II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/compensator_ii_blueprint.png"
  },
  {
    "id": "compensator_iii_blueprint",
    "name": "Compensator III Blueprint",
    "ruName": "Чертеж — Компенсатор III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/compensator_iii.png"
  },
  {
    "id": "complex_gun_parts_blueprint",
    "name": "Complex Gun Parts Blueprint",
    "ruName": "Чертёж сложных деталей оружия",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/complex_gun_parts_blueprint.png"
  },
  {
    "id": "crash_mat_blueprint",
    "name": "Crash Mat Blueprint",
    "ruName": "Чертеж посадочного мата",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": ""
  },
  {
    "id": "deadline_blueprint",
    "name": "Deadline Blueprint",
    "ruName": "Чертеж Deadline",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/deadline.png"
  },
  {
    "id": "defibrillator_blueprint",
    "name": "Defibrillator Blueprint",
    "ruName": "Чертеж — Дефибриллятор",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/defibrillator.png"
  },
  {
    "id": "dolabra_blueprint",
    "name": "Dolabra Blueprint",
    "ruName": "Долабра Чертеж",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/dolabra.png"
  },
  {
    "id": "equalizer_blueprint",
    "name": "Equalizer Blueprint",
    "ruName": "Чертёж Уравнителя",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/equalizer.png"
  },
  {
    "id": "explosive_mine_blueprint",
    "name": "Explosive Mine Blueprint",
    "ruName": "Чертеж — Взрывная мина",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/explosive_mine.png"
  },
  {
    "id": "extended_barrel_blueprint",
    "name": "Extended Barrel Blueprint",
    "ruName": "Чертеж — Удлиненный ствол",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_barrel.png"
  },
  {
    "id": "extended_light_mag_ii_blueprint",
    "name": "Extended Light Mag II Blueprint",
    "ruName": "Чертеж — Увеличенный магазин для легкого оружия II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_light_mag_ii.png"
  },
  {
    "id": "extended_light_mag_iii_blueprint",
    "name": "Extended Light Mag III Blueprint",
    "ruName": "Чертеж — Увеличенный магазин для легкого оружия III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_light_mag_iii.png"
  },
  {
    "id": "extended_medium_mag_ii_blueprint",
    "name": "Extended Medium Mag II Blueprint",
    "ruName": "Чертеж — Увеличенный магазин для оружия среднего калибра II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_medium_mag_ii_blueprint.png"
  },
  {
    "id": "extended_medium_mag_iii_blueprint",
    "name": "Extended Medium Mag III Blueprint",
    "ruName": "Чертеж — Увеличенный магазин для оружия среднего калибра III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_medium_mag_iii.png"
  },
  {
    "id": "extended_shotgun_mag_ii_blueprint",
    "name": "Extended Shotgun Mag II Blueprint",
    "ruName": "Чертёж расширенного магазина для дробовика II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_shotgun_mag_ii.png"
  },
  {
    "id": "extended_shotgun_mag_iii_blueprint",
    "name": "Extended Shotgun Mag III Blueprint",
    "ruName": "Чертеж расширенного магазина для дробовика III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/extended_shotgun_mag_iii.png"
  },
  {
    "id": "fireworks_box_blueprint",
    "name": "Fireworks Box Blueprint",
    "ruName": "Чертеж — Коробка фейерверков",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/fireworks_box.png"
  },
  {
    "id": "gas_mine_blueprint",
    "name": "Gas Mine Blueprint",
    "ruName": "Чертеж — Газовая мина",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/gas_mine.png"
  },
  {
    "id": "green_light_stick_blueprint",
    "name": "Green Light Stick Blueprint",
    "ruName": "Чертёж зелёной светящейся палочки",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/green_light_stick.png"
  },
  {
    "id": "heavy_gun_parts_blueprint",
    "name": "Heavy Gun Parts Blueprint",
    "ruName": "Чертеж деталей тяжелого оружия",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/heavy_gun_parts.png"
  },
  {
    "id": "hullcracker_blueprint",
    "name": "Hullcracker Blueprint",
    "ruName": "Чертёж Hullcracker",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/hullcracker.png"
  },
  {
    "id": "il_toro_blueprint",
    "name": "Il Toro Blueprint",
    "ruName": "Чертеж — Эль-Торо",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/il_toro.png"
  },
  {
    "id": "jolt_mine_blueprint",
    "name": "Jolt Mine Blueprint",
    "ruName": "Чертеж — Электрическая мина",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/jolt_mine.png"
  },
  {
    "id": "jupiter_blueprint",
    "name": "Jupiter Blueprint",
    "ruName": "Чертеж Юпитера",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/jupiter.png"
  },
  {
    "id": "light_gun_parts_blueprint",
    "name": "Light Gun Parts Blueprint",
    "ruName": "Чертеж — Детали для легкого оружия",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/light_gun_parts_blueprint.png"
  },
  {
    "id": "lightweight_stock_blueprint",
    "name": "Lightweight Stock Blueprint",
    "ruName": "Чертёж облегчённого приклада",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/lightweight_stock_blueprint.png"
  },
  {
    "id": "looting_mk3_safekeeper_blueprint",
    "name": "Looting Mk. 3 (Safekeeper) Blueprint",
    "ruName": "Чертеж: Мародерство Мк. 3 (Хранитель)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/looting_mk3_safekeeper.png"
  },
  {
    "id": "looting_mk3_survivor_blueprint",
    "name": "Looting Mk. 3 (Survivor) Blueprint",
    "ruName": "Чертеж грабительского Mk. 3 (выживший)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/looting_mk3_survivor_blueprint.png"
  },
  {
    "id": "lure_grenade_blueprint",
    "name": "Lure Grenade Blueprint",
    "ruName": "Чертеж — Граната-приманка",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/lure_grenade.png"
  },
  {
    "id": "medium_gun_parts_blueprint",
    "name": "Medium Gun Parts Blueprint",
    "ruName": "Чертёж средних деталей оружия",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/medium_gun_parts_blueprint.png"
  },
  {
    "id": "muzzle_brake_ii_blueprint",
    "name": "Muzzle Brake II Blueprint",
    "ruName": "Чертёж дульного тормоза II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/muzzle_brake_ii.png"
  },
  {
    "id": "muzzle_brake_iii_blueprint",
    "name": "Muzzle Brake III Blueprint",
    "ruName": "Чертеж — Дульный тормоз III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/muzzle_brake_iii.png"
  },
  {
    "id": "osprey_blueprint",
    "name": "Osprey Blueprint",
    "ruName": "Чертеж — Ястреб",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/osprey_blueprint.png"
  },
  {
    "id": "padded_stock_blueprint",
    "name": "Padded Stock Blueprint",
    "ruName": "Чертеж: Мягкий приклад",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/padded_stock.png"
  },
  {
    "id": "powered_descender_blueprint",
    "name": "Powered Descender Blueprint",
    "ruName": "Чертеж моторизованного спускового устройства",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": ""
  },
  {
    "id": "project_heartwood_blueprints",
    "name": "Project Heartwood Blueprints",
    "ruName": "Чертежи проекта «Хартвуд»",
    "rarity": "Common",
    "type": "Trinket",
    "source": "Loot",
    "image": ""
  },
  {
    "id": "pulse_mine_blueprint",
    "name": "Pulse Mine Blueprint",
    "ruName": "Чертеж — Импульсная мина",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/pulse_mine.png"
  },
  {
    "id": "red_light_stick_blueprint",
    "name": "Red Light Stick Blueprint",
    "ruName": "Чертёж красной светящейся палочки",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/red_light_stick.png"
  },
  {
    "id": "remote_raider_flare_blueprint",
    "name": "Remote Raider Flare Blueprint",
    "ruName": "Чертёж дистанционной сигнальной ракеты рейдера",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/remote_raider_flare.png"
  },
  {
    "id": "seeker_grenade_blueprint",
    "name": "Seeker Grenade Blueprint",
    "ruName": "Чертёж — Самонаводящаяся граната",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/seeker_grenade.png"
  },
  {
    "id": "shotgun_choke_ii_blueprint",
    "name": "Shotgun Choke II Blueprint",
    "ruName": "Чертеж — Чок для дробовика II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/shotgun_choke_ii.png"
  },
  {
    "id": "shotgun_choke_iii_blueprint",
    "name": "Shotgun Choke III Blueprint",
    "ruName": "Чертеж — Чок для дробовика III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/shotgun_choke_iii.png"
  },
  {
    "id": "shotgun_silencer_blueprint",
    "name": "Shotgun Silencer Blueprint",
    "ruName": "Чертеж — Глушитель для дробовика",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/shotgun_silencer.png"
  },
  {
    "id": "showstopper_blueprint",
    "name": "Showstopper Blueprint",
    "ruName": "Чертеж — Коронный номер",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/showstopper.png"
  },
  {
    "id": "silencer_i_blueprint",
    "name": "Silencer I Blueprint",
    "ruName": "Чертёж глушителя I",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/silencer_i.png"
  },
  {
    "id": "silencer_ii_blueprint",
    "name": "Silencer II Blueprint",
    "ruName": "Чертёж глушителя II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/silencer_ii.png"
  },
  {
    "id": "smoke_grenade_blueprint",
    "name": "Smoke Grenade Blueprint",
    "ruName": "Чертеж — Дымовая граната",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/smoke_grenade.png"
  },
  {
    "id": "snap_hook_blueprint",
    "name": "Snap Hook Blueprint",
    "ruName": "Чертёж Snap Hook",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/snap_hook.png"
  },
  {
    "id": "stable_stock_ii_blueprint",
    "name": "Stable Stock II Blueprint",
    "ruName": "Чертеж — Надежный приклад II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/stable_stock_ii.png"
  },
  {
    "id": "stable_stock_iii_blueprint",
    "name": "Stable Stock III Blueprint",
    "ruName": "Чертеж — Надежный приклад III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/stable_stock_iii.png"
  },
  {
    "id": "surge_coil_blueprint",
    "name": "Surge Coil Blueprint",
    "ruName": "Surge Coil Чертеж",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": ""
  },
  {
    "id": "tactical_mk3_defensive_blueprint",
    "name": "Tactical Mk. 3 (Defensive) Blueprint",
    "ruName": "Чертеж — Тактический Mk. 3 (Оборонительный)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tactical_mk3_defensive.png"
  },
  {
    "id": "tactical_mk3_healing_blueprint",
    "name": "Tactical Mk. 3 (Healing) Blueprint",
    "ruName": "Чертеж тактического Mk. 3 (лечение)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tactical_mk3_healing_blueprint.png"
  },
  {
    "id": "tactical_mk3_revival_blueprint",
    "name": "Tactical Mk. 3 (Revival) Blueprint",
    "ruName": "Чертеж: Тактика Мк. 3 (Реанимация)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tactical_mk3_revival.png"
  },
  {
    "id": "tactical_mk3_smoke_blueprint",
    "name": "Tactical Mk. 3 (Smoke) Blueprint",
    "ruName": "Чертеж тактического Mk. 3 (дым)",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tactical_iii_smoke.png"
  },
  {
    "id": "tagging_grenade_blueprint",
    "name": "Tagging Grenade Blueprint",
    "ruName": "Чертеж — Маркирующая граната",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tagging_grenade.png"
  },
  {
    "id": "tempest_blueprint",
    "name": "Tempest Blueprint",
    "ruName": "Чертеж — Буря",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/tempest.png"
  },
  {
    "id": "torrente_blueprint",
    "name": "Torrente Blueprint",
    "ruName": "Чертеж Torrente",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/torrente.png"
  },
  {
    "id": "trailblazer_blueprint",
    "name": "Trailblazer Blueprint",
    "ruName": "Чертёж — Trailblazer",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/trailblazer.png"
  },
  {
    "id": "trigger_nade_blueprint",
    "name": "Trigger Nade Blueprint",
    "ruName": "Чертеж — Триггер-граната",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/trigger_nade_blueprint.png"
  },
  {
    "id": "venator_blueprint",
    "name": "Venator Blueprint",
    "ruName": "Чертеж — Охотник",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/venator.png"
  },
  {
    "id": "vertical_grip_ii_blueprint",
    "name": "Vertical Grip II Blueprint",
    "ruName": "Чертеж — Вертикальная рукоятка II",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/vertical_grip_ii.png"
  },
  {
    "id": "vertical_grip_iii_blueprint",
    "name": "Vertical Grip III Blueprint",
    "ruName": "Чертеж вертикальной рукояти III",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/vertical_grip_iii_blueprint.png"
  },
  {
    "id": "vita_shot_blueprint",
    "name": "Vita Shot Blueprint",
    "ruName": "Чертёж Вита-инъекции",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/vita_shot.png"
  },
  {
    "id": "vita_spray_blueprint",
    "name": "Vita Spray Blueprint",
    "ruName": "Чертёж Вита-спрея",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/vita_spray.png"
  },
  {
    "id": "vulcano_blueprint",
    "name": "Vulcano Blueprint",
    "ruName": "Чертеж — Вулкан",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/vulcano.png"
  },
  {
    "id": "white_flag_blueprint",
    "name": "White Flag Blueprint",
    "ruName": "Чертеж белого флага",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/white_flag.png"
  },
  {
    "id": "wolfpack_blueprint",
    "name": "Wolfpack Blueprint",
    "ruName": "Чертеж — Волчья стая",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/wolfpack_blueprint.png"
  },
  {
    "id": "yellow_light_stick_blueprint",
    "name": "Yellow Light Stick Blueprint",
    "ruName": "Жёлтая светящаяся палочка",
    "rarity": "Common",
    "type": "Blueprint",
    "source": "Loot",
    "image": "https://cdn.arctracker.io/items/yellow_light_stick.png"
  }
];

export const skillsList: Skill[] = skillsData as Skill[];