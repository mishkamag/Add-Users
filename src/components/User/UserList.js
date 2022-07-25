import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li> //როცა ტექსტიც გინდა უნდა გამოიყენო ()-ში
        ))}
      </ul>
    </Card>
  );
};

//ამით ინფუთებიდან მოწოდებულ დატას სახელს და ასაკს, რომელიც ერეიშია, თითოეულ ერეი ელემნტზე უქმნი <li> ტაგს

export default UserList;
