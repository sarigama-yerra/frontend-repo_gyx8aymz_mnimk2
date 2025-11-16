const accent = '#54b477';

export default function CTA() {
  return (
    <section id="cta" className="relative" style={{ background: '#06232e' }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            Ready to move faster with fewer touches?
          </h3>
          <p className="mt-3 text-white/70">
            See how Axion reduces dwell time, prevents stockouts, and lifts throughput across your network.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10"
              style={{ background: `linear-gradient(135deg, ${accent}, #4bc092)` }}
            >
              Book a live demo
            </a>
            <a
              href="#"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
