import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS: any = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailiableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal: IMeal) => {
            const { id, name, description, price } = meal;
            return (
              <MealItem key={id} id={id} name={name} description={description} price={price} />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailiableMeals;
