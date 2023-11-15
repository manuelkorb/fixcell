import React from "react";
import "./questions.css";

const initQuestions = [
  {
    id: "1",
    cat: "¿Cuánto tiempo lleva reparar un celular?",
    img: "/assets/question1.svg",
    label:
      "El tiempo de reparación varía según el tipo de daño y la disponibilidad de piezas de repuesto. Nuestro equipo de trabajo trabaja para completar la reparación en el menor tiempo posible",
  },
  {
    id: "2",
    cat: "¿Ofrecen garantía en las reparaciones?",
    img: "/assets/question2.svg",
    label:
      "Sí, ofrecemos una garantía en nuestras reparaciones. La duración de la garantía puede variar según el tipo de reparación",
  },
  {
    id: "3",
    cat: "¿Cuál es el costo promedio de una reparación?",
    img: "/assets/question3.svg",
    label:
      "El costo de una reparación varía según la naturaleza del daño y el modelo del dispositivo. Te recomendamos que nos contactes para obtener una cotización precisa",
  },
];

const QuestionItem = ({ question }) => {
  return (
    <div className="question">
      <img src={question.img} className="question-img" />
      <h2 className="question-cat">{question.cat}</h2>
      <p className="question-label">{question.label}</p>
    </div>
  );
};

export function QuestionsList() {
  const questions = initQuestions;
  return (
    <div className="questions-list-container">
      <div className="questions-list">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
