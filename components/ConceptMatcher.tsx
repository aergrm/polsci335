import React, { useState, useEffect } from 'react';
import { CONCEPT_FLASHCARDS } from '../constants';
import { Layers, Trophy, RotateCcw } from 'lucide-react';

interface Card {
  id: string;
  text: string;
  type: 'concept' | 'definition';
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const ConceptMatcher: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'won'>('start');

  const initializeGame = () => {
    // Pick 6 random concepts
    const shuffledConcepts = [...CONCEPT_FLASHCARDS].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    const gameCards: Card[] = [];
    shuffledConcepts.forEach(concept => {
      gameCards.push({
        id: `c-${concept.id}`,
        text: concept.front,
        type: 'concept',
        pairId: concept.id,
        isFlipped: false,
        isMatched: false
      });
      gameCards.push({
        id: `d-${concept.id}`,
        text: concept.back,
        type: 'definition',
        pairId: concept.id,
        isFlipped: false,
        isMatched: false
      });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setFlippedIndices([]);
    setMatches(0);
    setMoves(0);
    setGameState('playing');
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves(m => m + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (newCards[firstIndex].pairId === newCards[secondIndex].pairId) {
        // Match
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatches(m => {
            const newMatches = m + 1;
            if (newMatches === 6) setGameState('won');
            return newMatches;
          });
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  if (gameState === 'start') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in h-full">
        <Layers className="w-16 h-16 text-cyan-500 mb-6" />
        <h2 className="text-3xl font-bold mb-2">Concept Matcher</h2>
        <p className="text-gray-500 mb-8 max-w-md">Test your memory! Match the political science concepts to their correct definitions.</p>
        <button onClick={initializeGame} className="bg-uwm-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 shadow-lg">Start Game</button>
        <button onClick={onBack} className="mt-4 text-sm text-gray-500">Back to Menu</button>
      </div>
    );
  }

  if (gameState === 'won') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in h-full">
        <Trophy className="w-20 h-20 text-uwm-gold mb-6" />
        <h2 className="text-4xl font-black mb-2">You Won!</h2>
        <p className="text-gray-500 mb-8">Completed in {moves} moves.</p>
        <div className="flex gap-4">
          <button onClick={initializeGame} className="bg-uwm-black text-white px-8 py-3 rounded-xl font-bold">Play Again</button>
          <button onClick={onBack} className="bg-white border px-8 py-3 rounded-xl font-bold">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto w-full p-4 flex flex-col h-full animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-sm text-gray-500 hover:text-black">← Exit Game</button>
        <div className="flex gap-6 text-sm font-bold text-gray-600">
          <span>Matches: {matches}/6</span>
          <span>Moves: {moves}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 flex-grow">
        {cards.map((card, index) => (
          <div 
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`relative w-full h-32 md:h-40 cursor-pointer perspective-1000 ${card.isMatched ? 'opacity-0 pointer-events-none' : ''} transition-opacity duration-500`}
            style={{ perspective: '1000px' }}
          >
            <div 
              className="w-full h-full transition-transform duration-500"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
              }}
            >
              {/* Front (Hidden) */}
              <div 
                className="absolute inset-0 bg-cyan-600 rounded-xl shadow-md flex items-center justify-center border-2 border-cyan-700"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <Layers className="w-8 h-8 text-cyan-300 opacity-50" />
              </div>
              
              {/* Back (Revealed) */}
              <div 
                className={`absolute inset-0 rounded-xl shadow-md flex items-center justify-center p-4 border-2 ${
                  card.type === 'concept' ? 'bg-white border-cyan-200' : 'bg-slate-50 border-slate-200'
                }`}
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)' 
                }}
              >
                <p className={`text-center ${card.type === 'concept' ? 'font-bold text-lg text-cyan-900' : 'text-xs text-slate-700'}`}>
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptMatcher;
