import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function Quiz() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(true);
    const [questions, setQuestions] = useState([
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
            correctAnswer: "Tokyo"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Saturn", "Jupiter"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Homer"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the boiling point of water?",
            options: ["100°C", "90°C", "120°C", "80°C"],
            correctAnswer: "100°C"
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            correctAnswer: "8"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
            correctAnswer: "Oxygen"
        },
        {
            question: "In which year did World War II end?",
            options: ["1942", "1945", "1950", "1939"],
            correctAnswer: "1945"
        },
        {
            question: "Who is the author of the Harry Potter series?",
            options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Suzanne Collins"],
            correctAnswer: "J.K. Rowling"
        }
    ]);
    const handleAnswerClick = (questionIndex, option) => {
        const correctAnswer = questions[questionIndex].correctAnswer;
        setSelectedAnswer(option);

        if (option === correctAnswer) {
            setIsCorrect(true); // Correct answer
        } else {
            setIsCorrect(false); // Incorrect answer
        }
    };
    return (
        <div>
            {isCorrect === true ? (
                <div>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <h3>{question.question}</h3>
                            {question.options.map((option, optionIndex) => (
                                <button key={optionIndex}>{option}</button>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Answer is not correct or waiting for validation.</p>
            )}
        </div>
    );
}
    export default Quiz;
