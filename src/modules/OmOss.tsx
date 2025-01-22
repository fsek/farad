import farad_2025 from '../assets/handsome_farad.jpg';
import { useTranslation } from 'react-i18next';

function OmOss() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-center w-screen">
          <div className="font-bold text-4xl mt-16">{t("weare")}</div>
          <div className="grid grid-rows-1 max-w-screen mx-20 mb-20">
              <div className="my-8 bg-white rounded-xl shadow-xl py-6 px-20">
                  <div className="space-x-4">
                      <div className="lg:container">
                          <img src={farad_2025} alt="Very handsome photo of FARAD 2025" className="h-auto w-5/6 mx-auto m-4" />
                        </div>
                    </div>
                </div>
            </div>
          <div className="mx-10 my-8 text-center text-lg text-black">
              <div className="text-xl mb-4">{t("weare_extended")}</div>
            </div>
        </div>
  );
}

export default OmOss;