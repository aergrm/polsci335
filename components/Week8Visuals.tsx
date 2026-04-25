import React from 'react';
import { PencilLine, FileText, CheckCircle2 } from 'lucide-react';

export const Week8Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm text-center">
        <h2 className="text-xl font-serif font-bold flex flex-col items-center justify-center gap-2">
          <PencilLine className="w-12 h-12 text-uwm-gold mb-2" />
          Midterm Exam Week
        </h2>
      </div>

      <section>
        <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-200 text-center">
           <FileText className="w-16 h-16 text-gray-400 mx-auto mb-6" />
           <h3 className="text-2xl font-bold text-gray-900 mb-4">
             Midterm Exam
           </h3>
           <p className="text-gray-600 mb-8 max-w-lg mx-auto">
             This week is dedicated to the midterm exam covering all materials from weeks 1 through 7. Good luck with your studies and preparation!
           </p>
           <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Covers Weeks 1-7
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
