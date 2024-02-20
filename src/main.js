import ButtonDarkMode from "./templates/DarkMode/ButtonDarkMode.js";
import Header from "./templates/Header/Header.js";
import Main from "./templates/Main/Main.js";
import Listeners from "./utils/listeners.js";
export const $root = document.querySelector(".root");

$root.appendChild(Header);
$root.appendChild(Main);
$root.appendChild(ButtonDarkMode);

// Move the invocation of Listeners after its declaration
Listeners();
