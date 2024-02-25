import { Navigation } from "./navigation";
import { updateUrl } from "./util";

const Listeners = () => {
  document.body.addEventListener("click", (event) => {
    event.preventDefault();
    const e = event.target.classList;
    if (e.contains("main--home-container--button")) {
      updateUrl("news");
      Navigation();
    }
    if (e.contains("blogs-button-container")) {
      updateUrl("news-item");
      Navigation();
    }
    if (e.contains("nav--container-profile-link--a")) {
      updateUrl("about-me");
      Navigation();
    }
    if (e.contains("nav--container-logo--img")) {
      updateUrl("home");
      Navigation();
    }
  });
};

export default Listeners;
