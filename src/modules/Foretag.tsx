import { useTranslation } from 'react-i18next';

function Foretag() {
    const { t, i18n } = useTranslation();
    const href =
    i18n.language === 'se'
      ? '/SVENSKA Prisinformation FARAD 2025.pdf'
      : '/ENGELSKA Price information FARAD 2025.pdf';

    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-forange">
        {t("companies")}
      </h1>
      <div className="mx-40 my-8 text-center text-lg font-bold text-black">
        {t("company doc")} <a href={href} download className="text-lg font-bold hover:text-gray-300">Prisinformation FARAD 2025</a>
      </div>
    </div>
  );
}

export default Foretag;