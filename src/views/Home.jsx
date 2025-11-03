import React from "react";

function Home() {
  return (
    <>
      <div className="hero text-center pt-5">
        <div className="d-flex justify-content-center mb-3">
          <img
            src="/img/profil-cv.jpeg"
            alt="Photo de profil de Lilian Le Goff"
            className="rounded-circle img-container"
            width="200"
            height="200"
          />
        </div>

        {/* Titres */}
        <div className="hero-content">
          <h1 className="text-white fw-bold">
            Bonjour, je suis Lilian Le Goff
          </h1>
          <h2 className="text-white fw-bold">
            Développeur Web full stack en devenir
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
