import "./App.css";

function App() {
  return (
    <main className="w-full h-screen pb-7 overflow-y-auto bg-neutral-100 flex gap-9 flex-col items-center justify-start">
      {/* Header */}
      <header className="w-full min-h-[320px] h-[320px] rounded-b-3xl bg-red-500 text-white flex gap-16 flex-col items-center justify-center">
        <div className="text-center mt-6 space-y-2.5">
          <h1 className="text-5xl font-bold">Todays Training</h1>
          <p className="opacity-85 text-2xl">Wednesday, 1 Oct 2025</p>
        </div>
        <div className="w-[88%] px-6 py-5 flex items-center justify-between bg-white rounded-3xl">
          <h1 className="text-3xl font-bold text-blue-950">
            Run: <span className="text-red-500">5 Km</span>
          </h1>
          <p className="text-4xl font-bold text-blue-950">🏃🏽‍♂️</p>
        </div>
      </header>
      {/* Progress Bar */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-blue-950 font-semibold text-2xl">
            Training Progress
          </h2>
          <h2 className="text-blue-950 font-semibold text-sm opacity-80">
            155/950 km Left
          </h2>
        </div>
        <div className="w-full h-4 rounded-3xl bg-neutral-200">
          <div className="w-[40%] h-4 rounded-3xl bg-red-500"></div>
        </div>
      </section>
      {/* Pre Run Routine */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <h2 className="text-blue-950 font-semibold text-2xl">
          Pre Run Routine
        </h2>
        <ul className="list-disc pl-5 pt-1 space-y-2 opacity-85 text-blue-950">
          <li>Make DIY Drink</li>
          <li>Pre Run Prayer</li>
          <li>Choose a Route</li>
          <li>Setup Run on Strava</li>
        </ul>
      </section>
      {/* Post Run Routine */}
      <section className="w-full flex flex-col px-6 space-y-2">
        <h2 className="text-blue-950 font-semibold text-2xl">
          Post Run Routine
        </h2>
        <ul className="list-disc pl-5 pt-1 space-y-2 opacity-85 text-blue-950">
          <li>Dry Shoes</li>
          <li>Dry Clothes</li>
          <li>Take a Shower</li>
          <li>Analyze my Run</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
