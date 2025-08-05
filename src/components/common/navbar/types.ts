export interface NavSubItem {
  label: string;
  path: string;
}

export interface NavItem {
  title: string;
  subItems?: NavSubItem[];
}
