import React, { useState } from 'react';
import IceBreakerButton from './components/IceBreakerButton';
import './App.css';

const questions = [
  "What's your favorite cuisine?",
  "If you could only eat one type of food for the rest of your life, what would it be?",
  "What's the weirdest food you've ever tried?",
  "What's your go-to comfort food?",
  "If you could have dinner with any chef, who would it be?",
  "What's your favorite dessert?",
  "What's the best meal you've ever had?",
  "Do you prefer sweet or savory snacks?",
  "What's your favorite pizza topping?",
  "If you could create a new ice cream flavor, what would it be?",
  "What's your favorite drink?",
  "Do you prefer coffee or tea?",
  "What's your go-to cocktail?",
  "If you could invent a new drink, what would it be?",
  "What's the best drink you've ever had?",
  "Do you prefer hot or cold beverages?",
  "What's your favorite smoothie flavor?",
  "What's your favorite type of wine?",
  "Do you prefer beer or wine?",
  "What's your favorite non-alcoholic drink?",
  "If you could have any superpower, what would it be and why?",
  "What's the most ridiculous fact you know?",
  "If you were a vegetable, what vegetable would you be and why?",
  "What's the weirdest food you've ever eaten?",
  "If you could be any animal for a day, which one would you choose and why?",
  "What's the funniest thing that has happened to you recently?",
  "If you could swap lives with any fictional character, who would it be?",
  "What's your go-to karaoke song?",
  "If you could only eat one food for the rest of your life, what would it be?",
  "What's the most embarrassing thing you've ever done in public?",
  "What's your favorite hobby?",
  "If you could learn any skill instantly, what would it be?",
  "What's your dream job?",
  "If you could time travel, would you go to the past or the future?",
  "What's your favorite way to relax?",
  "Do you prefer the city or the countryside?",
  "What's your favorite season and why?",
  "If you could live anywhere in the world, where would it be?",
  "What's your favorite way to stay active?",
  "What's your favorite book?",
  "What's your favorite movie?",
  "Who's your favorite actor or actress?",
  "If you could be any movie character, who would you be?",
  "What's the last movie you watched?",
  "What's your favorite movie genre?",
  "If you could direct a movie, what would it be about?",
  "What's your favorite movie quote?",
  "What's the best movie you've seen this year?",
  "Do you prefer watching movies at home or in the theater?",
  "What's your favorite animated movie?",
  "If you could travel anywhere, where would you go?",
  "What's your favorite vacation destination?",
  "Do you prefer the beach or the mountains?",
  "What's the best vacation you've ever had?",
  "If you could live in any country for a year, where would it be?",
  "What's your favorite travel memory?",
  "Do you prefer solo travel or group travel?",
  "What's your dream vacation?",
  "What's the most interesting place you've ever visited?",
  "What's your favorite travel activity?",
  "What's your favorite song?",
  "Who's your favorite musician or band?",
  "If you could attend any concert, whose would it be?",
  "What's the best concert you've ever been to?",
  "Do you play any musical instruments?",
  "What's your favorite music genre?",
  "If you could meet any musician, who would it be?",
  "What's your favorite album?",
  "Do you prefer live music or recorded music?",
  "What's your go-to karaoke song?",
  "What's your favorite book?",
  "Who's your favorite author?",
  "If you could meet any author, who would it be?",
  "What's the last book you read?",
  "What's your favorite book genre?",
  "If you could write a book, what would it be about?",
  "What's your favorite book series?",
  "Do you prefer physical books or e-books?",
  "What's the best book you've read this year?",
  "What's your favorite childhood book?",
  "What's your favorite gadget?",
  "If you could invent a new technology, what would it be?",
  "What's the most useful app on your phone?",
  "Do you prefer Android or iOS?",
  "What's your favorite social media platform?",
  "If you could have any tech job, what would it be?",
  "What's the coolest tech gadget you've ever seen?",
  "Do you prefer working on a desktop or a laptop?",
  "What's your favorite video game?",
  "What's the most interesting tech trend you've seen recently?",
  "What's your favorite sport?",
  "Who's your favorite athlete?",
  "If you could attend any sporting event, what would it be?",
  "Do you prefer playing sports or watching them?",
  "What's the best sporting event you've ever attended?",
  "If you could play any sport professionally, what would it be?",
  "What's your favorite sports team?",
  "Do you prefer team sports or individual sports?",
  "What's your favorite Olympic event?",
  "What's the most interesting sport you've ever tried?",
  "What's your favorite part of your job?",
  "If you could have any job, what would it be?",
  "What's the best career advice you've ever received?",
  "What's your biggest work-related accomplishment?",
  "If you could start your own business, what would it be?",
  "What's your favorite work-related memory?",
  "Do you prefer working in an office or remotely?",
  "What's the most interesting job you've ever had?",
  "What's your favorite work-related book?",
  "What's your biggest work-related challenge?",
  "What's your favorite subject in school?",
  "Who's your favorite teacher?",
  "If you could go back to school, what would you study?",
  "What's the best class you've ever taken?",
  "Do you prefer online learning or in-person learning?",
  "What's your favorite educational book?",
  "If you could teach any subject, what would it be?",
  "What's your favorite educational memory?",
  "What's the most interesting thing you've ever learned?",
  "What's your biggest educational accomplishment?",
  "What's your biggest personal goal?",
  "If you could change one thing about yourself, what would it be?",
  "What's the best piece of advice you've ever received?",
  "What's your favorite self-help book?",
  "If you could learn any new skill, what would it be?",
  "What's your biggest personal accomplishment?",
  "What's your favorite way to practice self-care?",
  "If you could mentor someone, what advice would you give them?",
  "What's your favorite personal growth activity?",
  "What's your biggest personal challenge?",
  "If you could have dinner with any historical figure, who would it be?",
  "If you could time travel, would you go to the past or the future?",
  "If you could meet any fictional character, who would it be?",
  "If you could live in any time period, when would it be?",
  "If you could have any animal as a pet, what would it be?",
  "If you could be any age for a week, what age would you be?",
  "If you could switch lives with anyone for a day, who would it be?",
  "If you could have any job for a day, what would it be?",
  "If you could live in any fictional world, where would it be?",
  "If you could have any talent, what would it be?",
  "What's your favorite holiday?",
  "What's your favorite way to spend a weekend?",
  "What's your favorite board game?",
  "What's your favorite way to spend a rainy day?",
  "What's your favorite way to celebrate a special occasion?",
  "What's your favorite type of weather?",
  "What's your favorite way to stay active?",
  "What's your favorite way to relax?",
  "What's your favorite way to spend time with friends?",
  "What's your favorite way to spend time with family?"
];

const App = () => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);

  const getRandomQuestion = () => {
    if (usedQuestions.length === questions.length) {
      alert("No more questions available!");
      return;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    setUsedQuestions([...usedQuestions, randomIndex]);
    setQuestionIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1>Ice-Breaker Questions</h1>
      <IceBreakerButton onClick={getRandomQuestion} />
      {questionIndex !== null && (
        <p className="question">{questions[questionIndex]}</p>
      )}
    </div>
  );
};

export default App;