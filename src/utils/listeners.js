import { AboutMe } from "../Pages/AboutMe";
import { NewsPage } from "../Pages/News";
import { NewsItem } from "../Pages/NewsItem";
import { lost } from "../templates/404/Lost";
import { Contact } from "../templates/Contact/Contact";
import { Footer } from "../templates/Footer/Footer";
import Main from "../templates/Main/Main";

const Listeners = () => {
  document.body.addEventListener("click", (event) => {
    const e = event.target.classList;
    if (e.contains("main--home-container--button")) {
      navigation("/news");
      onBodyScroll(true);
      onBodyReplace("replace", NewsPage);
    }
    if (e.contains("blogs-button-container")) {
      onBodyScroll(true);
      onBodyReplace("append", NewsItem);
      navigation("/news-item");
    }
    if (e.contains("nav--container-profile-link--a")) {
      onBodyScroll(true);
      onBodyReplace("append", AboutMe);
      navigation("/about-me");
    }
    if (e.contains("nav--container-logo--img")) {
      onBodyScroll(false);
      onBodyReplace("remove", Main, [4, 3]);
      navigation("/");
    }
  });
  window.addEventListener("popstate", (event) => {
    const url = window.location.href.split("/").pop();

    if (url == "news") {
      onBodyScroll(true);
      onBodyReplace("replace", NewsPage);
    } else if (url == "news-item") {
      onBodyScroll(true);
      onBodyReplace("append", NewsItem);
    } else if (url == "about-me") {
      onBodyScroll(true);
      onBodyReplace("append", AboutMe);
    } else if (url == "") {
      onBodyScroll(false);
      onBodyReplace("remove", Main, [4, 3]);
      window.history.pushState(null, null, window.location.href);
    } else {
      onBodyScroll(false);
      onBodyReplace("replace", lost);
      setTimeout(() => {
        onBodyReplace("remove", Main, [4, 3]);
        window.history.pushState(null, null, "/");
      }, 3000);
    }
  });
};
const navigation = (element) => {
  window.history.pushState(null, null, element);
};
const onBodyScroll = (state) => {
  const body = document.body;
  if (state == true) {
    body.classList.remove("no-scroll");
  } else {
    body.classList.add("no-scroll");
  }
};
const onBodyReplace = (use, element, array = []) => {
  if (use == "replace") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
  } else if (use == "append") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
    document.body.appendChild(Contact);
    document.body.appendChild(Footer);
  } else if (use == "remove") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
    try {
      array.forEach((arg) => {
        const toReplace = document.body.children[arg];
        document.body.removeChild(toReplace);
      });
    } catch {
      return;
    }
  }
};
export default Listeners;