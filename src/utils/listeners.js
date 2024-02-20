import { AboutMe } from "../Pages/AboutMe"
import { NewsPage } from "../Pages/News"
import { NewsItem } from "../Pages/NewsItem"
import { Contact } from "../templates/Contact/Contact"
import { Footer } from "../templates/Footer/Footer"
import Main from "../templates/Main/Main"



const Listeners = (i) => {
  document.body.addEventListener("click", (event)=>{
    if(event.target.classList.contains("main--home-container--button")){
      const toReplace = document.body.children[1]
      
      //convertir el return de newspage en un elemento nodo
      document.body.classList.toggle("no-scroll")

      document.body.replaceChild(NewsPage, toReplace)
    }
    if(event.target.classList.contains("blogs-button-container")){
      const toReplace = document.body.children[1]
      document.body.replaceChild(NewsItem, toReplace)
      document.body.appendChild(Contact)
      document.body.appendChild(Footer)
    }
    if(event.target.classList.contains("nav--container-profile-link--a")){
      const toReplace = document.body.children[1]
      document.body.replaceChild(AboutMe, toReplace)
      document.body.appendChild(Contact)
      document.body.appendChild(Footer)
    }
    if(event.target.classList.contains("nav--container-logo--img")){
      const toReplace = document.body.children[1]
      document.body.replaceChild(Main, toReplace)
      document.body.classList.toggle("no-scroll")
      const toReplace3 = document.body.children[3]
      const toReplace4 = document.body.children[4]
      document.body.removeChild(toReplace4)
      document.body.removeChild(toReplace3)

    }
  })
}
export default Listeners