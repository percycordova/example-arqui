// src/components/ui/TabFolder.tsx
import { useState, ReactNode } from 'react';

interface TabFolderProps {
  tabs: string[];          
  children: ReactNode[];   
  className?: string;      
}

export const TabFolder = ({ tabs, children, className = '' }: TabFolderProps) => {
  const [activeTab, setActiveTab] = useState(0);

  if (tabs.length !== children.length) {
    console.warn('El número de pestañas no coincide con el número de contenidos.');
  }

  return (
    <div className={`p-6 min-h-screen ${className}`}>
      <div className="flex gap-1 border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors duration-200
              ${
                activeTab === index
                  ? 'bg-white border border-b-0 border-gray-300 text-blue-600 shadow'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-50'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded border border-gray-300">
        {children[activeTab]}
      </div>
    </div>
  );
};
