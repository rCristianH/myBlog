import h from "hyperscript";
import img1 from "../../assets/imgs/1.webp"
import img2 from "../../assets/imgs/2.webp"
import img3 from "../../assets/imgs/3.webp"
import img4 from "../../assets/imgs/4.webp"
import img5 from "../../assets/imgs/5.webp"
import img6 from "../../assets/imgs/6.webp"




export const NewsPage = h("main.blogs-main", [
    h("section.blogs-news-container", [
      h("div.blogs-main-new.grid-container", [
        h("h3", "Noticias"),
        h("div.blogs-news-img-container", [h("img", { src: img1, alt: "" })]),
        h("div.blogs-news-info-container", [
          h("h2", "Título del blogpost"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos..."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
      ]),
    ]),
    h("section.blogs-posts-container", [
      h("div.grid-container", [
        h("h3"),
        h("article.post-container", [
          h("img", { src: img2, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
        h("article.post-container", [
          h("img", { src: img3, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
        h("article.post-container", [
          h("img", { src: img4, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
        h("article.post-container", [
          h("img", { src: img5, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
        h("article.post-container", [
          h("img", { src: img6, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
        h("article.post-container", [
          h("img", { src: img1, alt: "" }),
          h("p.post-container-titulo-articulo", "Titulo del articulo"),
          h(
            "p",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque perferendis sit pariatur error, natus voluptatibus quod dolore voluptatem quos.."
          ),
          h("button.primary-button.blogs-button-container", "Leer mas"),
        ]),
      ]),
    ]),
]);
