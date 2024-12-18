import { useTranslation } from 'react-i18next';
import { useState } from "react";
import CompanyBox from "./box_utstallare";
import lightbringer from '../assets/lightbringer.png';
import ericsson from '../assets/ericsson.png';
import iflogo from '../assets/iflogo.png';
import axis from '../assets/axis.png';
import dfine from '../assets/dfine.png';
import sverigesing from '../assets/sverigesing.png';
import Box_funcs from "./box_funcs";

function Utstallare() {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState<JSX.Element | null>(null);
  
    const handleBoxClick = (foretag: string, foretagImg: string, infoText: string) => {
        setPopupContent(
            <div className="space-y-4">
              <div className="text-3xl font-bold">{foretag}</div>
              <img src={foretagImg} alt="" className="w-auto h-40 p-6" />
              <div className="text-lg text-gray-700">
                    {infoText}
              </div>
            </div>
          );
        setIsPopupOpen(true);
    };

    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-4xl mt-16">{t("exhibitors")}</div>
            <div className="max-w-screen rounded-xl w-60 border-2 border-forange my-12"></div>
            <div className="grid grid-cols-3 max-w-screen mx-20">
                <div>
                    <CompanyBox foretag={"Ericsson"} foretagImg={ericsson} onClick={() => handleBoxClick("Ericsson", ericsson, "Ericsson är ett väldigt fint företag. Dom gör telefoner och telefonstolpar.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Lightbringer"} foretagImg={lightbringer} onClick={() => handleBoxClick("Lightbringer", lightbringer, "Lightbringer är ett väldigt fint företag. Dom gör AI och patent.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"If"} foretagImg={iflogo} onClick={() => handleBoxClick("If", iflogo, "If är ett väldigt fint företag. Dom gör försäkringar och försäkringar.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Axis communications"} foretagImg={axis} onClick={() => handleBoxClick("Axis communcations", axis, "Axis är ett väldigt fint företag. Dom gör Axlar och pengar.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"d-fine"} foretagImg={dfine} onClick={() => handleBoxClick("d-fine", dfine, "d-fine är ett väldigt fint företag. Dom gör pengar och pengar.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Sveriges Ingenjörer"} foretagImg={sverigesing} onClick={() => handleBoxClick("Sveriges Ingenjörer", sverigesing, "Sveriges ingenjörer är ett väldigt fint företag. Dom gör fack och förbund.")}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
            </div>
        </div>
    );
}

export default Utstallare;