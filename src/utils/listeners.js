import { AboutMe } from "../Pages/AboutMe";
import { NewsPage } from "../Pages/News";
import { NewsItem } from "../Pages/NewsItem";
import { Contact } from "../templates/Contact/Contact";
import { Footer } from "../templates/Footer/Footer";
import Main from "../templates/Main/Main";

const Listeners = () => {
  document.body.addEventListener("click", (event) => {
    const e = event.target.classList;
    if (e.contains("main--home-container--button")) {
      onBodyScroll(true);
      onBodyReplace("replace", NewsPage);
    }
    if (e.contains("blogs-button-container")) {
      onBodyScroll(true);
      onBodyReplace("replace", NewsItem);
    }
    if (e.contains("nav--container-profile-link--a")) {
      onBodyScroll(true);
      onBodyReplace("append", AboutMe);
    }
    if (e.contains("nav--container-logo--img")) {
      onBodyScroll(false);
      onBodyReplace("remove", Main, [4,3]);
    }
  });
  window.addEventListener('popstate', (event) => {
    // Aquí puedes manejar el evento de retroceso
    event.preventDefault();
    alert('Se ha retrocedido en el historial del navegador');
  });
};

const onBodyScroll = (state) => {
  const body = document.body;
  if (state == true) {
    body.classList.remove("no-scroll");
  } else {
    body.classList.add("no-scroll");
  }
};
const onBodyReplace = (use, element, array=[]) => {
  if (use == "replace") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
  } else if (use == "append") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
    document.body.appendChild(Contact);
    document.body.appendChild(Footer);
  }else if (use == "remove") {
    const toReplace = document.body.children[1];
    document.body.replaceChild(element, toReplace);
    array.forEach((arg) => {
      const toReplace = document.body.children[arg];
      document.body.removeChild(toReplace)
    });
  }
};
export default Listeners;


/* 

Falta metodo para regresar a la pagina anterior




*/