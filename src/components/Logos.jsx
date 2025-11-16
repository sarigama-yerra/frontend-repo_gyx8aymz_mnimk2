const logos = [
  { name: 'DHL', text: 'DHL' },
  { name: 'Maersk', text: 'MAERSK' },
  { name: 'FedEx', text: 'FEDEX' },
  { name: 'UPS', text: 'UPS' },
  { name: 'Flexport', text: 'FLEXPORT' },
  { name: 'XPO', text: 'XPO' },
];

export default function Logos() {
  return (
    <section className="relative" style={{ background: '#06232e' }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-sm text-white/60">Trusted by modern logistics teams</p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l.name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold tracking-widest text-white/80 backdrop-blur">
              {l.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
