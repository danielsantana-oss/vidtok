import Link from 'next/link';
import { ArrowRight, Play, ShieldCheck, Sparkles, Video } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="panel overflow-hidden bg-hero-gradient p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
              <Sparkles className="h-3.5 w-3.5" />
              Creator-first social video
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
              VidTok, la comunidad de video de largo y corto formato.
            </h1>
            <p className="mt-5 max-w-lg text-base text-zinc-300 md:text-lg">
              Descubre historias, clips verticales, contenido largo, perfiles reales y conversaciones con otros usuarios, todo en una experiencia moderna y oscura.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/register" className="btn-primary">
                Crear cuenta
              </Link>
              <Link href="/feed" className="btn-secondary">
                Ver feed
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-5 shadow-glow">
            <div className="rounded-[24px] border border-zinc-800 bg-[#101010] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-500 font-bold text-white">
                    @
                  </div>
                  <div>
                    <p className="font-semibold">@sofia</p>
                    <p className="text-xs text-zinc-400">Creadora del día</p>
                  </div>
                </div>
                <span className="rounded-full border border-red-400/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-200">
                  Verificado
                </span>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-zinc-800 bg-black">
                <div className="flex aspect-[9/16] items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-950 to-red-950/80 p-6">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 text-red-200">
                      <Play className="h-7 w-7 fill-current" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Preview</p>
                    <p className="mt-2 text-xl font-semibold text-white">Video corto + largo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          { icon: Video, title: 'Vídeos cortos', text: 'Reels verticales, clips rápidos y tendencias de la comunidad.', color: 'from-red-500 to-pink-500' },
          { icon: ShieldCheck, title: 'Usuarios reales', text: 'Registro seguro, email verificado y validación anti-bot gratis.', color: 'from-rose-500 to-orange-400' },
          { icon: Play, title: 'Contenido largo', text: 'Historia profunda, formaciones, tutoriales y análisis de largo formato.', color: 'from-fuchsia-500 to-violet-500' },
        ].map(({ icon: Icon, title, text, color }) => (
          <div key={title} className="panel p-5">
            <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${color} p-2.5`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{text}</p>
          </div>
        ))}
      </section>

      <section className="panel p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-pink-300">Todo en un lugar</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Video social con comunidad y voz propia</h2>
          </div>
          <Link href="/upload" className="btn-primary inline-flex gap-2">
            Subir vídeo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
