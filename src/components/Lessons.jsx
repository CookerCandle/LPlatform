import React, { useState } from 'react';
import { MdPlayLesson } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Lessons = () => {
    const navigate = useNavigate();
    const [lessons] = useState([
            { lesson: 1, name: "Математика", description: "Высшая математика", url: "mathematic" },
            { lesson: 2, name: "Программирование", description: "Программирование на языке C++", url: "programming" },
            { lesson: 3, name: "Химия", description: "Химия рективных элементов", url: "alchemy" }
    ]) 
    return(
        <div className='container mt-4'>
            <h2>Список уроков</h2>
            <ul className='list-group'>
                {lessons.map(item => (
                    <li key={item.lesson} className="list-group-item d-flex align-items-center mt-3 li-lesson" onClick={() => navigate(`${item.url}`, {state: item})}>
                        <MdPlayLesson size={24} className="me-2" />
                        <div>
                            <strong>{item.name}</strong>
                            <p className='mb-0'>{item.description}</p>
                        </div>
                    </li>
                ))}

            </ul>

        </div>
    );
}

export default Lessons