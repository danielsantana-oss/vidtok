import { VideoCard } from '@/components/VideoCard';
import { demoVideos } from '@/lib/demo-data';

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-pink-300">For you</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Feed de VidTok</h1>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          En vivo y actualizado
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {demoVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>

        <aside className="space-y-6">
          <div className="panel p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Búsqueda</p>
            <input className="input-shell mt-4" placeholder="Buscar creadores o temas..." />
          </div>
          <div className="panel p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Tendencias</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-200">
              <li>#creatorlife</li>
              <li>#cinevertical</li>
              <li>#dailyvlog</li>
              <li>#shorts</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
