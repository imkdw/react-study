import CartContext from "./cart-context";

interface ICartContext {
  items: any[];
  // totalAmount: number;
  // addItem(item: any): void;
  // removeItem(id: string): void;
}

const CartProvider = (props: any) => {
  const addItemToCartHandler = (item: any): void => {};
  const removeItemFromCartHandler = (id: string): void => {};

  const cartContext: ICartContext = {
    items: [],
    // totalAmount: 0,
    // additem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
