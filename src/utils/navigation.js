import { AboutMe } from "../Pages/AboutMe";
import { NewsPage } from "../Pages/News";
import { NewsItem } from "../Pages/NewsItem";
import { lost } from "../templates/404/Lost";
import Main from "../templates/Main/Main";
import { onBodyReplace, onBodyScroll } from "./util";

//espera hasta que se carge la pagina para ejecutar un addEventListener
export const Navigation = () => {
  if (location.href.endsWith("/")) {
    onBodyScroll(false);
    onBodyReplace("replace", Main, [4, 3]);
    window.history.pushState("null", "null", "/");
  } else if (location.href.endsWith("/news")) {
    onBodyScroll(true);
    onBodyReplace("replace", NewsPage);
  } else if (location.href.endsWith("/news-item")) {
    onBodyScroll(true);
    onBodyReplace("append", NewsItem);
  } else if (location.href.endsWith("/about-me")) {
    onBodyScroll(true);
    onBodyReplace("append", AboutMe);
  } else {
    onBodyReplace("replace", lost);
    setTimeout(() => {
      onBodyScroll(false);
      onBodyReplace("replace", Main, [4, 3]);
    }, 3000);
  }
};
