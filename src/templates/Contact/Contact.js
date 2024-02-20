import h from "hyperscript";
import newsletter from "../../../assets/img/013-newsletter.png";
import conctactEmail from "../../../assets/img/006-like.png";

export const Contact = h("section.contact-main-container", [
  h("div.contact-left.contact", [
    h("img", { src: newsletter }),
    h("div", [
      h("a", { href: "mailto:ccrhdbj@outlook.com" }, "Contact Me"),
      h("p", "ccrhdbj@outlook.com"),
    ]),
  ]),
  h("div.contact.contact-right", [
    h("img", { src: conctactEmail }),
    h("div", [
      h(
        "a.twitter-dm-button",
        {
          href: "https://twitter.com/messages/compose?recipient_id=1117964324818038784",
          "data-screen-name": "@rCristianHR",
        },
        "Write me"
      ),
      h("p", "Twitter 👆"),
    ]),
  ]),
]);
