import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';

const { useState, useEffect, useRef } = React;
const e = React.createElement;
const m = (tag, props, ...children) => e(motion[tag] || motion.div, props, ...children);

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('kl-theme');
    const isDark = saved ? saved === 'dark' : true;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('kl-theme', next ? 'dark' : 'light');
  };
  return { dark, toggle };
}

const GH = 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
const LI = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
const LC = 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z';
const ML = 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z';

const SOCIAL = [
  { name:'GitHub',   url:'https://github.com/Kshitij757',                        p:GH },
  { name:'LinkedIn', url:'https://www.linkedin.com/in/kshitij-lodhi',            p:LI },
  { name:'LeetCode', url:'https://leetcode.com/u/Kshitij20_25/',                p:LC },
  { name:'Email',    url:'mailto:kshitijlodhi2005@gmail.com',                   p:ML },
];

const SKILLS = {
  'Languages':         ['C++','Python','Java','JavaScript'],
  'Frameworks & Libs': ['HTML','CSS','Pandas','NumPy','Matplotlib','FastAPI','Streamlit','Scikit-learn'],
  'Tools & Platforms': ['MySQL','Power BI','Excel','Git','GitHub','Java GUI','Maven'],
  'Soft Skills':       ['Problem-Solving','Leadership','Adaptability','Quick Learner'],
};

const PROJECTS = [
  { title:'Real-Time CPU Scheduler', date:"Apr '25",
    desc:'Simulates real-time CPU scheduling using FCFS, SJF, SRTF, Priority, and Round Robin with clear Gantt chart visualization. Built an interactive interface generating dynamic Gantt charts, computes completion/turnaround/waiting time instantly, and visually highlights gaps and context switches.',
    tech:['HTML','CSS','JavaScript','OS Concepts','Gantt Charts'],
    github:'https://github.com/Kshitij757/RealTime_CPU_Scheduler' },
  { title:'Pet Breed Recommender GenAI', date:"Feb '25",
    desc:'ML-based system recommending dog and cat breeds based on user preferences like size, activity level, temperament, and maintenance needs. Integrated Google Generative AI to generate natural-language explanations for each recommendation, enhancing clarity and user experience.',
    tech:['Python','FastAPI','Scikit-learn','Streamlit','Google GenAI','ML'],
    github:'https://github.com/Kshitij757/pet-breed-recommender-genai' },
  { title:'Snake Game Java', date:"Apr '24",
    desc:'Interactive Snake Game using Java Swing with smooth controls (WASD + Arrow keys) and real-time collision detection. Implemented a robust game loop, dynamic speed progression, scoring logic, and a persistent high score system using file handling.',
    tech:['Java','Java Swing','OOP','Maven','File Handling'],
    github:'https://github.com/Kshitij757/snake-game-java' },
];

const TRAININGS = [
  { title:'Java Application Development', org:'Lovely Professional University', role:'Software Development Trainee', date:"Jun '25 – Jul '25",
    desc:'Learned core Java concepts including OOPs principles, exception handling, collections, and multithreading. Gained hands-on experience building desktop applications using Java Swing and GUI frameworks. Developed event-driven programming skills, application logic design, and modular code development.',
    tech:['Java','Swing','OOPs Concepts'] },
];

const TIMELINE = [
  { type:'Education',   title:"B.Tech CSE — CGPA: 6.5",                 org:'Lovely Professional University, Phagwara', date:"Aug '23 – Present" },
  { type:'Training',    title:'Java Application Development Trainee',    org:'Lovely Professional University',           date:"Jun '25 – Jul '25" },
  { type:'Achievement', title:'Volunteer Intern — Pravah NGO',           org:'Haridwar, Uttarakhand',                   date:"Jun '24" },
  { type:'Education',   title:'Intermediate — PCM (90%)',                org:'Achievers Home Public School, Haridwar',  date:"Aug '20 – Jul '22" },
  { type:'Education',   title:'Matriculation (85%)',                     org:'Achievers Home Public School, Haridwar',  date:"Feb '19 – Jul '20" },
];

