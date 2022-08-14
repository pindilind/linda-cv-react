import "../styles/StyleStripe.scss";
import StripePic from "../assets/stripe.svg";


export default function Stripe() {

  return (

    <div id="stripeDiv">

      <div class="stripeDivTwo">
        <div class="text-content-stripe">
          <h2 class="textStyleStripe">The Wedding Boutique</h2>
          <p>
          Denna applikation är en webbshop med bröllopsklänningar att köpa och betalning med Stripe. Njut av vår vackra sida med vackra bilder för en trevlig upplevelse för ett långt lyckligt liv med kärlek.

          </p>

          <p>
          Stripe | Node.js | Express
          </p>
          <p>
          Kolla in projektet <a href="https://github.com/SusanIsaksson/stripeSusLin.git"> github.com/SusanIsaksson/stripeSusLin</a> 
          </p>

        </div>

        <div class="stripe-pic-div">
          <img id="stripe" src={StripePic} alt="Selfie" />
        </div>
      </div>
    </div>

  );
}