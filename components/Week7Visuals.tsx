import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, BarChart, Bar, Cell } from 'recharts';
import { Briefcase, Crown, AlertTriangle, CheckCircle2, XCircle, Scale, BookOpen, Gavel } from 'lucide-react';

const cabinetData = [
  { name: 'UK', enpp: 2.16, cabinet: 97.3 },
  { name: 'NZ', enpp: 2.28, cabinet: 81.4 },
  { name: 'US', enpp: 2.39, cabinet: 80.4 },
  { name: 'FRA', enpp: 3.26, cabinet: 54.8 },
  { name: 'GER', enpp: 3.09, cabinet: 37.8 },
  { name: 'SWI', enpp: 5.20, cabinet: 4.0 },
  { name: 'NET', enpp: 4.87, cabinet: 26.8 },
  { name: 'BEL', enpp: 4.72, cabinet: 37.3 },
  { name: 'ITA', enpp: 4.84, cabinet: 11.7 },
  { name: 'JPN', enpp: 3.62, cabinet: 40.1 },
  { name: 'IND', enpp: 4.80, cabinet: 30.5 },
];

const execDomData = [
  { name: 'UK', cabinet: 97.3, execDom: 8.12 },
  { name: 'NZ', cabinet: 81.4, execDom: 4.54 },
  { name: 'US', cabinet: 80.4, execDom: 4.00 },
  { name: 'FRA', cabinet: 54.8, execDom: 8.00 },
  { name: 'GER', cabinet: 37.8, execDom: 3.80 },
  { name: 'SWI', cabinet: 4.0, execDom: 1.00 },
  { name: 'NET', cabinet: 26.8, execDom: 2.91 },
  { name: 'BEL', cabinet: 37.3, execDom: 2.57 },
  { name: 'ITA', cabinet: 11.7, execDom: 1.49 },
  { name: 'JPN', cabinet: 40.1, execDom: 3.37 },
  { name: 'IND', cabinet: 30.5, execDom: 3.33 },
];

const presidentialPowersData = [
  { country: 'Chile (1970)', score: 12, fill: '#ef4444' }, // High power
  { country: 'Colombia (pre-1991)', score: 8, fill: '#f97316' },
  { country: 'Brazil (1988)', score: 7, fill: '#f97316' },
  { country: 'Philippines', score: 6.5, fill: '#f97316' },
  { country: 'South Korea', score: 6, fill: '#f97316' },
  { country: 'United States', score: 2, fill: '#22c55e' }, // Low power
  { country: 'Costa Rica', score: 1, fill: '#22c55e' },
  { country: 'Venezuela (1958)', score: 0, fill: '#22c55e' },
];

