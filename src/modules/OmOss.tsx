import farad_2025 from '../assets/handsome_farad.jpg';
import { useTranslation } from 'react-i18next';

function OmOss() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-forange">
          {t("weare")}

        </h1>
        <div className="lg:container">
          <img src={farad_2025} alt="Very handsome photo of FARAD 2025" className="h-auto w-2/3 mx-auto m-4" />
        </div>
        <p className="text-black font-bold">{t("moreinfo")}</p>
      </div>
  );
}

export default OmOss;