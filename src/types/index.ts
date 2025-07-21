
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  ratings: number;
  image: string;
  veg: boolean;
  bestSeller: boolean;
  quantity: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  image?: string;
  distance?: string;
  cost_for_two?: number;
  cuisines?: string;
  rating: number;
  ratings: string;
  time: string;
  location: string;
  menu: MenuCategory[];
}