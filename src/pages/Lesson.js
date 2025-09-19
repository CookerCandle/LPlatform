import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import lessonsData from "../data/lessonsData";
import Unit from "../components/Unit";

function Lesson() {
    const navigate = useNavigate();
    const { param } = useParams();
    const [lessons] = useState(lessonsData);
    const lesson = lessons[param];

    if (!lesson) {
        navigate("/Learning");
        return null;
    }

    return (
        <div className="container mt-4">
            <h2>{lesson.name}</h2>
            <ul className="list-group">
                {lesson.units.map((unit, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center mt-3 li-lesson"  onClick={() => navigate(`unit?q=${index}`)}>
                        <Unit unit={unit} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lesson;
