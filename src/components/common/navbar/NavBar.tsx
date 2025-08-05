import { NavItem } from './types';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  items: NavItem[];
}

export const Navbar = ({ items }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="">
      <ul className="flex">
        {items.map((item, index) => (
          <li key={index} className="relative px-6 py-4 cursor-pointer hover:bg-red-800 group">
            {item.title}

            {item.subItems && (
              <ul className="absolute right-0 top-full hidden group-hover:block  bg-white text-black border border-gray-300 z-50">
                {item.subItems.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    onClick={() => navigate(sub.path)}
                  >
                    {sub.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
