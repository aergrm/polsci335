import React, { useState, useEffect } from 'react';
import { Landmark, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';

type CBISetting = 'low' | 'high';

interface GameState {
  turn: number;
  inflation: number;
  unemployment: number;
  approval: number;
  interestRate: number;
  cbi: CBISetting | null;
  gameOver: boolean;
  message: string;
  history: { turn: number; inflation: number; unemployment: number; rate: number }[];
}

const INITIAL_STATE: GameState = {
  turn: 1,
  inflation: 2.0,
  unemployment: 5.0,
  approval: 50,
  interestRate: 5.0,
  cbi: null,
  gameOver: false,
  message: "Welcome to the Central Bank. Set the interest rate to manage the economy.",
  history: []
};

const BankSimulation: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [targetRate, setTargetRate] = useState<number>(5.0);

  const startGame = (cbi: CBISetting) => {
    setState({ ...INITIAL_STATE, cbi, history: [{ turn: 0, inflation: 2.0, unemployment: 5.0, rate: 5.0 }] });
    setTargetRate(5.0);
  };

  const nextTurn = () => {
    if (state.gameOver) return;

    let actualRate = targetRate;
    let turnMessage = "";

    // Government interference if CBI is low and unemployment is high
    if (state.cbi === 'low' && state.unemployment > 6.0 && targetRate > 3.0) {
      actualRate = 2.0; // Government forces a rate cut
      turnMessage = "🚨 The Government overrode your decision and forced a rate cut to boost employment!";
    } else {
      turnMessage = `You set the interest rate to ${actualRate.toFixed(1)}%.`;
    }

    // Economic Engine
    // Lower rates -> higher inflation, lower unemployment
    // Higher rates -> lower inflation, higher unemployment
    
    const rateDiff = actualRate - 5.0; // Neutral rate is 5.0
    
    // Random shocks
    const inflationShock = (Math.random() - 0.5) * 1.5;
    const unemploymentShock = (Math.random() - 0.5) * 1.0;

    let newInflation = state.inflation - (rateDiff * 0.5) + inflationShock;
    let newUnemployment = state.unemployment + (rateDiff * 0.4) + unemploymentShock;

    // Natural bounds
    newInflation = Math.max(0, newInflation);
    newUnemployment = Math.max(2.0, Math.min(20.0, newUnemployment));

    // Calculate score/approval based on misery index (inflation + unemployment)
    // Ideal: Inflation 2%, Unemployment 4%
    const inflationPenalty = Math.abs(newInflation - 2.0) * 5;
    const unemploymentPenalty = Math.max(0, newUnemployment - 4.0) * 5;
    let newApproval = 100 - (inflationPenalty + unemploymentPenalty);
    newApproval = Math.max(0, Math.min(100, newApproval));

    const nextTurnNum = state.turn + 1;
    const isGameOver = nextTurnNum > 10 || newInflation > 15.0 || newUnemployment > 15.0;

    if (isGameOver) {
      if (newInflation > 15.0) turnMessage = "💥 Hyperinflation! The economy collapsed.";
      else if (newUnemployment > 15.0) turnMessage = "💥 Severe Depression! The economy collapsed.";
      else turnMessage = "Term completed! Final Approval: " + newApproval.toFixed(0) + "%";
    }

    setState(prev => ({
      ...prev,
      turn: nextTurnNum,
      inflation: newInflation,
      unemployment: newUnemployment,
      approval: newApproval,
      interestRate: actualRate,
      gameOver: isGameOver,
      message: turnMessage,
      history: [...prev.history, { turn: prev.turn, inflation: newInflation, unemployment: newUnemployment, rate: actualRate }]
    }));
  };

  if (!state.cbi) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <button onClick={onBack} className="text-sm text-gray-500 hover:text-uwm-black mb-6">← Back to Menu</button>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-uwm-gold">
          <Landmark className="w-16 h-16 text-uwm-gold mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-uwm-black mb-4">Central Bank Simulator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Step into the shoes of a Central Bank Governor. Your mandate is to maintain price stability (Inflation ~2%) and maximum employment (Unemployment ~4%). 
            Adjust interest rates to steer the economy over 10 turns.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div 
              onClick={() => startGame('low')}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-uwm-gold cursor-pointer transition-all hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">Low Independence</h3>
              <p className="text-sm text-gray-600">
                The government can override your interest rate decisions if unemployment gets too high, prioritizing short-term political gains over long-term stability.
              </p>
            </div>
            
            <div 
              onClick={() => startGame('high')}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-uwm-gold cursor-pointer transition-all hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-green-600 mb-2">High Independence</h3>
              <p className="text-sm text-gray-600">
                You have full autonomy. The government cannot interfere with your monetary policy, allowing you to make tough choices to fight inflation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-sm text-gray-500 hover:text-uwm-black">← Exit Simulator</button>
        <div className="text-sm font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-600">
          Turn {Math.min(state.turn, 10)} / 10
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Landmark className="text-uwm-gold" /> Economic Indicators
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-100 text-center">
                <div className="text-sm text-red-600 font-bold mb-1">Inflation</div>
                <div className="text-3xl font-black text-red-700">{state.inflation.toFixed(1)}%</div>
                <div className="text-xs text-red-500 mt-1">Target: 2.0%</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <div className="text-sm text-blue-600 font-bold mb-1">Unemployment</div>
                <div className="text-3xl font-black text-blue-700">{state.unemployment.toFixed(1)}%</div>
                <div className="text-xs text-blue-500 mt-1">Target: 4.0%</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100 text-center">
                <div className="text-sm text-green-600 font-bold mb-1">Public Approval</div>
                <div className="text-3xl font-black text-green-700">{state.approval.toFixed(0)}%</div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border ${state.message.includes('🚨') || state.message.includes('💥') ? 'bg-red-50 border-red-200 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-800'}`}>
              <p className="font-medium">{state.message}</p>
            </div>
          </div>

          {/* Controls */}
          {!state.gameOver && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Monetary Policy</h3>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Set Target Interest Rate: <span className="text-xl text-uwm-gold">{targetRate.toFixed(1)}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="15" 
                  step="0.5" 
                  value={targetRate} 
                  onChange={(e) => setTargetRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-uwm-gold"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0% (Stimulative)</span>
                  <span>Neutral</span>
                  <span>15% (Restrictive)</span>
                </div>
              </div>
              <button 
                onClick={nextTurn}
                className="w-full py-3 bg-uwm-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
              >
                End Turn & Apply Rate
              </button>
            </div>
          )}

          {state.gameOver && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Simulation Complete</h3>
              <p className="text-gray-600 mb-6">Final Approval Rating: {state.approval.toFixed(0)}%</p>
              <button 
                onClick={() => setState(INITIAL_STATE)}
                className="px-6 py-3 bg-uwm-gold text-white font-bold rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw size={18} /> Play Again
              </button>
            </div>
          )}
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          <div className="bg-uwm-black text-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-uwm-gold mb-2 uppercase tracking-wider text-sm">Current Regime</h3>
            <div className="text-xl font-serif mb-4">
              {state.cbi === 'high' ? 'High Independence' : 'Low Independence'}
            </div>
            <p className="text-sm text-gray-300">
              {state.cbi === 'high' 
                ? "The government cannot interfere with your decisions. You are free to raise rates to fight inflation, even if it causes unemployment."
                : "The government may override your rate hikes if unemployment rises above 6.0%, forcing cuts to boost jobs."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Economic Theory</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <TrendingUp className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Lower Rates:</strong> Cheaper borrowing boosts business and jobs (lower unemployment), but increases prices (higher inflation).</span>
              </li>
              <li className="flex gap-2">
                <TrendingDown className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Higher Rates:</strong> Expensive borrowing slows the economy, cooling prices (lower inflation) but costing jobs (higher unemployment).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSimulation;