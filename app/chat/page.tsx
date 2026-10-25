import Image from 'next/image';
import { demoProfiles } from '@/lib/demo-data';

export default function ProfilePage({ params }: { params: { handle: string } }) {
  const profile = demoProfiles.find((item) => item.handle === params.handle) ?? demoProfiles[0];

  return (
    <div className="space-y-8">
      <section className="panel overflow-hidden">
        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
              <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Perfil público</p>
              <h1 className="mt-2 text-3xl font-bold text-white">{profile.name}</h1>
              <p className="text-zinc-400">{profile.handle}</p>
            </div>
          </div>

          <div className="flex gap-3 text-sm text-zinc-300">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="text-xl font-bold text-white">{profile.followers}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">Seguidores</div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="text-xl font-bold text-white">{profile.videos}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">Vídeos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="text-xl font-semibold text-white">Biografía</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">{profile.bio}</p>
        </div>

        <div className="panel p-5">
          <h2 className="text-xl font-semibold text-white">Insignias</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
