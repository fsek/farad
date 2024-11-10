
function Home() {
    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-forange">
          F-sektionens arbetsmarknadsdagar
        </h1>
        <div className="mx-40 my-4 text-center">
          Farad är F-sektionen på LTHs arbetsmarknadsmässa, där företag får möjligheten att komma i kontakt med studenter från programmen Teknisk fysik, Teknisk matematik och Teknisk nanovetenskap. <br />
          <div className="text-lg font-bold">
            Anmäl ditt företag genom att mejla <a href="mailto:farad@fsektionen.se" className="text-blue text-lg font-bold hover:text-gray-300">farad@fsektionen.se</a>!
          </div>
        </div>
    </div>
  );
}

export default Home;