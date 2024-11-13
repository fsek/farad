import farad_2025 from '../assets/handsome_farad.jpg';

function OmOss() {
    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-forange">
          Vi är projektgruppen!

        </h1>
        <div className="lg:container">
          <img src={farad_2025} alt="Very handsome photo of FARAD 2025" className="h-auto w-2/3 mx-auto m-4" />
        </div>
        <p className="text-white dark:text-black font-bold">Mer info kommer snart</p>
      </div>
  );
}

export default OmOss;