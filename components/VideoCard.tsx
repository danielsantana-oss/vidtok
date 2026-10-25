import Link from 'next/link';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/feed', label: 'Feed' },
  { href: '/upload', label: 'Subir' },
  { href: '/chat', label: 'Chat' },
  { href: '/admin', label: 'Admin' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-lg font-black text-white">
            V
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-white">VidTok</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="link-muted">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="btn-secondary hidden sm:inline-flex">
            Iniciar sesión
          </Link>
          <Link href="/register" className="btn-primary">
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
}
