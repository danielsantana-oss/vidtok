import Image from 'next/image';
import { Heart, MessageSquare, Play, Share2 } from 'lucide-react';
import Link from 'next/link';

export type VideoCardProps = {
  id: number;
  title: string;
  creator: string;
  handle: string;
  category: string;
  description: string;
  thumbnail: string;
  views: string;
  likes: number;
  comments: number;
  duration: string;
};

export function VideoCard({ title, creator, handle, category, description, thumbnail, views, likes, comments, duration }: VideoCardProps) {
  return (
    <article className="panel overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-zinc-700 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-pink-200">
          {category}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
          <Play className="h-3.5 w-3.5 fill-current" />
          {duration}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-1 text-sm text-zinc-400">
              por <Link href={`/profile/${handle}`} className="text-pink-300">{creator}</Link> · {views}
            </p>
          </div>
          <button className="rounded-full border border-zinc-700 bg-zinc-900 p-2 text-zinc-200">
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>

        <div className="mt-5 flex items-center gap-4 text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-pink-400" />
            {likes}
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-zinc-300" />
            {comments}
          </div>
        </div>
      </div>
    </article>
  );
}
