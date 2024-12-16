import { useTranslation } from 'react-i18next';

function Studenter() {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-center w-screen">
      <h1 className="text-4xl font-bold text-forange">
          {t("students")}        
      </h1>
      <p className="text-lg font-bold text-black">
          {t("work")} <a href="https://forms.gle/HxVdxwSJN6AF2z6Q9" className="font-bold hover:text-blue">länk till formulär</a>
      </p>
    </div>
  );
}

export default Studenter;