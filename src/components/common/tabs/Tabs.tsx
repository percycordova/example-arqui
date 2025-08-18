import { useState } from 'react';

export type Tab = {
  index: number;
  label: string;
  component: React.ReactNode;
  icon?: React.ReactNode;
};

interface IProps {
  initialSelectedTab?: number;
  tabs: Tab[];
}

export const Tabs = ({ initialSelectedTab = 1, tabs = [] }: IProps) => {
  const [activeTab, setActiveTab] = useState(initialSelectedTab);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex gap-4 font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map(item => (
            <li
              className={`
              cursor-pointer flex items-center gap-2 p-2  justify-center 
              ${
                item.index === activeTab
                  ? ' text-blue-600 border-blue-600 border-b-2'
                  : 'border-transparent'
              }
            `}
              key={item.index}
              onClick={() => handleActiveTab(item.index)}
            >
              {item?.icon ? item.icon : null}
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">{tabs.find(item => item.index === activeTab)?.component}</div>
    </>
  );
};
