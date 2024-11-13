
function Home() {
    return (
      <div>
        <div className="relative flex flex-col items-center justify-center w-screen h-96 bg-[url('src/assets/farad2024.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <h1 className="relative text-white text-2xl my-8 font-bold text-start z-10">
            Välkomna till <div className="text-7xl text-forange">FARAD</div>
            F-sektionens <br></br>
            arbetsmarknadsdagar
          </h1>
          <div className="relative text-forange text-5xl z-10">
            28-30 Januari 2025
          </div>
      </div>
      <div className="text-center mx-60 my-10">
          Farad är F-sektionen på LTHs arbetsmarknadsmässa, där företag får möjligheten att komma i kontakt med studenter från programmen Teknisk fysik, Teknisk matematik och Teknisk nanovetenskap.
          <div className="mx-40 my-8 text-center text-lg font-bold">
            Anmäl ditt företag genom att mejla <a href="mailto:farad@fsektionen.se" className="text-lg font-bold hover:text-gray-300">farad@fsektionen.se</a>!
          </div>
      </div>
    </div>
  );
}

export default Home;