import smiley from '../assets/smiley.png';
import { useTranslation } from 'react-i18next';

function Studenter() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-forange">
          {t("students")}        
      </h1>
      <p className="text-lg font-bold text-black">
          {t("work")} <a href="https://forms.gle/HxVdxwSJN6AF2z6Q9" className="font-bold hover:text-blue">länk till formulär</a>
      </p>
      <p className="font-bold text-black">
          {t("moreinfo")}
      </p>
      <a href="" className="flex items-center">
          <img src={smiley} alt="Smiley" className="h-20 w-auto m-4" />
      </a>
    </div>
  );
}

export default Studenter;