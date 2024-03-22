
export default function Home() {
  return (
    <main>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 bg-gradient-to-t from-gray-300 to-sky-200">
        <section className="flex justify-between flex-col min-h-screen relative snap-always snap-center">
          <div className="absolute z-1 bottom-0 left-0 w-full min-h-[50vh] bg-cover bg-top" style={{ backgroundImage: `url('/waves-01.svg')` }}>
          </div>
          <div className="flex flex-col mx-auto text-center pt-[30vh] relative">
            <h1 className="text-5xl text-green-800">Mateusz Najdek</h1>
            <h2 className="text-2xl mt-4">Self-taught developer</h2>
          </div>
          <div className="flex mx-auto mb-32">
            <div className="rotate-90 text-4xl">{'->'}</div>
          </div>
        </section>
        <section className="flex justify-between flex-col min-h-screen relative snap-always snap-center bg-gradient-to-b from-sky-100 to-gray-100">
          <div className="flex flex-col mx-auto">
          </div>
          <div className="flex mx-auto">
            <div className="rotate-90 text-4xl">{'->'}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
