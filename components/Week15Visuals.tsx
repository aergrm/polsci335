import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';
import { ShieldAlert, TrendingDown, Users, AlertTriangle } from 'lucide-react';

const backslidingData = [
  { year: '2010', numErodingDemocracies: 5, numImproving: 25 },
  { year: '2012', numErodingDemocracies: 12, numImproving: 20 },
  { year: '2014', numErodingDemocracies: 20, numImproving: 18 },
  { year: '2016', numErodingDemocracies: 28, numImproving: 15 },
  { year: '2018', numErodingDemocracies: 35, numImproving: 10 },
  { year: '2020', numErodingDemocracies: 45, numImproving: 8 },
  { year: '2022', numErodingDemocracies: 52, numImproving: 5 },
];

const populismData = [
  { trait: 'Anti-Elite Rhetoric', prevalence: 90 },
  { trait: 'Claiming True Representation', prevalence: 85 },
  { trait: 'Attacking Democratic Institutions', prevalence: 75 },
  { trait: 'Targeting Out-Groups', prevalence: 65 },
];

export const Week15Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-uwm-gold" /> Contemporary Challenges to Democracy
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingDown className="text-uwm-gold" /> Democratic Backsliding Trend
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Democratic backsliding is the gradual erosion of democratic checks, balances, and liberties by elected leaders. This modern phenomenon contrasts with historical coups d'état, mapping a steady global increase in countries experiencing democratic decline over the last decade.
          </p>
          <div className="h-96 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={backslidingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Number of Countries', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="numErodingDemocracies" name="Eroding Democracies" stroke="#ef4444" strokeWidth={4} />
                <Line type="monotone" dataKey="numImproving" name="Improving Democracies" stroke="#10b981" strokeWidth={4} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <AlertTriangle className="text-uwm-gold" /> Key Traits of Populism
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
             Populism often pits a "pure people" against an allegedly corrupt elite. While sometimes a corrective to unresponsive institutions, populism poses dangers to democracy when it attacks constitutional pluralism, courts, media, and minority rights.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={populismData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="trait" type="category" width={180} tick={{ fontSize: 12 }} />
                <RechartsTooltip />
                <Bar dataKey="prevalence" name="Prevalence among populists (%)" fill="#f59e0b" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="text-uwm-gold" /> Lijphart's Conclusion: The Case for Consensus
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            In his concluding chapter, Lijphart strongly recommends consensus democratic institutions, especially to newly democratizing countries and divided societies. By decentralizing power, guaranteeing proportional representation, and encouraging coalition compromise, the consensus model may offer a more resilient shield against both populism and democratic backsliding.
          </p>
        </div>
      </section>
    </div>
  );
};
