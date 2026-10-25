create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  handle text unique not null,
  full_name text,
  avatar_url text,
  bio text,
  is_admin boolean default false,
  is_verified boolean default false,
  badge_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  url text not null,
  thumbnail_url text,
  duration text,
  aspect_ratio text default '9:16',
  visibility text default 'public',
  created_at timestamptz default now()
);

create table if not exists public.likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  video_id uuid references public.videos(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, video_id)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  video_id uuid references public.videos(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references public.profiles(id) on delete cascade,
  receiver_id uuid references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.videos enable row level security;
alter table public.likes enable row level security;
alter table public.comments enable row level security;
alter table public.messages enable row level security;

create policy "profiles_public_read" on public.profiles
for select using (true);

create policy "profiles_update_own" on public.profiles
for update using (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
for insert with check (auth.uid() = id);

create policy "videos_public_read" on public.videos
for select using (visibility = 'public');

create policy "videos_insert_own" on public.videos
for insert with check (auth.uid() = user_id);

create policy "videos_update_own" on public.videos
for update using (auth.uid() = user_id);

create policy "videos_delete_own" on public.videos
for delete using (auth.uid() = user_id);

create policy "likes_manage_own" on public.likes
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "comments_public_read" on public.comments
for select using (true);

create policy "comments_manage_own" on public.comments
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "messages_private_read" on public.messages
for select using (auth.uid() = sender_id or auth.uid() = receiver_id);

create policy "messages_manage_own" on public.messages
for insert with check (auth.uid() = sender_id);

create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, handle, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'handle', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

create policy "admin_manage_creator_settings"
on public.profiles
for update using (public.is_admin())
with check (public.is_admin());

create index if not exists idx_videos_user_id on public.videos(user_id);
create index if not exists idx_likes_video_id on public.likes(video_id);
create index if not exists idx_comments_video_id on public.comments(video_id);
create index if not exists idx_messages_user_pair on public.messages(sender_id, receiver_id);
