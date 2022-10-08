import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

interface IMealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = ({ id, name, description, price }: IMealItemProps) => {
  price = +price.toFixed(2);

  return (
    <li className={classes.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
