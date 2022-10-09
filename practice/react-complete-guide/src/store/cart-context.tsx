import React from "react";

const defaultValue: any = {
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
};
const CartContext = React.createContext(defaultValue);

export default CartContext;
