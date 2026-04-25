import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, RadarChart, Scatter, ScatterChart, ZAxis, Legend } from 'recharts';
import { Users, Building, Percent, Handshake, BarChart3, TrendingUp, Presentation } from 'lucide-react';

const cabinetData = [
  { type: 'Single-Party Majority', effectiveness: 45, representation: 30, accountability: 80, stability: 70 },
  { type: 'Minimal Winning Coalition', effectiveness: 55, representation: 60, accountability: 65, stability: 60 },
  { type: 'Oversized Coalition', effectiveness: 60, representation: 85, accountability: 40, stability: 80 },
  { type: 'Minority Cabinet', effectiveness: 40, representation: 50, accountability: 50, stability: 45 }
];

const inclusionData = [
  { category: 'Women in Parliament', consensusAvg: 28.5, majoritarianAvg: 17.2 },
  { category: 'Voter Turnout', consensusAvg: 80.2, majoritarianAvg: 72.5 },
  { category: 'Income Equality', consensusAvg: 70.1, majoritarianAvg: 60.4 },
  { category: 'Welfare State Size', consensusAvg: 65.3, majoritarianAvg: 45.8 },
  { category: 'Environmental Policy', consensusAvg: 75.4, majoritarianAvg: 68.2 },
];

const macroEconData = [
  { metric: 'Economic Growth (%)', consensus: 3.1, majoritarian: 3.2 },
  { metric: 'Inflation (%)', consensus: 4.8, majoritarian: 5.5 },
  { metric: 'Unemployment (%)', consensus: 6.2, majoritarian: 6.7 },
];

const satisfactionData = [
  { country: 'New Zealand (Maj to Mixed)', year: '1990', satisfaction: 45, label: 'Pre-Reform (FPP)' },
  { country: 'New Zealand (Maj to Mixed)', year: '1996', satisfaction: 55, label: 'First MMP Election' },
  { country: 'New Zealand (Maj to Mixed)', year: '2002', satisfaction: 72, label: 'Post-Reform (MMP)' },
];


export const Week14Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-uwm-gold" /> Democratic Performance and Quality
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building className="text-uwm-gold" /> Cabinet Types: The Heart of the Executive-Parties Dimension
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Lijphart argues that the type of cabinet formed is the most critical element distinguishing majoritarian from consensus democracies. <strong>Single-party majority cabinets</strong> (typical of majoritarian systems) concentrate power, theoretically increasing accountability but sacrificing broad representation. <strong>Oversized coalitions</strong> (typical of consensus systems) prioritize broad inclusion and stability, though accountability can be muddied.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The bars represent <em>illustrative theoretical scores (0-100)</em>. Higher 'Representation' means more groups share executive power. Higher 'Accountability' means it is easier for voters to identify who is responsible for policy. Higher 'Stability' means the cabinet is less likely to collapse prematurely.
            </p>
          </div>
          <div className="h-96 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cabinetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="type" tick={{ fontSize: 12 }} />
                <YAxis type="number" domain={[0, 100]} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="representation" name="Reflects Broad Public Will" fill="#3b82f6" />
                <Bar dataKey="accountability" name="Voters Can Identify Responsible Party" fill="#f59e0b" />
                <Bar dataKey="stability" name="Cabinet Longevity" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Percent className="text-uwm-gold" /> Macroeconomic Performance (Lijphart Ch. 15)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Lijphart examines whether there is a trade-off between democratic quality and governmental effectiveness. Surprisingly, the data shows that consensus democracies perform <strong>just as well, if not slightly better</strong>, than majoritarian systems in controlling inflation and unemployment, with nearly identical economic growth rates. The "decisiveness" of majoritarian systems does not lead to superior economic outcomes.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The X-axis represents average percentages (%) over the time periods studied by Lijphart. Lower bars for Inflation and Unemployment mean better performance.
            </p>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={macroEconData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" label={{ value: 'Average Percentage (%)', position: 'insideBottom', offset: -15 }} />
                <YAxis dataKey="metric" type="category" width={140} tick={{ fontSize: 13 }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="consensus" name="Consensus Democracy" fill="#10b981" radius={[0, 4, 4, 0]} />
                <Bar dataKey="majoritarian" name="Majoritarian Democracy" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <Handshake className="text-uwm-gold" /> The "Kinder, Gentler" Democracy (Lijphart Ch. 16)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
             A central claim of Chapter 16 is that consensus democracies outperform majoritarian democracies on measures of <strong>democratic quality</strong> and <strong>socio-economic inclusion</strong>. They boast higher voter turnout, better representation of minority groups (including women), and tend to implement welfare policies that reduce income inequality.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> These bars represent average percentages (e.g., % of women in parliament, % voter turnout) or standardized index averages (e.g., Environmental Performance Index) scaled up to 100 for visual comparison. Higher bars mean "kinder, gentler" or higher quality outcomes.
            </p>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inclusionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="category" />
                <YAxis domain={[0, 100]} label={{ value: 'Percentage / Index Score', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="consensusAvg" name="Consensus Democracy Average" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="majoritarianAvg" name="Majoritarian Democracy Average" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="text-uwm-gold" /> Case Study: New Zealand's Electoral Reform
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            New Zealand experienced a dramatic shift when it abandoned First-Past-the-Post (FPP) for Mixed-Member Proportional (MMP) representation in the 1990s. This deliberate move from majoritarianism towards consensus democracy provides a natural experiment. As the system became more proportional, voter satisfaction with the democratic process generally increased, aligning with Lijphart's broader findings.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The Y-axis represents the percentage of voters who expressed satisfaction with how democracy works in their country according to election surveys before and after the reforms.
            </p>
          </div>
          <div className="h-80 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="year" name="Year" />
                <YAxis type="number" dataKey="satisfaction" name="Democratic Satisfaction (%)" domain={[0, 100]} />
                <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Satisfaction" data={satisfactionData} fill="#f59e0b">
                  {
                    satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#ef4444' : '#10b981'} />
                    ))
                  }
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
