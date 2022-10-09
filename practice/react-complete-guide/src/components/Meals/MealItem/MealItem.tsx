import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

interface IMealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = ({ id, name, description, price }: IMealItemProps) => {
  const cartCtx = useContext(CartContext);
  price = +price.toFixed(2);

  const addToCartHandler = (amount: number) => {
    console.log("Add Cart", amount);
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
