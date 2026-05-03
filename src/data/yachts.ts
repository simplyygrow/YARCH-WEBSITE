export interface QuickSpec {
  label: string;
  value: string;
}

export interface SpecDetail {
  label: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  specs: SpecDetail[];
}

export interface Yacht {
  id: string;
  name: string;
  tagline: string;
  quickSpecs: QuickSpec[];
  fullSpecs: SpecCategory[];
}

export const yachts: Yacht[] = [
  {
    id: 'ocean-eclipse',
    name: 'OCEAN ECLIPSE',
    tagline: 'REFINED CRUISING FOR THE DISCERNING FEW',
    quickSpecs: [
      { label: 'LENGTH', value: '28M' },
      { label: 'BEAM', value: '6.8M' },
      { label: 'CRUISING SPEED', value: '22 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 12' },
      { label: 'CABINS', value: '4 EN-SUITE' },
      { label: 'CREW', value: '5' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '28.4 METRES (93.2 FT)' },
          { label: 'BEAM', value: '6.8 METRES (22.3 FT)' },
          { label: 'DRAFT', value: '2.1 METRES (6.9 FT)' },
          { label: 'GROSS TONNAGE', value: '185 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'MAX SPEED', value: '26 KNOTS' },
          { label: 'CRUISING SPEED', value: '22 KNOTS' },
          { label: 'RANGE', value: '1,800 NM AT 12 KNOTS' },
          { label: 'ENGINES', value: '2× CAT C32 ACERT (1,622 HP EACH)' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL MATERIAL', value: 'GRP COMPOSITE' },
          { label: 'SUPERSTRUCTURE', value: 'GRP COMPOSITE' },
          { label: 'NAVAL ARCHITECT', value: 'STUDIO MARCHETTI' },
          { label: 'YEAR BUILT', value: '2019' },
          { label: 'REFIT', value: '2024' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'CABINS', value: '4 EN-SUITE STATEROOMS' },
          { label: 'MASTER SUITE', value: 'FULL-BEAM, KING BED, PRIVATE BALCONY' },
          { label: 'ENTERTAINMENT', value: 'B&O SOUND SYSTEM, 75" CINEMA' },
          { label: 'WATER TOYS', value: 'JETSKI, SEABOB, PADDLEBOARDS, SNORKEL GEAR' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILIZERS', value: 'ZERO-SPEED GYROSCOPIC' },
          { label: 'NAVIGATION', value: 'FURUNO NAVNET TZTOUCH3' },
          { label: 'COMMUNICATION', value: 'VSAT, 4G, STARLINK' },
          { label: 'SAFETY', value: 'SOLAS COMPLIANT, FLIR THERMAL' },
        ],
      },
    ],
  },
  {
    id: 'black-sovereign',
    name: 'BLACK SOVEREIGN',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: [
      { label: 'LENGTH', value: '32M' },
      { label: 'BEAM', value: '7.4M' },
      { label: 'TOP SPEED', value: '28 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 10' },
      { label: 'CABINS', value: '5 EN-SUITE' },
      { label: 'CREW', value: '6' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '32.0 METRES (105 FT)' },
          { label: 'BEAM', value: '7.4 METRES (24.3 FT)' },
          { label: 'DRAFT', value: '2.3 METRES (7.5 FT)' },
          { label: 'GROSS TONNAGE', value: '260 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'MAX SPEED', value: '28 KNOTS' },
          { label: 'CRUISING SPEED', value: '24 KNOTS' },
          { label: 'RANGE', value: '2,200 NM AT 14 KNOTS' },
          { label: 'ENGINES', value: '2× MTU 12V 4000 M93L (2,580 HP EACH)' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL MATERIAL', value: 'STEEL' },
          { label: 'SUPERSTRUCTURE', value: 'ALUMINIUM' },
          { label: 'NAVAL ARCHITECT', value: 'MARCHETTI & PARTNERS' },
          { label: 'YEAR BUILT', value: '2022' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'CABINS', value: '5 EN-SUITE STATEROOMS' },
          { label: 'MASTER SUITE', value: 'FULL-BEAM WITH PRIVATE OFFICE' },
          { label: 'ENTERTAINMENT', value: 'DOLBY ATMOS, 85" OLED CINEMA' },
          { label: 'WATER TOYS', value: '2× JETSKIS, SEABOB, DIVING EQUIPMENT' },
          { label: 'WELLNESS', value: 'SAUNA, COLD PLUNGE, GYM' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILIZERS', value: 'ACTIVE FIN + GYROSCOPIC' },
          { label: 'NAVIGATION', value: 'SIMRAD HALO RADAR, DUAL ECDIS' },
          { label: 'COMMUNICATION', value: 'VSAT, 5G, STARLINK MARITIME' },
          { label: 'SAFETY', value: 'MCA COMPLIANT, NIGHT VISION, CITADEL' },
        ],
      },
    ],
  },
  {
    id: 'azure-horizon',
    name: 'AZURE HORIZON',
    tagline: 'WHERE THE SEA MEETS THE SKY',
    quickSpecs: [
      { label: 'LENGTH', value: '25M' },
      { label: 'BEAM', value: '6.2M' },
      { label: 'RANGE', value: '4100NM' },
      { label: 'GUESTS', value: '8+12 CREW' },
      { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
      { label: 'BUILD', value: '2021' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '25.0 METRES (82 FT)' },
          { label: 'BEAM', value: '6.2 METRES (20.3 FT)' },
          { label: 'DRAFT', value: '1.9 METRES (6.2 FT)' },
          { label: 'GROSS TONNAGE', value: '140 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'MAX SPEED', value: '18 KNOTS' },
          { label: 'CRUISING SPEED', value: '14 KNOTS' },
          { label: 'RANGE', value: '4,100 NM AT 10 KNOTS' },
          { label: 'ENGINES', value: '2× JOHN DEERE 6135 (500 HP EACH)' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL MATERIAL', value: 'STEEL' },
          { label: 'SUPERSTRUCTURE', value: 'ALUMINIUM' },
          { label: 'NAVAL ARCHITECT', value: 'STUDIO MARCHETTI' },
          { label: 'YEAR BUILT', value: '2021' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'CABINS', value: '3 EN-SUITE + 2 CREW CABINS' },
          { label: 'DECK', value: 'SUN DECK WITH JACUZZI & BAR' },
          { label: 'ENTERTAINMENT', value: 'SONOS THROUGHOUT, PROJECTOR' },
          { label: 'WATER TOYS', value: 'TENDER, KAYAKS, SNORKEL GEAR' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILIZERS', value: 'ACTIVE FIN STABILIZERS' },
          { label: 'NAVIGATION', value: 'GARMIN GPSMAP 8616' },
          { label: 'COMMUNICATION', value: 'VSAT, 4G, SSB RADIO' },
          { label: 'SAFETY', value: 'SOLAS COMPLIANT, EPIRB, LIFE RAFTS' },
        ],
      },
    ],
  },
];
