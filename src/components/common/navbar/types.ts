// types.ts
export type NavSubItem =
  | { label: string; path: string; subItems?: never }          // hoja: tiene path
  | { label: string; subItems: NavSubItem[]; path?: never };   // rama: tiene hijos

export interface NavItem {
  title: string;
  subItems?: NavSubItem[];
}
