import { useTranslation } from 'react-i18next';
import lightbringer from '../assets/lightbringer.png';
import ericsson from '../assets/ericsson.png';
import iflogo from '../assets/iflogo.png';



function Home() {
    const { t } = useTranslation();

    return (
      <div>
      <div className="grid grid-rows-2 max-w-screen bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
          <div className="flex flex-col py-8 px-20 items-center">
            <div className="font-bold italic text-9xl">FARAD</div>
            <div className="font-bold text-4xl">{t("dates")}</div>
          </div>
          <div>
            <div className="font-bold text-4xl text-center">{t("prios")}</div>
            <div className="grid grid-cols-3 max-h-screen mx-20 grid-rows-[fit-content(0px)_auto]">
              <div className="flex my-8 mx-8 bg-white rounded-xl justify-center items-center shadow-xl py-8">
                <img src={ericsson} alt="Ericsson" className="h-20 w-auto m-4" />
              </div>
              <div className="flex my-8 mx-8 bg-white rounded-xl justify-center items-center shadow-xl py-8">
                  <img src={lightbringer} alt="Lightbringer" className="h-20 w-auto m-4" />
              </div>
              <div className="flex my-8 mx-8 bg-white rounded-xl justify-center items-center shadow-xl py-8">
                  <img src={iflogo} alt="If" className="h-20 w-auto m-4" />
              </div>
            </div>
          </div>
      </div>

      <div className="flex flex-col px-40 mb-20 items-center justify-center w-screen">
        <div className="font-bold text-6xl mt-16">{t("what")}</div>
        <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
        <div className="text-2xl mb-4">{t("home1")}</div>
        <div className="text-2xl mb-4">{t("home2")}</div>
        <div className="text-2xl mb-4">{t("home3")}</div>
      </div>

      <div className="flex flex-col px-40 mb-20 items-center justify-center w-screen">
        <div className="font-bold text-6xl mt-16">{t("company invite")}</div>
        <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
        <div className="text-2xl mb-4">{t("to companies")}</div>
      </div>
    </div>
  );
}

export default Home;