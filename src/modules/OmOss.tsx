import farad_2025 from '../assets/handsome_farad.jpg';
import { useTranslation } from 'react-i18next';

function OmOss() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="grid max-w-screen bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
          <div className="flex flex-col py-8 px-20 items-center">
            <div className="font-bold italic text-9xl">{t("project group")}</div>
            <div className="flex my-8 mx-8 bg-white rounded-xl justify-center items-center shadow-xl py-8">
              <img src={farad_2025} alt="Project Group 2024" className="h-auto w-4/5 m-4" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default OmOss;