export interface MenuItemProps {
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
