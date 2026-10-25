export default function UploadPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="panel p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-pink-300">Subir vídeo</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Nuevo contenido</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Título</label>
            <input className="input-shell" placeholder="Ej: Mi día en la ciudad y la luz del atardecer" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Descripción</label>
            <textarea className="input-shell min-h-32" placeholder="Comparte contexto, ideas y hashtags" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Formato</label>
            <select className="input-shell">
              <option>Vertical corto</option>
              <option>Vertical largo</option>
              <option>Horizontal</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Archivo de vídeo</label>
            <input type="file" accept="video/*" className="input-shell file:mr-4 file:rounded-full file:border-0 file:bg-pink-500/20 file:px-4 file:py-2 file:text-sm file:font-medium file:text-pink-200" />
          </div>

          <button type="button" className="btn-primary w-full">
            Publicar vídeo
          </button>
        </form>
      </div>
    </div>
  );
}
