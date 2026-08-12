import { defineConfig } from 'vitepress'

// export default withPwa(defineConfig({
// pwa: {
//   mode: 'development',
//   base: '/',
//   scope: '/',
//   devOptions: {
//     enabled: true,
//     suppressWarnings: true,
//     navigateFallback: '/',
//   },
// },
export default defineConfig({
  vite: {
    // ...
    ssr: {
      noExternal: ['vuetify']
    }
  },
  cleanUrls: true,
  lang: 'en-US',
  title: 'PlantaBETA',
  description: 'Everything is Connected',
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Betaglot-Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot-Logo.png" }]
  ],
  themeConfig: {
    notFound: {
      title: 'PAGE NOT FOUND',
      quote: "Quote", // set to '' to hide
      linkLabel: 'go to home', // aria-label
      linkText: 'Back to home',
      code: '404'
    },
    outline: [2, 4],
    logo: '/Betaglot-Logo.png',
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/betaglot' },
      { icon: 'youtube', link: 'https://www.youtube.com/@BETAGLOT' },
      { icon: 'github', link: 'https://github.com/betaglot/plantabeta' }
    ],
    // Search
    search: {
      provider: 'local'
    },
    nav: nav(),
    // Sidebar
    sidebar: {
      '/about/': sidebarAbout(),
      '/dev/': sidebarDev(),
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/reference/Elements/': sidebarElements(),
      '/reference/Betoms/': sidebarBetoms(),
    }
  }
})

// Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/WhatPlantaBeta/Overview',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/ExamplesOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'ELEMENTs',
      link: '/reference/Elements/ElementsOverview',
      activeMatch: '/reference/Elements/'
    },
    {
      text: '<span class="beta">BETOMs</span>',
      link: '/reference/Betoms/BetomsOverview',
      activeMatch: '/reference/Betoms/'
    },
  ]
}
// Dev
function sidebarDev() {
  return [
    { text: '<dev>DevOverview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>Captions</dev>', link: '/dev/BagOut_Captions' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    {
      text: '<dev>ContentDev</dev>', collapsed: true, items: [
        { text: '<dev>GuideDev</dev>', link: '/dev/ContentDev/GuideDev' },
        { text: '<dev>TeoriDev</dev>', link: '/dev/ContentDev/TeoriDev' },
        { text: '<dev>VDev</dev>', link: '/dev/ContentDev/VDev' },
      ]
    },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    { text: '<dev>Filming</dev>', link: '/dev/Filming' },
    { text: '<dev>GoPro</dev>', link: '/dev/GoPro' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
        { text: '<span class="beta">BETA Graphics</span>', link: '/dev/Graphics/Beta_Graphic' },
        { text: '<span class="labor">LABOR</span>', link: '/dev/Graphics/Labor_Graphic' },
        { text: '<span class="soma">SOMA</span>', link: '/dev/Graphics/Soma_Graphic' },
        { text: '<span class="ekos">EKOS Graphics</span>', link: '/dev/Graphics/Ekos_Graphic' },
        { text: '<span class="via">VIA Graphics</span>', link: '/dev/Graphics/Via_Graphic' },
        { text: '<span class="motor">MOTOR Graphics</span>', link: '/dev/Graphics/Motor_Graphic' },
        { text: '<span class="anima">ANIMA Graphics</span>', link: '/dev/Graphics/Anima_Graphic' },
        { text: '<dev>UX Graphics</dev>', link: '/dev/Graphics/UX_Graphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DX_Graphic' },
      ]
    },
    { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>OpenSource</dev>', link: '/dev/OpenSource' },
    {
      text: '<dev>Pedagogy</dev>', link: '/dev/Pedagogy/Overview', collapsed: true, items: [
        { text: '<dev>TutorialDev</dev>', link: '/dev/Pedagogy/TutorialDev' },
        { text: '<dev>Instructor</dev>', link: '/dev/Pedagogy/Instructor' },
        { text: '<dev>Motel_Pedagogy</dev>', link: '/dev/Pedagogy/Motel_Pedagogy' },
        { text: '<dev>Shadowing</dev>', link: '/dev/Pedagogy/Shadowing' },
        { text: '<dev>2024_Timeline</dev>', link: '/dev/Pedagogy/2024_Timeline' },
      ]
    },
    { text: '<dev>PodcastDev</dev>', link: '/dev/PodcastDev' },
    {
      text: '<dev>Research</dev>', link: '/dev/ResearchDev/Overview', collapsed: false, items: [
        { text: '<dev>AffordanceDev</dev>', link: '/dev/ResearchDev/Affordance' },
        { text: '<dev>AkademiaDev</dev>', link: '/dev/ResearchDev/AkademiaDev' },
        { text: '<dev>ResearchQuestions</dev>', link: '/dev/ResearchDev/ResearchQuestions' },

      ]
    },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>VDev</dev>', link: '/dev/VDev' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
  ]
}
// Guide
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is <span class="beta">PlantaBETA</span>?', link: '/guide/WhatPlantaBeta/Overview' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: 'To increase <span class="labor">Quality</span>', link: '/guide/WhyPlantaBeta/Quality' },
        { text: 'To reduce <span class="labor">Injury</span>', link: '/guide/WhyPlantaBeta/Injury' },
        { text: 'To increase <span class="labor">Productivity</span>', link: '/guide/WhyPlantaBeta/Productivity' },
        { text: 'To improve <span class="labor">Communication</span>', link: '/guide/WhyPlantaBeta/Communication' },
        { text: 'To steepen the <span class="labor">Learning Curve</span>', link: '/guide/WhyPlantaBeta/LearningCurve' },
        { text: 'To progress <span class="labor">Planting Theory</span>', link: '/guide/WhyPlantaBeta/Progression' },

      ]
    },
    {
      text: 'Who is <span class="beta">PlantaBETA</span> designed for?', collapsed: false, items: [
        { text: '<span class="labor">Potential Planter</span>', link: '/guide/WhoPlantaBeta/PotentialPlanter' },
        { text: '<span class="labor">Novice Planter</span>', link: '/guide/WhoPlantaBeta/NovicePlanter' },
        { text: '<span class="labor">Veteran Planter</span>', link: '/guide/WhoPlantaBeta/VeteranPlanter' },
        { text: '<span class="labor">Supervisor</span>', link: '/guide/WhoPlantaBeta/Supervisor' },
        { text: '<span class="labor">Instructor</span>', link: '/guide/WhoPlantaBeta/Instructor' }
      ]
    },
    { text: 'Go to Examples', link: '/examples/ExamplesOverview' },
  ]
}
// About
function sidebarAbout() {
  return [
    { text: 'About', link: '/about/AboutOverview', },
    { text: 'Contact', link: '/about/Contact', },
    { text: 'FAQ', link: '/about/FAQ', },
  ]
}

