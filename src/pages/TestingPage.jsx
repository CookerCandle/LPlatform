import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReturnBtn from "../components/ReturnBtn";
import TestBlock from "../components/TestBlock";
import { useEffect, useState } from "react";
import { getLessonsData, updateLessonsData } from "../utils/lessonsStorage";
import VideoBlock from "../components/videoBlock";

const TestingPage = () => {
    const navigate = useNavigate();
    const { lesson } = useParams();
    const [searchParams] = useSearchParams();
    const q = parseInt(searchParams.get('q'), 10);
    const [lessons, setLessons] = useState(null)

    useEffect(() => {
        setLessons(getLessonsData());
    }, [])

    if (!lessons) return <p>Загрузка...</p>
    const unit = lessons[lesson]?.units[q];

    if (!unit) {
        navigate(-2);
        return null;
    }

    const handleFinish = () => {
        if (window.confirm("Закончить урок?")) {
            const updated = { ...lessons };
            updated[lesson].units[q].passed = true;

            const allPassed = updated[lesson].units.every((u) => u.passed);
            updated[lesson].passed  = allPassed;

            setLessons(updated);
            updateLessonsData(updated);

            navigate(-1);
        }
    }

    return(
        <>
            <div className="container mt-4">
                <ReturnBtn pageNum={-1} />
                {getBlock()}
            </div>
        </>
    );   
    
    function getBlock() {
      if (!unit.isTest) {
        return(
            <div className="d-flex justify-content-center my-3">
                <VideoBlock src={unit.video} />
            </div>
        );
      } else {
        return(
            <div>
                test
            </div>
        );
      }  
    };
};

export default TestingPage;