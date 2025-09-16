import React from 'react';
import { MdPlayLesson } from "react-icons/md";


class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [
                { lesson: 1, name: "Математика", description: "Высшая математика" },
                { lesson: 2, name: "Программирование", description: "Программирование на языке C++" },
                { lesson: 3, name: "Черчения", description: "Черчения высоких зданий" }
            ]
        };
    }
    render() {
        return(
            <div className='container mt-4'>
                <h2>Список уроков</h2>
                <ul className='list-group'>
                    {this.state.lessons.map(item => (
                        <li key={item.lesson} className="list-group-item d-flex align-items-center mt-3 li-lesson">
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
}

export default Lessons