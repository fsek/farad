import { useTranslation } from 'react-i18next';
import { useState } from "react";
import CompanyBox from "./box_utstallare";
import Box_funcs from "./box_funcs";
import lightbringer from '../assets/lightbringer.png';
import ericsson from '../assets/ericsson.png';
import iflogo from '../assets/iflogo.png';
import axis from '../assets/axis.png';
import dfine from '../assets/dfine.png';
import sverigesing from '../assets/sverigesing.png';
import iaeste from '../assets/iaeste.png';
import algorithma from '../assets/algorithma.png';
import nanolund from '../assets/nanolund.png';
import llc from '../assets/llc.png';
import svl from '../assets/svl.png';
import regler from '../assets/regler.png';
import netcompany from '../assets/netcompany.png';
import sentianai from '../assets/sentianai.png';
import linc from '../assets/linc.png';




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
                    <CompanyBox foretag={"Ericsson"} foretagImg={ericsson} onClick={() => handleBoxClick("Ericsson", ericsson, t("ericsson_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"If"} foretagImg={iflogo} onClick={() => handleBoxClick("If", iflogo, t("if_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Lightbringer"} foretagImg={lightbringer} onClick={() => handleBoxClick("Lightbringer", lightbringer, t("lightbringer_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Axis communications"} foretagImg={axis} onClick={() => handleBoxClick("Axis communcations", axis, t("axis_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"d-fine"} foretagImg={dfine} onClick={() => handleBoxClick("d-fine", dfine, t("dfine_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Sveriges Ingenjörer"} foretagImg={sverigesing} onClick={() => handleBoxClick("Sveriges Ingenjörer", sverigesing, t("sveing_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Netcompany"} foretagImg={netcompany} onClick={() => handleBoxClick("Netcompany", netcompany, t("netcompany_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"SentianAI"} foretagImg={sentianai} onClick={() => handleBoxClick("sentianai", sentianai, t("sentianai_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Algorithma"} foretagImg={algorithma} onClick={() => handleBoxClick("Algorithma", algorithma, t("algorithma_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"NanoLund"} foretagImg={nanolund} onClick={() => handleBoxClick("NanoLund", nanolund, t("nanolund_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Reglerteknik"} foretagImg={regler} onClick={() => handleBoxClick("Institutionen för reglerteknik", regler, t("regler_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"IAESTE"} foretagImg={iaeste} onClick={() => handleBoxClick("IAESTE", iaeste, t("iaeste_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"Lunds lasercentrum"} foretagImg={llc} onClick={() => handleBoxClick("Lunds lasercentrum", llc, t("llc_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"SVL"} foretagImg={svl} onClick={() => handleBoxClick("SVL", svl, t("svl_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
                <div>
                    <CompanyBox foretag={"LINC LUND"} foretagImg={linc} onClick={() => handleBoxClick("LINC LUND", linc, t("linc_desc"))}></CompanyBox>
                    <Box_funcs isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <p>{popupContent}</p>
                    </Box_funcs>
                </div>
            </div>
        </div>
    );
}

export default Utstallare;