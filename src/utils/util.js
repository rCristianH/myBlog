import { lost } from "../templates/404/Lost";
import { Contact } from "../templates/Contact/Contact";
import { Footer } from "../templates/Footer/Footer";

export const updateUrl = (url) => {
  location.href = `${location.origin}/${url}`;
};
export const onBodyScroll = (state) => {
  const body = document.body;
  if (state == true) {
    body.classList.remove("no-scroll");
  } else {
    body.classList.add("no-scroll");
  }
};
export const onBodyReplace = (use, element, array = []) => {
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
