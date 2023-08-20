import React from "react";
import "./contact-us.css";
export default function ContactUS() {
  return (
    <div className="bg-white">
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>Contact</span> Us
        </h1>

        <div class="contact-holder">
          <div class="icons-container">
            <div class="icons">
              <i class="fas fa-phone"></i>
              <h3>our number</h3>
              <p>+20-106-836-3041</p>
            </div>
            <div class="icons">
              <a
                href="mailto:marwanabdelwahab9@gmail.com"
                class="text-decoration-none"
              >
                <i class="fas fa-envelope"></i>
                <h3>our email</h3>
                <p>Eagle.markting1@gmail.com</p>
              </a>
            </div>
            <div class="icons">
              <a
                target="_blank"
                class="text-decoration-none"
                href="https://www.google.com/maps/place/Heliopolis,+Al+Matar,+El+Nozha,+Cairo+Governorate+4470351/@30.1123141,31.333551,15z/data=!4m15!1m8!3m7!1s0x145815dcc3e4e599:0x6c67c22e4aa39206!2sHeliopolis,+Al+Matar,+El+Nozha,+Cairo+Governorate+4470351!3b1!8m2!3d30.112315!4d31.3438507!16zL20vMGM1cTA3!3m5!1s0x145815dcc3e4e599:0x6c67c22e4aa39206!8m2!3d30.112315!4d31.3438507!16zL20vMGM1cTA3?entry=ttu"
              >
                <i class="fas fa-map-marker-alt"></i>
                <h3>our location</h3>
                <p>
                  Neighborhood 11, District 18, Umraniye, Building 66, first
                  floor, first apartment on the right, next to Al-Shuhada Mosque
                </p>
              </a>
            </div>
          </div>

          <div class="row">
            <form action="" id="myform">
              <input id="name" type="text" placeholder="name" class="box" />
              <input id="email" type="email" placeholder="email" class="box" />
              <textarea
                id="message"
                name=""
                placeholder="message"
                class="box"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="send" class="btn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
