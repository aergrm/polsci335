import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, LabelList } from 'recharts';
import { BookOpen, Scale, FileText, Layers } from 'lucide-react';

const rigidityData = [
  { country: 'USA', score: 4.0, type: 'High Rigidity', fill: '#ef4444' },
  { country: 'Australia', score: 4.0, type: 'High Rigidity', fill: '#ef4444' },
  { country: 'Canada', score: 4.0, type: 'High Rigidity', fill: '#ef4444' },
  { country: 'Germany', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'Japan', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'Switzerland', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'France', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'Italy', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'India', score: 3.0, type: 'Medium Rigidity', fill: '#f59e0b' },
  { country: 'UK', score: 1.0, type: 'Flexible', fill: '#10b981' },
  { country: 'New Zealand', score: 1.0, type: 'Flexible', fill: '#10b981' },
  { country: 'Israel', score: 1.0, type: 'Flexible', fill: '#10b981' },
];

const judicialReviewData = [
  { country: 'USA', score: 4.0, type: 'Strong Review', fill: '#3b82f6' },
  { country: 'Germany', score: 4.0, type: 'Strong Review', fill: '#3b82f6' },
  { country: 'Canada', score: 4.0, type: 'Strong Review', fill: '#3b82f6' },
  { country: 'Australia', score: 4.0, type: 'Strong Review', fill: '#3b82f6' },
  { country: 'India', score: 4.0, type: 'Strong Review', fill: '#3b82f6' },
  { country: 'Italy', score: 3.0, type: 'Medium Review', fill: '#8b5cf6' },
  { country: 'Japan', score: 2.0, type: 'Weak Review', fill: '#a855f7' },
  { country: 'France', score: 2.0, type: 'Weak Review', fill: '#a855f7' },
  { country: 'Switzerland', score: 2.0, type: 'Weak Review', fill: '#a855f7' },
  { country: 'UK', score: 1.0, type: 'No Review', fill: '#94a3b8' },
  { country: 'New Zealand', score: 1.0, type: 'No Review', fill: '#94a3b8' },
  { country: 'Netherlands', score: 1.0, type: 'No Review', fill: '#94a3b8' },
];

const rigidityReviewScatter = [
  { name: 'USA, AUL, CAN', rigidity: 4.0, review: 4.0 },
  { name: 'GER, IND', rigidity: 3.0, review: 4.0 },
  { name: 'ITA', rigidity: 3.0, review: 3.0 },
  { name: 'JPN, FRA, SWI', rigidity: 3.0, review: 2.0 },
  { name: 'UK, NZ, ISR', rigidity: 1.0, review: 1.0 },
  { name: 'NET', rigidity: 3.0, review: 1.0 },
];

export const Week11Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-uwm-gold" /> Lijphart: Constitutions and Courts
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="text-uwm-gold" /> Index of Constitutional Rigidity
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Lijphart measures constitutional rigidity on a 4-point scale. A score of 4.0 indicates a highly rigid constitution requiring supermajorities greater than 2/3 for amendment. A score of 1.0 indicates a flexible, unwritten constitution that can be changed by ordinary legislative majorities.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rigidityData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 4]} ticks={[1, 2, 3, 4]} />
                <YAxis dataKey="country" type="category" width={100} interval={0} />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [props.payload.type, 'Classification']}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {rigidityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ef4444]"></div> High Rigidity (4.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div> Medium Rigidity (2.0 - 3.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#10b981]"></div> Flexible (1.0)</div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Scale className="text-uwm-gold" /> Index of Judicial Review
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Judicial review measures the power of courts to test the constitutionality of laws. Strong review (4.0) means courts actively strike down legislation. Weak review (2.0) means courts have the power but rarely use it. No review (1.0) means parliament is supreme.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={judicialReviewData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 4]} ticks={[1, 2, 3, 4]} />
                <YAxis dataKey="country" type="category" width={100} interval={0} />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [props.payload.type, 'Classification']}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {judicialReviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div> Strong (4.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div> Medium (3.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#a855f7]"></div> Weak (2.0)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#94a3b8]"></div> None (1.0)</div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="text-uwm-gold" /> Rigidity vs. Judicial Review
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This scatter plot illustrates the relationship between constitutional rigidity and the strength of judicial review. Consensus democracies tend to have both rigid constitutions and strong judicial review to protect minorities, while majoritarian democracies tend to have flexible constitutions and parliamentary sovereignty (no judicial review).
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="rigidity" name="Constitutional Rigidity" domain={[0, 4.5]} ticks={[1, 2, 3, 4]} label={{ value: 'Index of Constitutional Rigidity', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="review" name="Judicial Review" domain={[0, 4.5]} ticks={[1, 2, 3, 4]} label={{ value: 'Index of Judicial Review', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={rigidityReviewScatter} fill="#059669">
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
