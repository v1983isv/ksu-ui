import { useState } from "react";
import Question from "./Question";

export default function Questionary() {

    const questionary = {
        1: ["Первый ответ", "Второй ответ"],
        2: ["Третий ответ", "Четвертый ответ"],
        3: ["Пятый ответ", "Шестой ответ"],
        4: ["Седьмой ответ", "Восьмой ответ"],
    };
    const [index, setIndex] = useState(1);

    const [answers, setAnswers] = useState([])

    function setAnswer(answer) {
        answers.push(answer);
        setAnswers(answers)
        console.log(answers)
        if (questionary.hasOwnProperty(index + 1)) {
            setIndex(index + 1);
        } else {
            setIndex(1);
            console.log(answers);
        }

    }

    return (
        <div className="questionary">
            <ul>
            {questionary[index].map((question, index) => (
                <li key={index}>
                    <Question value={question} handleClick={setAnswer}/>
                </li>
            ))}
            </ul>
        </div>
    )
}