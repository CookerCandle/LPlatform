import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Lesson() {
    const { param } = useParams();
    const location = useLocation();
    const lesson = location.state;

    return (
        <div className="container mt-4">
            <h2>Страница урока</h2>
            <p>Вы зашли через параметр: <strong>{param}</strong></p>
            <p>{lesson.name}</p>
        </div>
    );
}

export default Lesson;
