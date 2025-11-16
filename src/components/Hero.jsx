import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const brandPrimary = '#06232e';
const accent = '#54b477';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: brandPrimary }}>
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] rounded-full blur-3xl"
             style={{ background: 'radial-gradient( circle at 30% 30%, rgba(15,88,113,0.7), rgba(6,35,46,0) 60% )' }} />
        <div className="absolute -bottom-40 -right-20 h-[40rem] w-[40rem] rounded-full blur-3xl"
             style={{ background: 'radial-gradient( circle at 70% 70%, rgba(16,43,64,0.7), rgba(6,35,46,0) 60% )' }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-36 pb-24 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: accent }} />
            Introducing autonomous warehouse intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Orchestrate every move with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
          >
            Axion is a modern warehouse operating system that predicts, plans and optimizes fulfillment across people, robots and inventory. Built for scale. Minimal by design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10"
              style={{ background: `linear-gradient(135deg, ${accent}, #4bc092)` }}
            >
              Book a live demo
            </a>
            <a
              href="#product"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              Explore the platform
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[28rem] w-full md:h-[34rem]"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* subtle bottom divider */}
      <div className="pointer-events-none relative h-24 w-full">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
