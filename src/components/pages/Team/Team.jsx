import React from 'react';
import './css/style.css';

function Team() {
  return (
    <section className="team-main">
      <article className="team-history">
        <hr className="orange-bar" />
        <div className="team-presentation">
          <h1>Présentation de l&apos;équipe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            necessitatibus provident veritatis dolore accusantium, quis nulla
            repellendus beatae enim explicabo commodi minus, dolorem ratione
            iste officiis! Tempore, quas placeat! Corporis!
          </p>
        </div>
      </article>
      <div className="row">
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4"
              alt="Cédric Priouret"
              title="Cédric Priouret"
            />
            <h2>Cédric Priouret</h2>
            <p className="left-text">
              J&apos;ai bossé tout seul sur ce projet.
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/CedricPriouret">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cedricpriouret/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://avatars.githubusercontent.com/u/17590755?s=400&u=5dd7478904dbff4e07712e6342a9a5909a079819&v=4"
              alt="Alexandre Chauvin"
              title="Alexandre Chauvin"
            />
            <h2>Alexandre Chauvin</h2>
            <p className="right-text">Expert comptable backend.</p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/woozyfr">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alexandre-chauvin-12b5a172/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEWzpq-Uw_mpw/profile-displayphoto-shrink_800_800/0/1607436442351?e=1617235200&v=beta&t=rkJrDZX5YTOTXcUuDNAcVEbs2zC7Y6zejKDiRHlc_es"
              alt="Miguel Santos"
              title="Miguel Santos"
            />
            <h2>Miguel Santos</h2>
            <p className="left-text">
              J&apos;aime manger des sandwichs sur l&apos;autoroute et dans les
              aéroports.
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/MJSantos27">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/migueljsantos/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
        <div className="col-md-6">
          <article className="team-content">
            <img
              src="https://avatars0.githubusercontent.com/u/58628260?s=400&u=99e744fb2817df5e35345d876f2f3fb6f6df6eb3&v=4"
              alt="Cyrille Fabre"
              title="Cyrille Fabre"
            />
            <h2>Cyrille Fabre</h2>
            <p className="right-text">
              Je fais presque toujours des blagues nulles.
            </p>
            <div className="social-icons-team">
              <li>
                <a href="https://github.com/Cissou13">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cyrille-fabre/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </div>
          </article>
        </div>
      </div>

      <hr className="orange-bar" />
    </section>
  );
}

export default Team;
