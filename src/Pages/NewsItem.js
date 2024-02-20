import h from "hyperscript";
import img from "../../assets/imgs/720.webp";

export const NewsItem = h("main", [
  h("section.grid-container.blogpost-img-container", [h("img", { src: img })]),
  h("section.blogpost-main-container", [
    h("div.grid-container", [
      h("h3", "Noticias"),
      h("article", [
        h("h1", "Titulo del blogpost"),
        h(
          "p",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque odit repellat quia in,tempora nihil at culpa nobis amet expedita quis eaque autem debitis illo numquam obcaecati  praesentium veritatis! Modi debitis dolores, deleniti cupiditate repudiandae vel porro facere ipsum repellendus commodi voluptas a doloribus maiores nihil ratione iure omnis?"
        ),
        h(
          "p",
          "orem ipsum dolor sit, amet consectetur adipisicing elit. Eaque non pariatur aspernatur deserunt quibusdam, in obcaecati consequuntur sint magnam atque placeat debitis fugiat quas odio libero consequatur quo veniam quod?"
        ),
        h(
          "p",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quos blanditiis quaerat cupiditate nisi eligendi dolor? A, deserunt. Labore aut, dolores harum adipisci omnis id laudantium eos perspiciatis tempora consectetur."
        ),
      ]),
    ]),
  ]),
]);
