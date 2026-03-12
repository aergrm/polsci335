import React, { useState, useEffect } from 'react';
import { Zap, Trophy, Timer, CheckCircle, XCircle } from 'lucide-react';

const QUESTIONS = [
  { text: "The Westminster model is characterized by executive power-sharing in broad coalition cabinets.", isTrue: false, explanation: "Westminster features single-party majority cabinets." },
  { text: "Consensus democracies tend to have a rigid constitution that is difficult to amend.", isTrue: true, explanation: "Rigid constitutions protect minority rights in consensus systems." },
  { text: "The UK is a classic example of a consensus democracy.", isTrue: false, explanation: "The UK is the prototype of the Westminster (majoritarian) model." },
  { text: "In a majoritarian system, the central bank is typically dependent on the executive.", isTrue: true, explanation: "Central bank independence is a feature of consensus democracy." },
  { text: "Proportional representation electoral systems are associated with the consensus model.", isTrue: true, explanation: "PR aims to represent minorities, a key consensus goal." },
  { text: "A plural society is one that is deeply divided by religious, ideological, linguistic, or cultural differences.", isTrue: true, explanation: "Lijphart argues consensus democracy is best for plural societies." },
  { text: "The 'Magic Formula' refers to the UK's unwritten constitution.", isTrue: false, explanation: "It refers to the 2:2:2:1 party distribution in the Swiss Federal Council." },
  { text: "Symmetric bicameralism means both houses of the legislature have roughly equal power.", isTrue: true, explanation: "This is a feature of the consensus model." },
  { text: "Corporatism involves interest group pluralism and free-market competition.", isTrue: false, explanation: "Corporatism involves tripartite concertation, not pluralist competition." },
  { text: "Federalism is a key characteristic of the Westminster model.", isTrue: false, explanation: "Westminster systems are typically unitary and centralized." },
  { text: "The Gallagher Index measures the disproportionality of an electoral system.", isTrue: true, explanation: "Higher Gallagher Index means higher disproportionality." },
  { text: "Incongruent federalism means the federal units have a similar social and cultural character to the nation as a whole.", isTrue: false, explanation: "That describes congruent federalism. Incongruent means they differ." },
  { text: "A constructive vote of no confidence requires parliament to elect a new cabinet before dismissing the current one.", isTrue: true, explanation: "This promotes cabinet stability (e.g., in Germany)." },
  { text: "Executive dominance is a hallmark of consensus democracies.", isTrue: false, explanation: "Executive dominance is a hallmark of Westminster systems." },
  { text: "New Zealand shifted from a consensus model to a majoritarian model in 1996.", isTrue: false, explanation: "It shifted from majoritarian (FPP) to consensus (MMP) in 1996." }
];

const SpeedRun: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [questions, setQuestions] = useState(QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const startGame = () => {
    setQuestions([...QUESTIONS].sort(() => 0.5 - Math.random()));
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(60);
    setGameState('playing');
  };

  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('end');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleAnswer = (answer: boolean) => {
    if (feedback !== null) return; // Prevent double clicking

    const currentQ = questions[currentIndex];
    const isCorrect = answer === currentQ.isTrue;

    if (isCorrect) {
      setScore(s => s + 100 + (timeLeft * 2)); // Bonus for time
      setFeedback('correct');
    } else {
      setScore(s => Math.max(0, s - 50));
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setGameState('end');
      }
    }, 800);
  };

  if (gameState === 'start') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in h-full">
        <Zap className="w-16 h-16 text-orange-500 mb-6" />
        <h2 className="text-3xl font-bold mb-2">Speed Run: True/False</h2>
        <p className="text-gray-500 mb-8 max-w-md">Answer as many True/False questions as you can in 60 seconds. Fast answers earn more points!</p>
        <button onClick={startGame} className="bg-uwm-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 shadow-lg">Start Run</button>
        <button onClick={onBack} className="mt-4 text-sm text-gray-500">Back to Menu</button>
      </div>
    );
  }

  if (gameState === 'end') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in h-full">
        <Trophy className="w-20 h-20 text-uwm-gold mb-6" />
        <h2 className="text-4xl font-black mb-2">{score} Points!</h2>
        <p className="text-gray-500 mb-8">You answered {currentIndex + (feedback ? 1 : 0)} questions.</p>
        <div className="flex gap-4">
          <button onClick={startGame} className="bg-uwm-black text-white px-8 py-3 rounded-xl font-bold">Play Again</button>
          <button onClick={onBack} className="bg-white border px-8 py-3 rounded-xl font-bold">Back to Menu</button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto w-full p-4 flex flex-col items-center h-full animate-fade-in">
      <div className="w-full flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-uwm-black font-bold text-xl">
          <Timer className="w-6 h-6 text-orange-500" /> {timeLeft}s
        </div>
        <div className="text-sm font-bold text-gray-400">Q {currentIndex + 1} / {questions.length}</div>
        <div className="text-2xl font-black text-uwm-gold">{score}</div>
      </div>

      <div className={`w-full bg-white rounded-2xl shadow-xl border-4 flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-200 min-h-[300px] ${
        feedback === 'correct' ? 'border-green-500 bg-green-50 scale-105' : 
        feedback === 'wrong' ? 'border-red-500 bg-red-50 shake' : 'border-gray-100'
      }`}>
        {feedback === 'correct' && <CheckCircle className="w-16 h-16 text-green-500 mb-4 absolute top-4" />}
        {feedback === 'wrong' && <XCircle className="w-16 h-16 text-red-500 mb-4 absolute top-4" />}
        
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-800 leading-relaxed z-10">
          {currentQ.text}
        </h3>

        {feedback !== null && (
          <div className="mt-8 text-sm font-bold text-gray-600 bg-white/80 px-4 py-2 rounded-lg z-10">
            {currentQ.explanation}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6 w-full mt-12">
        <button 
          onClick={() => handleAnswer(true)}
          disabled={feedback !== null}
          className="bg-green-600 hover:bg-green-700 text-white py-6 rounded-2xl font-bold text-2xl shadow-lg transition-transform active:scale-95 disabled:opacity-50"
        >
          True
        </button>
        <button 
          onClick={() => handleAnswer(false)}
          disabled={feedback !== null}
          className="bg-red-600 hover:bg-red-700 text-white py-6 rounded-2xl font-bold text-2xl shadow-lg transition-transform active:scale-95 disabled:opacity-50"
        >
          False
        </button>
      </div>
    </div>
  );
};

export default SpeedRun;
