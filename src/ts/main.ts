import "../index.html";
import "../404.html";
import "../scss/main.scss";
import User from "./modules/User";
import Card from "./modules/Card";

console.log("Hello from console");

console.log(process.env.SOME_STRING);

const user = new User("User");

console.log(user.getInfo());

const cardMainContent = new Card("card", ".main__content");

cardMainContent.parseCard("Card - 1");
cardMainContent.parseCard("Card - 2");
cardMainContent.parseCard("Card - 3");
cardMainContent.parseCard("Card - 4");
