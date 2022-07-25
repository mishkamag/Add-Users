import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); //აღნიშნულ ვრაპერ cards აქვს 2 ცსს, ერთი თავისი და მეორე პროპსით გადაცემული
};

export default Card;
