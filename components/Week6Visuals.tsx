import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { BarChart3, Users } from 'lucide-react';

const disproportionalityData = [
  { name: 'UK', disproportionality: 11.70, enpp: 2.16 },
  { name: 'NZ', disproportionality: 9.25, enpp: 2.28 },
  { name: 'US', disproportionality: 14.28, enpp: 2.39 },
  { name: 'FRA', disproportionality: 20.88, enpp: 3.26 },
  { name: 'GER', disproportionality: 2.67, enpp: 3.09 },
  { name: 'SWI', disproportionality: 2.55, enpp: 5.20 },
  { name: 'NET', disproportionality: 1.21, enpp: 4.87 },
  { name: 'BEL', disproportionality: 3.35, enpp: 4.72 },
  { name: 'ITA', disproportionality: 3.61, enpp: 4.84 },
  { name: 'JPN', disproportionality: 7.00, enpp: 3.62 },
  { name: 'IND', disproportionality: 9.60, enpp: 4.80 },
];

const pluralismData = [
  { name: 'UK', cabinet: 97.3, pluralism: 3.02 },
  { name: 'NZ', cabinet: 81.4, pluralism: 2.68 },
  { name: 'US', cabinet: 80.4, pluralism: 3.02 },
  { name: 'FRA', cabinet: 54.8, pluralism: 2.90 },
  { name: 'GER', cabinet: 37.8, pluralism: 0.88 },
  { name: 'SWI', cabinet: 4.0, pluralism: 0.88 },
  { name: 'NET', cabinet: 26.8, pluralism: 0.98 },
  { name: 'BEL', cabinet: 37.3, pluralism: 1.15 },
  { name: 'ITA', cabinet: 11.7, pluralism: 2.42 },
  { name: 'JPN', cabinet: 40.1, pluralism: 1.48 },
  { name: 'IND', cabinet: 30.5, pluralism: 2.15 },
];

export const Week6Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="text-uwm-gold" /> Electoral Disproportionality vs. Party System (Fig 8.2)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This scatter plot illustrates the relationship between electoral disproportionality and the effective number of parliamentary parties. Higher disproportionality (typical of plurality systems) tends to reduce the effective number of parties.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="disproportionality" name="Electoral Disproportionality" domain={[0, 25]} label={{ value: 'Electoral Disproportionality', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="enpp" name="Effective Number of Parties" domain={[1, 6]} label={{ value: 'Effective Number of Parliamentary Parties', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={disproportionalityData} fill="#3b82f6">
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
            <Users className="text-uwm-gold" /> Cabinet Type vs. Interest Group Pluralism (Fig 9.1)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This chart shows the relationship between the type of cabinet (percent minimal winning, one-party cabinets) and interest group pluralism. Majoritarian democracies (high percentage of one-party cabinets) tend to have more pluralist interest group systems, while consensus democracies lean toward corporatism (lower pluralism scores).
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="cabinet" name="Percent Minimal Winning, One-Party Cabinets" domain={[0, 100]} label={{ value: 'Percent Minimal Winning, One-Party Cabinets', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="pluralism" name="Interest Group Pluralism" domain={[0, 4]} label={{ value: 'Interest Group Pluralism', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={pluralismData} fill="#8b5cf6">
                  <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
