import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'VidTok',
  description: 'Red social de video con estilo vertical y contenido largo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-ink text-zinc-100 antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
