import React from "react";

function About() {
  return (
    <>
      <div>
        <img
          className="img-fluid flex-grow-1"
          src={`${import.meta.env.BASE_URL}img/banner.jpg`}
          alt="bannière de la page"
        />
      </div>

      <div className="px-5">
        <div className="text-center pt-4">
          <h1 className="fs-1 fw-bold h1-with-underline">À propos de moi</h1>
          <div className="container text-center">
            <p className="fs-6">
              Je suis actuellement en reconversion professionnelle. Issu d'un
              parcours en communication, j'ai décidé après plusieurs expériences
              de me reconvertir dans le milieu du développement web. Une
              décision qui fait suite à de longues réfléxions sur mon parcours
              passé et mon futur. Des envies de créativité, de travaux
              collaboratifs, de mode projet, sont entre autres ce qui m'a
              motivé.
            </p>
          </div>

          {/* Formation */}
          <h2 className="fw-bold h1-with-underline h2-about">Formation</h2>
          <div className="item mb-10">
            <p className="fw-bold">
              Titre Professionnel Développeur Web & Web Mobile
            </p>
            <span className="date">Juillet 2025 - En cours</span>
            <p>Centre Européen de Formation</p>
          </div>
          <div className="item mb-10">
            <p className="fw-bold">
              MBA Communication Globale et Stratégies d'Influence
            </p>
            <p className="date">Septembre 2021 - Juillet 2023</p>
            <p>ISEG Nantes</p>
          </div>
          <div className="item mb-10">
            <p className="fw-bold">
              Bachelor Communication & Marketing Digital
            </p>
            <span className="date">Septembre 2020 - Juillet 2021</span>
            <p>ISEG Nantes</p>
          </div>

          {/* Compétences */}
          <h2 className="fw-bold h1-with-underline h2-about mb-5">
            Compétences
          </h2>

          <div className="container text-center">
            {/* Première ligne */}
            <div className="row row-cols-1 row-cols-md-4 g-4 align-items-stretch">
              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/html-5.png`}
                    className="skill-img mt-4"
                    alt="logo du langage HTML"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★★☆</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/css-3.png`}
                    className="skill-img mt-4"
                    alt="logo du langage CSS"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★★☆</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/bootstrap.png`}
                    className="skill-img mt-4"
                    alt="logo de la librairie Bootstrap"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★★☆</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/js.png`}
                    className="skill-img mt-4"
                    alt="logo du langage JavaScript"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★☆☆</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seconde ligne */}
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4 align-items-stretch">
              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/wordpress.png`}
                    className="skill-img mt-4"
                    alt="logo WordPress"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★☆☆</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-depth skill-card">
                  <img
                    src={`${import.meta.env.BASE_URL}img/shopify.png`}
                    className="skill-img mt-4"
                    alt="logo Shopify"
                  />
                  <div className="card-body p-2">
                    <p className="card-text fs-4">★★★☆☆</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expériences */}
          <h2 className="fw-bold h1-with-underline h2-about">
            Expériences professionnelles
          </h2>
          <div className="item mb-10">
            <p className="fw-bold">Responsable communication</p>
            <span className="date">Septembre 2023 - Juillet 2025</span>
            <p>Club Athlétique Nantais</p>
          </div>
          <div className="item mb-10">
            <p className="fw-bold">Chargé de communication</p>
            <p className="date">Mars 2024 - Février 2025</p>
            <p>CIBTP Grand-Ouest</p>
          </div>
          <div className="item mb-10">
            <p className="fw-bold">
              Chargé de communication - en apprentissage
            </p>
            <span className="date">Septembre 2021 - Juillet 2023</span>
            <p>Fondation Apprentis d'Auteuil</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
