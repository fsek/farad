import smiley from '../assets/smiley.png';

function Studenter() {
    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-forange">
        Studenter
      </h1>
      <p className="text-lg font-bold text-white dark:text-black">
        Vill du jobba på FARAD? Klart du vill! Då anmäler du dig på denna länk: <a href="https://forms.gle/HxVdxwSJN6AF2z6Q9" className="text-blue dark:text-graytext font-bold hover:text-blue">länk till formulär</a>
      </p>
      <p className="font-bold text-white dark:text-black">
        Mer info kommer
      </p>
      <a href="" className="flex items-center">
        <img src={smiley} alt="Smiley" className="h-20 w-auto m-4" />
      </a>
    </div>
  );
}

export default Studenter;