const CERTS = [
  { title:'Peer-to-Peer Protocols & Local Area Networks', iss:'University of Colorado via Coursera', date:'Nov 2024', file:'Certificates/coursera_peer_to_peer.png' },
  { title:'C Programming for Beginners – Master the C Language', iss:'Udemy', date:'Feb 2024', file:'Certificates/udemy_c_programming.png' },
  { title:'Generative AI & Computational Theory Portfolio', iss:'Udemy', date:'Jul 2025', file:null },
];

const MARQ = ['JAVA','PYTHON','C++','FULL STACK','MACHINE LEARNING','OPEN SOURCE','OOP','DSA','PROBLEM SOLVING','JAVASCRIPT','GENAI','ALGORITHMS'];
const CV_URL = 'https://drive.google.com/file/d/1IUvzyBwH44zgpLLo_P1AtIhifyb8MdLc/view?usp=sharing';

function useScrollY() {
  const [y,setY] = useState(0);
  useEffect(()=>{
    const h=()=>setY(window.scrollY);
    window.addEventListener('scroll',h,{passive:true});
    return ()=>window.removeEventListener('scroll',h);
  },[]);
  return y;
}
function useInViewOnce(ref,thresh=0.2) {
  const [vis,setVis]=useState(false);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([en])=>{ if(en.isIntersecting){setVis(true);obs.disconnect();} },{threshold:thresh});
    obs.observe(el); return ()=>obs.disconnect();
  },[ref,thresh]);
  return vis;
}
function Counter({to}) {
  const ref=useRef(null);
  const [n,setN]=useState(0);
  const vis=useInViewOnce(ref);
  useEffect(()=>{
    if(!vis) return;
    const st=Date.now();
    const step=()=>{ const p=Math.min((Date.now()-st)/1800,1); setN(Math.round((1-Math.pow(1-p,3))*to)); if(p<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  },[vis,to]);
  return e('span',{ref},n);
}

const fadeUp={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:0.55,ease:[0.22,1,0.36,1]}}};
const stagger={visible:{transition:{staggerChildren:0.09}}};

const Ic=({p,sz=18})=>e('svg',{width:sz,height:sz,viewBox:'0 0 24 24',fill:'currentColor'},e('path',{d:p}));