export const Week7Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Lijphart Visuals */}
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-uwm-gold" /> Lijphart: Executive-Legislative Relations
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="text-uwm-gold" /> Party System vs. Cabinet Type (Fig 6.1)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This chart illustrates the strong relationship between the effective number of parliamentary parties and the type of cabinet. As the number of parties increases, the incidence of one-party minimal winning cabinets decreases.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="enpp" name="Effective Number of Parties" domain={[1, 6]} label={{ value: 'Effective Number of Parliamentary Parties', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="cabinet" name="Percent Minimal Winning, One-Party Cabinets" domain={[0, 100]} label={{ value: 'Percent Minimal Winning, One-Party Cabinets', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={cabinetData} fill="#f59e0b">
                  <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Crown className="text-uwm-gold" /> Cabinet Type vs. Executive Dominance (Fig 7.2)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This chart shows the relationship between the type of cabinet and executive dominance. Countries with more minimal winning single-party cabinets also tend to be the countries with greater executive dominance.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="cabinet" name="Percent Minimal Winning, One-Party Cabinets" domain={[0, 100]} label={{ value: 'Percent Minimal Winning, One-Party Cabinets', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="execDom" name="Executive Dominance" domain={[0, 10]} label={{ value: 'Executive Dominance', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={execDomData} fill="#10b981">
                  <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Mainwaring & Shugart Visuals */}
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm mt-12">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-uwm-gold" /> Mainwaring & Shugart: Presidentialism & Democracy
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Scale className="text-uwm-gold" /> The Perils of Presidentialism: Linz vs. Mainwaring & Shugart
          </h3>
          <p className="text-gray-600 mb-8">
            Juan Linz argued that presidentialism is inherently flawed. Mainwaring & Shugart agree with some points but offer critical caveats, arguing that the <em>kind</em> of presidentialism matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Peril 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> 1. Dual Legitimacy
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Linz:</strong> Both the President and Assembly are popularly elected. When they conflict, there is no democratic principle to resolve who truly represents the people.
                </p>
              </div>
              <div className="p-4 bg-white">
                <h5 className="font-bold text-emerald-700 flex items-center gap-2 mb-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> M&S Response (Partial Agreement)
                </h5>
                <p className="text-sm text-gray-700">
                  True, but bicameral parliaments also face this. Furthermore, having two agents allows voters to have both <em>Government Accountability</em> (identifiable executive) and <em>Representative Delegates</em> (diverse assembly).
                </p>
              </div>
            </div>

            {/* Peril 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> 2. Rigidity (Fixed Terms)
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Linz:</strong> Fixed terms make it hard to remove unpopular or inept leaders, and term limits make it impossible to keep good ones.
                </p>
              </div>
              <div className="p-4 bg-white">
                <h5 className="font-bold text-emerald-700 flex items-center gap-2 mb-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> M&S Response (Partial Agreement)
                </h5>
                <p className="text-sm text-gray-700">
                  Agree it is a liability, but parliamentary cabinet instability can also be dangerous (e.g., Somalia, Thailand). Re-election can and should be permitted to keep good leaders.
                </p>
              </div>
            </div>

            {/* Peril 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> 3. Winner-Takes-All Logic
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Linz:</strong> Presidential elections are zero-sum. The winner takes all executive power, leaving losers excluded for years.
                </p>
              </div>
              <div className="p-4 bg-red-50">
                <h5 className="font-bold text-red-700 flex items-center gap-2 mb-2 text-sm">
                  <XCircle className="w-4 h-4" /> M&S Response (Disagreement)
                </h5>
                <p className="text-sm text-gray-700">
                  <strong>Disagree.</strong> Westminster parliamentary systems (with plurality rules) are <em>more</em> winner-takes-all. Presidentialism has checks and balances, and presidents often form coalition cabinets to pass laws.
                </p>
              </div>
            </div>

            {/* Peril 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> 4. Presidential Style
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Linz:</strong> Presidents feel they represent the entire nation, leading to intolerance of opposition and a lack of a moderating head of state.
                </p>
              </div>
              <div className="p-4 bg-white">
                <h5 className="font-bold text-emerald-700 flex items-center gap-2 mb-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> M&S Response (Partial Agreement)
                </h5>
                <p className="text-sm text-gray-700">
                  Agree, but this can be mitigated by constitutional design. Specifically, by giving the president <strong>weak legislative powers</strong> and ensuring parties are moderately disciplined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Gavel className="text-uwm-gold" /> The Case for Weak Presidents (Table 3)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Mainwaring & Shugart argue that presidential systems function better when the president has <strong>limited legislative powers</strong>. 
            This chart scores presidents based on 6 powers: Package Veto, Partial Veto, Decree Power, Exclusive Legislative Initiative, Budgetary Powers, and Proposal of Referenda. 
            Notice how stable democracies (US, Costa Rica) tend to have weaker presidents constitutionally.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={presidentialPowersData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="country" angle={-45} textAnchor="end" height={80} interval={0} style={{ fontSize: '12px' }} />
                <YAxis domain={[0, 16]} label={{ value: 'Total Legislative Power Score', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ fill: '#f3f4f6' }} />
                <Bar dataKey="score" name="Legislative Power Score" radius={[4, 4, 0, 0]}>
                  {presidentialPowersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700">High Power (Prone to Breakdown)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-700">Low Power (More Stable)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
