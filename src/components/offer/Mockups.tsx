import type { ReactNode } from "react";

export type MockupKind = "u1" | "d1" | "u2" | "d2" | "u3" | "d3";

function Frame({ bg, children, label, title }: { bg: string; children: ReactNode; label: string; title: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${bg} p-6 shadow-soft md:p-10`}>
      <Blobs />
      <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
        <div className="text-center md:max-w-[38%] md:text-left">
          <span className="inline-block rounded-full bg-card/80 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-ink">{label}</span>
          <p className="mt-3 font-display text-2xl font-extrabold leading-tight text-brand-ink md:text-3xl">{title}</p>
        </div>
        <div className="flex w-full justify-center md:w-auto">{children}</div>
      </div>
    </div>
  );
}

function Blobs() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none" viewBox="0 0 400 200" aria-hidden>
      <circle cx="30" cy="30" r="40" className="fill-card/40" />
      <circle cx="380" cy="180" r="60" className="fill-card/30" />
      <path d="M200 190 q20 -20 40 0 t40 0" className="stroke-card/60" strokeWidth="4" fill="none" />
    </svg>
  );
}

function Doc({ className, title, rot = 0, lines = 5 }: { className: string; title: string; rot?: number; lines?: number }) {
  return (
    <div className={`w-24 shrink-0 rounded-xl bg-card p-3 shadow-soft md:w-28 ${className}`} style={{ transform: `rotate(${rot}deg)` }}>
      <div className="mb-2 h-3 w-3/4 rounded-full bg-brand-teal" />
      <p className="mb-2 text-[10px] font-extrabold uppercase leading-tight text-brand-ink">{title}</p>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="mb-1.5 h-1.5 rounded-full bg-muted" style={{ width: `${90 - (i % 3) * 15}%` }} />
      ))}
      <div className="mt-2 h-4 w-10 rounded bg-brand-mint" />
    </div>
  );
}

function U1() {
  return (
    <Frame bg="bg-brand-mint" label="Kit • 5 modelos editáveis" title="Documentação & Anamnese Clínica Descomplicada">
      <div className="relative flex flex-wrap justify-center gap-3 md:flex-nowrap md:-space-x-8 md:gap-0">
        <Doc className="" title="Contrato" rot={-8} />
        <Doc className="" title="Anamnese" rot={-3} />
        <Doc className="z-10 ring-4 ring-brand-sun" title="Evolução" rot={0} />
        <Doc className="" title="Recibo" rot={4} lines={3} />
        <Doc className="" title="Relatório de alta" rot={8} />
      </div>
    </Frame>
  );
}

function D1() {
  return (
    <Frame bg="bg-brand-sky/40" label="Pack • Fichas de avaliação inicial" title="Anamnese Lúdica">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="relative w-56 rounded-2xl bg-card p-5 shadow-soft">
          <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rounded-md bg-brand-coral" />
          <p className="mt-2 text-center font-display text-lg font-extrabold text-brand-ink">Ficha de Anamnese</p>
          {["Nome da criança", "Idade", "Queixa principal", "Rotina", "Desenvolvimento"].map((l) => (
            <div key={l} className="mt-2">
              <p className="text-[10px] font-bold text-muted-foreground">{l}</p>
              <div className="h-2 rounded-full bg-muted" />
            </div>
          ))}
        </div>
        <div className="w-44 rounded-2xl bg-brand-sun p-4 shadow-soft" style={{ transform: "rotate(4deg)" }}>
          <p className="font-display text-sm font-extrabold text-brand-ink">Roteiro 1ª conversa</p>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="mt-2 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-card text-[10px] font-extrabold text-brand-ink">{n}</span>
              <div className="h-1.5 flex-1 rounded-full bg-card/70" />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function U2() {
  const cards = [
    { t: "TEA", c: "bg-brand-sky" },
    { t: "TDAH", c: "bg-brand-sun" },
    { t: "TOD", c: "bg-brand-coral" },
  ];
  return (
    <Frame bg="bg-brand-sun/40" label="Pack Especialista • 100 atividades" title="TEA, TDAH e TOD">
      <div className="flex items-end justify-center gap-3">
        {cards.map((c, i) => (
          <div key={c.t} className={`flex h-44 w-28 flex-col items-center justify-between rounded-2xl ${c.c} p-3 shadow-soft md:h-52 md:w-32`} style={{ transform: `rotate(${(i - 1) * 6}deg) translateY(${i === 1 ? -12 : 0}px)` }}>
            <span className="font-display text-2xl font-extrabold text-brand-ink">{c.t}</span>
            <svg viewBox="0 0 60 60" className="h-16 w-16" aria-hidden>
              <circle cx="30" cy="30" r="26" className="fill-card/70" />
              <path d={i === 0 ? "M18 36 q12 12 24 0" : i === 1 ? "M15 30 l10 -10 l10 10 l10 -10" : "M20 40 l20 -20 M20 20 l20 20"} className="stroke-brand-ink" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
            <span className="rounded-full bg-card px-2 py-0.5 text-[10px] font-extrabold text-brand-ink">atividades</span>
          </div>
        ))}
        <div className="hidden h-20 w-20 items-center justify-center rounded-full bg-brand-teal font-display text-2xl font-extrabold text-primary-foreground shadow-soft sm:flex">100</div>
      </div>
    </Frame>
  );
}

function D2() {
  return (
    <Frame bg="bg-brand-red/15" label="E-book • Intervenção rápida" title="SOS Crises: Guia de Intervenção Rápida">
      <div className="flex items-center gap-6">
        <div className="relative h-60 w-44 rounded-r-2xl rounded-l-md bg-brand-red p-4 shadow-soft">
          <div className="absolute inset-y-0 left-2 w-1 bg-card/30" />
          <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-card">
            <span className="font-display text-3xl font-extrabold text-brand-red">SOS</span>
          </div>
          <p className="mt-4 text-center font-display text-lg font-extrabold leading-tight text-primary-foreground">Crises</p>
          <p className="mt-1 text-center text-[10px] font-bold uppercase text-primary-foreground/90">Guia de intervenção rápida</p>
        </div>
        <div className="hidden h-48 w-24 rounded-3xl border-4 border-brand-ink bg-card p-2 sm:block">
          <div className="h-full rounded-xl bg-brand-red/90 p-2">
            <p className="text-center font-display text-sm font-extrabold text-primary-foreground">SOS</p>
            {[1, 2, 3, 4, 5].map((n) => <div key={n} className="mt-2 h-1.5 rounded-full bg-card/70" />)}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function U3() {
  const months = [["Jan", "Volta às aulas", "bg-brand-sky"], ["Fev", "Novas escolas", "bg-brand-mint"], ["Mar", "Bullying", "bg-brand-coral"], ["Dez", "Natal", "bg-brand-sun"]];
  return (
    <Frame bg="bg-brand-teal/25" label="Assinatura VIP" title="Clube ArtKids: 15 atividades novas todo mês">
      <div className="w-full max-w-md rounded-2xl bg-card p-4 shadow-soft">
        <div className="mb-3 flex items-center gap-2">
          {["bg-brand-coral", "bg-brand-sun", "bg-brand-mint"].map((c) => <span key={c} className={`h-3 w-3 rounded-full ${c}`} />)}
          <span className="ml-2 flex-1 rounded-full bg-muted px-3 py-1 text-[10px] font-bold text-muted-foreground">clube.artkids • área de membros</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {months.map(([m, t, c]) => (
            <div key={m} className={`rounded-xl ${c} p-3`}>
              <p className="font-display text-lg font-extrabold text-brand-ink">{m}</p>
              <p className="text-[11px] font-bold text-brand-ink">{t}</p>
              <p className="mt-1 text-[10px] font-bold text-brand-ink/70">+15 atividades</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function D3() {
  return (
    <Frame bg="bg-brand-sun/35" label="Pagamento único • sem recorrência" title="Passe Anual de Atualizações">
      <div className="relative">
        <div className="flex h-44 w-72 flex-col justify-between rounded-2xl bg-brand-teal p-5 shadow-soft md:w-80">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary-foreground/90">ArtKids • Passe</p>
          <p className="font-display text-3xl font-extrabold text-primary-foreground">Anual</p>
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => <span key={i} className="h-2 flex-1 rounded-full bg-card/70" />)}
          </div>
        </div>
        <svg viewBox="0 0 100 100" className="absolute -right-6 -top-8 h-24 w-24 drop-shadow-lg" aria-hidden>
          <polygon points="50,2 61,20 82,14 80,36 98,48 82,62 86,84 64,82 50,98 36,82 14,84 18,62 2,48 20,36 18,14 39,20" className="fill-brand-coral" />
          <text x="50" y="50" textAnchor="middle" className="fill-card font-display" fontSize="26" fontWeight="800">12</text>
          <text x="50" y="68" textAnchor="middle" className="fill-card" fontSize="11" fontWeight="800">MESES</text>
        </svg>
      </div>
    </Frame>
  );
}

export function Mockup({ kind }: { kind: MockupKind }) {
  const M = { u1: U1, d1: D1, u2: U2, d2: D2, u3: U3, d3: D3 }[kind];
  return <M />;
}
