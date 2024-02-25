import ButtonDarkMode from "./templates/DarkMode/ButtonDarkMode.js";
import Header from "./templates/Header/Header.js";
import Main from "./templates/Main/Main.js";
import Listeners from "./utils/listeners.js";
import { Navigation } from "./utils/navigation.js";
import "../css/main.css";
export const $root = document.querySelector(".root");

$root.appendChild(Header);
$root.appendChild(Main);
$root.appendChild(ButtonDarkMode);

Navigation();
Listeners();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("../sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
