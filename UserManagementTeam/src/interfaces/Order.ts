export interface OrderItem {
  price: number;
  quantity: number;
  item_name: string;
}

export interface Order {
  id: number;
  order_date: string;
  status: string;
  total_amount: number;
  order_items: OrderItem[]; 
}