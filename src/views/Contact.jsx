import React from "react";

function Contact() {
  return (
    <>
      <div>
        <img
          className="img-fluid flex-grow-1"
          src="/img/banner.jpg"
          alt="bannière de la page"
        />
      </div>
      <div className="text-center pt-4">
        <h1 className="fs-1 fw-bold h1-with-underline">Contact</h1>
      </div>
      <div className="text-center pt-2">
        <p className="fs-6 text-center">
          Je suis actuellement à la recherche d'un stage non rémunéré d'une
          durée de 10 semaines minimum.
        </p>
        <p className="text-center">
          Si mon profil vous intéresse, n'hésitez pas à me contacter par
          téléphone, mail, ou via ce formulaire de contact.
        </p>
      </div>

      <div className="container custom-container my-5">
        <div className="row">
          <div className="col-md-6 about d-flex flex-column">
            <h2 className="title-with-underline text-center">
              Formulaire de contact
            </h2>
            <form action="https://formspree.io/f/mldpqvab" method="POST">
              <input
                className="form-control mb-1"
                type="text"
                placeholder="Votre nom"
                required
              />
              <br />
              <input
                className="form-control mb-1"
                type="email"
                placeholder="Votre adresse email"
                required
              />{" "}
              <br />
              <input
                className="form-control mb-1"
                type="tel"
                placeholder="Votre numéro de téléphone"
                required
              />
              <br />
              <input
                className="form-control mb-1"
                type="text"
                placeholder="Sujet"
                required
              />
              <br />
              <textarea
                className="form-control mb-1"
                name="message"
                id="message"
                placeholder="Votre message"
                required
              ></textarea>
              <br />
              <input
                className="btn btn-primary d-block mx-auto"
                type="submit"
                value="Envoyer"
              />
            </form>
          </div>
          <div className="col-md-6 skills">
            <h2 className="title-with-underline text-center">Mes coordonées</h2>
            <h3>Lilian Le Goff</h3>
            <address className="mt-2">
              <p className="mb-0">📍Nantes, 44000, France</p>
              <a
                href="tel:+33618302242"
                className="text-decoration-none text-black"
              >
                📱 06 18 30 22 42
              </a>
              <br />
              <a
                href="mailto:lilian.legoff@gmail.com"
                className="text-decoration-none text-black"
              >
                📧 lilian.legoff@gmail.com
              </a>
            </address>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.181757235869!2d-1.5649509887034219!3d47.21302581495347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec02d3d8ae9f%3A0xc84bbfe58fd0936e!2sPl.%20Graslin%2C%2044036%20Nantes!5e0!3m2!1sfr!2sfr!4v1760473278387!5m2!1sfr!2sfr"
              width="400"
              height="400"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
