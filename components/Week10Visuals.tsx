import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, LabelList } from 'recharts';
import { Building2, BookOpen, BarChart3, Layers } from 'lucide-react';

const bicameralismData = [
  { country: 'USA', score: 4.0, type: 'Strong Bicameralism', fill: '#f59e0b' },
  { country: 'Germany', score: 4.0, type: 'Strong Bicameralism', fill: '#f59e0b' },
  { country: 'Switzerland', score: 4.0, type: 'Strong Bicameralism', fill: '#f59e0b' },
  { country: 'Australia', score: 4.0, type: 'Strong Bicameralism', fill: '#f59e0b' },
  { country: 'Italy', score: 3.0, type: 'Medium Bicameralism', fill: '#3b82f6' },
  { country: 'Japan', score: 3.0, type: 'Medium Bicameralism', fill: '#3b82f6' },
  { country: 'France', score: 3.0, type: 'Medium Bicameralism', fill: '#3b82f6' },
  { country: 'UK', score: 2.0, type: 'Weak Bicameralism', fill: '#8b5cf6' },
  { country: 'Canada', score: 2.0, type: 'Weak Bicameralism', fill: '#8b5cf6' },
  { country: 'New Zealand', score: 1.0, type: 'Unicameral', fill: '#10b981' },
  { country: 'Denmark', score: 1.0, type: 'Unicameral', fill: '#10b981' },
  { country: 'Sweden', score: 1.0, type: 'Unicameral', fill: '#10b981' },
];

const malapportionmentData = [
  { country: 'Argentina', gini: 0.61 },
  { country: 'United States', gini: 0.49 },
  { country: 'Switzerland', gini: 0.46 },
  { country: 'Australia', gini: 0.36 },
  { country: 'Canada', gini: 0.34 },
  { country: 'Germany', gini: 0.32 },
  { country: 'Spain', gini: 0.31 },
  { country: 'India', gini: 0.10 },
  { country: 'Austria', gini: 0.05 },
  { country: 'Belgium', gini: 0.01 },
  { country: 'Netherlands', gini: 0.00 },
];

const federalismBicameralismData = [
  { name: 'ARG', federalism: 4.5, bicameralism: 4.0 },
  { name: 'AUL', federalism: 5.0, bicameralism: 4.0 },
  { name: 'AUT', federalism: 4.5, bicameralism: 2.0 },
  { name: 'BEL', federalism: 4.2, bicameralism: 2.5 },
  { name: 'CAN', federalism: 5.0, bicameralism: 3.0 },
  { name: 'GER', federalism: 5.0, bicameralism: 4.0 },
  { name: 'IND', federalism: 4.5, bicameralism: 3.0 },
  { name: 'SPA', federalism: 3.0, bicameralism: 3.0 },
  { name: 'SWI', federalism: 5.0, bicameralism: 4.0 },
  { name: 'US', federalism: 5.0, bicameralism: 4.0 },
  { name: 'NZ', federalism: 1.0, bicameralism: 1.0 },
  { name: 'UK', federalism: 1.4, bicameralism: 2.5 },
  { name: 'FRA', federalism: 1.5, bicameralism: 3.0 },
  { name: 'ITA', federalism: 1.5, bicameralism: 3.0 },
  { name: 'DEN', federalism: 2.0, bicameralism: 1.0 },
  { name: 'SWE', federalism: 2.0, bicameralism: 1.0 },
  { name: 'NOR', federalism: 2.0, bicameralism: 1.5 },
  { name: 'NET', federalism: 3.0, bicameralism: 3.0 },
  { name: 'ISR', federalism: 3.0, bicameralism: 1.0 },
  { name: 'JPN', federalism: 2.0, bicameralism: 3.0 },
  { name: 'URU', federalism: 1.0, bicameralism: 3.0 },
];

export const Week10Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-uwm-gold" /> Lijphart: Legislative Institutions
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="text-uwm-gold" /> Index of Bicameralism
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Lijphart categorizes legislatures into four types based on the strength of their second chambers. 
            Strong bicameralism (4.0) features symmetrical and incongruent chambers, while unicameralism (1.0) has only one chamber.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bicameralismData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 4]} ticks={[1, 2, 3, 4]} />
                <YAxis dataKey="country" type="category" width={100} />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [props.payload.type, 'Classification']}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {bicameralismData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div> Strong (4.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div> Medium (3.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div> Weak (2.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#10b981]"></div> Unicameral (1.0)</div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="text-uwm-gold" /> Inequality of Representation (Malapportionment)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This chart shows the Gini Index of Inequality for federal and semifederal chambers (Table 11.1). Higher values indicate greater malapportionment, where smaller component units (like states or provinces) are significantly overrepresented compared to their population.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={malapportionmentData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="country" angle={-45} textAnchor="end" height={60} />
                <YAxis domain={[0, 0.7]} label={{ value: 'Gini Index of Inequality', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="gini" fill="#ef4444" radius={[4, 4, 0, 0]} name="Gini Index" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="text-uwm-gold" /> Federalism and Cameral Structure
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            There is a strong empirical relationship between the degree of federalism/decentralization and the strength of bicameralism (Figure 11.1). Federal systems almost universally employ strong bicameral legislatures to ensure regional representation, whereas unitary systems lean toward weak bicameralism or unicameralism.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="federalism" name="Federalism & Decentralization" domain={[0, 5.5]} label={{ value: 'Degree of Federalism and Decentralization', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="bicameralism" name="Index of Bicameralism" domain={[0, 4.5]} label={{ value: 'Index of Bicameralism', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={federalismBicameralismData} fill="#3b82f6">
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
