// NavBar.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavItem, NavSubItem } from './types';

interface NavbarProps {
  items: NavItem[];
}

const isBranch = (n: NavSubItem): n is Extract<NavSubItem, { subItems: NavSubItem[] }> =>
  Array.isArray((n as any).subItems);

export const Navbar = ({ items }: NavbarProps) => {
  const navigate = useNavigate();
  const [openRoot, setOpenRoot] = useState<number | null>(null);

  const MenuLevel = ({ nodes, depth }: { nodes: NavSubItem[]; depth: number }) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null); // controla subniveles
    const pos = depth === 1 ? 'absolute right-0 top-full' : 'absolute left-full top-0';

    return (
      <ul className={`${pos} bg-white text-black border border-gray-300 shadow z-50 min-w-[14rem]`}>
        {nodes.map((node, i) => {
          const key = `${depth}-${i}-${node.label}`;

          if (isBranch(node)) {
            return (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => setOpenIdx(i)}
                onMouseLeave={() => setOpenIdx(v => (v === i ? null : v))}
              >
                <div className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 flex items-center justify-between cursor-default">
                  <span>{node.label}</span>
                  <span className="text-gray-500">▸</span>
                </div>

                {openIdx === i && <MenuLevel nodes={node.subItems} depth={depth + 1} />}
              </li>
            );
          }

          return (
            <li key={key}>
              <button
                type="button"
                className="w-full text-left px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                onClick={() => navigate(node.path)}
              >
                {node.label}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav>
      <ul className="flex">
        {items.map((root, idx) => (
          <li
            key={root.title}
            className="relative"
            onMouseEnter={() => setOpenRoot(idx)}
            onMouseLeave={() => setOpenRoot(v => (v === idx ? null : v))}
          >
            <button
              type="button"
              className="px-6 py-4 cursor-pointer hover:bg-red-800 focus:bg-red-800 outline-none text-white flex items-center gap-2"
            >
              {root.title}
              {root.subItems?.length ? <span>▾</span> : null}
            </button>

            {root.subItems?.length && openRoot === idx ? (
              <MenuLevel nodes={root.subItems} depth={1} />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};
