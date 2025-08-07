export interface IMainMenu {
  title: string;
  items: {
    label: string;
    url: string;
    highlighted?: boolean;
  }[];
}
