import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, LabelList, LineChart, Line, Legend } from 'recharts';
import { Globe, Users, ShieldAlert, ArrowRightLeft } from 'lucide-react';

const winSetData = [
  { scenario: 'Large Win-Set', agreementLikelihood: 85, bargainingLeverage: 30, fillLikelihood: '#10b981', fillLeverage: '#cbd5e1' },
  { scenario: 'Medium Win-Set', agreementLikelihood: 50, bargainingLeverage: 50, fillLikelihood: '#3b82f6', fillLeverage: '#94a3b8' },
  { scenario: 'Small Win-Set', agreementLikelihood: 20, bargainingLeverage: 85, fillLikelihood: '#ef4444', fillLeverage: '#475569' }
];

const audienceCostData = [
  { escalation: 'Initial Dispute', democraticCost: 10, autocraticCost: 5 },
  { escalation: 'Public Threat', democraticCost: 35, autocraticCost: 10 },
  { escalation: 'Mobilization', democraticCost: 65, autocraticCost: 20 },
  { escalation: 'Backing Down', democraticCost: 95, autocraticCost: 30 },
];

const domesticStructureData = [
  { country: 'France', centralization: 5.0, type: 'State-Dominated', color: '#ef4444' },
  { country: 'Japan', centralization: 3.5, type: 'Quasi-Corporatist', color: '#f59e0b' },
  { country: 'W. Germany', centralization: 3.0, type: 'Democratic Corporatist', color: '#3b82f6' },
  { country: 'United States', centralization: 1.0, type: 'Society-Dominated', color: '#10b981' },
];

export const Week13Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <Globe className="w-5 h-5 text-uwm-gold" /> Domestic Politics & Foreign Policy
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ArrowRightLeft className="text-uwm-gold" /> Putnam's Two-Level Games: Win-Set Trade-Offs
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            In Robert Putnam's framework, a leader's "Win-Set" is the range of international agreements that would be successfully ratified domestically. A <strong>larger win-set</strong> makes reaching an international agreement easier, but reduces the negotiator's bargaining leverage. Conversely, a <strong>smaller win-set</strong> strengthens the negotiator's hand ("my hands are tied"), but risks failure of the negotiations.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The Y-axis represents an <em>illustrative theoretical score (0-100)</em>. It shows the inverse relationship between how likely an agreement is to be reached (green/blue bars) versus how much leverage a leader has to extract concessions from foreign rivals (dark bars) depending on the size of their domestic win-set.
            </p>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={winSetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="scenario" />
                <YAxis domain={[0, 100]} label={{ value: 'Percentage / Index Score', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="agreementLikelihood" name="Likelihood of Agreement" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="bargainingLeverage" name="Bargaining Leverage" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldAlert className="text-uwm-gold" /> Audience Costs: Democracies vs. Autocracies
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            According to scholars like Fearon and Bueno de Mesquita & Smith, a critical difference in foreign policy behavior stems from the political costs leaders face if they escalate a crisis and then back down. Democracies generate much higher <strong>audience costs</strong> because leaders are accountable to voters and political opposition, making democratic threats highly credible in international diplomacy.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The Y-axis is a <em>theoretical index (0-100)</em> of the political penalty a leader pays domestically (e.g., losing approval or elections) if they back out at various stages of an international crisis. The steeper blue line shows that democratic leaders are punished much more severely for making empty threats compared to autocrats.
            </p>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={audienceCostData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="escalation" />
                <YAxis domain={[0, 100]} label={{ value: 'Political Penalty / Audience Cost', angle: -90, position: 'insideLeft' }} />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="democraticCost" name="Democracies" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="autocraticCost" name="Autocracies" stroke="#ef4444" strokeWidth={4} strokeDasharray="5 5" dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="text-uwm-gold" /> Domestic Structure and Foreign Policy (Risse-Kappen)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Thomas Risse-Kappen compares the relative power of the state vs. society in shaping foreign policy. Highly centralized states (like France) are <strong>state-dominated</strong>, isolating foreign policy from public opinion. Highly decentralized states (like the U.S.) are <strong>society-dominated</strong>, making them highly responsive to public opinion and interest groups.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Understanding the Chart:</strong> The X-axis represents a 1 to 5 scale where 1 means very weak central institutions (power spread out to society/legislatures) and 5 means very strong central institutions (power concentrated in the executive). The labels on the tooltip show the specific "Policy Network Type" Risse-Kappen assigns to each system.
            </p>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={domesticStructureData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} label={{ value: 'State Centralization (Low to High)', position: 'insideBottom', offset: -10 }} />
                <YAxis dataKey="country" type="category" width={100} />
                <RechartsTooltip formatter={(value: number, name: string, props: any) => [props.payload.type, 'Policy Network Type']} />
                <Bar dataKey="centralization" radius={[0, 4, 4, 0]}>
                  {domesticStructureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
