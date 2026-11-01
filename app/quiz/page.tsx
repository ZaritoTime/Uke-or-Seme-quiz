"use client";
import { useState } from "react";
import questions from "./data.js";
import Link from "next/link";

function quiz() {
  type AnswerType = "uke" | "seme";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [finished, setFinished] = useState(false);
  const scores = {
    uke: 0,
    seme: 0,
    switch: 0,
  };
  answers.forEach((answer) => {
    scores[answer]++;
  });
  const maxScore = Math.max(scores.uke, scores.seme, scores.switch);
  let result = "";
  if (
    scores.uke === maxScore &&
    scores.seme === maxScore &&
    scores.switch === maxScore
  ) {
    result = "switch";
  } else if (scores.uke === maxScore && scores.seme === maxScore) {
    result = "switch";
  } else if (scores.uke === maxScore && scores.switch === maxScore) {
    result = "switch";
  } else if (scores.seme === maxScore && scores.switch === maxScore) {
    result = "switch";
  } else if (scores.uke === maxScore) {
    result = "uke";
  } else if (scores.seme === maxScore) {
    result = "seme";
  } else {
    result = "switch";
  }
  const handleAnswer = (type: AnswerType) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
  };
  if (finished) {
    return (
      <main>
        <Link
          href="/"
          className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200 transition duration-300"
          onClick={reset}
        >
          กลับไปหน้าแรก
        </Link>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
          <h1>ทำแบบทดสอบเสร็จแล้ว!</h1>
          <p>คุณตอบไปทั้งหมด {answers.length} ข้อ</p>
          <h3>ผลลัพธ์:</h3>
          <p>{result}</p>
          <button
            onClick={reset}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-400 transition duration-300"
          >
            ทำแบบทดสอบอีกครั้ง
          </button>
        </div>
      </main>
    );
  }
  const question = questions[currentQuestion];
  return (
    <main>
      <Link
        href="/"
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200 transition duration-300"
        onClick={reset}
      >
        กลับไปหน้าแรก
      </Link>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
        <h2 className="text-xl font-bold mb-4">
          คำถามที่ {currentQuestion + 1} / {questions.length}
        </h2>

        <h3>{question.question}</h3>
        <div className="flex items-center justify-center">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type as AnswerType)}
              className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-300 transition duration-300"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default quiz;
