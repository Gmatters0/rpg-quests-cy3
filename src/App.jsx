import { Swords } from 'lucide-react';

function App() {
  return (
    <main className="flex flex-col bg-wood-950 min-h-dvh">

      <header className="flex flex-row justify-center gap-6 pt-10 pb-10">
        <Swords className="text-white size-16"/>
        <h1 className="font-title text-6xl font-bold text-white">
          RPG Quests
        </h1>
      </header>

      <section className="flex text-white">
        <aside className="w-xl">LISTA DE MISSÕES</aside>
        <div className="w-full">MAPA DO JOGO</div>
      </section>

    </main>
  )
}

export default App