const DlIc=()=>e('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round'},
  e('path',{d:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'}),e('polyline',{points:'7 10 12 15 17 10'}),e('line',{x1:'12',y1:'15',x2:'12',y2:'3'}));
const ExtIc=()=>e('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round'},
  e('path',{d:'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'}),e('polyline',{points:'15 3 21 3 21 9'}),e('line',{x1:'10',y1:'14',x2:'21',y2:'3'}));
const SunIc=()=>e('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},
  e('circle',{cx:'12',cy:'12',r:'5'}),e('line',{x1:'12',y1:'1',x2:'12',y2:'3'}),e('line',{x1:'12',y1:'21',x2:'12',y2:'23'}),
  e('line',{x1:'4.22',y1:'4.22',x2:'5.64',y2:'5.64'}),e('line',{x1:'18.36',y1:'18.36',x2:'19.78',y2:'19.78'}),
  e('line',{x1:'1',y1:'12',x2:'3',y2:'12'}),e('line',{x1:'21',y1:'12',x2:'23',y2:'12'}),
  e('line',{x1:'4.22',y1:'19.78',x2:'5.64',y2:'18.36'}),e('line',{x1:'18.36',y1:'5.64',x2:'19.78',y2:'4.22'}));
const MoonIc=()=>e('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},
  e('path',{d:'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'}));

// NAVBAR
function NavBar({dark,toggle}) {
  const sy=useScrollY();
  const [open,setOpen]=useState(false);
  const links=['About','Projects','LeetCode','Training','Timeline','Certificates','Contact'];
  return e(React.Fragment,null,
    e('nav',{className:'navbar'+(sy>60?' scrolled':'')},
      e('a',{href:'#',className:'nav-logo'},'KL',e('span',{className:'dot'},'.')),
      e('div',{className:'nav-right'},
        e('ul',{className:'nav-links'},...links.map(l=>e('li',{key:l},e('a',{href:`#${l.toLowerCase()}`},l)))),
        e('button',{className:'theme-btn','aria-label':'Toggle theme',onClick:toggle},dark?e(SunIc):e(MoonIc)),
        e('button',{className:'hamburger',onClick:()=>setOpen(!open),'aria-label':'Menu'},
          e('span',{style:open?{transform:'rotate(45deg) translate(5px,5px)'}:{}}),
          e('span',{style:open?{opacity:0}:{}}),
          e('span',{style:open?{transform:'rotate(-45deg) translate(5px,-5px)'}:{}}),
        ),
      ),
    ),
    e('div',{className:'mobile-menu'+(open?' open':'')},
      ...links.map(l=>e('a',{key:l,href:`#${l.toLowerCase()}`,onClick:()=>setOpen(false)},l)),
      e('button',{className:'theme-btn',style:{marginTop:16},onClick:()=>{toggle();setOpen(false);}},dark?e(SunIc):e(MoonIc))
    ),
  );
}

// HERO
function Hero() {
  const [modal,setModal]=useState(false);
  useEffect(()=>{
    const fn=ev=>{if(ev.key==='Escape')setModal(false);};
    window.addEventListener('keydown',fn); return ()=>window.removeEventListener('keydown',fn);
  },[]);
  return e(React.Fragment,null,
    e(motion.section,{className:'hero section',style:{paddingTop:80},initial:'hidden',animate:'visible',variants:stagger},
      e('div',{className:'orb orb1'}),e('div',{className:'orb orb2'}),e('div',{className:'orb orb3'}),
      e('div',{className:'container'},
        e('div',{className:'hero-grid'},
          e('div',null,
            m('div',{variants:fadeUp},e('div',{className:'hero-eyebrow'},e('span',{className:'blink'}),'Available for Internship 2025')),
            m('div',{variants:fadeUp},
              e('h1',{className:'hero-name'},'KSHITIJ',e('span',{className:'outline'},'LODHI'))
            ),
            m('div',{variants:fadeUp},e('p',{className:'hero-role'},'// ',e('span',null,'CS ENGINEER'),' · ',e('span',null,'BUILDER'),' · ',e('span',null,'PROBLEM SOLVER'))),
            m('div',{variants:fadeUp},
              e('p',{className:'hero-desc'},
                '3rd-year ',e('strong',null,'B.Tech CSE'),' student at LPU — passionate about building impactful software, solving algorithmic challenges, and exploring AI/ML frontiers. Focused on Java development, data science, and GenAI projects.'
              )
            ),
            m('div',{variants:fadeUp,className:'hero-ctas'},
              e('a',{href:'#contact',className:'btn-primary'},'Work With Me →'),
              e('button',{className:'btn-outline',onClick:()=>setModal(true)},e(DlIc),'Resume'),
            ),
            m('div',{variants:fadeUp,className:'hero-socials'},
              ...SOCIAL.map(s=>
                e('a',{key:s.name,href:s.url,target:'_blank',rel:'noopener noreferrer',className:'spill',title:s.name},
                  e(Ic,{p:s.p,sz:13}),s.name)
              )
            ),
          ),
          m('div',{variants:fadeUp,className:'hero-right'},
            e('div',{className:'fbadge fb1'},e('span',{className:'fdot'}),'3rd Year @ LPU'),
            e('div',{className:'fbadge fb2'},e('span',{className:'fdot'}),'10+ Projects'),
            e('div',{className:'fbadge fb3'},e('span',{className:'fdot'}),'Open to Work'),
            e('div',{className:'term-card'},
              e('div',{className:'term-hdr'},e('div',{className:'td td-r'}),e('div',{className:'td td-y'}),e('div',{className:'td td-g'}),e('span',{className:'term-ttl'},'kshitij@portfolio ~')),
              e('div',{className:'term-body'},
                e('div',{className:'tl'},e('span',{className:'tp'},'❯'),e('span',{className:'tc'},'whoami')),
                e('div',{className:'tout'},e('span',{className:'tk'},'name'),e('span',{className:'tv'},': Kshitij Lodhi')),
                e('div',{className:'tout'},e('span',{className:'tk'},'role'),e('span',{className:'tv'},': CS Engineer')),
                e('div',{className:'tout'},e('span',{className:'tk'},'year'),e('span',{className:'tv'},': 3rd Year, LPU')),
                e('div',{className:'tout'},e('span',{className:'tk'},'cgpa'),e('span',{className:'tv'},': 6.5')),
                e('div',{style:{height:8}}),
                e('div',{className:'tl'},e('span',{className:'tp'},'❯'),e('span',{className:'tc'},'cat skills.txt')),
                e('div',{className:'tout'},e('span',{className:'tk'},'lang'),e('span',{className:'tv'},': C++ Python Java JS')),
                e('div',{className:'tout'},e('span',{className:'tk'},'tools'),e('span',{className:'tv'},': Git MySQL PowerBI')),
                e('div',{className:'tout'},e('span',{className:'tk'},'focus'),e('span',{className:'tv'},': DSA · GenAI · OOP')),
                e('div',{style:{height:8}}),
                e('div',{className:'tl'},e('span',{className:'tp'},'❯'),e('span',{className:'tc'},'./run portfolio.sh'),e('span',{className:'cur'})),
              ),
            ),
          ),
        ),
      ),
    ),
    e(AnimatePresence,null,
      modal&&e(motion.div,{key:'cv-ovl',className:'movl',initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>setModal(false)},
        e(motion.div,{key:'cv-box',className:'mbox',initial:{scale:0.95,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:0.95,opacity:0,y:20},transition:{type:'spring',damping:26,stiffness:300},onClick:ev=>ev.stopPropagation()},
          e('div',{className:'mhdr'},
            e('span',{className:'mtitle'},'📄 Kshitij Lodhi — Resume'),
            e('div',{className:'macts'},
              e('a',{href:CV_URL,target:'_blank',rel:'noopener noreferrer',className:'mdl'},e(ExtIc),'Open in New Tab'),
              e('button',{className:'mclose',onClick:()=>setModal(false)},'✕')
            )
          ),
          e('div',{className:'mbody'},
            e('div',{style:{width:'100%',maxWidth:540,fontFamily:"'Space Mono',monospace",fontSize:'0.76rem',lineHeight:2,color:'var(--text)'}},
              e('div',{style:{background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:10,padding:'28px',maxHeight:'calc(88vh - 130px)',overflowY:'auto'}},
                e('h1',{style:{fontFamily:"'Dela Gothic One',sans-serif",fontSize:'1.6rem',color:'var(--accent)',marginBottom:4}},'KSHITIJ LODHI'),
                e('div',{style:{color:'var(--text3)',fontSize:'0.66rem',marginBottom:14,display:'flex',flexDirection:'column',gap:3}},
                  e('span',null,'📧 kshitijlodhi2005@gmail.com'),
                  e('span',null,'📱 9193082745'),
                  e('span',null,'🔗 linkedin.com/in/kshitij-lodhi'),
                  e('span',null,'💻 github.com/Kshitij757'),
                  e('span',null,'🏆 leetcode.com/u/Kshitij20_25'),
                ),
                e('hr',{style:{borderColor:'var(--border)',margin:'12px 0'}}),
                e('h3',{style:{color:'var(--accent)',fontSize:'0.7rem',marginBottom:7,textTransform:'uppercase',letterSpacing:2}},'Education'),
                e('p',{style:{marginBottom:3}},'B.Tech CSE — LPU (CGPA: 6.5) | Aug\'23–Present'),
                e('p',{style:{color:'var(--text2)',fontSize:'0.68rem',marginBottom:10}},'Intermediate PCM 90% | Matriculation 85% — Achievers Home Public School'),
                e('hr',{style:{borderColor:'var(--border)',margin:'12px 0'}}),
                e('h3',{style:{color:'var(--accent)',fontSize:'0.7rem',marginBottom:7,textTransform:'uppercase',letterSpacing:2}},'Projects'),
                e('p',{style:{marginBottom:3}},'→ Real-Time CPU Scheduler (Apr\'25)'),
                e('p',{style:{marginBottom:3}},'→ Pet Breed Recommender GenAI (Feb\'25)'),
                e('p',{style:{marginBottom:10}},'→ Snake Game Java (Apr\'24)'),
                e('hr',{style:{borderColor:'var(--border)',margin:'12px 0'}}),
                e('h3',{style:{color:'var(--accent)',fontSize:'0.7rem',marginBottom:7,textTransform:'uppercase',letterSpacing:2}},'Skills'),
                e('p',{style:{color:'var(--text2)',marginBottom:14}},'C++, Python, Java, JavaScript | HTML, CSS, Pandas, NumPy, FastAPI, Streamlit | MySQL, Power BI, Git, GitHub'),
                e('hr',{style:{borderColor:'var(--border)',margin:'12px 0'}}),
                e('div',{style:{textAlign:'center',paddingTop:10}},
                  e('a',{href:CV_URL,target:'_blank',rel:'noopener noreferrer',className:'btn-primary',style:{display:'inline-flex',justifyContent:'center',gap:8}},
                    e(ExtIc),'Open Full CV in Google Drive'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

// MARQUEE
function Marquee({rev=false,alt=false}) {
  const items=[...MARQ,...MARQ,...MARQ,...MARQ];
  return e('div',{className:'mwrap'+(alt?' alt':'')},
    e('div',{className:'mtrack'+(rev?' rev':'')},
      ...items.map((w,i)=>e('span',{key:i,className:'mitem'},w,e('span',{className:'mdot'})))
    )
  );
}

// ABOUT
function About() {
  return e(motion.section,{id:'about',className:'section',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'About Me'),e('h2',{className:'section-heading'},'Who Am I?')),
      e('div',{className:'stat-row'},
        ...[{n:3,s:'+',l:'YEARS CODING'},{n:PROJECTS.length,s:'+',l:'PROJECTS BUILT'},{n:CERTS.length,s:'',l:'CERTIFICATIONS'}]
          .map((s,i)=>e('div',{key:i,className:'scard'},e('div',{className:'snum'},e(Counter,{to:s.n}),s.s),e('div',{className:'slbl'},s.l)))
      ),
      m('div',{variants:fadeUp,className:'about-split'},
        e('div',{className:'about-bio'},
          e('p',null,'Hi! I\'m a ',e('strong',null,'3rd-year B.Tech CSE'),' student at Lovely Professional University, passionate about writing clean, impactful code and solving complex algorithmic challenges.'),
          e('p',null,'My core interests span ',e('strong',null,'Java development'),', ',e('strong',null,'data science'),', and ',e('strong',null,'Generative AI'),'. I love building projects that blend intelligent systems with smooth, functional interfaces.'),
          e('p',null,'Beyond code, I\'m a quick learner who thrives in team environments — proven through NGO volunteer work and academic training at LPU.'),
        ),
        e('div',{className:'skills-grid'},
          ...Object.entries(SKILLS).map(([cat,skills])=>
            e('div',{key:cat,className:'sg'},
              e('div',{className:'sg-title'},cat),
              e('div',{className:'stags'},...skills.map(sk=>e('span',{key:sk,className:'stag'},sk)))
            )
          )
        )
      )
    )
  );
}

// PROJECTS
function Projects() {
  return e(motion.section,{id:'projects',className:'section',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Work'),e('h2',{className:'section-heading'},'Projects')),
      e('div',{className:'plist'},
        ...PROJECTS.map((p,i)=>
          m('div',{key:i,variants:fadeUp,className:'pcard'},
            e('div',{className:'pnum'},String(i+1).padStart(2,'0')),
            e('div',null,
              e('div',{className:'ptitle'},p.title),
              e('div',{className:'pdate'},p.date),
              e('p',{className:'pdesc'},p.desc),
              e('div',{className:'ptags'},...p.tech.map(t=>e('span',{key:t,className:'ptag'},t))),
            ),
            e('div',{className:'pacts'},
              e('a',{href:p.github,target:'_blank',rel:'noopener noreferrer',className:'btn-gh'},e(Ic,{p:GH,sz:14}),'GitHub ↗')
            )
          )
        )
      )
    )
  );
}

// LEETCODE
function LeetCode() {
  const [stats,setStats]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://leetcode-stats-api.herokuapp.com/Kshitij20_25')
      .then(r=>r.json()).then(d=>{ if(d&&d.totalSolved!==undefined) setStats(d); setLoading(false); })
      .catch(()=>setLoading(false));
  },[]);
  return e(motion.section,{id:'leetcode',className:'section',style:{background:'var(--bg3)'},initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Competitive'),e('h2',{className:'section-heading'},'LeetCode Stats')),
      m('div',{variants:fadeUp},
        e('div',{className:'lc-box'},
          e('div',{className:'lc-top'},
            e('div',{className:'lc-icon'},e('svg',{width:38,height:38,viewBox:'0 0 24 24',fill:'var(--accent)'},e('path',{d:LC}))),
            e('div',null,e('div',{className:'lc-pname'},'@Kshitij20_25'),e('div',{className:'lc-purl'},'leetcode.com/u/Kshitij20_25/'))
          ),
          loading
            ? e('div',{className:'lc-load'},'Loading stats...')
            : stats
            ? e('div',null,
                e('div',{className:'lc-total'},e('div',{className:'lc-tnum'},stats.totalSolved||0),e('div',{className:'lc-tlbl'},'Problems Solved')),
                e('div',{className:'lc-sgrid'},
                  e('div',{className:'lcsb easy'},e('div',{className:'lcn'},stats.easySolved||0),e('div',{className:'lclbl'},'Easy')),
                  e('div',{className:'lcsb med'}, e('div',{className:'lcn'},stats.mediumSolved||0),e('div',{className:'lclbl'},'Medium')),
                  e('div',{className:'lcsb hard'},e('div',{className:'lcn'},stats.hardSolved||0),e('div',{className:'lclbl'},'Hard')),
                ),
                e('div',{className:'lc-footer'},
                  stats.ranking?e('div',{className:'lc-rank'},'Global Rank: ',e('span',null,'#'+stats.ranking.toLocaleString())):e('span',null),
                  e('a',{href:'https://leetcode.com/u/Kshitij20_25/',target:'_blank',rel:'noopener noreferrer',className:'btn-gh'},e(Ic,{p:LC,sz:13}),'View Profile ↗')
                )
              )
            : e('div',null,
                e('div',{className:'lc-sgrid'},
                  e('div',{className:'lcsb easy'},e('div',{className:'lcn'},'—'),e('div',{className:'lclbl'},'Easy')),
                  e('div',{className:'lcsb med'}, e('div',{className:'lcn'},'—'),e('div',{className:'lclbl'},'Medium')),
                  e('div',{className:'lcsb hard'},e('div',{className:'lcn'},'—'),e('div',{className:'lclbl'},'Hard')),
                ),
                e('div',{className:'lc-footer'},
                  e('span',{style:{color:'var(--text3)',fontSize:'0.7rem',fontFamily:"'Space Mono',monospace"}},'Stats temporarily unavailable'),
                  e('a',{href:'https://leetcode.com/u/Kshitij20_25/',target:'_blank',rel:'noopener noreferrer',className:'btn-gh'},e(Ic,{p:LC,sz:13}),'View Profile ↗')
                )
              )
        )
      )
    )
  );
}

// TRAINING
function Training() {
  return e(motion.section,{id:'training',className:'section',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Experience'),e('h2',{className:'section-heading'},'Training')),
      ...TRAININGS.map((t,i)=>
        m('div',{key:i,variants:fadeUp,className:'tcard'},
          e('div',{className:'thdr'},e('div',{className:'ttitle'},t.title),e('span',{className:'tbadge'},t.date)),
          e('div',{className:'torg'},t.org),e('div',{className:'trole'},t.role),
          e('p',{className:'tdesc'},t.desc),
          e('div',{className:'ttags'},...t.tech.map(tt=>e('span',{key:tt,className:'ttag'},tt)))
        )
      )
    )
  );
}

// TIMELINE
function Timeline() {
  return e(motion.section,{id:'timeline',className:'section tl-bg',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'History'),e('h2',{className:'section-heading'},'The Record')),
      e('div',{className:'tlline'},
        ...TIMELINE.map((t,i)=>
          m('div',{key:i,variants:fadeUp,className:'tlitem'},
            e('div',{className:'tltype'},t.type),e('div',{className:'tltitle'},t.title),
            e('div',{className:'tlorg'},t.org),e('div',{className:'tldate'},t.date)
          )
        )
      )
    )
  );
}

// CERTIFICATES
function Certificates() {
  const [sel,setSel]=useState(null);
  useEffect(()=>{
    const fn=ev=>{if(ev.key==='Escape')setSel(null);};
    window.addEventListener('keydown',fn); return ()=>window.removeEventListener('keydown',fn);
  },[]);
  return e(motion.section,{id:'certificates',className:'section',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Credentials'),e('h2',{className:'section-heading'},'Certificates')),
      e('div',{className:'cgrid'},
        ...CERTS.map((c,i)=>
          m('div',{key:i,variants:fadeUp,className:'ccard',onClick:()=>c.file&&setSel(c),style:{cursor:c.file?'pointer':'default'}},
            e('div',{className:'cbgn'},String(i+1).padStart(2,'0')),
            e('div',{className:'ciss'},c.iss),
            e('div',{className:'ctitle'},c.title),
            e('div',{className:'cdate'},c.date)
          )
        )
      )
    ),
    e(AnimatePresence,null,
      sel&&e(motion.div,{key:'cm-ovl',className:'movl',initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>setSel(null)},
        e(motion.div,{key:'cm-box',className:'mbox',initial:{scale:0.95,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:0.95,opacity:0,y:20},transition:{type:'spring',damping:26,stiffness:300},onClick:ev=>ev.stopPropagation()},
          e('div',{className:'mhdr'},
            e('span',{className:'mtitle'},sel.title),
            e('div',{className:'macts'},
              e('a',{href:sel.file,download:sel.title+' Cert',className:'mdl'},e(DlIc),'Download'),
              e('button',{className:'mclose',onClick:()=>setSel(null)},'✕')
            )
          ),
          e('div',{className:'mbody'},
            e('img',{src:sel.file,alt:sel.title,style:{maxWidth:'100%',maxHeight:'calc(100% - 60px)',objectFit:'contain',borderRadius:6}}),
            e('a',{href:sel.file,download:sel.title+' Cert',className:'btn-primary',style:{marginTop:12,display:'inline-flex',gap:8}},e(DlIc),'Download Certificate')
          )
        )
      )
    )
  );
}

// ACHIEVEMENTS
function Achievements() {
  return e(motion.section,{id:'achievements',className:'section',style:{background:'var(--bg3)'},initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Community'),e('h2',{className:'section-heading'},'Achievements')),
      m('div',{variants:fadeUp,className:'acard'},
        e('div',{className:'aico'},'🌱'),
        e('div',null,
          e('div',{className:'atitle'},'Volunteer Intern — Pravah NGO'),
          e('div',{className:'adate'},"Jun '24"),
          e('p',{className:'adesc'},'Contributed to education and welfare of underprivileged children by teaching academic subjects, engaging them in learning activities, and helping in food distribution. Worked closely with children lacking family support or involved in child labour.')
        )
      )
    )
  );
}

// CONTACT
function Contact() {
  return e(motion.section,{id:'contact',className:'section ct-bg',initial:'hidden',whileInView:'visible',viewport:{once:true,margin:'-80px'},variants:stagger},
    e('div',{className:'container'},
      m('div',{variants:fadeUp},e('div',{className:'section-label'},'Connect'),e('h2',{className:'section-heading'},'Get In Touch')),
      m('div',{variants:fadeUp,className:'ct-grid'},
        e('div',null,
          e('div',{className:'ct-big'},"LET'S BUILD ",e('span',null,'SOMETHING'),' TOGETHER'),
          e('p',{className:'ct-info'},'Open to collaborations, internship opportunities, and interesting engineering challenges. Reach out and let\'s connect!'),
          e('div',{className:'ct-row'},'📧 ',e('a',{href:'mailto:kshitijlodhi2005@gmail.com'},'kshitijlodhi2005@gmail.com')),
          e('div',{className:'ct-row'},'📱 9193082745'),
          e('div',{className:'ct-row'},'🔗 ',e('a',{href:'https://www.linkedin.com/in/kshitij-lodhi',target:'_blank',rel:'noopener noreferrer'},'linkedin.com/in/kshitij-lodhi')),
          e('div',{className:'ct-socials'},
            ...SOCIAL.map(s=>
              e('a',{key:s.name,href:s.url,target:'_blank',rel:'noopener noreferrer',className:'spill',title:s.name},
                e(Ic,{p:s.p,sz:13}),s.name)
            )
          )
        ),
        e('form',{className:'ct-form',action:'https://formspree.io/f/kshitijlodhi2005',method:'POST'},
          e('div',null,e('label',{className:'flbl'},'Your Name'),e('input',{type:'text',name:'name',className:'finp',placeholder:'John Doe',required:true})),
          e('div',null,e('label',{className:'flbl'},'Your Email'),e('input',{type:'email',name:'email',className:'finp',placeholder:'john@email.com',required:true})),
          e('div',null,e('label',{className:'flbl'},'Message'),e('textarea',{name:'message',className:'ftxt',placeholder:'Your message...',required:true})),
          e('button',{type:'submit',className:'fsub'},'Send Message →')
        )
      )
    )
  );
}

// FOOTER
function Footer() {
  return e('footer',{className:'footer'},
    e('p',null,'© 2025 ',e('span',null,'Kshitij Lodhi'),'. Built with ',e('span',null,'code'),' and ',e('span',null,'passion'),'.')
  );
}

// APP
function App() {
  const {dark,toggle} = useTheme();
  return e(React.Fragment,null,
    e(NavBar,{dark,toggle}),
    e('main',null,
      e(Hero),
      e(Marquee,{rev:false}),
      e(About),
      e(Marquee,{rev:true,alt:true}),
      e(Projects),
      e(Marquee,{rev:false}),
      e(LeetCode),
      e(Marquee,{rev:true,alt:true}),
      e(Training),
      e(Marquee,{rev:false}),
      e(Timeline),
      e(Marquee,{rev:true,alt:true}),
      e(Certificates),
      e(Achievements),
      e(Contact),
    ),
    e(Footer)
  );
}

createRoot(document.getElementById('root')).render(e(App));
