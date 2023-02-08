// Este archivo solamente puede tener definiciones

export interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Links {
  label: string;
  route: string;
}

export interface ID {
  id: number;
}

export interface Props {
  items: Items[];
}
