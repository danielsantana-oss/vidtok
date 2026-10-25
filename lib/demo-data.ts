import Link from 'next/link';

export function AuthCard({ mode }: { mode: 'login' | 'register' }) {
  const isRegister = mode === 'register';

  return (
    <div className="mx-auto max-w-md pt-10">
      <div className="panel p-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-pink-300">VidTok</p>
          <h1 className="mt-3 text-3xl font-bold text-white">{isRegister ? 'Crear cuenta' : 'Iniciar sesión'}</h1>
        </div>

        <form className="space-y-4">
          {isRegister && (
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Nombre completo</label>
              <input className="input-shell" placeholder="Daniel Santana" />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Correo electrónico</label>
            <input type="email" className="input-shell" placeholder="correo@dominio.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Contraseña</label>
            <input type="password" className="input-shell" placeholder="••••••••" />
          </div>

          {isRegister && (
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Nombre de usuario</label>
              <input className="input-shell" placeholder="@handle" />
            </div>
          )}

          <button className="btn-primary w-full" type="button">
            {isRegister ? 'Registrarme' : 'Entrar'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <Link href={isRegister ? '/login' : '/register'} className="text-pink-300">
            {isRegister ? 'Inicia sesión' : 'Regístrate'}
          </Link>
        </p>
      </div>
    </div>
  );
}
