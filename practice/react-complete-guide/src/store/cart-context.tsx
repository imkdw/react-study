import React from "react";

interface IDefaultValue {
  items: any[];
  totalAmount: number;
  addItem(item: any): void;
  removeItem(id: string): void;
}

const defaultValue: IDefaultValue = {
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
};
const CartContext = React.createContext(defaultValue);

export default CartContext;
