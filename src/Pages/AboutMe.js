import h from "hyperscript";
import imgAboutMe from "../../assets/imgs/logo300.webp";
import imgDemo from "../../assets/imgs/1.webp";

export const AboutMe = h("main", [
  h("section.about-me-container", [
    h("div.about-me.grid-container", [
      h("h3", "Sobre Mi"),
      h("figure.about-me-img-container", [h("img", { src: imgAboutMe })]),
      h("div.about-me-info-container", [
        h("h2", "Hello!"),
        h(
          "p",
          "Soy Cristian, nacido en Colombia, desde una edad temprana me ha llamado la atención la programación. Tengo dominio de español, e inglés nivel (A2). Mi curiosidad y entusiasmo por seguir creciendo profesionalmente en este apasionante mundo del desarrollo web no conocen límites. Estoy emocionado por seguir adquiriendo nuevas habilidades, enfrentar desafíos y colaborar en proyectos innovadores en este campo en constante evolución."
        ),
      ]),
    ]),
  ]),
  h("section.professional-skills", [
    h("div.grid-container", [
      h("h3", "Habilidades Professionales"),
      h("div.skills-container", [
        h("div.skill-item", [
          h("p", "Web Development", h("br"), "(HTML CSS y JS)"),
        ]),
      ]),
      h("div.skills-container", [
        h("div.skill-item", [
          h("p", "Diseño Responsivo", h("br"), "Frameworks Material-UI"),
        ]),
      ]),
      h("div.skills-container", [
        h("div.skill-item", [
          h("p", "Control de versiones", h("br"), "Git, colaboracion de equipos"),
        ]),
      ]),
      h("div.skills-container", [
        h("div.skill-item", [h("p", "Metodologías ágiles", h("br"), "Scrum")]),
      ]),
      h("div.skills-container", [
        h("div.skill-item", [
          h("p", "Aprendizaje continuo de", h("br"), "habilidades y conocimientos"),
        ]),
      ]),
      h("div.skills-container", [
        h("div.skill-item", [
          h("p", "Adaptabilidad", h("br"), "nuevas tecnologías, marcos y lenguajes"),
        ]),
      ]),
    ]),
  ]),
  h("section.projects-container", [
    h("div.grid-container", [
      h("h3", "Mis proyectos"),
      h("section.projects-container--slider", [
        h("article.projects-container--card", [
          h("div.project-info-container", [
            h("h4", "Gestor de cuentas"),
            h("img", { src: "https://i.imgur.com/T8igq5M.png" }),
            h(
              "p",
              "Esta es una PWA diseñada para ayudar al usuario a gestionar los pedidos en su negocio y llevar un registro.", h("br"),h("br"), "#JS #PWA #VITE #JSPDF"
            ),
            h("button.primary-button.projects-container-button", "Leer mas"),
            /* href="https://rcristianh.github.io/AccountAssistant/ */
          ]),
        ]),
        h("article.projects-container--card", [
          h("div.project-info-container", [
            h("h4", "API Rest MovieDB"),
            h("img", { src: "https://i.imgur.com/ayzPmau.png" }),
            h(
              "p",
              "Este es un proyecto de demostracion del uso de API`s con la api de TheMovieDB", h("br"),h("br"), "#AXIOS #Languajes #DOM"
            ),
            h("button.primary-button.projects-container-button", "Leer mas"),
          ]),
        ]),
        h("article.projects-container--card", [
          h("div.project-info-container", [
            h("h4", "Titulo"),
            h("img", { src: imgDemo }),
            h(
              "p",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            ),
            h("button.primary-button.projects-container-button", "Leer mas"),
          ]),
        ]),
      ]),
    ]),
  ]),
]);

/* <br>
                I am Cristian, born in Colombia. From an early age, programming has caught my attention. I am
                fluent in Spanish and have an English level of A2. My curiosity and enthusiasm to continue
                growing professionally in this exciting world of web development have no limits. I am excited to
                acquire new skills, face challenges, and collaborate on innovative projects in this constantly
                evolving field. --> */
