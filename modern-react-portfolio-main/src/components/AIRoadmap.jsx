import { CheckCircle2, CircleDot, Code2, Terminal, BrainCircuit } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal3D from './ScrollReveal3D';

const roadmapData = [
  {
    stage: 'PHASE 01',
    title: 'Foundations & Python Mastery',
    desc: 'Mastering CS fundamentals, Git/GitHub, and Advanced Python including OOP, Data Structures, and File Handling.',
    status: 'Completed',
    icon: <CheckCircle2 className="text-zinc-200" size={18} />,
  },
  {
    stage: 'PHASE 02',
    title: 'Data Science & Visualization',
    desc: 'NumPy, Pandas, and Exploratory Data Analysis (EDA) to manipulate, clean, and visualize real-world datasets.',
    status: 'Completed',
    icon: <CheckCircle2 className="text-zinc-200" size={18} />,
  },
  {
    stage: 'PHASE 03',
    title: 'Machine Learning & Predictive Models',
    desc: 'Linear Algebra, Calculus, and building ML algorithms including Regression, Decision Trees, and XGBoost with Scikit-learn.',
    status: 'Completed',
    icon: <BrainCircuit className="text-accent-blue" size={18} />,
  },
  {
    stage: 'PHASE 04',
    title: 'Deep Learning, Computer Vision & LLMs',
    desc: 'Building custom Neural Networks, Sign Language translators, and RAG/LLM applications using Python and modern AI APIs.',
    status: 'In Progress',
    icon: <CircleDot className="text-accent-blue animate-pulse" size={18} />,
  },
  {
    stage: 'PHASE 05',
    title: 'Full-Stack AI Integration (FastAPI + MERN)',
    desc: 'Connecting Python AI backends (FastAPI) with React, Next.js, Node.js, MongoDB, and Supabase for full-stack production apps.',
    status: 'In Progress',
    icon: <Code2 className="text-accent-purple" size={18} />,
  },
  {
    stage: 'PHASE 06',
    title: 'Scalable MLOps & AI SaaS Products',
    desc: 'Deploying containerized AI microservices with Docker and launching end-to-end intelligent SaaS solutions.',
    status: 'Upcoming',
    icon: <Terminal className="text-zinc-400" size={18} />,
  },
];

const AIRoadmap = () => {
  return (
    <section id="roadmap" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal3D>
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue block mb-2">
              04 / Progression
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              AI &amp; Full-Stack{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                Engineering Roadmap
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-2">
              A structured overview of my journey across Python, Machine Learning, and Full-Stack Web Engineering.
            </p>
          </div>
        </ScrollReveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapData.map((item, index) => (
            <ScrollReveal3D key={index} delay={index * 0.05}>
              <TiltCard className="h-full bg-zinc-900/80 backdrop-blur-xl p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 bg-zinc-950 rounded-xl border border-zinc-800">
                        {item.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        {item.stage}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] px-3 py-1 rounded-full font-semibold border ${
                        item.status === 'Completed'
                          ? 'border-zinc-700 text-zinc-200 bg-zinc-800/70'
                          : item.status === 'In Progress'
                          ? 'border-accent-blue/40 text-accent-blue bg-accent-blue/10'
                          : 'border-zinc-800 text-zinc-500 bg-zinc-950'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRoadmap;