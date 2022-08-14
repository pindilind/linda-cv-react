import "../styles/StyleProjects.scss";
import Event4Upic from "../assets/event4u.svg";


export default function Event4U() {

  return (

    <div id="event4udiv">

      <div id="event4udivTwo">
        <div class="text-content-event">
          <h2 class="textStyleEvent">Examensarbete - Event4U</h2>
          <p>
            Vårt mål är att skapa en tjänst som erbjuder möjligheten att delta och uppleva digitala föreläsningar och event, antingen live eller som en play-tjänst.
            Våra ledord är Utvecklas, Utbildas, Underhållas och Umgås och vårt namn på denna tjänst blev Event 4U som tydliggör att vi tillhandahåller event som är knutna till våra fyra ledord som börjar på bokstaven U (4U) och som på engelska blir “for you” - vilket blir “event för dig” / Event4U.

          </p>
          <p>
          Stripe | NodeJS | JSON
          </p>
          <p>
          <a href="https://github.com/pindilind/4u-examensarbete"> github.com/pindilind/4u-examensarbete</a> | <a href="https://event4u.online/"> event4u.online</a> 
          </p>

        </div>

        <div class="event-pic-div">
          <img id="event4u" src={Event4Upic} alt="Selfie" />
        </div>
      </div>
    </div>

  );
}