function sidebarElements() {
  return [
    {
      text: '⭐<span class="labor">LABOR</span>',
      collapsed: true,
      link: '/reference/Elements/Labor/LaborOverview',
      items: [
        {
          text: '⭐<span class="labor">Employment</span>', link: '/reference/Elements/Labor/Employment/Overview', collapsed: true, items: [
            {
              text: '<span class="labor">Schedule</span>', collapsed: true, items: [
                { text: '<span class="labor">RestDay</span>', link: '/reference/Elements/Labor/Employment/Schedule/RestDay/Overview' },

                {
                  text: '<span class="labor">Season</span>', link: '/reference/Elements/Labor/Employment/Schedule/WorkSeason/Overview', collapsed: true, items: [
                    { text: '<span class="labor">PreSeason</span>', link: '/reference/Elements/Labor/Employment/Schedule/WorkSeason/PreWorkSeason' },
                    { text: '<span class="labor">PostSeason</span>', link: '/reference/Elements/Labor/Employment/Schedule/WorkSeason/PostWorkSeason' },

                  ]
                },
                { text: '<span class="labor">Shift</span>', link: '/reference/Elements/Labor/Employment/Schedule/Shift/Overview' },
                { text: '<span class="labor">Sleep</span>', link: '/reference/Elements/Labor/Employment/Schedule/Sleep/Overview' },
                {
                  text: '<span class="labor">Transit</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/Overview', collapsed: true, items: [
                    { text: '<span class="labor">Bus</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/Bus' },
                    { text: '<span class="labor">Crummy</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/Crummy' },
                    { text: '<span class="labor">Truck</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/Truck' },
                    { text: '<span class="labor">WalkIn</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/WalkIn' },
                    { text: '<span class="labor">WalkOut</span>', link: '/reference/Elements/Labor/Employment/Schedule/Transit/WalkOut' },
                  ]
                },
                { text: '<span class="labor">Workday</span>', link: '/reference/Elements/Labor/Employment/Schedule/Workday/Overview' },
              ]
            },
            { text: '<span class="labor">Production</span>', link: '/reference/Elements/Labor/Employment/Production/Overview' },
            { text: '<span class="labor">Professionalism</span>', link: '/reference/Elements/Labor/Employment/Professionalism/Overview' },
            { text: '<span class="labor">Replant</span>', link: '/reference/Elements/Labor/Employment/Replant/Overview' },
          ]
        },
        {
          text: '⭐<span class="labor">Tasks</span>', link: '/reference/Elements/Labor/Task/Overview', collapsed: true, items: [
            {
              text: '<span class="labor">Crop</span>', link: '/reference/Elements/Labor/Task/Crop/Overview', collapsed: true, items: [
                {
                  text: '<span class="labor">Neon</span>', link: '/reference/Elements/Labor/Task/Crop/Neon/Overview', collapsed: true, items: [
                    {
                      text: '<span class="labor">Specs</span>', link: '/reference/Elements/Labor/Task/Crop/Neon/Specs', collapsed: true, items: [
                        
                      ]
                    },
                    { text: '<span class="labor">Makrosite</span>', link: '/reference/Elements/Labor/Task/Crop/Neon/Makrosite/Overview' },
                        {
                          text: '<span class="labor">Mikrosite</span>', link: '/reference/Elements/Labor/Task/Crop/Neon/Mikrosite/Overview', collapsed: true, items: [
                            { text: '<span class="labor">Protektor</span>', link: '/reference/Elements/Labor/Task/Crop/Neon/Mikrosite/Protektor/Overview' },
                          ]
                        },
                  ]
                },
                { text: '<span class="labor">Paleon</span>', link: '/reference/Elements/Labor/Task/Crop/Paleon/Overview', collapsed: true, items: [] },

              ]
            },
            { text: '<span class="labor">Piece</span>', link: '/reference/Elements/Labor/Task/Piece' },
            {
              text: '<span class="labor">Aktions</span>', link: '/reference/Elements/Labor/Task/Aktion/Overview', collapsed: true, items: [
                { text: '<span class="labor">Abdukt</span>', link: '/reference/Elements/Labor/Task/Aktion/Abdukt' },
                { text: '<span class="labor">Absorb</span>', link: '/reference/Elements/Labor/Task/Aktion/Absorb' },
                { text: '<span class="labor">Addukt</span>', link: '/reference/Elements/Labor/Task/Aktion/Adduction' },
                { text: '<span class="labor">Allos</span>', link: '/reference/Elements/Labor/Task/Aktion/Allos' },
                { text: '<span class="labor">Ama</span>', link: '/reference/Elements/Labor/Task/Aktion/Ama' },
                { text: '<span class="labor">Amble</span>', link: '/reference/Elements/Labor/Task/Aktion/Amble' },
                { text: '<span class="labor">Ankor</span>', link: '/reference/Elements/Labor/Task/Aktion/Ankor' },
                { text: '<span class="labor">Ballista</span>', link: '/reference/Elements/Labor/Task/Aktion/Ballista' },
                { text: '<span class="labor">Catch</span>', link: '/reference/Elements/Labor/Task/Aktion/Catch' },
                { text: '<span class="labor">Clean</span>', link: '/reference/Elements/Labor/Task/Aktion/Clean' },
                { text: '<span class="labor">Crawl</span>', link: '/reference/Elements/Labor/Task/Aktion/Crawl' },
                { text: '<span class="labor">Defend</span>', link: '/reference/Elements/Labor/Task/Aktion/Defend' },
                { text: '<span class="labor">Dig</span>', link: '/reference/Elements/Labor/Task/Aktion/Dig' },
                { text: '<span class="labor">Dilate</span>', link: '/reference/Elements/Labor/Task/Aktion/Dilate' },
                { text: '<span class="labor">Doff</span>', link: '/reference/Elements/Labor/Task/Aktion/Doff' },
                { text: '<span class="labor">Don</span>', link: '/reference/Elements/Labor/Task/Aktion/Don' },
                { text: '<span class="labor">Drag</span>', link: '/reference/Elements/Labor/Task/Aktion/Drag' },
                { text: '<span class="labor">Drop</span>', link: '/reference/Elements/Labor/Task/Aktion/Drop' },
                { text: '<span class="labor">Eval</span>', link: '/reference/Elements/Labor/Task/Aktion/Eval' },
                { text: '<span class="labor">Exit</span>', link: '/reference/Elements/Labor/Task/Aktion/Eval' },
                { text: '<span class="labor">Fall</span>', link: '/reference/Elements/Labor/Task/Aktion/Fall' },
                { text: '<span class="labor">Flex</span>', link: '/reference/Elements/Labor/Task/Aktion/Flexion' },
                { text: '<span class="labor">Hinge</span>', link: '/reference/Elements/Labor/Task/Aktion/Hinge' },
                { text: '<span class="labor">Hook</span>', link: '/reference/Elements/Labor/Task/Aktion/Hook' },
                { text: '<span class="labor">Iguana</span>', link: '/reference/Elements/Labor/Task/Aktion/Iguana' },
                { text: '<span class="labor">Jump</span>', link: '/reference/Elements/Labor/Task/Aktion/Jump' },
                { text: '<span class="labor">Kick</span>', link: '/reference/Elements/Labor/Task/Aktion/Kick' },
                { text: '<span class="labor">Enklose</span>', link: '/reference/Elements/Labor/Task/Aktion/Kick' },
                { text: '<span class="labor">Kneel</span>', link: '/reference/Elements/Labor/Task/Aktion/Kneel' },
                { text: '<span class="labor">Knot</span>', link: '/reference/Elements/Labor/Task/Aktion/Knot' },
                { text: '<span class="labor">Kompakt</span>', link: '/reference/Elements/Labor/Task/Aktion/Kompakt' },
                { text: '<span class="labor">Kompress</span>', link: '/reference/Elements/Labor/Task/Aktion/Kompress' },
                { text: '<span class="labor">Kontakt</span>', link: '/reference/Elements/Labor/Task/Aktion/Kontakt' },
                { text: '<span class="labor">Konstrukt</span>', link: '/reference/Elements/Labor/Task/Aktion/Konstrukt' },
                { text: '<span class="labor">Krampon</span>', link: '/reference/Elements/Labor/Task/Aktion/Krampon' },
                { text: '<span class="labor">Kryos</span>', link: '/reference/Elements/Labor/Task/Aktion/Kryos' },
                { text: '<span class="labor">Launch</span>', link: '/reference/Elements/Labor/Task/Aktion/Launch' },
                { text: '<span class="labor">Lean</span>', link: '/reference/Elements/Labor/Task/Aktion/Lean' },
                { text: '<span class="labor">Lift</span>', link: '/reference/Elements/Labor/Task/Aktion/Lift' },
                { text: '<span class="labor">Load</span>', link: '/reference/Elements/Labor/Task/Aktion/Load' },
                { text: '<span class="labor">Lock</span>', link: '/reference/Elements/Labor/Task/Aktion/Lock' },
                { text: '<span class="labor">Machete</span>', link: '/reference/Elements/Labor/Task/Aktion/Machete' },
                { text: '<span class="labor">Mano</span>', link: '/reference/Elements/Labor/Task/Aktion/Mano' },
                { text: '<span class="labor">Markate</span>', link: '/reference/Elements/Labor/Task/Aktion/Markate' },
                { text: '<span class="labor">Modify</span>', link: '/reference/Elements/Labor/Task/Aktion/Modify' },
                { text: '<span class="labor">Muscle Up</span>', link: '/reference/Elements/Labor/Task/Aktion/MuscleUp' },
                { text: '<span class="labor">Neonektomy</span>', link: '/reference/Elements/Labor/Task/Aktion/Neonektomy' },
                { text: '<span class="labor">Onda</span>', link: '/reference/Elements/Labor/Task/Aktion/Onda' },
                { text: '<span class="labor">Orbit</span>', link: '/reference/Elements/Labor/Task/Aktion/Orbit' },
                { text: '<span class="labor">Overview</span>', link: '/reference/Elements/Labor/Task/Aktion/Overview' },
                { text: '<span class="labor">Pendulate</span>', link: '/reference/Elements/Labor/Task/Aktion/Pendulate' },
                { text: '<span class="labor">Parry</span>', link: '/reference/Elements/Labor/Task/Aktion/Parry' },
                { text: '<span class="labor">Poke</span>', link: '/reference/Elements/Labor/Task/Aktion/Poke' },
                { text: '<span class="labor">Pogo</span>', link: '/reference/Elements/Labor/Task/Aktion/Pogo' },
                { text: '<span class="labor">Post</span>', link: '/reference/Elements/Labor/Task/Aktion/Post' },
                { text: '<span class="labor">Preserve</span>', link: '/reference/Elements/Labor/Task/Aktion/Preserve' },
                { text: '<span class="labor">Progress</span>', link: '/reference/Elements/Labor/Task/Aktion/Progress' },
                { text: '<span class="labor">Protrakt</span>', link: '/reference/Elements/Labor/Task/Aktion/Protrakt' },
                { text: '<span class="labor">Pugno</span>', link: '/reference/Elements/Labor/Task/Aktion/Pugno' },
                { text: '<span class="labor">Pull</span>', link: '/reference/Elements/Labor/Task/Aktion/Pull' },
                { text: '<span class="labor">Purga</span>', link: '/reference/Elements/Labor/Task/Aktion/Purga' },
                { text: '<span class="labor">Push</span>', link: '/reference/Elements/Labor/Task/Aktion/Push' },
                { text: '<span class="labor">Regress</span>', link: '/reference/Elements/Labor/Task/Aktion/Regress' },
                { text: '<span class="labor">Retrakt</span>', link: '/reference/Elements/Labor/Task/Aktion/Retrakt' },
                { text: '<span class="labor">Rip</span>', link: '/reference/Elements/Labor/Task/Aktion/Rip' },
                { text: '<span class="labor">Roll</span>', link: '/reference/Elements/Labor/Task/Aktion/Roll' },
                { text: '<span class="labor">Rotate</span>', link: '/reference/Elements/Labor/Task/Aktion/Rotate' },
                { text: '<span class="labor">Run</span>', link: '/reference/Elements/Labor/Task/Aktion/Run' },
                { text: '<span class="labor">Sit</span>', link: '/reference/Elements/Labor/Task/Aktion/Sit' },
                { text: '<span class="labor">Slam</span>', link: '/reference/Elements/Labor/Task/Aktion/Slam' },
                { text: '<span class="labor">Slap</span>', link: '/reference/Elements/Labor/Task/Aktion/Slap' },
                { text: '<span class="labor">Slide</span>', link: '/reference/Elements/Labor/Task/Aktion/Slide' },
                { text: '<span class="labor">Slot</span>', link: '/reference/Elements/Labor/Task/Aktion/Slot' },
                { text: '<span class="labor">Snap</span>', link: '/reference/Elements/Labor/Task/Aktion/Snap' },
                { text: '<span class="labor">Spike</span>', link: '/reference/Elements/Labor/Task/Aktion/Spike' },
                { text: '<span class="labor">SuperSpike</span>', link: '/reference/Elements/Labor/Task/Aktion/SuperSpike' },
                { text: '<span class="labor">Stack</span>', link: '/reference/Elements/Labor/Task/Aktion/Stack' },
                { text: '<span class="labor">Stall</span>', link: '/reference/Elements/Labor/Task/Aktion/Stall' },
                { text: '<span class="labor">Stand</span>', link: '/reference/Elements/Labor/Task/Aktion/Stand' },
                { text: '<span class="labor">Stomp</span>', link: '/reference/Elements/Labor/Task/Aktion/Stomp' },
                { text: '<span class="labor">Tangent</span>', link: '/reference/Elements/Labor/Task/Aktion/Tangent' },
                { text: '<span class="labor">Trot</span>', link: '/reference/Elements/Labor/Task/Aktion/Trot' },
                { text: '<span class="labor">Transport</span>', link: '/reference/Elements/Labor/Task/Aktion/Transport' },
                { text: '<span class="labor">Twist</span>', link: '/reference/Elements/Labor/Task/Aktion/Twist' },
                { text: '<span class="labor">Weave</span>', link: '/reference/Elements/Labor/Task/Aktion/Weave' },
                { text: '<span class="labor">Whip</span>', link: '/reference/Elements/Labor/Task/Aktion/Whip' },
                { text: '<span class="labor">Wrap</span>', link: '/reference/Elements/Labor/Task/Aktion/Wrap' },
              ]
            },
            {
              text: '<span class="labor">Block</span>', link: '/reference/Elements/Labor/Task/Block/Overview', collapsed: true, items: [
                {
                  text: '<span class="labor">Piece</span>', link: '/reference/Elements/Labor/Task/Block/Piece/Overview', collapsed: true, items: [
                  ]
                },
                { text: '<span class="labor">Burnt Block</span>', link: '/reference/Elements/Labor/Task/Block/BurntBlock' },
                { text: '<span class="labor">Clearcut Block</span>', link: '/reference/Elements/Labor/Task/Block/ClearcutBlock' },
                { text: '<span class="labor">Fill Block</span>', link: '/reference/Elements/Labor/Task/Block/FillBlock' },
              ]
            },
          ]
        },
        {
          text: '⭐<span class="labor">Strategy</span>', link: '/reference/Elements/Labor/Strategy/Overview', collapsed: true, items: [
            { text: '<span class="labor">Taktik</span>', link: '/reference/Elements/Labor/Strategy/Taktik/Overview' },
          ]
        },
        {
          text: '⭐<span class="labor">Organons</span>', link: '/reference/Elements/Labor/Organon/Overview', collapsed: true, items: [
            { text: '<span class="labor">ATV</span>', link: '' },
            {
              text: '<span class="labor">Armor</span>', link: '/reference/Elements/Labor/Organon/Armor/Overview', collapsed: true, items: [
                { text: '<span class="labor">Boot</span>', link: '/reference/Elements/Labor/Organon/Boot/Overview' },
                {
                  text: '<span class="labor">Bottoms</span>', link: '/reference/Elements/Labor/Organon/Armor/Bottoms/Overview', collapsed: true, items: [
                    { text: '<span class="labor">Insulation Bottom</span>', link: '/reference/Elements/Labor/Organon/Armor/Bottoms/InsulationBottom' },
                    { text: '<span class="labor">Sock</span>', link: '/reference/Elements/Labor/Organon/Armor/Bottoms/Sock/Overview' },
                  ]
                },
                {
                  text: ' <span class="labor">Fastener</span>', link: '/reference/Elements/Labor/Organon/Armor/Fastener/Overview', collapsed: true, items: [
                    { text: '<span class="labor">Button</span>', link: '/reference/Elements/Labor/Organon/Armor/Fastener/Button' },
                    { text: '<span class="labor">Velcro</span>', link: '/reference/Elements/Labor/Organon/Armor/Fastener/Velcro' },
                    { text: '<span class="labor">Zipper</span>', link: '/reference/Elements/Labor/Organon/Armor/Fastener/Zipper' }
                  ]
                },
                { text: '<span class="labor">Glove</span>', link: '/reference/Elements/Labor/Organon/Armor/Glove/Overview' },
                { text: '<span class="labor">Hat</span>', link: '/reference/Elements/Labor/Organon/Armor/Hat/Overview' },
                { text: '<span class="labor">Helmet</span>', link: '/reference/Elements/Labor/Organon/Armor/Helmet/Overview' },
                { text: '<span class="labor">HiVis</span>', link: '/reference/Elements/Labor/Organon/Armor/HiVis/Overview' },
                { text: '<span class="labor">Radior</span>', link: '/reference/Elements/Labor/Organon/Armor/Radior/Overview' },
                {
                  text: '<span class="labor">Tops</span>', link: '/reference/Elements/Labor/Organon/Armor/Tops/Overview', collapsed: true, items: [
                    { text: '<span class="labor">Insulation Top</span>', link: '/reference/Elements/Labor/Organon/Tops/InsulationTop' },
                  ]
                },
                { text: '<span class="labor">Tibior</span>', link: '/reference/Elements/Labor/Organon/Tibior/Overview' },
              ]
            },
            { text: '<span class="labor">Box</span>', link: '/reference/Elements/Labor/Organon/Box/Overview' },
            { text: '<span class="labor">Bundle</span>', link: '/reference/Elements/Labor/Organon/Bundle/Overview' },
            { text: '<span class="labor">Dory</span>', link: '/reference/Elements/Labor/Organon/Dory/Overview' },

            { text: '<span class="labor">Karabiner</span>', link: '/reference/Elements/Labor/Organon/Karabiner/Overview' },
            {
              text: '<span class="labor">Kit</span>', link: '/reference/Elements/Labor/Organon/Kit/Overview', collapsed: true, items: [
                { text: '<span class="labor">Repair</span>', link: '/reference/Elements/Labor/Organon/Repair/Overview' },
                { text: '<span class="labor">Knife</span>', link: '/reference/Elements/Labor/Organon/Knife/Overview' },
                { text: '<span class="labor">MultiOrganon</span>', link: '/reference/Elements/Labor/Organon/MultiOrganon/Overview' },

                { text: '<span class="labor">Rope</span>', link: '/reference/Elements/Labor/Organon/Rope/Overview' },
                { text: '<span class="labor">Bottle</span>', link: '/reference/Elements/Labor/Organon/Bottle/Overview' },
                { text: '<span class="labor">Jug</span>', link: '/reference/Elements/Labor/Organon/Jug/Overview' },
                {
                  text: '<span class="labor">Food Organon</span>', link: '/reference/Elements/Labor/Organon/FoodOrganon/Overview', collapsed: true, items: [
                    { text: '<span class="labor">Fork</span>', link: '' },
                    { text: '<span class="labor">Spoon</span>', link: '' },
                    { text: '<span class="labor">Food Container</span>', link: '' },
                    { text: '<span class="labor">Food Bag</span>', link: '' },
                  ]
                },

              ]
            },
            { text: '<span class="labor">Plantafor</span>', link: '/reference/Elements/Labor/Organon/Plantafor/Overview' },
            { text: '<span class="labor">PlotCord</span>', link: '/reference/Elements/Labor/Organon/PlotCord/Overview' },
            { text: '<span class="labor">Spade</span>', link: '/reference/Elements/Labor/Organon/Spade/Overview' },
          ]
        },
        {
          text: '⭐<span class="labor">Performance</span>', link: '', collapsed: true, items: [
            { text: '<span class="labor">Effectiveness</span>', link: '' },
            { text: '<span class="labor">Competition</span>', link: '' },
            { text: '<span class="labor">Difficulty</span>', link: '' },
            { text: '<span class="labor">Execution</span>', link: '' },
            { text: '<span class="labor">Specs</span>', link: '/reference/Elements/Labor/Task/Specs' },
            { text: '<span class="labor">Errors</span>', link: '/reference/Elements/Labor/Performance/Errors/Overview' },


          ]
        },
      ]
    },
    {
      text: '🔷<span class="soma">SOMA</span>',
      collapsed: true,
      link: '/reference/Elements/Soma/SomaOverview',
      items: [
        {
          text: '🔷<span class="soma">Anatomy</span>', link: '/reference/Elements/Soma/Anatomy/Overview', collapsed: true, items: [
            {
              text: '<span class="soma">Body</span>', link: '/reference/Elements/Soma/Anatomy/Body/Overview', collapsed: true, items: [
                { text: '<span class="soma">Spine</span>', link: '/reference/Elements/Soma/Anatomy/Body/Spine' },
                { text: '<span class="soma">Ribs</span>', link: '/reference/Elements/Soma/Anatomy/Body/Ribs' },
              ]
            },
            {
              text: '<span class="soma">Head</span>', link: '/reference/Elements/Soma/Anatomy/Head/Overview', collapsed: true, items: [
                { text: '<span class="soma">Cranium</span>', link: '/reference/Elements/Soma/Anatomy/Head/Cranium' },
                { text: '<span class="soma">Ears</span>', link: '/reference/Elements/Soma/Anatomy/Head/Ears' },
                { text: '<span class="soma">Face</span>', link: '/reference/Elements/Soma/Anatomy/Head/Face' },
                { text: '<span class="soma">Neck</span>', link: '/reference/Elements/Soma/Anatomy/Head/Neck' },
              ]
            },
            {
              text: '<span class="soma">Arm</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Overview', collapsed: true, items: [
                { text: '<span class="soma">Shoulder</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Shoulder' },
                { text: '<span class="soma">Elbow</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Shoulder' },
                { text: '<span class="soma">Scapula</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Scapula' },
                { text: '<span class="soma">Humerus</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Humerus' },
                { text: '<span class="soma">Forearm</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Forearm' },
                { text: '<span class="soma">Deltoid</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Deltoid' },
                { text: '<span class="soma">Trapezius</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Trapezius' },
                { text: '<span class="soma">Triceps</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Triceps' },
                { text: '<span class="soma">Biceps</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Biceps' },
                { text: '<span class="soma">Latissimus Dorsi</span>', link: '/reference/Elements/Soma/Anatomy/Arm/LatissimusDorsi' },
                {
                  text: '<span class="soma">Hand</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand', collapsed: true, items: [
                    { text: '<span class="soma">Palm</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/Palm' },
                    { text: '<span class="soma">Pinky Finger</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/PinkyFinger' },
                    { text: '<span class="soma">Middle Finger</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/MiddleFinger' },
                    { text: '<span class="soma">Index Finger</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/IndexFinger' },
                    { text: '<span class="soma">Ring Finger</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/RingFinger' },
                    { text: '<span class="soma">Wrist</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/Wrist' },
                    { text: '<span class="soma">Thumb</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand/Thumb' },

                  ]
                },
              ]
            },
            {
              text: '<span class="soma">Leg</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Overview', collapsed: true, items: [
                { text: '<span class="soma">Hips</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Hips' },
                { text: '<span class="soma">Femur</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Femur' },
                { text: '<span class="soma">Tibia</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Tibia' },
                { text: '<span class="soma">Foot</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Foot' },
              ]
            },
          ]
        },
        {
          text: '🔷<span class="soma">Physiology</span>', link: '/reference/Elements/Soma/Physiology/Overview', collapsed: true, items: [
            { text: '<span class="soma">Endurance</span>', link: '/reference/Elements/Soma/Physiology/Endurance' },
            { text: '<span class="soma">Suppleness</span>', link: '/reference/Elements/Soma/Physiology/Suppleness' },
            { text: '<span class="soma">Strength</span>', link: '/reference/Elements/Soma/Physiology/Strength' },
            { text: '<span class="soma">Injury Prevention</span>', link: '/reference/Elements/Soma/Physiology/InjuryPrevention' },
            { text: '<span class="soma">WarmUp</span>', link: '/reference/Elements/Soma/Physiology/WarmUp' },
            { text: '<span class="soma">CoolDown</span>', link: '/reference/Elements/Soma/Physiology/CoolDown' },
            { text: '<span class="soma">Posture</span>', link: '/reference/Elements/Soma/Physiology/Posture' },
          ]
        },
        { text: '🔷<span class="soma">Nutrition</span>', link: '/reference/Elements/Soma/Nutrition/Overview', collapsed: true, items: [] },
      ]
    },
    {
      text: '🟩<span class="ekos">EKOS</span>',
      collapsed: true,
      link: '/reference/Elements/Ekos/EkosOverview',
      items: [
        {
          text: '🟩<span class="ekos">Ekosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Overview', collapsed: true, items: [
            {
              text: '🟩<span class="ekos">Antroposfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Prep</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Mound</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Mound' },
                    { text: '<span class="ekos">Skreef</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Skreef' },
                    { text: '<span class="ekos">Trench</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Trench' },
                  ]
                },
                {
                  text: '<span class="ekos">Slash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Burn Pile</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/BurnPileSlash' },
                    { text: '<span class="ekos">HighSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/HighSlash' },
                    { text: '<span class="ekos">LowSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/LowSlash' },
                    { text: '<span class="ekos">Stickmat</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/Stickmat' },
                    { text: '<span class="ekos">WetSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/WetSlash' },
                  ]
                },
                { text: '<span class="ekos">Cut Bank</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/CutBank' },
                { text: '<span class="ekos">Road</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Road' },
                { text: '<span class="ekos">Landing</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Landing' },
                { text: '<span class="ekos">Skidder Trail</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/SkidderTrail' },

              ]
            },
            {
              text: '🟩<span class="ekos">Atmosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Particulates</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Ash</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Ash' },
                    { text: '<span class="ekos">Dust</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Dust' },
                    { text: '<span class="ekos">Pollen</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Pollen' },
                    { text: '<span class="ekos">Smoke</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Smoke' },
                    { text: '<span class="ekos">Spores</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Spores' },
                  ]
                },
                {
                  text: '<span class="ekos">Precipitation</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Fog</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Fog' },
                    { text: '<span class="ekos">Hail</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Hail' },
                    { text: '<span class="ekos">Rain</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Rain' },
                    { text: '<span class="ekos">Snow</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Snow' },
                  ]
                },
                { text: '<span class="ekos">AirTemperature</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/AirTemperature' },
                { text: '<span class="ekos">Humidity</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Humidity' },
                { text: '<span class="ekos">Lightning</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Lightning' },
                { text: '<span class="ekos">Sun</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Sun' },
                { text: '<span class="ekos">Wind</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Wind' },
              ]
            },
            {
              text: '🟩<span class="ekos">Biosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Animal</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Ant</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Ant' },
                    { text: '<span class="ekos">Bear</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bear' },
                    { text: '<span class="ekos">Bird</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bird' },
                    { text: '<span class="ekos">Cow</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Cow' },
                    { text: '<span class="ekos">Flies</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bird' },
                    { text: '<span class="ekos">Hornet</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Hornet' },
                    { text: '<span class="ekos">Moose</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Moose' },
                    { text: '<span class="ekos">Mosquito</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Mosquito' },
                  ]
                },
                {
                  text: '<span class="ekos">Dendron</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Larix</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Larix' },
                    { text: '<span class="ekos">Picea</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Picea' },
                    { text: '<span class="ekos">Pinus</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Pinus' },
                    { text: '<span class="ekos">Pseudotsuga</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Pseudotsuga' },
                    { text: '<span class="ekos">Quercus</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Quercus' },
                    { text: '<span class="ekos">Thuja</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Thuja' },
                    { text: '<span class="ekos">Tsuga</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Tsuga' },
                  ]
                },
                {
                  text: 'Flora', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/', collapsed: true, items: [
                    { text: '<span class="ekos">Abies</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Abies' },
                    { text: '<span class="ekos">Bryophyta</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Bryophyta' },
                    { text: '<span class="ekos">BurntFlora</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/BurntFlora' },
                    { text: '<span class="ekos">Bush</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Bush' },
                    { text: '<span class="ekos">Flower</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Flower' },
                    { text: '<span class="ekos">Log</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Log' },
                    { text: '<span class="ekos">Poales</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Poales' },
                    { text: '<span class="ekos">Stump</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Stump' },
                  ]
                },
                { text: '<span class="ekos">Fungi</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Fungi/Overview', collapsed: true, items: [] },
                {
                  text: '<span class="ekos">Plants</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Plants/Overview', collapsed: true, items: [
                  ]
                },
              ]
            },
            {
              text: '🟩<span class="ekos">Hydrosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Overview', collapsed: true, items: [
                { text: '<span class="ekos">Condensation</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Condensation' },
                { text: '<span class="ekos">Ground Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/GroundWater' },
                { text: '<span class="ekos">Moving Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/MovingWater' },
                { text: '<span class="ekos">Stagnant Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/StagnantWater' },
                { text: '<span class="ekos">Wetness</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Wetness' },

              ]
            },
            {
              text: '🟩<span class="ekos">Litosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Litosfera/Overview', collapsed: true, items: [
                { text: '<span class="ekos">Rock Cap</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/RockCap' },
              ]
            },
            {
              text: '🟩<span class="ekos">Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Soil Size</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Clay</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/ClaySoil' },
                    { text: '<span class="ekos">Cobble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/CobbleSoil' },
                    { text: '<span class="ekos">Pebble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/PebbleSoil' },
                    { text: '<span class="ekos">Rubble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/RubbleSoil' },
                    { text: '<span class="ekos">Sand</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/SandSoil' },
                    { text: '<span class="ekos">Silt</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/SiltSoil' },
                  ]
                },
                {
                  text: '<span class="ekos">Soil Fiber</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Fibric</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/FibricSoil' },
                    { text: '<span class="ekos">Humic</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/HumicSoil' },
                    { text: '<span class="ekos">Mesic</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/MesicSoil' },
                    { text: '<span class="ekos">RedRot (Woody)</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/WoodySoil' },

                  ]
                },
                { text: '<span class="ekos">Mineral Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/MineralSoil' },
                { text: '<span class="ekos">Wet Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/WetSoil' },
                { text: '<span class="ekos">Ice Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/IceSoil' },
              ]
            },
          ]
        },
        {
          text: '🟩<span class="ekos">Klimon</span>', link: '/reference/Elements/Ekos/Klimon/Overview', collapsed: true, items: [
            { text: '<span class="ekos">Texture</span>', link: '/reference/Elements/Ekos/Klimon/Texture/Overview' },
          ]
        },
      ]
    },
    {
      text: '🔻<span class="via">VIA</span>',
      collapsed: true,
      link: '/reference/Elements/Via/ViaOverview',
      items: [
        {
          text: '<span class="via">Combinatorics</span>', link: '/reference/Elements/Via/Combinatorics/Overview', collapsed: true, items: [
            {
              text: '<span class="via">Graph Theory</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Overview', collapsed: true, items: [
                { text: '<span class="via">ClosestPair</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/ClosestPair' },
                { text: '<span class="via">ShortestPath</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/ShortestPath' },
                { text: '<span class="via">Dyad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Dyad' },
                { text: '<span class="via">Triad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Triad' },
                { text: '<span class="via">Tetrad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Tetrad' },
                { text: '<span class="via">Pentad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Pentad' },
                { text: '<span class="via">Hexad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Hexad' },
                { text: '<span class="via">Heptad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Heptad' },
                { text: '<span class="via">Octad</span>', link: '/reference/Elements/Via/Combinatorics/GraphTheory/Octad' },
              ]
            },
          ]
        },
        {
          text: '🔻<span class="via">Geometry</span>', link: '/reference/Elements/Via/Geometry/Overview', collapsed: true, items: [
            {
              text: '<span class="via">Computational Geometry</span>', collapsed: true, items: [
                { text: '<span class="via">Voronoi Diagram</span>', link: '/reference/Elements/Via/Geometry/ComputationalGeometry/VoronoiDiagram' },
                { text: '<span class="via">Concave Hull</span>', link: '/reference/Elements/Via/Geometry/ComputationalGeometry/ConcaveHull' },
                { text: '<span class="via">Convex Hull</span>', link: '/reference/Elements/Via/Geometry/ComputationalGeometry/ConvexHull' },
                { text: '<span class="via">Delaunay Triangulation</span>', link: '/reference/Elements/Via/Geometry/ComputationalGeometry/DelaunayTriangulation' },
                { text: '<span class="via">Collision Detection</span>', link: '/reference/Elements/Via/Geometry/ComputationalGeometry/CollisionDetection' },
              ]
            },
            { text: '<span class="via">Density</span>', link: '/reference/Elements/Via/Geometry/Density/Overview', collapsed: true, items: [] },
            {
              text: '<span class="via">Direction</span>', link: '/reference/Elements/Via/Geometry/Direction/Overview', collapsed: true, items: [
                { text: '<span class="via">CardinalDirection</span>', link: '/reference/Elements/Via/Geometry/Direction/CardinalDirection' },
                {
                  text: '<span class="via">RelativeDirection</span>', link: '/reference/Elements/Via/Geometry/Direction/RelativeDirection', items: [
                    { text: '<span class="via">Dilation</span>', link: '/reference/Elements/Via/Geometry/Direction/Dilation' },
                    { text: '<span class="via">Extension</span>', link: '/reference/Elements/Via/Geometry/Direction/Extension' },
                    { text: '<span class="via">Flexion</span>', link: '/reference/Elements/Via/Geometry/Direction/Flexion' },

                  ]
                },
              ]
            },
            { text: '<span class="via">Displacement</span>', link: '/reference/Elements/Via/Geometry/Displacement/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Distance</span>', link: '/reference/Elements/Via/Geometry/Distance/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Div</span>', link: '/reference/Elements/Via/Geometry/Div/Overview', collapsed: true, items: [] },

            {
              text: '<span class="via">Line</span>', link: '/reference/Elements/Via/Geometry/Line/Overview', collapsed: true, items: [
                { text: '<span class="via">AroundLine</span>', link: '/reference/Elements/Via/Geometry/Line/AroundLine' },
                { text: '<span class="via">CircuitLine</span>', link: '/reference/Elements/Via/Geometry/Line/CircuitLine' },
                { text: '<span class="via">PerimeterLine</span>', link: '/reference/Elements/Via/Geometry/Line/PerimeterLine' },
                { text: '<span class="via">SpiralLine</span>', link: '/reference/Elements/Via/Geometry/Line/SpiralLine' },
                { text: '<span class="via">StraightLine</span>', link: '/reference/Elements/Via/Geometry/Line/StraightLine' },
                { text: '<span class="via">ZigzagLine</span>', link: '/reference/Elements/Via/Geometry/Line/ZigzagLine' },
                { text: '<span class="via">BoustroLine</span>', link: '/reference/Elements/Via/Geometry/Line/BoustroLine' },
              ]
            },
            { text: '<span class="via">Morfos</span>', link: '/reference/Elements/Via/Geometry/Morfos/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Orientation</span>', link: '/reference/Elements/Via/Geometry/Orientation/Overview', collapsed: true, items: [] },
            {
              text: '<span class="via">Point</span>', link: '/reference/Elements/Via/Geometry/Point/Overview', collapsed: true, items: [
                { text: '<span class="via">CenterPoint</span>', link: '/reference/Elements/Via/Geometry/Point/CenterPoint' },
                { text: '<span class="via">MidPoint</span>', link: '/reference/Elements/Via/Geometry/Point/MidPoint' },
                { text: '<span class="via">ReferencePoint</span>', link: '/reference/Elements/Via/Geometry/Point/ReferencePoint' },
                { text: '<span class="via">ReflectionPoint</span>', link: '/reference/Elements/Via/Geometry/Point/ReflectionPoint' },
                { text: '<span class="via">TargetPoint</span>', link: '/reference/Elements/Via/Geometry/Point/TargetPoint' },
                { text: '<span class="via">VertexPoint</span>', link: '/reference/Elements/Via/Geometry/Point/VertexPoint' },
              ]
            },
            {
              text: '<span class="via">Shape</span>', link: '/reference/Elements/Via/Geometry/Shape/Overview', collapsed: true, items: [
                { text: '<span class="via">Circle</span>', link: '/reference/Elements/Via/Geometry/Shape/Circle' },
                { text: '<span class="via">Concave</span>', link: '/reference/Elements/Via/Geometry/Shape/Concave' },
                { text: '<span class="via">Convex</span>', link: '/reference/Elements/Via/Geometry/Shape/Convex' },
                {
                  text: '<span class="via">Polygon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Overview', collapsed: true, items: [
                    { text: '<span class="via">Triangle</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Triangle' },
                    { text: '<span class="via">Square</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Square' },
                    { text: '<span class="via">Diamond</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Diamond' },
                    { text: '<span class="via">Pentagon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Pentagon' },
                    { text: '<span class="via">Hexagon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Hexagon' },
                    { text: '<span class="via">Heptagon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Heptagon' },
                    { text: '<span class="via">Octagon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Octagon' },
                    { text: '<span class="via">Nonagon</span>', link: '/reference/Elements/Via/Geometry/Shape/Polygon/Nonagon' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: '🔻<span class="via">Logic</span>', link: '/reference/Elements/Via/Logic/Overview', collapsed: true, items: [
            { text: '<span class="via">Conditional Logic</span>', link: '/reference/Elements/Via/Logic/ConditionalLogic/Overview', },
            { text: '<span class="via">Propositional Logic</span>', link: '/reference/Elements/Via/Logic/PropositionalLogic/Overview', },
          ]
        },
        {
          text: '🔻<span class="via">Probability</span>', link: '/reference/Elements/Via/Probability/Overview', collapsed: true, items: [
            {
              text: '<span class="via">Affordance</span>', link: '/reference/Elements/Via/Probability/Affordance/Overview', collapsed: true, items: [
                {
                  text: '<span class="via">Site</span>', link: '/reference/Elements/Via/Probability/Affordance/Site/Overview', collapsed: true, items: [
                    { text: '<span class="via">Landing</span>', link: '/reference/Elements/Via/Probability/Affordance/Site/Landing' },
                  ]
                },
                {
                  text: '<span class="via">Passage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/Overview', collapsed: true, items: [
                    { text: '<span class="via">BoustroPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/BoustroPassage' },
                    { text: '<span class="via">CircuitPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/CircuitPassage' },
                    { text: '<span class="via">CircumventPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/CircumventPassage' },
                    { text: '<span class="via">PerimeterPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/PerimeterPassage' },
                  ]
                },
                {
                  text: '<span class="Via">Limit</span>', link: '/reference/Elements/Via/Probability/Affordance/Limit/Overview', collapsed: true, items: [
                    { text: '<span class="via">Maximum</span>', link: '/reference/Elements/Via/Probability/Affordance/Limit/Maximum' },
                    { text: '<span class="via">Minimum</span>', link: '/reference/Elements/Via/Probability/Affordance/Limit/Minimum' },
                  ]
                },
              ]
            },
            {
              text: '<span class="via">Constraint</span>', link: '/reference/Elements/Via/Probability/Constraint/Overview', collapsed: true, items: [
                { text: '<span class="via">DegreesOfFreedom</span>', link: '/reference/Elements/Via/Probability/Constraint/DegreesOfFreedom' },
                { text: '<span class="via">Hyper</span>', link: '/reference/Elements/Via/Probability/Constraint/Hyper' },
                { text: '<span class="via">Hypo</span>', link: '/reference/Elements/Via/Probability/Constraint/Hypo' },
              ]
            },
            { text: '<span class="via">Fortuna</span>', link: '/reference/Elements/Via/Probability/Fortuna/Overview' },
            { text: '<span class="via">Frequency</span>', link: '/reference/Elements/Via/Probability/Frequency/Overview' },
          ]
        },
      ]
    },
    {
      text: '🟠<span class="motor">MOTOR</span>',
      collapsed: true,
      link: '/reference/Elements/Motor/MotorOverview',
      items: [
        {
          text: '🟠<span class="motor">Dynamics</span>', link: '/reference/Elements/Motor/Dynamics/Overview', collapsed: true, items: [
            {
              text: '<span class="motor">Forces</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Overview', collapsed: true, items: [
                { text: '<span class="motor">CentripetalForce</span>', link: '/reference/Elements/Motor/Dynamics/Forces/CentripetalForce' },
                { text: '<span class="motor">Friction</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Friction' },
                { text: '<span class="motor">Gravity</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Gravity' },
                { text: '<span class="motor">NormalForce</span>', link: '/reference/Elements/Motor/Dynamics/Forces/NormalForce' },
                { text: '<span class="motor">Pressure</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Pressure' },
                { text: '<span class="motor">Tension</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Tension' },
                { text: '<span class="motor">Compression</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Compression' },
              ]
            },
            {
              text: '<span class="motor">Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/Overview', collapsed: true, items: [
                { text: '<span class="motor">Kinetic Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/KineticEnergy' },
                { text: '<span class="motor">Potential Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/PotentialEnergy' },
                { text: '<span class="motor">Elastic Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/ElasticEnergy' },
              ]
            },
            { text: '<span class="motor">Inertia</span>', link: '/reference/Elements/Motor/Dynamics/Inertia' },
            { text: '<span class="motor">Momentum</span>', link: '/reference/Elements/Motor/Dynamics/Momentum' },
            { text: '<span class="motor">Power</span>', link: '/reference/Elements/Motor/Dynamics/Power' },
            { text: '<span class="motor">Work</span>', link: '/reference/Elements/Motor/Dynamics/Work' },
            { text: '<span class="motor">Torque</span>', link: '/reference/Elements/Motor/Dynamics/Torque' },
          ]
        },
        {
          text: '🟠<span class="motor">Kinematics</span>', link: '/reference/Elements/Motor/Kinematics/Overview', collapsed: true, items: [
            { text: '<span class="motor">Speed</span>', link: '/reference/Elements/Motor/Kinematics/Speed' },
            { text: '<span class="motor">Velocity</span>', link: '/reference/Elements/Motor/Kinematics/Velocity' },
            { text: '<span class="motor">Acceleration</span>', link: '/reference/Elements/Motor/Kinematics/Acceleration' },
            { text: '<span class="motor">Jerk</span>', link: '/reference/Elements/Motor/Kinematics/Jerk' },
          ]
        },
        {
          text: '🟠<span class="motor">Time</span>', link: '/reference/Elements/Motor/Time/Overview', collapsed: true, items: [
            { text: '<span class="motor">Rhythm</span>', link: '/reference/Elements/Motor/Time/Ritmo' },
            { text: '<span class="motor">Syncopation</span>', link: '/reference/Elements/Motor/Time/Syncopation' },
            { text: '<span class="motor">Tempo</span>', link: '/reference/Elements/Motor/Time/Tempo' },
          ]
        },
      ]
    },
    {
      text: '💜<span class="anima">ANIMA</span>',
      collapsed: true,
      link: '/reference/Elements/Anima/AnimaOverview',
      items: [
        {
          text: '💜<span class="anima">Cognitions</span>', link: '/reference/Elements/Anima/Cognitions/Overview', collapsed: true, items: [
            { text: '<span class="anima">Attention</span>', link: '/reference/Elements/Anima/Cognitions/Attention/Overview' },
            {
              text: '<span class="anima">CognitiveEase</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/Overview', collapsed: true, items: [
                { text: '<span class="anima">Clarity Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/ClarityEase' },
                { text: '<span class="anima">Repetition Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/RepetitionEase' },
                { text: '<span class="anima">Priming Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/PrimingEase' },
                { text: '<span class="anima">Good Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/GoodEase' },
                { text: '<span class="anima">Feels Familiar</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsFamiliar' },
                { text: '<span class="anima">Feels Effortless</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsEffortless' },
                { text: '<span class="anima">Feels Good</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsGood' },
                { text: '<span class="anima">Feels True</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsTrue' },
              ]
            },
            { text: '<span class="anima">Decision</span>', link: '/reference/Elements/Anima/Cognitions/Decision/Overview' },
            { text: '<span class="anima">Estimation</span>', link: '/reference/Elements/Anima/Cognitions/Estimation/Overview' },
            { text: '<span class="anima">Identification</span>', link: '/reference/Elements/Anima/Cognitions/Identification/Overview' },
            { text: '<span class="anima">Judgement</span>', link: '/reference/Elements/Anima/Cognitions/Judgement/Overview' },
            {
              text: '<span class="anima">Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/Overview', collapsed: true, items: [
                { text: '<span class="anima">Long Term Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/LongTermMemory' },
                { text: '<span class="anima">Short Term Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/ShortTermMemory' },
                { text: '<span class="anima">Working Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/WorkingMemory' },
              ]
            },
            { text: '<span class="anima">Perception</span> ', link: '' },
          ]
        },
        {
          text: '<span class="anima">Emotions</span>', link: '/reference/Elements/Anima/Emotions/Overview', collapsed: true, items: [
            { text: '<span class="anima">Anger</span>', link: '/reference/Elements/Anima/Emotions/Anger' },
            { text: '<span class="anima">Disgust</span>', link: '/reference/Elements/Anima/Emotions/Disgust' },
            { text: '<span class="anima">Fear</span>', link: '/reference/Elements/Anima/Emotions/Fear' },
            { text: '<span class="anima">Joy</span>', link: '/reference/Elements/Anima/Emotions/Joy' },
            { text: '<span class="anima">Sadness</span>', link: '/reference/Elements/Anima/Emotions/Sadness' },
          ]
        },
        { text: '<span class="anima">Learning</span>', link: '/reference/Elements/Anima/Learning/Overview', collapsed: true, items: [] },

        {
          text: '<span class="anima">MindState</span>', link: '/reference/Elements/Anima/MindState/Overview', collapsed: true, items: [
            { text: '<span class="anima">Arousal</span>', link: '/reference/Elements/Anima/MindState/Arousal/Overview' },
            { text: '<span class="anima">Confidence</span>', link: '/reference/Elements/Anima/MindState/Confidence/Overview' },
            { text: '<span class="anima">Mindfulness</span>', link: '/reference/Elements/Anima/MindState/Mindfulness/Overview' },
            { text: '<span class="anima">Flow State</span>', link: '/reference/Elements/Anima/MindState/FlowState' },
          ]
        },
        {
          text: '<span class="anima">Senses</span>', link: '/reference/Elements/Anima/Senses/Overview', collapsed: true, items: [
            { text: '<span class="anima">Auditory</span>', link: '/reference/Elements/Anima/Senses/AuditorySense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Touch</span>', link: '/reference/Elements/Anima/Senses/TouchSense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Pressure</span>', link: '/reference/Elements/Anima/Senses/PressureSense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Proprioception</span>', link: '/reference/Elements/Anima/Senses/Proprioception/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
  ]
}

function sidebarBetoms() {
  return [
    { text: 'Overview', link: '/reference/Betoms/BetomsOverview' },
  ]
}


// PRAKTIK
function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/reference/Praktik/Praktik_Overview' },
  ]
}

// Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
  ]
}

// Examples
function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/ExamplesOverview' },
    { text: 'Planter Questions', link: '/examples/PlanterQuestions' },
    // { text: '2k of Beta', link: '/examples/2kBeta' },
  ]
}

