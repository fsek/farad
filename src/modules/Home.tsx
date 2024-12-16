import { useTranslation } from 'react-i18next';
import lightbringer from '../assets/lightbringer.png';
import ericsson from '../assets/ericsson.png';
import iflogo from '../assets/iflogo.png';
import faradlogo from '../assets/FARAD-logga.png';
import svl from '../assets/lth_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';



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
        <div className="font-bold text-6xl mt-16">{t("what happens")}</div>
        <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
        <div className="grid grid-rows w-full max-w-screen mx-auto">
          <div className="my-8 mx-20 bg-white rounded-xl shadow-xl flex">
            <div className="bg-orange-500 text-white flex items-center justify-center w-60 px-4 py-6 rounded-l-xl">
              <div className="text-2xl font-bold">29 {t("january")}</div>
            </div>
            <div className="flex-1 my-4 mx-12">
              <div className="font-bold text-3xl">{t("svl lunch")}</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faClock} size="1x" /> 12:15 - 13:00</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faMapLocation} size="1x" /> MH:Gårdingsalen</div>
            </div>
            <div className= "flex justify-center items-center">
               <img src={svl} alt="If" className="h-20 w-auto m-4 mr-12" />
            </div>
          </div>

          <div className="my-8 mx-20 bg-white rounded-xl shadow-xl flex">
            <div className="bg-orange-500 text-white flex items-center justify-center w-60 px-4 py-6 rounded-l-xl">
              <div className="text-2xl font-bold">30 {t("january")}</div>
            </div>
            <div className="flex-1 my-4 mx-12">
              <div className="font-bold text-3xl">{t("fairday")}</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faClock} size="1x" /> 10:00 - 15:00</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faMapLocation} size="1x" /> {t("foajen")}</div>
            </div>
            <div className= "flex justify-center items-center">
               <img src={faradlogo} alt="If" className="h-20 w-auto m-4 mr-12" />
            </div>
          </div>
          
          <div className="my-8 mx-20 bg-white rounded-xl shadow-xl flex">
            <div className="bg-orange-500 text-white flex items-center justify-center w-60 px-4 py-6 rounded-l-xl">
              <div className="text-2xl font-bold">30 {t("january")}</div>
            </div>
            <div className="flex-1 my-4 mx-12">
              <div className="font-bold text-3xl">{t("if lunch")}</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faClock} size="1x" /> 12:15 - 13:00</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faMapLocation} size="1x" /> MA:7</div>
            </div>
            <div className= "flex justify-center items-center">
               <img src={iflogo} alt="If" className="h-20 w-auto m-4 mr-12" />
            </div>
          </div>

          <div className="my-8 mx-20 bg-white rounded-xl shadow-xl flex">
            <div className="bg-orange-500 text-white flex items-center justify-center w-60 px-4 py-6 rounded-l-xl">
              <div className="text-2xl font-bold">30 {t("january")}</div>
            </div>
            <div className="flex-1 my-4 mx-12">
              <div className="font-bold text-3xl">{t("banquett")}</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faClock} size="1x" /> 18:00 - 22:00</div>
              <div className="font-bold text-xl"><FontAwesomeIcon icon={faMapLocation} size="1x" /> {t("gasque")}</div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col px-40 mb-20 items-center justify-center w-screen">
        <div className="font-bold text-6xl mt-16">{t("company invite")}</div>
        <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
        <div className="text-2xl mb-4">{t("to companies")}</div>
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