import React, { useState } from 'react';
import styles from './quiz.module.css'
const quizData = [
  {
    question: 'Consultar periodicamente o veterinário com o seu animal de estimação é um dos principais cuidados a ter em atenção.?',
    options: [
      { answer: 'Verdadeiro', isCorrect: true },
      { answer: 'Falso', isCorrect: false },
    ],
    image: 'https://irp-cdn.multiscreensite.com/0f4d2608/DESKTOP/jpg/1274846-mujer-atendiendo-cachorro.jpg'
  },
  {
    question: 'Oferecer uma alimentação equilibrada e de qualidade ao animal de estimação é indispensável para prolongar a sua expectativa de vida.',
    options: [
      { answer: 'Verdadeiro', isCorrect: true },
      { answer: 'Falso', isCorrect: false },
    ],
    image: 'https://th.bing.com/th/id/R.3cd24508c0c231aa29fac83b100bf6db?rik=l4ynydoXE0%2bDZQ&pid=ImgRaw&r=0', // URL da imagem relacionada à pergunta
  },
  {
    question: 'Para evitar que o animal de estimação não contraia alguma doença, é importante que...',
    options:[
      { answer: 'Não tenha contato com animais', isCorrect: false },
      { answer: 'Fique apenas dentro de casa', isCorrect: false },
      { answer: 'Tenha as vacinas em dia', isCorrect: true },
    ],
    image: 'https://th.bing.com/th/id/OIP.Yoiyunv0BxCdCoivYVF-JwHaFj?rs=1&pid=ImgDetMain', // URL da imagem relacionada à pergunta
  },
  {
    question: 'É necessário ter muito cuidado com a higiene dos nossos pets, desde muito cedo. Os primeiros banhos devem ser dados após o primeiro mês de vida, utilizando produtos adequados, recomendados pelo seu veterinário.',
    options:[
      { answer: 'Verdadeiro', isCorrect: true },
      { answer: 'Falso', isCorrect: false },
    ],
    image: 'https://th.bing.com/th/id/R.a0e9aa53107b1cc46aaa8119f816e4b5?rik=rVkEN6l%2b3AYmLg&riu=http%3a%2f%2fwww.hospitalvetitaquera.com.br%2fwp-content%2fuploads%2f2020%2f07%2festetica.png&ehk=22s4yVNG7AtaXvMYTeojqh1%2f6%2fZoxNmMy2yG2VvPCag%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', // URL da imagem relacionada à pergunta
  },
  {
    question: 'Antes de adotar o seu pet, deve verificar e garantir que reúne as condições necessárias para o manter consigo durante toda a sua vida.',
    options:[
      { answer: 'Verdadeiro', isCorrect: true },
      { answer: 'Falso', isCorrect: false },
    ],
    image: 'https://th.bing.com/th/id/R.ea03c32bae984eecfac2bf627faa64e1?rik=S9vBiispv3Jc0A&riu=http%3a%2f%2fimages.virgula.com.br%2f2019%2f03%2fhenry_6.png&ehk=tRnt047hNdIHkbZO%2bq482iOUfPIFzA0NOgr1I4UBm8o%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    question: 'Os animais com deficiência conseguem se reproduzir e ter filhotes saudáveis?',
    options:[
      { answer: 'Falso.', isCorrect: false },
      { answer: 'Verdadeiro', isCorrect: true },
    ],
    image: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/07/capa-10.jpg',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  if (currentQuestion >= quizData.length) {
    return (
      <div className={styles.final}> 
        <h2>Parabéns! Você completou o quiz.</h2>
        <p>Você acertou {score} de 6 perguntas!</p>
        <button onClick={handleRestart}>Reiniciar</button>
      </div>
    );
  }

  const { question, options, image } = quizData[currentQuestion];

  return (
    <div className={styles.quiz}>
      <h2>Pergunta {currentQuestion + 1}</h2>
      <p>{question}</p>
      <img src={image} alt="Imagem da pergunta" />
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;