import { useTranslation } from 'react-i18next';
import farad2024 from '../assets/farad2024.png';


function Home() {
    const { t } = useTranslation();

    return (
      <div>
        <div className="relative flex flex-col items-center justify-center w-screen h-96 bg-cover bg-center" style={{ backgroundImage: `url(${farad2024})` }}>
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <h1 className="relative text-white text-2xl my-8 font-bold text-start z-10">
            {t("welcome")} <div className="text-7xl text-forange">FARAD</div>
            {t("f-s")} <br></br>
            {t("career fair")}
          </h1>
          <div className="relative text-forange font-bold text-4xl z-10">
            {t("dates")}
          </div>
      </div>
      <div className="text-center mx-60 my-10">
          {t("quick desc")}
          <div className="mx-40 my-8 text-center text-lg font-bold">
            {t("signup")} <a href="mailto:farad@fsektionen.se" className="text-lg font-bold hover:text-gray-300">farad@fsektionen.se</a>!
          </div>
      </div>
    </div>
  );
}

export default Home;