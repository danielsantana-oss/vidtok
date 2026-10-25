const messages = [
  { user: 'Alicia', text: 'Hola, ¿qué tal el video nuevo?', me: false },
  { user: 'Tú', text: 'Muy bien, he subido la versión final.', me: true },
  { user: 'Alicia', text: 'Me encanta, lo quiero compartir.', me: false },
];

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="panel overflow-hidden">
        <header className="flex items-center justify-between border-b border-zinc-800 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Chat privado</p>
            <h1 className="mt-2 text-2xl font-bold text-white">@alicia</h1>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">En línea</span>
        </header>

        <div className="space-y-4 p-5">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.me ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-2xl px-4 py-3 text-sm ${message.me ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' : 'border border-zinc-800 bg-zinc-900 text-zinc-100'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 p-5">
          <div className="flex gap-3">
            <input className="input-shell" placeholder="Escribe un mensaje..." />
            <button className="btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
