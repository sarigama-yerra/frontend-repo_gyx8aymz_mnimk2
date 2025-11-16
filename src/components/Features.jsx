import { Cpu, PackageCheck, Radar, Route, Sparkles, Workflow } from 'lucide-react';

const brandPrimary = '#06232e';
const accent = '#54b477';

const features = [
  {
    icon: Sparkles,
    title: 'Predictive Orchestration',
    desc: 'AI that forecasts demand, allocates labor, and schedules robots before spikes hit.',
  },
  {
    icon: Workflow,
    title: 'Dynamic Workflows',
    desc: 'Drag-and-drop flows that react to real-time signals across your operation.',
  },
  {
    icon: PackageCheck,
    title: 'Zero-Miss Inventory',
    desc: 'Computer vision and sensors sync every SKU to a single source of truth.',
  },
  {
    icon: Route,
    title: 'Intelligent Routing',
    desc: 'Continuously optimized pick paths and dock assignments reduce travel time.',
  },
  {
    icon: Radar,
    title: 'Anomaly Detection',
    desc: 'Spot exceptions instantly with automated root-cause analysis and remediation.',
  },
  {
    icon: Cpu,
    title: 'Open AI Stack',
    desc: 'Bring your models. We plug into your data lake and MLOps platform securely.',
  },
];

export default function Features() {
  return (
    <section id="product" className="relative" style={{ background: brandPrimary }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The AI Warehouse Operating System
          </h2>
          <p className="mt-3 text-white/70">
            A minimal surface with deep intelligence—built to disappear into your workflow and deliver results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-20"
                   style={{ background: 'radial-gradient(circle, rgba(84,180,119,0.5), rgba(6,35,46,0) 60%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
