import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

export const Week16Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm text-center">
        <h2 className="text-xl font-serif font-bold flex flex-col items-center justify-center gap-2">
          <GraduationCap className="w-12 h-12 text-uwm-gold mb-2" />
          Finals Week - Course Conclusion
        </h2>
      </div>

      <section>
        <div className="bg-white p-12 rounded-xl shadow-lg border border-uwm-gold text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
           
           <Award className="w-20 h-20 text-uwm-gold mx-auto mb-6 relative z-10" />
           <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">
             Congratulations on finishing the course!
           </h3>
           <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
             You've mastered the Lijphart Framework, explored the dynamics of two-level games, and analyzed the vital mechanics of democratic performance and political institutions. 
           </p>
           
           <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-bold relative z-10">
              <Star className="w-5 h-5 fill-current" />
              Don't forget to submit your Final Paper by May 15!
              <Star className="w-5 h-5 fill-current" />
           </div>
        </div>
      </section>
    </div>
  );
};
