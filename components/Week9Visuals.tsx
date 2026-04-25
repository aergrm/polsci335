import React from 'react';
import { Sun, Palmtree, Coffee } from 'lucide-react';

export const Week9Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-amber-50 text-amber-900 p-8 rounded-xl shadow-sm text-center border border-amber-200">
        <div className="flex justify-center mb-6">
           <div className="relative">
              <Sun className="w-24 h-24 text-amber-500 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Palmtree className="w-10 h-10 text-emerald-600 ml-2" />
              </div>
           </div>
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">
          Spring Break
        </h2>
        <p className="text-lg text-amber-800/80 max-w-lg mx-auto mb-6">
          Take a well-deserved break! There are no classes or assignments due this week. Rest, recharge, and get ready for the second half of the semester.
        </p>
        <div className="flex justify-center gap-6 text-amber-700/60">
           <Coffee className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
