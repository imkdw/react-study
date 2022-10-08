import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

interface IHeaderProps {
  onShowCart(): void;
}

const Header = (props: IHeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table Full of delicious Food!" />
      </div>
    </>
  );
};

export default Header;
