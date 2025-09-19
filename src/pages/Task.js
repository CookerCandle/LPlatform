import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import lessonsData from "../data/lessonsData";
import TestBlock from "../components/TestBlock";

const Task = () => {
    const navigate = useNavigate();
    const { param } = useParams();
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const unit = lessonsData[param]?.units[q];

    if (!unit) {
        navigate(-2)
        return null;
    }

    const handleFinish = () => {
    if (window.confirm("Закончить урок?")) {
      navigate(-1); 
    }
  };
  return (
    <div>
        {isVideo()}
        <footer 
            className="alert  mt-5 d-flex align-items-center justify-content-center li-lesson"
            onClick={handleFinish}
        >
            закончить урок
            </footer>
    </div>
  );

    function isVideo() {
        if (!lessonsData[param].units[q].isTest) {
            return(
                <div className="d-flex justify-content-center">
                    <video className="w-100" style={{ maxWidth: "1080px", height: "auto" }} controls autoPlay> 
                        <source src={lessonsData[param].units[q].video} type="video/mp4"/>
                    </video>
                </div>
            );
        } else {
            return(
                <>  
                    <TestBlock unit={lessonsData[param].units[q]} />
                </>
            );
        }
    }
}

export default Task