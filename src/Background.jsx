import './Background.css'

const svg = `
<svg class="bgL L-amb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="none">
  <defs>
    <radialGradient id="amb-brass">
      <stop offset="0" stop-color="#C59B27" stop-opacity=".18"/>
      <stop offset=".55" stop-color="#C59B27" stop-opacity=".07"/>
      <stop offset="1" stop-color="#C59B27" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amb-terra">
      <stop offset="0" stop-color="#9E3D28" stop-opacity=".16"/>
      <stop offset=".55" stop-color="#9E3D28" stop-opacity=".06"/>
      <stop offset="1" stop-color="#9E3D28" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amb-cream">
      <stop offset="0" stop-color="#FAF7F2" stop-opacity=".9"/>
      <stop offset=".5" stop-color="#FAF7F2" stop-opacity=".4"/>
      <stop offset="1" stop-color="#FAF7F2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amb-shadow">
      <stop offset="0" stop-color="#1E1B18" stop-opacity=".08"/>
      <stop offset=".6" stop-color="#1E1B18" stop-opacity=".03"/>
      <stop offset="1" stop-color="#1E1B18" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amb-brass-sm">
      <stop offset="0" stop-color="#C59B27" stop-opacity=".14"/>
      <stop offset=".5" stop-color="#C59B27" stop-opacity=".05"/>
      <stop offset="1" stop-color="#C59B27" stop-opacity="0"/>
    </radialGradient>
    <filter id="amb-soft" filterUnits="userSpaceOnUse" x="-400" y="-400" width="2400" height="1800">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>
  <g filter="url(#amb-soft)">
    
    <ellipse cx="1280" cy="160" rx="620" ry="420" fill="url(#amb-brass)"/>
    
    <ellipse cx="200" cy="880" rx="640" ry="400" fill="url(#amb-terra)"/>
    
    <ellipse cx="800" cy="280" rx="560" ry="280" fill="url(#amb-cream)"/>
    
    <ellipse cx="800" cy="1060" rx="1100" ry="220" fill="url(#amb-shadow)"/>
    
    <ellipse cx="80" cy="60" rx="260" ry="200" fill="url(#amb-brass-sm)"/>
    <ellipse cx="1540" cy="940" rx="280" ry="210" fill="url(#amb-brass-sm)"/>
  </g>
</svg>
<svg class="bgL L-paper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="none">
  <defs>
    
    <filter id="paper-grain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB" primitiveUnits="userSpaceOnUse">
      
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" stitchTiles="stitch" result="paper-fine"/>
      <feColorMatrix in="paper-fine" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .7 .7 .7 0 -.85" result="paper-fineA"/>
      <feFlood flood-color="#1E1B18" result="paper-ink"/>
      <feComposite in="paper-ink" in2="paper-fineA" operator="in" result="paper-grainL"/>
      
      <feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="3" seed="3" result="paper-mottle"/>
      <feColorMatrix in="paper-mottle" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .32 .32 .32 0 -.36" result="paper-mottleA"/>
      <feFlood flood-color="#C59B27" result="paper-brass"/>
      <feComposite in="paper-brass" in2="paper-mottleA" operator="in" result="paper-mottleL"/>
      
      <feTurbulence type="turbulence" baseFrequency=".7" numOctaves="1" seed="11" result="paper-fleck"/>
      <feColorMatrix in="paper-fleck" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.6 1.6 1.6 0 -2.3" result="paper-fleckA"/>
      <feComposite in="paper-brass" in2="paper-fleckA" operator="in" result="paper-fleckL"/>
      <feMerge>
        <feMergeNode in="paper-mottleL"/>
        <feMergeNode in="paper-grainL"/>
        <feMergeNode in="paper-fleckL"/>
      </feMerge>
    </filter>
  </defs>

  <rect id="paper-sheet" width="1600" height="1000" fill="#1E1B18" filter="url(#paper-grain)"/>

  
  <g id="paper-fibres" fill="none" stroke="#C59B27" stroke-width=".6" stroke-opacity=".5" stroke-linecap="round">
    <path d="M112 84q14 -6 26 3t22 -4"/>
    <path d="M388 156q-8 12 4 20t18 -6"/>
    <path d="M742 62q16 4 24 -6t30 2"/>
    <path d="M1180 118q-12 9 -2 19t20 4"/>
    <path d="M1462 210q10 -12 22 -4t12 14"/>
    <path d="M236 402q18 -3 22 12t16 6"/>
    <path d="M604 476q-6 -14 8 -18t22 8"/>
    <path d="M918 348q12 8 26 0t14 -12"/>
    <path d="M1324 512q-14 5 -10 18t12 10"/>
    <path d="M86 688q16 10 30 2t20 8"/>
    <path d="M478 744q6 -16 20 -12t10 16"/>
    <path d="M806 842q-16 6 -8 18t22 2"/>
    <path d="M1096 704q14 -10 24 2t18 12"/>
    <path d="M1420 868q-10 12 4 18t24 -4"/>
    <path d="M1522 640q8 -14 20 -8t8 16"/>
    <path d="M324 918q18 2 22 -12t18 -6"/>
    <path d="M1002 946q-6 12 8 16t20 -8"/>
    <path d="M660 236q16 -8 24 4t16 -10"/>
  </g>
</svg>
<svg class="bgL L-frame" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 1000" preserveAspectRatio="none">
  <defs>
    
    <g id="frame-vine-unit" fill="none" stroke="#C59B27" stroke-width=".55" stroke-linecap="round">
      <path d="M0 3 C4 3 5 .8 8 1.2 S12 4.8 16 4.6 S20 3 24 3"/>
      <path d="M5.5 2 q1.2 -2.2 3.6 -1.6 q-1.5 .7 -2.4 2.2z" fill="#C59B27" fill-opacity=".8" stroke-width=".3"/>
      <path d="M17.5 4.2 q1.4 2 3.6 1.4 q-1.4 -.6 -2.4 -2.2z" fill="#C59B27" fill-opacity=".8" stroke-width=".3"/>
      <path d="M8 1.6 q .9 -1.4 1.9 -1.2 M16 4.4 q .9 1.4 1.9 1.2" stroke-width=".35"/>
      <circle cx="12" cy="3" r="1" fill="#C59B27" stroke="none"/>
      <circle cx="12" cy="3" r="1.9" stroke-width=".3"/>
      <path d="M10.9 1.2 l.4 .7 M13.1 1.2 l-.4 .7 M10.9 4.8 l.4 -.7 M13.1 4.8 l-.4 -.7" stroke-width=".3"/>
    </g>
    <pattern id="frame-vine-h" patternUnits="userSpaceOnUse" x="0" y="18" width="24" height="6">
      <use xlink:href="#frame-vine-unit"/>
    </pattern>
    <pattern id="frame-vine-v" patternUnits="userSpaceOnUse" x="18" y="0" width="6" height="24">
      <use xlink:href="#frame-vine-unit" transform="rotate(90) translate(0 -6)"/>
    </pattern>

    
    <g id="frame-petal" fill="#C59B27" fill-opacity=".14" stroke="#C59B27" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 0 C20 -6.5 36 -8.5 52 -2.5 Q56 0 52 2.5 C36 8.5 20 6.5 11 0 Z" stroke-width=".9"/>
      <path d="M14 0 C26 -3.5 38 -4.2 48 -.8" stroke-width=".5" fill="none"/>
      <path d="M14 0 C26 3.5 38 4.2 48 .8" stroke-width=".5" fill="none"/>
      <path d="M22 -1.8 l2.5 -2.6 M30 -2.8 l2.5 -2.8 M38 -3 l2.5 -2.6 M22 1.8 l2.5 2.6 M30 2.8 l2.5 2.8 M38 3 l2.5 2.6" stroke-width=".4" fill="none"/>
      <circle cx="52" cy="0" r="1.1" stroke="none" fill-opacity="1"/>
    </g>
    <g id="frame-petal-s" fill="#C59B27" fill-opacity=".14" stroke="#C59B27" stroke-linecap="round">
      <path d="M11 0 C17 -5 26 -7 34 -2 Q36 0 34 2 C26 7 17 5 11 0 Z" stroke-width=".7"/>
      <path d="M13 0 H31" stroke-width=".4"/>
    </g>

    
    <g id="frame-bud" fill="#C59B27" stroke="#C59B27" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 0 C-9 -7 -10 -22 0 -32 C10 -22 9 -7 0 0 Z" fill-opacity=".12" stroke-width="1"/>
      <path d="M0 -3 C-5 -9 -5 -20 0 -27 C5 -20 5 -9 0 -3 Z" fill-opacity=".25" stroke-width=".6"/>
      <path d="M0 -6 V-24" stroke-width=".5"/>
      <path d="M-2 0 C-8 4 -13 2 -16 -4 C-10 -6 -5 -4 -2 0 Z M2 0 C8 4 13 2 16 -4 C10 -6 5 -4 2 0 Z" fill-opacity=".3" stroke-width=".6"/>
      <path d="M-4 -2 C-7 -10 -7 -20 -3 -28 M4 -2 C7 -10 7 -20 3 -28" stroke-width=".4" fill="none"/>
      <circle cx="0" cy="-32" r="1.2" stroke="none"/>
    </g>

    
    <g id="frame-scroll" fill="none" stroke="#C59B27" stroke-linecap="round" stroke-linejoin="round">
      <path d="M44 32 C56 32 60 15 76 17 C92 19 98 32 110 26 C116 22 113 15 107 16 C102 17 103 23 108 23" stroke-width="1.2"/>
      <path d="M46 34 C58 36 64 20 78 21 C92 23 98 35 110 30" stroke-width=".5"/>
      <path d="M66 18 C68 8 76 5 84 7 C77 9 71 13 66 18 Z" fill="#C59B27" fill-opacity=".18" stroke-width=".7"/>
      <path d="M68 16 C72 11 77 9 82 8" stroke-width=".35"/>
      <path d="M90 20 C93 12 100 9 106 10 C100 12 95 16 90 20 Z" fill="#C59B27" fill-opacity=".18" stroke-width=".7"/>
      <path d="M58 26 C56 32 60 37 66 36 C61 35 58 31 58 26 Z" fill="#C59B27" fill-opacity=".18" stroke-width=".6"/>
      <path d="M100 30 C103 37 110 39 116 36 C110 36 104 34 100 30 Z" fill="#C59B27" fill-opacity=".18" stroke-width=".6"/>
      <path d="M116 26 C122 22 130 21 138 22" stroke-width=".8"/>
      <path d="M118 21 q4 -5 10 -4 q-5 1 -10 4z" fill="#C59B27" fill-opacity=".5" stroke-width=".4"/>
      <circle cx="122" cy="25" r=".8" fill="#C59B27" stroke="none"/>
      <circle cx="130" cy="24" r=".7" fill="#C59B27" stroke="none"/>
      <circle cx="108" cy="20" r="2.3" fill="#9E3D28" stroke="none"/>
      <circle cx="108" cy="20" r="3.6" stroke-width=".5"/>
    </g>

    
    <g id="frame-corner" fill="none" stroke="#C59B27" stroke-linecap="round" stroke-linejoin="round">
      
      <path d="M0 18 A18 18 0 0 0 18 0" stroke-width=".6"/>
      <path d="M0 24 A24 24 0 0 0 24 0" stroke-width=".6"/>
      <path d="M6 6 m-2 2 a3 3 0 1 1 4 -4" stroke-width=".6"/>
      <path d="M5 21 A16 16 0 0 0 21 5" stroke-width=".4" stroke-dasharray=".6 2.2"/>
      
      <path d="M98 34 A64 64 0 0 1 34 98" stroke-width=".45" stroke-dasharray="1 2.6"/>
      <path d="M102 34 A68 68 0 0 1 34 102" stroke-width=".8"/>
      <path d="M98 30 q4 -2 6 -8 M30 98 q-2 4 -8 6" stroke-width=".6"/>
      
      <use xlink:href="#frame-petal" transform="translate(34 34) rotate(10)"/>
      <use xlink:href="#frame-petal" transform="translate(34 34) rotate(27.5)"/>
      <use xlink:href="#frame-petal" transform="translate(34 34) rotate(45)"/>
      <use xlink:href="#frame-petal" transform="translate(34 34) rotate(62.5)"/>
      <use xlink:href="#frame-petal" transform="translate(34 34) rotate(80)"/>
      <use xlink:href="#frame-petal-s" transform="translate(34 34) rotate(-4)"/>
      <use xlink:href="#frame-petal-s" transform="translate(34 34) rotate(94)"/>
      
      <use xlink:href="#frame-petal-s" transform="translate(34 34) rotate(25) scale(.55)"/>
      <use xlink:href="#frame-petal-s" transform="translate(34 34) rotate(45) scale(.55)"/>
      <use xlink:href="#frame-petal-s" transform="translate(34 34) rotate(65) scale(.55)"/>
      
      <circle cx="34" cy="34" r="10.5" stroke-width="1.2" fill="#FAF7F2"/>
      <circle cx="34" cy="34" r="7.5" stroke-width=".5" stroke-dasharray="1 1.6"/>
      <path d="M34 26.5 l2 5.3 5.5 2.2 -5.5 2.2 -2 5.3 -2 -5.3 -5.5 -2.2 5.5 -2.2z" stroke-width=".6" fill="#C59B27" fill-opacity=".25"/>
      <circle cx="34" cy="34" r="2.6" fill="#9E3D28" stroke="none"/>
      
      <g fill="#C59B27" stroke="none">
        <circle cx="61.4" cy="42.8" r=".9"/><circle cx="57.6" cy="49.3" r=".9"/><circle cx="52.4" cy="55" r=".9"/><circle cx="46.1" cy="59.3" r=".9"/>
      </g>
      
      <path d="M87.8 38.7 A54 54 0 0 1 38.7 87.8" stroke-width=".45" stroke-dasharray="1.2 2"/>
      <path d="M91.7 39.6 A58 58 0 0 1 39.6 91.7" stroke-width=".7"/>
      <path d="M74 74 L98 98" stroke-width="1.1"/>
      <path d="M80 80 C84 74 90 74 94 78 C90 78 86 80 80 80Z M80 80 C74 84 74 90 78 94 C78 90 80 86 80 80Z" fill="#C59B27" fill-opacity=".3" stroke-width=".5"/>
      <path d="M88 84 C92 80 98 82 100 86 C96 84 92 84 88 84Z M84 88 C80 92 82 98 86 100 C84 96 84 92 84 88Z" fill="#C59B27" fill-opacity=".2" stroke-width=".45"/>
      <use xlink:href="#frame-bud" transform="translate(98 98) rotate(135) scale(1.1)"/>
      
      <path d="M92 84 C100 72 116 72 122 82 C110 80 100 82 92 84 Z" fill="#C59B27" fill-opacity=".14" stroke-width=".7"/>
      <path d="M84 92 C72 100 72 116 82 122 C80 110 82 100 84 92 Z" fill="#C59B27" fill-opacity=".14" stroke-width=".7"/>
      <path d="M96 82 C104 76 112 76 118 80 M82 96 C76 104 76 112 80 118" stroke-width=".35"/>
      <path d="M104 86 q6 -6 14 -4 q-7 1 -14 4z M86 104 q-6 6 -4 14 q1 -7 4 -14z" fill="#C59B27" fill-opacity=".5" stroke-width=".35"/>
      
      <use xlink:href="#frame-scroll"/>
      <use xlink:href="#frame-scroll" transform="matrix(0 1 1 0 0 0)"/>
      
      <path d="M138 22 C150 24 158 20 166 21 M22 138 C24 150 20 158 21 166" stroke-width=".5"/>
    </g>

    
    <g id="frame-cartouche" fill="none" stroke="#C59B27" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-46 0 C-34 -10 34 -10 46 0 C34 10 -34 10 -46 0 Z" stroke-width="1.2" fill="#FAF7F2"/>
      <path d="M-38 0 C-28 -6 28 -6 38 0 C28 6 -28 6 -38 0 Z" stroke-width=".55"/>
      <path d="M-30 0 C-22 -3.5 22 -3.5 30 0 C22 3.5 -22 3.5 -30 0 Z" stroke-width=".4" stroke-dasharray=".8 1.6"/>
      
      <circle r="4.8" stroke-width=".6"/>
      <path d="M0 -4.8 C1.8 -3 1.8 -1.5 0 0 C-1.8 -1.5 -1.8 -3 0 -4.8Z M4.8 0 C3 1.8 1.5 1.8 0 0 C1.5 -1.8 3 -1.8 4.8 0Z M0 4.8 C-1.8 3 -1.8 1.5 0 0 C1.8 1.5 1.8 3 0 4.8Z M-4.8 0 C-3 -1.8 -1.5 -1.8 0 0 C-1.5 1.8 -3 1.8 -4.8 0Z" stroke-width=".5" fill="#C59B27" fill-opacity=".2"/>
      <path d="M3.4 -3.4 L1.6 -1.6 M3.4 3.4 L1.6 1.6 M-3.4 3.4 L-1.6 1.6 M-3.4 -3.4 L-1.6 -1.6" stroke-width=".5"/>
      <circle r="1.3" fill="#C59B27" stroke="none"/>
      
      <path d="M-10 -1 C-16 -4 -22 -2 -26 1 M-10 1 C-16 4 -22 2 -26 -1 M10 -1 C16 -4 22 -2 26 1 M10 1 C16 4 22 2 26 -1" stroke-width=".5"/>
      <path d="M-17 -2.6 q-3 -3 -7 -1.4 q3 .6 7 1.4z M17 -2.6 q3 -3 7 -1.4 q-3 .6 -7 1.4z M-17 2.6 q-3 3 -7 1.4 q3 -.6 7 -1.4z M17 2.6 q3 3 7 1.4 q-3 -.6 -7 -1.4z" fill="#C59B27" fill-opacity=".6" stroke-width=".3"/>
      <circle cx="-30" cy="0" r=".9" fill="#C59B27" stroke="none"/>
      <circle cx="30" cy="0" r=".9" fill="#C59B27" stroke="none"/>
      
      <path d="M-46 0 H-52 M46 0 H52" stroke-width="1.2"/>
      <path d="M-52 0 l-4 -3 -4 3 4 3z M52 0 l4 -3 4 3 -4 3z" stroke-width=".7" fill="#C59B27" fill-opacity=".3"/>
      <path d="M-60 -3 V3 M60 -3 V3" stroke-width=".6"/>
      
      <path d="M-14 -7.5 C-18 -14 -26 -14 -30 -9 C-24 -10 -18 -9 -14 -7.5 Z M14 -7.5 C18 -14 26 -14 30 -9 C24 -10 18 -9 14 -7.5 Z M-14 7.5 C-18 14 -26 14 -30 9 C-24 10 -18 9 -14 7.5 Z M14 7.5 C18 14 26 14 30 9 C24 10 18 9 14 7.5 Z" stroke-width=".6" fill="#C59B27" fill-opacity=".14"/>
      <path d="M0 -9 C-2 -12 -1 -15 0 -17 C1 -15 2 -12 0 -9 Z M0 9 C-2 12 -1 15 0 17 C1 15 2 12 0 9 Z" stroke-width=".6" fill="#C59B27" fill-opacity=".3"/>
    </g>
  </defs>

  
  <g fill="none" stroke="#C59B27" stroke-linecap="round">
    <path stroke-width=".7" d="M140 18 H738 M862 18 H1460 M140 982 H738 M862 982 H1460 M18 140 V438 M18 562 V860 M1582 140 V438 M1582 562 V860"/>
    <path stroke-width=".7" d="M140 24 H738 M862 24 H1460 M140 976 H738 M862 976 H1460 M24 140 V438 M24 562 V860 M1576 140 V438 M1576 562 V860"/>
    <path stroke-width=".35" stroke-dasharray="1 4" d="M140 30 H738 M862 30 H1460 M140 970 H738 M862 970 H1460 M30 140 V438 M30 562 V860 M1570 140 V438 M1570 562 V860"/>
  </g>

  
  <rect x="140" y="18" width="598" height="6" fill="url(#frame-vine-h)"/>
  <rect x="862" y="18" width="598" height="6" fill="url(#frame-vine-h)"/>
  <rect x="140" y="976" width="598" height="6" fill="url(#frame-vine-h)"/>
  <rect x="862" y="976" width="598" height="6" fill="url(#frame-vine-h)"/>
  <rect x="18" y="140" width="6" height="298" fill="url(#frame-vine-v)"/>
  <rect x="18" y="562" width="6" height="298" fill="url(#frame-vine-v)"/>
  <rect x="1576" y="140" width="6" height="298" fill="url(#frame-vine-v)"/>
  <rect x="1576" y="562" width="6" height="298" fill="url(#frame-vine-v)"/>

  
  <use xlink:href="#frame-corner"/>
  <use xlink:href="#frame-corner" transform="translate(1600 0) scale(-1 1)"/>
  <use xlink:href="#frame-corner" transform="translate(0 1000) scale(1 -1)"/>
  <use xlink:href="#frame-corner" transform="translate(1600 1000) scale(-1 -1)"/>

  
  <use xlink:href="#frame-cartouche" transform="translate(800 21)"/>
  <use xlink:href="#frame-cartouche" transform="translate(800 979) scale(1 -1)"/>
  <use xlink:href="#frame-cartouche" transform="translate(21 500) rotate(-90)"/>
  <use xlink:href="#frame-cartouche" transform="translate(1579 500) rotate(90)"/>
</svg>
<svg class="bgL L-pich" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
<defs>
<g id="pich-petal"><path d="M0 0C-19-14-22-50 0-74C22-50 19-14 0 0Z" fill="#FAF7F2" stroke="#C59B27" stroke-width="1.2"/><path d="M0-8C-12-20-14-46 0-64C14-46 12-20 0-8" fill="none" stroke="#C59B27" stroke-width=".6"/><path d="M-5-16Q-7-40-3-56M5-16Q7-40 3-56" fill="none" stroke="#C59B27" stroke-width=".4"/><path d="M0-16V-54" stroke="#C59B27" stroke-width=".5"/><path d="M0-74C-5-66-5-58 0-52C5-58 5-66 0-74Z" fill="#9E3D28" fill-opacity=".75"/></g>
<path id="pich-sepal" d="M0 0C-8-14-9-36 0-52C9-36 8-14 0 0Z" fill="#FAF7F2" stroke="#C59B27" stroke-width=".9"/>
<path id="pich-leafo" d="M24.2 -97.0Q39.0 -90.8 54.2 -85.3Q68.2 -76.6 76.8 -62.4Q85.7 -49.2 93.6 -35.3Q100.6 -20.4 100.9 -3.9Q98.1 12.0 95.0 27.6Q92.6 44.1 82.3 56.9Q71.2 68.5 60.6 80.8Q47.6 90.9 31.3 93.9Q15.8 97.5 0.0 100.1Q-16.4 101.3 -32.0 95.8Q-45.9 87.5 -59.4 79.1Q-73.9 71.1 -82.3 56.9Q-89.2 42.4 -97.0 28.2Q-101.8 12.5 -98.8 -3.8Q-96.8 -19.6 -93.7 -35.3Q-89.0 -51.1 -78.4 -63.7Q-65.7 -73.8 -53.1 -83.5Q-40.5 -94.3 -24.2 -97.1Q-4-40 0-14Q4-40 24.2 -97.0Z"/>
<path id="pich-vein" d="M0-6Q7-46 4-78M4-78Q2-86 0-93M4-78Q7-86 10-92" fill="none" stroke="#C59B27" stroke-width=".6"/>
<path id="pich-vein2" d="M0-40Q-3-64-2-84M-2-84L-5-92" fill="none" stroke="#C59B27" stroke-width=".4"/>
<g id="pich-leaf"><use href="#pich-leafo" fill="#FAF7F2" stroke="#C59B27" stroke-width="1.4"/><use href="#pich-leafo" fill="none" stroke="#C59B27" stroke-width="1.3" stroke-dasharray="0 4.2" stroke-linecap="round" transform="scale(.965)"/><use href="#pich-leafo" fill="none" stroke="#C59B27" stroke-width=".6" transform="scale(.91)"/><use href="#pich-leafo" fill="none" stroke="#C59B27" stroke-width=".4" stroke-dasharray="3 3" transform="scale(.86)"/><use href="#pich-vein" transform="rotate(28)"/><use href="#pich-vein2" transform="rotate(39)"/><use href="#pich-vein" transform="rotate(50)"/><use href="#pich-vein2" transform="rotate(61)"/><use href="#pich-vein" transform="rotate(72)"/><use href="#pich-vein2" transform="rotate(83)"/><use href="#pich-vein" transform="rotate(94)"/><use href="#pich-vein2" transform="rotate(105)"/><use href="#pich-vein" transform="rotate(116)"/><use href="#pich-vein2" transform="rotate(127)"/><use href="#pich-vein" transform="rotate(138)"/><use href="#pich-vein2" transform="rotate(149)"/><use href="#pich-vein" transform="rotate(160)"/><use href="#pich-vein2" transform="rotate(171)"/><use href="#pich-vein" transform="rotate(182)"/><use href="#pich-vein2" transform="rotate(193)"/><use href="#pich-vein" transform="rotate(204)"/><use href="#pich-vein2" transform="rotate(215)"/><use href="#pich-vein" transform="rotate(226)"/><use href="#pich-vein2" transform="rotate(237)"/><use href="#pich-vein" transform="rotate(248)"/><use href="#pich-vein2" transform="rotate(259)"/><use href="#pich-vein" transform="rotate(270)"/><use href="#pich-vein2" transform="rotate(281)"/><use href="#pich-vein" transform="rotate(292)"/><use href="#pich-vein2" transform="rotate(303)"/><use href="#pich-vein" transform="rotate(314)"/><use href="#pich-vein2" transform="rotate(325)"/><circle r="7" fill="#FAF7F2" stroke="#C59B27" stroke-width="1"/><circle r="3" fill="#9E3D28"/><circle r="11" fill="none" stroke="#C59B27" stroke-width=".5" stroke-dasharray="0 3" stroke-linecap="round"/><path d="M94 34.2Q86 70 50 86.6Q68 62 70 38Q82 30 94 34.2Z" fill="#9E3D28" fill-opacity=".38" stroke="#C59B27" stroke-width="1.1"/><path d="M86 42Q80 62 60 80M80 40Q76 58 62 72M74 40Q72 54 62 64" fill="none" stroke="#C59B27" stroke-width=".5"/><path d="M50 86.6Q72 72 86 50" fill="none" stroke="#C59B27" stroke-width=".9" stroke-dasharray="0 3.5" stroke-linecap="round"/></g>
<g id="pich-top"><circle r="112" fill="none" stroke="#C59B27" stroke-width=".5" stroke-dasharray="1 5"/><use href="#pich-petal" transform="rotate(0.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(22.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(45.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(67.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(90.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(112.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(135.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(157.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(180.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(202.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(225.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(247.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(270.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(292.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(315.0) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(337.5) translate(0 -20) scale(1.15)"/><use href="#pich-petal" transform="rotate(15) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(45) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(75) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(105) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(135) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(165) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(195) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(225) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(255) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(285) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(315) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(345) translate(0 -14) scale(.85)"/><use href="#pich-petal" transform="rotate(0) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(45) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(90) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(135) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(180) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(225) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(270) translate(0 -8) scale(.55)"/><use href="#pich-petal" transform="rotate(315) translate(0 -8) scale(.55)"/><circle r="15" fill="#C59B27" fill-opacity=".3" stroke="#C59B27" stroke-width="1.2"/><circle r="10" fill="none" stroke="#C59B27" stroke-width=".6"/><circle cx="0.0" cy="-7.0" r="1.9" fill="#9E3D28"/><circle cx="6.1" cy="-3.5" r="1.9" fill="#9E3D28"/><circle cx="6.1" cy="3.5" r="1.9" fill="#9E3D28"/><circle cx="0.0" cy="7.0" r="1.9" fill="#9E3D28"/><circle cx="-6.1" cy="3.5" r="1.9" fill="#9E3D28"/><circle cx="-6.1" cy="-3.5" r="1.9" fill="#9E3D28"/><circle r="1.9" fill="#9E3D28"/></g>
<g id="pich-side"><path d="M-22 0Q0 16 22 0Q0 8-22 0Z" fill="#C59B27" fill-opacity=".35" stroke="#C59B27" stroke-width="1"/><use href="#pich-petal" transform="rotate(-84) scale(0.75)"/><use href="#pich-petal" transform="rotate(84) scale(0.75)"/><use href="#pich-petal" transform="rotate(-62) scale(0.9)"/><use href="#pich-petal" transform="rotate(62) scale(0.9)"/><use href="#pich-petal" transform="rotate(-40) scale(1)"/><use href="#pich-petal" transform="rotate(40) scale(1)"/><use href="#pich-petal" transform="rotate(-18) scale(1.05)"/><use href="#pich-petal" transform="rotate(18) scale(1.05)"/><use href="#pich-petal" transform="translate(0 4) rotate(-50) scale(0.85)"/><use href="#pich-petal" transform="translate(0 4) rotate(50) scale(0.85)"/><use href="#pich-petal" transform="translate(0 4) rotate(-28) scale(0.95)"/><use href="#pich-petal" transform="translate(0 4) rotate(28) scale(0.95)"/><use href="#pich-petal" transform="translate(0 4) rotate(-8) scale(0.9)"/><use href="#pich-petal" transform="translate(0 4) rotate(8) scale(0.9)"/><path d="M-6 -8Q0-20 6-8" fill="none" stroke="#C59B27" stroke-width=".6"/></g>
<g id="pich-half"><use href="#pich-sepal" transform="rotate(-44) scale(0.8)"/><use href="#pich-sepal" transform="rotate(44) scale(0.8)"/><use href="#pich-petal" transform="rotate(-26) scale(0.9)"/><use href="#pich-petal" transform="rotate(26) scale(0.9)"/><use href="#pich-petal" transform="rotate(-10) scale(1)"/><use href="#pich-petal" transform="rotate(10) scale(1)"/><use href="#pich-petal" transform="translate(0 3) rotate(-16) scale(0.85)"/><use href="#pich-petal" transform="translate(0 3) rotate(16) scale(0.85)"/><use href="#pich-petal" transform="translate(0 3) rotate(0) scale(0.8)"/><path d="M-16 0Q0 10 16 0" fill="none" stroke="#C59B27" stroke-width="1"/></g>
<g id="pich-bud"><use href="#pich-sepal" transform="rotate(-22) scale(0.7)"/><use href="#pich-sepal" transform="rotate(22) scale(0.7)"/><use href="#pich-petal" transform="rotate(-9) scale(0.9)"/><use href="#pich-petal" transform="rotate(9) scale(0.9)"/><use href="#pich-petal" transform="rotate(0) scale(0.95)"/><path d="M-3-30Q0-58 3-30" fill="none" stroke="#C59B27" stroke-width=".5"/><path d="M-12 0Q0 8 12 0" fill="none" stroke="#C59B27" stroke-width="1"/></g>
<g id="pich-ripple" fill="none" stroke="#C59B27"><ellipse rx="13" ry="3.8" stroke-width=".7"/><ellipse rx="26" ry="7.5" stroke-width=".6" stroke-dasharray="30 8"/><ellipse rx="40" ry="11.5" stroke-width=".55" stroke-dasharray="24 12"/><ellipse rx="56" ry="16" stroke-width=".5" stroke-dasharray="18 18"/></g>
<path id="pich-wave" d="M0 0q15-4 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" fill="none" stroke="#C59B27" stroke-width=".65"/>
<g id="pich-fish"><path d="M0 0C8-11 30-13 44-3L57-13 52 0 57 13 44 3C30 13 8 11 0 0Z" fill="#FAF7F2" stroke="#C59B27" stroke-width="1.2"/><path d="M10-6C14-1 14 1 10 6M18-8C22-2 22 2 18 8M26-9C30-2 30 2 26 9M34-7C37-1 37 1 34 7M14-2C17 0 17 0 14 2M22-3C25 0 25 0 22 3M30-3C33 0 33 0 30 3" fill="none" stroke="#C59B27" stroke-width=".55"/><path d="M14-8C18-18 30-19 36-10" fill="none" stroke="#9E3D28" stroke-width=".9"/><path d="M18-9V-15M24-10V-17M30-10V-16" stroke="#9E3D28" stroke-width=".4"/><path d="M20 8C24 15 31 15 34 8" fill="none" stroke="#9E3D28" stroke-width=".8"/><path d="M44-3L52 0 44 3M48-6L53-11M48 6L53 11" fill="none" stroke="#C59B27" stroke-width=".5"/><path d="M0 0C4-2 7-2 9 0" fill="none" stroke="#C59B27" stroke-width=".6"/><circle cx="7" cy="-2.5" r="1.7" fill="#1E1B18"/></g>
<g id="pich-dragonfly" fill="none" stroke="#C59B27"><path d="M0 3V48" stroke-width="1.8" stroke-linecap="round"/><path d="M-1.8 14h3.6M-1.8 20h3.6M-1.8 26h3.6M-1.8 32h3.6M-1.8 38h3.6M-1.8 44h3.6" stroke="#9E3D28" stroke-width=".7"/><g transform="translate(0 7) rotate(-14)"><ellipse cx="-20" rx="20" ry="4.6" stroke-width=".9" fill="#C59B27" fill-opacity=".08"/><path d="M-3 0H-38M-6-1.5Q-20-3-36-1M-6 1.5Q-20 3-36 1M-12-3.5V3.5M-20-4.2V4.2M-28-3.4V3.4" stroke-width=".4"/></g><g transform="translate(0 7) rotate(14) scale(-1 1)"><ellipse cx="-20" rx="20" ry="4.6" stroke-width=".9" fill="#C59B27" fill-opacity=".08"/><path d="M-3 0H-38M-6-1.5Q-20-3-36-1M-6 1.5Q-20 3-36 1M-12-3.5V3.5M-20-4.2V4.2M-28-3.4V3.4" stroke-width=".4"/></g><g transform="translate(0 13) rotate(-34)"><ellipse cx="-17" rx="17" ry="4" stroke-width=".9" fill="#C59B27" fill-opacity=".08"/><path d="M-3 0H-32M-6-1.3Q-17-2.6-30-1M-10-3V3M-18-3.6V3.6M-25-2.6V2.6" stroke-width=".4"/></g><g transform="translate(0 13) rotate(34) scale(-1 1)"><ellipse cx="-17" rx="17" ry="4" stroke-width=".9" fill="#C59B27" fill-opacity=".08"/><path d="M-3 0H-32M-6-1.3Q-17-2.6-30-1M-10-3V3M-18-3.6V3.6M-25-2.6V2.6" stroke-width=".4"/></g><circle cy="-1" r="3.4" fill="#FAF7F2" stroke-width="1"/><circle cx="-2" cy="-2" r="1.2" fill="#1E1B18" stroke="none"/><circle cx="2" cy="-2" r="1.2" fill="#1E1B18" stroke="none"/></g>
<g id="pich-bee" fill="none" stroke="#C59B27"><ellipse cx="-1" cy="-6.5" rx="6.5" ry="3" transform="rotate(-25)" stroke-width=".6"/><ellipse cx="4" cy="-6" rx="5" ry="2.4" transform="rotate(-12)" stroke-width=".6"/><ellipse rx="7.5" ry="4.5" fill="#FAF7F2" stroke-width="1"/><path d="M-3-4.2V4.2M0-4.5V4.5M3-4.2V4.2" stroke="#9E3D28" stroke-width="1.1"/><circle cx="-9.5" cy="-.5" r="2.6" fill="#C59B27" fill-opacity=".5" stroke-width=".8"/><path d="M7.5 0L11.5 1.5M-11-2.5Q-13-6-15.5-7.5M-11-2.5Q-14.5-4-17-4" stroke-width=".5"/></g>
<g id="pich-weed" fill="none" stroke="#C59B27" stroke-width=".8"><path d="M0 0C-3-15 4-25 0-40M0 0C3-12-2-22 4-34M0 0C-6-10-8-20-11-28M0 0C6-8 9-16 12-22"/></g>
</defs>
<use href="#pich-wave" transform="translate(-10 698) scale(1 1)"/>
<use href="#pich-wave" transform="translate(-4 683) scale(0.95 1)"/>
<use href="#pich-wave" transform="translate(-12 668) scale(0.9 1)"/>
<use href="#pich-wave" transform="translate(-6 653) scale(0.84 1)"/>
<use href="#pich-wave" transform="translate(-14 638) scale(0.78 1)"/>
<use href="#pich-wave" transform="translate(-2 623) scale(0.7 1)"/>
<use href="#pich-wave" transform="translate(-10 608) scale(0.62 1)"/>
<use href="#pich-wave" transform="translate(-6 593) scale(0.52 1)"/>
<use href="#pich-wave" transform="translate(-12 578) scale(0.42 1)"/>
<use href="#pich-wave" transform="translate(-4 563) scale(0.3 1)"/>
<use href="#pich-ripple" transform="translate(70 690) scale(1)"/>
<use href="#pich-ripple" transform="translate(130 700) scale(0.9)"/>
<use href="#pich-ripple" transform="translate(40 700) scale(0.8)"/>
<use href="#pich-ripple" transform="translate(200 690) scale(1)"/>
<use href="#pich-ripple" transform="translate(100 700) scale(0.7)"/>
<use href="#pich-ripple" transform="translate(300 700) scale(0.8)"/>
<use href="#pich-ripple" transform="translate(240 700) scale(0.9)"/>
<use href="#pich-ripple" transform="translate(20 700) scale(0.6)"/>
<use href="#pich-weed" transform="translate(360 700) scale(0.9)"/>
<use href="#pich-weed" transform="translate(415 700) scale(0.7)"/>
<use href="#pich-weed" transform="translate(15 660) scale(0.6)"/>
<use href="#pich-weed" transform="translate(455 700) scale(0.55)"/>
<use href="#pich-fish" transform="translate(22 645) rotate(-8) scale(1.1)"/>
<use href="#pich-fish" transform="translate(160 688) rotate(188) scale(.95)"/>
<g fill="none" stroke="#C59B27" stroke-width="3" stroke-linecap="round"><path d="M70 690C90 600 150 480 200 420S262 330 270 300"/><path d="M130 700C200 640 300 560 360 440S440 280 470 205"/><path d="M40 700C60 600 90 450 110 380S150 290 150 235"/><path d="M330 600C400 560 470 500 520 450S556 400 560 375"/><path d="M200 690C300 650 420 520 500 380S590 200 612 100"/><path d="M100 700C120 640 140 580 160 520"/><path d="M300 700C310 670 330 630 345 600"/><path d="M20 700C10 600 40 450 55 372"/><path d="M240 700C300 640 380 540 430 475"/><path d="M200 470C210 450 225 435 232 420"/><path d="M360 440C380 420 395 400 405 378"/><path d="M540 300C560 280 585 262 598 240"/><path d="M480 700C500 640 510 600 520 542"/></g>
<g fill="none" stroke="#FAF7F2" stroke-width=".9"><path d="M70 690C90 600 150 480 200 420S262 330 270 300"/><path d="M130 700C200 640 300 560 360 440S440 280 470 205"/><path d="M40 700C60 600 90 450 110 380S150 290 150 235"/><path d="M330 600C400 560 470 500 520 450S556 400 560 375"/><path d="M200 690C300 650 420 520 500 380S590 200 612 100"/><path d="M100 700C120 640 140 580 160 520"/><path d="M300 700C310 670 330 630 345 600"/><path d="M20 700C10 600 40 450 55 372"/><path d="M240 700C300 640 380 540 430 475"/><path d="M200 470C210 450 225 435 232 420"/><path d="M360 440C380 420 395 400 405 378"/><path d="M540 300C560 280 585 262 598 240"/><path d="M480 700C500 640 510 600 520 542"/></g>
<g fill="none" stroke="#C59B27" stroke-width="1.6" stroke-dasharray="0 9" stroke-linecap="round" transform="translate(2.6 0)"><path d="M70 690C90 600 150 480 200 420S262 330 270 300"/><path d="M130 700C200 640 300 560 360 440S440 280 470 205"/><path d="M40 700C60 600 90 450 110 380S150 290 150 235"/><path d="M330 600C400 560 470 500 520 450S556 400 560 375"/><path d="M200 690C300 650 420 520 500 380S590 200 612 100"/></g>
<use href="#pich-leaf" transform="translate(55 372) scale(1 .82) rotate(30) scale(0.68)"/>
<use href="#pich-leaf" transform="translate(430 475) scale(1 .82) rotate(-40) scale(0.52)"/>
<use href="#pich-leaf" transform="translate(520 542) scale(1 .82) rotate(15) scale(0.42)"/>
<use href="#pich-leaf" transform="translate(340 608) scale(1 .82) rotate(-15) scale(0.8)"/>
<use href="#pich-leaf" transform="translate(150 545) scale(1 .82) rotate(8) scale(0.95)"/>
<use href="#pich-bud" transform="translate(232 420) rotate(-22) scale(.7)"/>
<use href="#pich-bud" transform="translate(560 375) rotate(10)"/>
<use href="#pich-half" transform="translate(150 235) rotate(-10)"/>
<use href="#pich-half" transform="translate(612 100) rotate(16) scale(.75)"/>
<use href="#pich-side" transform="translate(470 205) rotate(12)"/>
<use href="#pich-half" transform="translate(405 378) rotate(14) scale(.62)"/>
<use href="#pich-bud" transform="translate(598 240) rotate(24) scale(.6)"/>
<use href="#pich-top" transform="translate(270 295) rotate(8)"/>
<use href="#pich-dragonfly" transform="translate(535 72) rotate(30)"/>
<use href="#pich-dragonfly" transform="translate(330 85) rotate(-32) scale(.85)"/>
<use href="#pich-bee" transform="translate(205 140) rotate(-15)"/>
<use href="#pich-bee" transform="translate(575 300) rotate(20) scale(.9)"/>
<use href="#pich-bee" transform="translate(320 470) rotate(-40) scale(.8)"/>
</svg>
<svg class="bgL L-tr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <use xlink:href="#pich-top" transform="translate(160 160) rotate(15)"/>
</svg>
<svg class="bgL L-dust" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 1000" preserveAspectRatio="none">
<defs>

<symbol id="dust-s4" viewBox="-10 -10 20 20" overflow="visible">
<path d="M0-9C.6-3 3-.6 9 0 3 .6 .6 3 0 9-.6 3-3 .6-9 0-3-.6-.6-3 0-9Z" fill="#C59B27"/>
<path d="M0-5.5C.35-1.8 1.8-.35 5.5 0 1.8 .35 .35 1.8 0 5.5-.35 1.8-1.8 .35-5.5 0-1.8-.35-.35-1.8 0-5.5Z" fill="#C59B27" transform="rotate(45)" fill-opacity=".55"/>
</symbol>

<symbol id="dust-s6" viewBox="-10 -10 20 20" overflow="visible">
<g id="dust-s6l"><path d="M0-8C.45-2 .9-.9 1.6 0 .9 .9 .45 2 0 8-.45 2-.9 .9-1.6 0-.9-.9-.45-2 0-8Z" fill="#C59B27"/></g>
<use xlink:href="#dust-s6l" transform="rotate(60)"/>
<use xlink:href="#dust-s6l" transform="rotate(120)"/>
<circle r="1.1" fill="#FAF7F2"/>
</symbol>

<symbol id="dust-rose" viewBox="-10 -10 20 20" overflow="visible">
<g id="dust-rp"><path d="M0-2.2C1.6-4 2.2-6.4 0-8.6-2.2-6.4-1.6-4 0-2.2Z" fill="none" stroke="#C59B27" stroke-width=".7"/></g>
<use xlink:href="#dust-rp" transform="rotate(45)"/>
<use xlink:href="#dust-rp" transform="rotate(90)"/>
<use xlink:href="#dust-rp" transform="rotate(135)"/>
<use xlink:href="#dust-rp" transform="rotate(180)"/>
<use xlink:href="#dust-rp" transform="rotate(225)"/>
<use xlink:href="#dust-rp" transform="rotate(270)"/>
<use xlink:href="#dust-rp" transform="rotate(315)"/>
<circle r="3.2" fill="none" stroke="#C59B27" stroke-width=".6" stroke-opacity=".7"/>
<circle r="1.5" fill="#C59B27"/>
<g fill="#C59B27" fill-opacity=".8"><circle cx="0" cy="-9.6" r=".55"/><circle cx="9.6" cy="0" r=".55"/><circle cx="0" cy="9.6" r=".55"/><circle cx="-9.6" cy="0" r=".55"/></g>
</symbol>

<symbol id="dust-ring" viewBox="-10 -10 20 20" overflow="visible">
<circle r="3.4" fill="none" stroke="#C59B27" stroke-width=".8"/><circle r="1.2" fill="none" stroke="#C59B27" stroke-width=".5" stroke-opacity=".6"/>
</symbol>
</defs>


<g id="dust-tl">
<use xlink:href="#dust-rose" x="118" y="92" width="23.2" height="23.2" transform="translate(-11.6 -11.6)"/>
<use xlink:href="#dust-rose" x="52" y="238" width="17.4" height="17.4" transform="translate(-8.7 -8.7)" opacity=".7"/>
<use xlink:href="#dust-s4" x="40" y="46" width="29" height="29" transform="translate(-14.5 -14.5)" opacity=".9"/>
<use xlink:href="#dust-s4" x="182" y="150" width="18.85" height="18.85" transform="translate(-9.425 -9.425)" opacity=".75"/>
<use xlink:href="#dust-s4" x="272" y="58" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".6"/>
<use xlink:href="#dust-s4" x="92" y="176" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".85"/>
<use xlink:href="#dust-s4" x="330" y="120" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".5"/>
<use xlink:href="#dust-s6" x="210" y="34" width="20.3" height="20.3" transform="translate(-10.15 -10.15)" opacity=".8"/>
<use xlink:href="#dust-s6" x="150" y="256" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".55"/>
<use xlink:href="#dust-s6" x="26" y="130" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".7"/>
<use xlink:href="#dust-ring" x="240" y="106" width="26.1" height="26.1" transform="translate(-13.05 -13.05)" opacity=".65"/>
<use xlink:href="#dust-ring" x="72" y="292" width="17.4" height="17.4" transform="translate(-8.7 -8.7)" opacity=".45"/>
<use xlink:href="#dust-ring" x="300" y="200" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".5"/>
<g fill="#C59B27">
<circle cx="64" cy="82" r="2.1" opacity=".8"/><circle cx="150" cy="58" r="1.4" opacity=".6"/><circle cx="118" cy="132" r="2.6" opacity=".9"/>
<circle cx="198" cy="212" r="1.7" opacity=".55"/><circle cx="34" cy="196" r="2.3" opacity=".7"/><circle cx="262" cy="150" r="1.3" opacity=".45"/>
<circle cx="360" cy="70" r="1.8" opacity=".4"/><circle cx="112" cy="228" r="1.3" opacity=".6"/><circle cx="224" cy="262" r="2.2" opacity=".45"/>
</g>
<circle cx="164" cy="112" r="1.9" fill="#9E3D28" opacity=".85"/>
</g>


<g id="dust-tr">
<use xlink:href="#dust-rose" x="1484" y="108" width="23.2" height="23.2" transform="translate(-11.6 -11.6)"/>
<use xlink:href="#dust-rose" x="1372" y="44" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".65"/>
<use xlink:href="#dust-s4" x="1556" y="52" width="29" height="29" transform="translate(-14.5 -14.5)" opacity=".9"/>
<use xlink:href="#dust-s4" x="1414" y="168" width="20.3" height="20.3" transform="translate(-10.15 -10.15)" opacity=".8"/>
<use xlink:href="#dust-s4" x="1300" y="96" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".55"/>
<use xlink:href="#dust-s4" x="1530" y="246" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".7"/>
<use xlink:href="#dust-s4" x="1236" y="42" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".45"/>
<use xlink:href="#dust-s6" x="1450" y="30" width="18.85" height="18.85" transform="translate(-9.425 -9.425)" opacity=".75"/>
<use xlink:href="#dust-s6" x="1576" y="176" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".6"/>
<use xlink:href="#dust-s6" x="1340" y="214" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".5"/>
<use xlink:href="#dust-ring" x="1512" y="196" width="23.2" height="23.2" transform="translate(-11.6 -11.6)" opacity=".6"/>
<use xlink:href="#dust-ring" x="1394" y="112" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".5"/>
<use xlink:href="#dust-ring" x="1270" y="164" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".4"/>
<g fill="#C59B27">
<circle cx="1536" cy="132" r="2" opacity=".8"/><circle cx="1462" cy="70" r="2.6" opacity=".9"/><circle cx="1410" cy="82" r="1.3" opacity=".6"/>
<circle cx="1576" cy="98" r="1.6" opacity=".55"/><circle cx="1470" cy="222" r="2.1" opacity=".65"/><circle cx="1330" cy="140" r="1.4" opacity=".5"/>
<circle cx="1250" cy="112" r="1.8" opacity=".4"/><circle cx="1560" cy="290" r="1.3" opacity=".45"/><circle cx="1380" cy="264" r="1.7" opacity=".4"/>
</g>
<circle cx="1440" cy="130" r="1.8" fill="#9E3D28" opacity=".85"/>
</g>


<g id="dust-bl">
<use xlink:href="#dust-rose" x="96" y="892" width="23.2" height="23.2" transform="translate(-11.6 -11.6)"/>
<use xlink:href="#dust-rose" x="226" y="948" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".65"/>
<use xlink:href="#dust-s4" x="44" y="956" width="26.1" height="26.1" transform="translate(-13.05 -13.05)" opacity=".85"/>
<use xlink:href="#dust-s4" x="168" y="826" width="18.85" height="18.85" transform="translate(-9.425 -9.425)" opacity=".8"/>
<use xlink:href="#dust-s4" x="298" y="884" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".55"/>
<use xlink:href="#dust-s4" x="70" y="770" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".7"/>
<use xlink:href="#dust-s4" x="352" y="960" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".45"/>
<use xlink:href="#dust-s6" x="140" y="966" width="20.3" height="20.3" transform="translate(-10.15 -10.15)" opacity=".8"/>
<use xlink:href="#dust-s6" x="30" y="850" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".6"/>
<use xlink:href="#dust-s6" x="250" y="790" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".5"/>
<use xlink:href="#dust-ring" x="200" y="900" width="23.2" height="23.2" transform="translate(-11.6 -11.6)" opacity=".6"/>
<use xlink:href="#dust-ring" x="110" y="812" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".5"/>
<use xlink:href="#dust-ring" x="330" y="830" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".4"/>
<g fill="#C59B27">
<circle cx="130" cy="850" r="2" opacity=".8"/><circle cx="60" cy="910" r="2.6" opacity=".9"/><circle cx="184" cy="878" r="1.3" opacity=".6"/>
<circle cx="24" cy="994" r="1.7" opacity=".55"/><circle cx="270" cy="928" r="2.2" opacity=".65"/><circle cx="212" cy="840" r="1.4" opacity=".5"/>
<circle cx="380" cy="900" r="1.8" opacity=".4"/><circle cx="36" cy="730" r="1.3" opacity=".45"/><circle cx="300" cy="760" r="1.6" opacity=".4"/>
</g>
<circle cx="150" cy="920" r="1.9" fill="#9E3D28" opacity=".85"/>
</g>


<g id="dust-br">
<use xlink:href="#dust-rose" x="1500" y="900" width="23.2" height="23.2" transform="translate(-11.6 -11.6)"/>
<use xlink:href="#dust-rose" x="1360" y="962" width="17.4" height="17.4" transform="translate(-8.7 -8.7)" opacity=".7"/>
<use xlink:href="#dust-s4" x="1564" y="964" width="29" height="29" transform="translate(-14.5 -14.5)" opacity=".9"/>
<use xlink:href="#dust-s4" x="1420" y="856" width="18.85" height="18.85" transform="translate(-9.425 -9.425)" opacity=".75"/>
<use xlink:href="#dust-s4" x="1290" y="906" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".55"/>
<use xlink:href="#dust-s4" x="1540" y="776" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".7"/>
<use xlink:href="#dust-s4" x="1226" y="960" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".45"/>
<use xlink:href="#dust-s6" x="1450" y="972" width="20.3" height="20.3" transform="translate(-10.15 -10.15)" opacity=".8"/>
<use xlink:href="#dust-s6" x="1578" y="850" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".6"/>
<use xlink:href="#dust-s6" x="1330" y="800" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".5"/>
<use xlink:href="#dust-ring" x="1386" y="898" width="23.2" height="23.2" transform="translate(-11.6 -11.6)" opacity=".6"/>
<use xlink:href="#dust-ring" x="1490" y="820" width="15.95" height="15.95" transform="translate(-7.975 -7.975)" opacity=".5"/>
<use xlink:href="#dust-ring" x="1260" y="840" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".4"/>
<g fill="#C59B27">
<circle cx="1470" cy="860" r="2" opacity=".8"/><circle cx="1540" cy="930" r="2.6" opacity=".9"/><circle cx="1410" cy="910" r="1.3" opacity=".6"/>
<circle cx="1584" cy="994" r="1.7" opacity=".55"/><circle cx="1320" cy="940" r="2.2" opacity=".65"/><circle cx="1396" cy="836" r="1.4" opacity=".5"/>
<circle cx="1210" cy="890" r="1.8" opacity=".4"/><circle cx="1560" cy="730" r="1.3" opacity=".45"/><circle cx="1280" cy="770" r="1.6" opacity=".4"/>
</g>
</g>


<g id="dust-edge" fill="#C59B27">
<use xlink:href="#dust-s4" x="620" y="36" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".45"/>
<use xlink:href="#dust-s4" x="980" y="52" width="10.15" height="10.15" transform="translate(-5.075 -5.075)" opacity=".4"/>
<use xlink:href="#dust-s4" x="700" y="962" width="11.6" height="11.6" transform="translate(-5.8 -5.8)" opacity=".45"/>
<use xlink:href="#dust-s4" x="900" y="976" width="10.15" height="10.15" transform="translate(-5.075 -5.075)" opacity=".4"/>
<use xlink:href="#dust-s6" x="44" y="500" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".45"/>
<use xlink:href="#dust-s6" x="1556" y="496" width="13.05" height="13.05" transform="translate(-6.525 -6.525)" opacity=".45"/>
<use xlink:href="#dust-ring" x="30" y="404" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".4"/>
<use xlink:href="#dust-ring" x="1570" y="604" width="14.5" height="14.5" transform="translate(-7.25 -7.25)" opacity=".4"/>
<circle cx="520" cy="60" r="1.4" opacity=".4"/><circle cx="1080" cy="30" r="1.7" opacity=".4"/>
<circle cx="560" cy="980" r="1.6" opacity=".4"/><circle cx="1040" cy="950" r="1.4" opacity=".4"/>
<circle cx="70" cy="590" r="1.8" opacity=".4"/><circle cx="1530" cy="400" r="1.6" opacity=".4"/>
<circle cx="800" cy="14" r="1.3" opacity=".35"/><circle cx="800" cy="988" r="1.3" opacity=".35"/>
</g>
</svg>
`

function Background() {
  return <div className="bg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Background
