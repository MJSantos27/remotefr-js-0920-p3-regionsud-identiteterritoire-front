// eslint-disable react/prefer-stateless-function
// eslint-disable react/no-unescaped-entities
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import './css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FaExpandAlt, FaUserTie, FaUsers } from 'react-icons/fa';
import imagesLogoVilleInternet from './images/logo-villes-internet-1.jpg';
import Weather from './Weather';
import imageLogoVillageFlories from './images/Logo-Villes-et-villages-fleuris-2019_diaporama.jpg';

/**
 * @class InfoCommune
 * @description Map en bas de la home
 */
class InfoCommune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commune: [],
      mairie: [],
      maire: [],
      geocommune: [],
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}`)
      .then((res) => {
        const commune = res.data;
        this.setState({ commune });
      });

    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}/mairie`)
      .then((res) => {
        const mairie = res.data;
        this.setState({ mairie });
      });

    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}/maire`)
      .then((res) => {
        const maire = res.data;
        this.setState({ maire });
      });

    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}/geocommunes`)
      .then((res) => {
        const geocommune = res.data;
        this.setState({ geocommune });
      });
  }

  render() {
    const { commune, geocommune, maire, mairie } = this.state;

    return (
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-8">
            <h1 className="align-baseline1">
              Bienvenue à <b>{commune.nom}</b>
            </h1>
            <p>
              <b>Site officiel:</b>
              <a href="{mairie.www}" target="_blank">
                {` ${mairie.www}`}
              </a>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, porro magni pariatur commodi debitis aperiam dolor
              eum repudiandae laborum reiciendis voluptates, maxime quod
              incidunt praesentium cupiditate distinctio quis laboriosam
              explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempore quo corrupti, natus soluta delectus error voluptates
              rerum optio est pariatur commodi quas quisquam placeat obcaecati.
              Incidunt ipsa quis officia nobis.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, porro magni pariatur commodi debitis aperiam dolor
              eum repudiandae laborum reiciendis voluptates, maxime quod
              incidunt praesentium cupiditate distinctio quis laboriosam
              explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempore quo corrupti, natus soluta delectus error voluptates
              rerum optio est pariatur commodi quas quisquam placeat obcaecati.
              Incidunt ipsa quis officia nobis.
            </p>
            <div className="row">
              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaUsers />
                    {geocommune.population}
                  </b>
                </h5>
                <div className="gbright-color align-baseline miniInfo">
                  2012
                </div>
              </div>

              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaExpandAlt />
                    {geocommune.superficie / 100}km²
                  </b>
                </h5>
                <div className="gbright-color align-baseline miniInfo">Km²</div>
              </div>
              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaUserTie />
                    {maire.nom} {maire.prenom}
                  </b>
                </h5>
                <div className="gbright-color miniInfo ">58ans</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="social-container">
                  <h4 className="social-follow">Réseaux sociaux</h4>
                  <div className="social-icons">
                    <a
                      href="https://www.facebook.com"
                      className="facebook social"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="twitter social"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="instagram social"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Weather />
            <div className="row">
              <div className="col-md-12">
                <div className="bg-grey-light padding-grey-block">
                  <h4>
                    <b className="red-color align-text officeTourismeTitle">
                      Office de Tourisme
                    </b>
                  </h4>
                  <p className="gbright-color align-text Provence">
                    <b>Provence Méditerranée</b>
                  </p>
                  <p className="align-text bureau">
                    <b>Bureau de Toulon</b>
                    <br />
                    12,place Louis Blanc <br />
                    83000 Toulon <br />
                    Tel: +33 4 94 18 53 00 <br />
                    E-mai:info@toulontourisme.com
                  </p>
                  <p className="align-text">
                    Horaires (Toute l&apos;année) <br />
                    Lundi: 9h à 13h et de 14h à 18h <br />
                    Mardi: <b>10h</b> à 13h et de 14h à 18h <br />
                    Mercredi: 9h à 13h et de 14h à 18h
                    <br />
                    Jeudi: 9h à 13h et de 14h à 18h <br />
                    Vendredi: 9h à 13h et de 14h à 18h
                    <br />
                    Samedi: 9h à 13h et de 14h à 18h
                    <br /> Dimanche: <b className="red-color">fermer</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center villageIcons">
                <img
                  src={imagesLogoVilleInternet}
                  className="img-rate-quality-picto"
                  alt="Responsive_imge"
                />
              </div>
              <div className="col-md-6 text-center villageIcons">
                <img
                  src={imageLogoVillageFlories}
                  className="img-rate-quality-picto"
                  alt="Responsive_imge"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="orange-bar" />
          </div>
        </div>
      </div>
    );
  }
}

InfoCommune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(InfoCommune);