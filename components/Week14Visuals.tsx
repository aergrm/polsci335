import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { TrendingUp, Scale, ShieldCheck, Heart, Activity } from 'lucide-react';

const wgiAdvantageData = [
  { indicator: 'Political Stability', effectSize: 0.189 },
  { indicator: 'Control of Corruption', effectSize: 0.182 },
  { indicator: 'Rule of Law', effectSize: 0.152 },
  { indicator: 'Govt Effectiveness', effectSize: 0.123 },
];

const eiuAdvantageData = [
  { category: 'Political Participation', effectSize: 0.466 },
  { category: 'Functioning of Govt', effectSize: 0.413 },
  { category: 'Political Culture', effectSize: 0.286 },
  { category: 'Civil Liberties', effectSize: 0.222 },
  { category: 'Electoral Process', effectSize: 0.100 },
];

const macroData = [
  { metric: 'Economic Growth (%)', consensus: 3.1, majoritarian: 3.2 },
  { metric: 'Inflation (%)', consensus: 4.5, majoritarian: 7.4 },
];

const kinderGentlerData = [
  { metric: 'Voter Turnout (%)', consensus: 80.2, majoritarian: 73.1 },
  { metric: 'Women in Parliament (%)', consensus: 24.9, majoritarian: 20.4 },
  { metric: 'Social Welfare (% GDP)', consensus: 26.5, majoritarian: 21.7 },
];

export const Week14Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-uwm-gold" /> Democratic Performance and Quality (Chap. 15-16)
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="text-uwm-gold" /> Effective Governance (Ch. 15)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Lijphart challenges the conventional wisdom that majoritarian systems produce more effective governance. Looking at Worldwide Governance Indicators (WGI), <strong>consensus democracies score systematically higher</strong> on metrics like Government Effectiveness, Rule of Law, and Control of Corruption. The claim that majoritarian systems are "better governors" is, according to Lijphart, <em>"clearly wrong."</em>
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The bars show the statistical effect size (advantage) of being a consensus democracy on the WGI scale (-2.5 to +2.5), controlling for development and population size. All displayed advantages are statistically significant.
            </p>
          </div>
          <div className="h-80 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wgiAdvantageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 0.25]} label={{ value: 'Advantage for Consensus Democracy (Score Increase)', position: 'insideBottom', offset: -10 }} />
                <YAxis dataKey="indicator" type="category" width={140} tick={{ fontSize: 13 }} />
                <RechartsTooltip formatter={(value) => [`+${value}`, 'Consensus Advantage']} />
                <Bar dataKey="effectSize" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="text-uwm-gold" /> Macroeconomic Performance & Violence (Ch. 15)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            When evaluating macroeconomic performance, consensus democracies show no significant penalty in economic growth but boast a strong, highly favorable record on <strong>controlling inflation</strong> (nearly 3 percentage points lower). Furthermore, consensus systems experience significantly less political violence and internal conflict risk.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> It compares generic averages to illustrate Lijphart's finding. Growth is statistically indistinguishable, but inflation is significantly lower in consensus regimes.
            </p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={macroData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="metric" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="consensus" name="Consensus Democracy" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="majoritarian" name="Majoritarian Democracy" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <Scale className="text-uwm-gold" /> Quality of Democracy (Ch. 16)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
             Consensus democracies excel in representing citizens. Using the Economist Intelligence Unit (EIU) Democracy Index (0-10 scale), consensus democracies log significantly higher scores across multiple dimensions, especially in <strong>Political Participation</strong> and the <strong>Functioning of Government</strong>.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
             <strong>Understanding the Chart:</strong> Shows the statistical advantage (score bump on a 10-point scale) attributed to consensus democracies.
            </p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eiuAdvantageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                <XAxis type="number" domain={[0, 0.5]} label={{ value: 'Advantage for Consensus Democracy (EIU Scale Increase)', position: 'insideBottom', offset: -10 }} />
                <YAxis dataKey="category" type="category" width={160} tick={{ fontSize: 13 }} />
                <RechartsTooltip formatter={(value) => [`+${value}`, 'Consensus Advantage']} />
                <Bar dataKey="effectSize" fill="#f59e0b" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="text-uwm-gold" /> "Kinder, Gentler" Outcomes (Ch. 16)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Lijphart finds that consensus democracy's communitarian culture translates into more humane policy outcomes. These societies provide more generous <strong>social welfare</strong>, grant more foreign aid, protect the environment better, and exhibit dramatically <strong>lower incarceration rates</strong> (almost 60 fewer prisoners per 100,000) while being significantly less likely to use capital punishment.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
             <strong>Understanding the Chart:</strong> Comparing broad percentage averages across three major social indicators. Higher bars mean broader participation, representation, and resource commitment to welfare.
            </p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={kinderGentlerData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="metric" />
                <YAxis domain={[0, 100]} label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="consensus" name="Consensus Democracy" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="majoritarian" name="Majoritarian Democracy" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
