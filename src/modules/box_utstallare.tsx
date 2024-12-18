type BoxProps = {
    foretag: string;
    foretagImg: string;
    onClick: () => void;
  };

const CompanyBox = ({foretag, foretagImg, onClick}: BoxProps) => {
    return (
      <div className={"p-6 bg-white shadow-xl rounded mx-6 my-4"} onClick={onClick}>
        <div className="font-bold text-2xl text-center">{foretag}</div>
        <div className= "flex justify-center items-center">
            <img src={foretagImg} alt="If" className="h-24 w-auto m-4" />
        </div>
      </div>
    );
  };
  
export default CompanyBox;