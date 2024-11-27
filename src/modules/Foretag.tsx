import { useTranslation } from 'react-i18next';

function Foretag() {
    const { t, i18n } = useTranslation();
    const href =
    i18n.language === 'se'
      ? '/SVENSKA Prisinformation FARAD 2025.pdf'
      : '/ENGELSKA Price information FARAD 2025.pdf';

    return (
      <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <div className="font-bold text-4xl mt-16">{t("company invite")}</div>
      <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
      <a href="mailto:farad@fsektionen.se" className="text-gray-700 text-2xl font-bold hover:text-gray-300">Mejla farad@fsektionen.se!</a>


      <div className="font-bold text-4xl mt-16">{t("packages")}</div>
      <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
      <div className="grid grid-cols-3 max-w-screen mx-20">
        <div className="mx-8 bg-white rounded-xl shadow-xl p-6">
            <div className="font-bold text-3xl text-center">{t("base package")}</div>
            <div className="font-bold text-2xl text-center m-4">22 000 kr</div>
            <div className="text-lg text-center">{t("6m")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("adds")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("2 banquet")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("2 lounge")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("helper")}</div>
        </div>
        <div className="mx-8 bg-white rounded-xl shadow-xl p-6">
            <div className="font-bold text-3xl text-center">{t("prio package")}</div>
            <div className="font-bold text-2xl text-center m-4">24 000 kr</div>
            <div className="text-lg text-center">{t("6m")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("prio placement")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("more adds")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("2 banquet")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("6 lounge")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("helper")}</div>
        </div>
        <div className="mx-8 bg-white rounded-xl shadow-xl p-6">
            <div className="font-bold text-3xl text-center">{t("main sponsor")}</div>
            <div className="font-bold text-2xl text-center m-4">42 000 kr</div>
            <div className="text-lg text-center">{t("9m")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("prio placement")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("even more adds")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("website logo")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("lunch lecture")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("4 banquet")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("6 lounge")}</div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center">{t("helper")}</div>
        </div>
      </div>

      <div className="font-bold text-4xl mt-16">{t("more options")}</div>
      <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>

      <div className="grid grid-rows-3 max-w-screen mx-20 mb-20 grid-rows-[fit-content(0px)_auto]">
        <div className="my-8 bg-white rounded-xl shadow-xl py-6 px-20">
          <div className="flex justify-center items-center space-x-4">
              <div className="font-bold text-3xl text-center">{t("more space")}</div>
              <div className="font-bold text-2xl text-center m-4">5 000 kr</div>
            </div>
          <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
          <div className="text-lg text-center my-6">{t("9m extra")}</div>
        </div>
        <div className="my-8 bg-white rounded-xl shadow-xl py-6 px-20">
            <div className="flex justify-center items-center space-x-4">
              <div className="font-bold text-3xl text-center">{t("lunch lecture")}</div>
              <div className="font-bold text-2xl text-center m-4">13 000 kr + 85 kr/student</div>
            </div>
            <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
            <div className="text-lg text-center my-6">{t("lunch info")}</div>
        </div>
        <div className="my-8 bg-white rounded-xl shadow-xl py-6 px-20">
          <div className="flex justify-center items-center space-x-4">
            <div className="font-bold text-3xl text-center">{t("contact talks")}</div>
            <div className="font-bold text-2xl text-center m-4">{t("contact talks pricing")}</div>
            </div>
          <div className="rounded-xl w-40 border border-forange my-3 mx-auto self-center"></div>
          <div className="text-lg text-center my-6">{t("contact talks info")}</div>
        </div>
      </div>
      <div className="mx-40 my-8 text-center text-lg font-bold text-black">
        {t("company doc")} <a href={href} download className="text-lg font-bold hover:text-gray-300">Prisinformation FARAD 2025</a>
      </div>
    </div>
  );
}

export default Foretag;