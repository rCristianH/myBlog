import { AboutMe } from "../Pages/AboutMe";
import { NewsPage } from "../Pages/News";
import { NewsItem } from "../Pages/NewsItem";
import { lost } from "../templates/404/Lost";
import Main from "../templates/Main/Main";
import { onBodyReplace, onBodyScroll } from "./util";

//espera hasta que se carge la pagina para ejecutar un addEventListener
export const Navigation = () => {
  if (location.href.endsWith("/home")||location.href.endsWith("/")) {
    onBodyScroll(false);
    onBodyReplace("replace", Main, [4, 3]);
    window.history.pushState("null", "null", "/myBlog/home");
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
    console.log("404");
    /* onBodyReplace("replace", lost); */
    onBodyScroll(false);
    onBodyReplace("replace", Main, [4, 3]);
    /* setTimeout(() => {
      
    }, 1000); */
  }
};
