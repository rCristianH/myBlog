import h from "hyperscript";
import img from "../../../assets/imgs/logo200.webp";

const Header = h("header.header", [
  h("section.header--icons-container", [
    h("div.header--icons-subcontainer", [
      h("a", { href: "https://www.linkedin.com/in/rcristianh/" }, [
        h("span.header--icons-subcontainer--icon.flaticon-010-linkedin"),
      ]),
      h("a", { href: "https://twitter.com/rCristianHR" }, [
        h("span.header--icons-subcontainer--icon.flaticon-002-twitter"),
      ]),
      h("a", [h("span.header--icons-subcontainer--icon.flaticon-011-instagram")]),
      h("a", [h("span.header--icons-subcontainer--icon.flaticon-001-facebook")]),
      h("a", [h("span.header--icons-subcontainer--icon.flaticon-008-youtube")]),
    ]),
  ]),
  h("nav.nav", [
    h("section.nav--container-logo", [
      h("a.nav-container--logo--img", [h("img.nav--container-logo--img", { src: img, alt: "Ir al inicio" })]),
    ]),
    h("section.nav--container-profile-link", [
      h("a.nav--container-profile-link--a", "Sobre mí"),
    ]),
  ]),
]);

export default Header;
