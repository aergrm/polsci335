import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, LabelList } from 'recharts';
import { Map, Landmark, Layers, Building } from 'lucide-react';

const federalismData = [
  { country: 'USA', score: 5.0, type: 'Federal & Decentralized', fill: '#3b82f6' },
  { country: 'Germany', score: 5.0, type: 'Federal & Decentralized', fill: '#3b82f6' },
  { country: 'Switzerland', score: 5.0, type: 'Federal & Decentralized', fill: '#3b82f6' },
  { country: 'Canada', score: 5.0, type: 'Federal & Decentralized', fill: '#3b82f6' },
  { country: 'Australia', score: 5.0, type: 'Federal & Decentralized', fill: '#3b82f6' },
  { country: 'India', score: 4.0, type: 'Federal & Centralized', fill: '#8b5cf6' },
  { country: 'Austria', score: 4.0, type: 'Federal & Centralized', fill: '#8b5cf6' },
  { country: 'Spain', score: 3.0, type: 'Semi-Federal', fill: '#a855f7' },
  { country: 'Netherlands', score: 3.0, type: 'Semi-Federal', fill: '#a855f7' },
  { country: 'Japan', score: 2.0, type: 'Unitary & Decentralized', fill: '#f59e0b' },
  { country: 'Sweden', score: 2.0, type: 'Unitary & Decentralized', fill: '#f59e0b' },
  { country: 'UK', score: 1.0, type: 'Unitary & Centralized', fill: '#ef4444' },
  { country: 'France', score: 1.0, type: 'Unitary & Centralized', fill: '#ef4444' },
  { country: 'New Zealand', score: 1.0, type: 'Unitary & Centralized', fill: '#ef4444' },
];

const cbiData = [
  { country: 'Germany', score: 0.69, type: 'High Independence', fill: '#10b981' },
  { country: 'Switzerland', score: 0.64, type: 'High Independence', fill: '#10b981' },
  { country: 'USA', score: 0.48, type: 'High Independence', fill: '#10b981' },
  { country: 'Canada', score: 0.45, type: 'Medium Independence', fill: '#f59e0b' },
  { country: 'Netherlands', score: 0.42, type: 'Medium Independence', fill: '#f59e0b' },
  { country: 'Australia', score: 0.36, type: 'Medium Independence', fill: '#f59e0b' },
  { country: 'UK', score: 0.27, type: 'Low Independence', fill: '#ef4444' },
  { country: 'France', score: 0.24, type: 'Low Independence', fill: '#ef4444' },
  { country: 'New Zealand', score: 0.24, type: 'Low Independence', fill: '#ef4444' },
  { country: 'Japan', score: 0.18, type: 'Low Independence', fill: '#ef4444' },
];

const fedCbiScatter = [
  { name: 'USA', fed: 5.0, cbi: 0.48 },
  { name: 'GER', fed: 5.0, cbi: 0.69 },
  { name: 'SWI', fed: 5.0, cbi: 0.64 },
  { name: 'CAN', fed: 5.0, cbi: 0.45 },
  { name: 'AUL', fed: 5.0, cbi: 0.36 },
  { name: 'IND', fed: 4.0, cbi: 0.30 },
  { name: 'NET', fed: 3.0, cbi: 0.42 },
  { name: 'JPN', fed: 2.0, cbi: 0.18 },
  { name: 'UK, FRA, NZ', fed: 1.0, cbi: 0.25 },
];

export const Week12Visuals: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="bg-uwm-black text-white p-4 rounded-xl shadow-sm">
        <h2 className="text-xl font-serif font-bold flex items-center gap-2">
          <Map className="w-5 h-5 text-uwm-gold" /> Lijphart: Federalism & Central Banks
        </h2>
      </div>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building className="text-uwm-gold" /> Index of Federalism and Decentralization
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Lijphart uses a 5-point scale to measure the degree of federalism and decentralization. A score of 5.0 represents federal and decentralized systems, while 1.0 represents unitary and centralized systems.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={federalismData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
                <YAxis dataKey="country" type="category" width={100} interval={0} />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [props.payload.type, 'Classification']}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {federalismData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div> Fed & Decent. (5)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div> Fed & Cent. (4)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#a855f7]"></div> Semi-Fed (3)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div> Unitary & Decent. (2)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ef4444]"></div> Unitary & Cent. (1)</div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Landmark className="text-uwm-gold" /> Central Bank Independence (CBI)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Central Bank Independence measures the degree to which the central bank can set monetary policy without interference from the executive or legislature. Consensus democracies typically feature highly independent central banks.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cbiData} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 1]} ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]} />
                <YAxis dataKey="country" type="category" width={100} interval={0} />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [props.payload.type, 'Classification']}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {cbiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#10b981]"></div> High Independence</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div> Medium Independence</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ef4444]"></div> Low Independence</div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="text-uwm-gold" /> Federalism vs. Central Bank Independence
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            This scatter plot shows the relationship between federalism and central bank independence. Lijphart argues that these two variables are strongly correlated: federal systems tend to have more independent central banks as part of their broader division of power.
          </p>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="fed" name="Federalism" domain={[0, 5.5]} ticks={[1, 2, 3, 4, 5]} label={{ value: 'Index of Federalism', position: 'insideBottom', offset: -20 }} />
                <YAxis type="number" dataKey="cbi" name="CBI" domain={[0, 0.8]} ticks={[0, 0.2, 0.4, 0.6, 0.8]} label={{ value: 'Central Bank Independence', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={fedCbiScatter} fill="#8b5cf6">
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
