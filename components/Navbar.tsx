export default function AdminPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="panel p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-pink-300">Panel admin</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Configuración del creador</h1>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Handle del creador</label>
            <input className="input-shell" defaultValue="@daniel" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Insignia</label>
            <input className="input-shell" defaultValue="Verified Creator" />
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
            Solo usuarios autorizados con rol admin pueden editar estas opciones. La validación se realiza en el servidor con políticas de seguridad.
          </div>
          <button className="btn-primary w-full">Guardar configuración</button>
        </div>
      </div>
    </div>
  );
}
