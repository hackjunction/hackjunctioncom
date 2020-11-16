import React, { useEffect, useState } from 'react'
import './style.scss'

import { updateEvents } from '../../../redux/events/actions'

import SectionImage from '../../../components/SectionImage'
import NewsLetterForm from '../../../components/NewsLetterForm'
import BlockSection from '../../../components/BlockSection'
import { Grid } from '@material-ui/core'
import HeaderSection from '../../../components/HeaderSection'

import { content as selectContent } from '../../../redux/staticcontent/selectors'
import { connect } from 'react-redux'

import { Link, Element } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Page from '../../PageHOC'
import Button from '../../../components/Button'
//HELMET
import { Helmet } from 'react-helmet'

import HubSelector from '../Components/HubSelector'

const textsJSON = require('./texts.json')

const hubs = [
  {
    name: 'Chengdu',
    country: 'China',
    address: 'Chengduroad 1',
    contact: 'Eero Kere',
    timezone: '+0800',
  },
  {
    name: 'Budapest',
    country: 'Hungary',
    address: 'Budapestalley 1',
    contact: 'Mari Rautanen',
    timezone: '+0200',
  },
  {
    name: 'Moscow',
    country: 'Russia',
    address: 'Moscowstreet 1',
    contact: 'Virva Brax',
    timezone: '+0300',
  },
]

const ConnectedHome = (props) => {
  useEffect(() => {
    props.updateEvents()
  })

  return (
    <Page
      //   metaDescKey={KEYS.whoAreWeBody}
      className="Connected ConnectedContent ConnectedHome"
      pageTitle="Junction 2020 Connected"
    //   metaDescKey={KEYS.whoAreWeBody}
    //   ogImageKey={MEDIA_KEYS.homePageHeaderImage}
    >
      <div className="Connected-parallax">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Junction 2020 Connected</title>
          <meta
            name="keywords"
            content="junction 2020 connected, connected, junction, junction 2020"
          />
          <meta name="title" content="Junction 2020 Connected" />
          <meta property="og:title" content="Junction 2020 Connected" />
          <meta name="twitter:title" content="Junction 2020 Connected" />
          <meta
            name="description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />
          <meta
            property="og:description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />
          <meta
            name="twitter:description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />

          <meta name="og:type" content="website" />
          <meta
            property="og:image"
            content={require('../../../assets/images/photo-hub-visualisation.svg')}
          />
          <meta
            name="twitter:image"
            content={require('../../../assets/images/photo-hub-visualisation.svg')}
          />
        </Helmet>

        <img
          className="bigChain-1"
          src={require('../../../assets/images/bigchain-1.svg')}
          alt="Big Chain"
        />
        <div className="Connected-parallax--content">
          <img
            className="Connected-parallax--content-connectedLogo"
            src={require('../../../assets/logos/connected_logo.svg')}
            alt="Connected logo"
          />
          <p className="Connected-parallax--content-overTheWorld">
            ALL OVER THE WORLD
          </p>
          <h2 className="Connected-parallax--content-eventDates">
            NOVEMBER 6-8
          </h2>
          <img
            className="Connected-parallax--content-computer"
            src={require('../../../assets/images/computer.svg')}
            alt="computer"
          />

          <p className="Connected-parallax--content-hackTheFuture">
            HACK THE FUTURE
          </p>
        </div>
        <img
          className="bigChain-2"
          src={require('../../../assets/images/bigchain-2.svg')}
          alt="Big Chain 2"
        />
        <img
          className="smallChain-1"
          src={require('../../../assets/images/smallchain-1.svg')}
          alt="Small Chain"
        />
        <img
          className="smallChain-2"
          src={require('../../../assets/images/smallchain-2.svg')}
          alt="Small Chain 2"
        />
      </div>

      <div className="HubInfo">
        <Element name="mainContent" />

        <p className="centered">{props.HeaderBody}</p>
        <div className="Button-row">
          <Button
            className="Button-small"
            to="https://app.hackjunction.com/projects/junction-2020-connected"
            text="Projects"
          />
          <Button
            className="Button-small"
            to="https://www.flickr.com/photos/hackjunction/albums/72157716814725812"
            text="Photos"
          />
          <Button
            className="Button-small"
            to="https://hackjunction.com"
            text="Junction Website"
          />
        </div>

        <div className="chainRow">
          <img
            className=""
            src={require('../../../assets/images/chain-left.svg')}
            alt="chain-left"
          />
          <img
            className=""
            src={require('../../../assets/logos/emblem_black.svg')}
            alt="chain-left"
          />
          <img
            className=""
            src={require('../../../assets/images/chain-right.svg')}
            alt="chain-right"
          />
        </div>

        <h1>{props.Section1Title}</h1>
        <p className="centered">{props.Section1Body}</p>
        <Button
          className="Button-default"
          to="/info"
          text="Learn more about the event"
        />

        <img
          className="hubsIllustration"
          src={require('../../../assets/images/hubs_illustration.svg')}
          alt="hubs-illustration"
        />
        <img
          className="hubsIllustrationMobile"
          src={require('../../../assets/images/hubs_illustration_mobile.svg')}
          alt="hubs-illustration"
        />

        <h1>{props.Section2Title}</h1>
        <p className="centered">{props.Section2Body}</p>

        <Button
          className="Button-default"
          to="/hubs"
          text="Learn more about hubs"
        />

        <div className="HubSection">
          <HubSelector />
          <img
            src={require('../../../assets/images/hub_map.svg')}
            alt="Hubs on map"
          />
        </div>
        <div className="YouTube--wrapper">
          <div className="YouTube--inside">
            <h2>{props.YouTubeWrapperTitle}</h2>
            <h3>{props.YouTubeWrapperBody}</h3>
            <iframe src={props.YouTubeWrapperLink} frameBorder="0" />
          </div>
        </div>
      </div>
      <div className="challengesSection">
        <h1>Challenges</h1>
        <p>
          The hackathon is divided into challenges based on different industries
          and themes. You can choose to work on multiple challenges during the
          hackathon: and you can even combine them and submit your project to
          multiple ones!
        </p>
        <Button
          className="Button-default"
          to="/challenges"
          text="See the Challenges"
        />
        <img
          className="challengesImage"
          src={require('../../../assets/images/challenges_frontpage.png')}
          alt="challenges_frontpage"
        />
      </div>
      <div className="NewsLetter">
        <h1>{props.Section3Title}</h1>
        <p>{props.Section3Body}</p>
        <div className="RemoveBorder--flex NewsLetter--content">
          <NewsLetterForm />
        </div>
        <img
          className="Chain-2part"
          src={require('../../../assets/images/2part-chain.svg')}
          alt="2part-chain"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0B2C5D"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,85.3C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <HeaderSection className="PartnerSection">
        <h2 className="partnerHeading">Main Partners</h2>
        <div className="partnerTier">
          <div className="logoBGR">
            <div className="logoContainer">
              <a href="https://www.genelec.com/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/genelec.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.hkscan.com/en/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/hkscan.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.espoo.fi/en-US" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/espoo.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.smartly.io/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/smartly.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a
                href="https://www.businessfinland.fi/suomalaisille-asiakkaille/etusivu/"
                target="_blank"
              >
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/business finland.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.pauliggroup.com/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/paulig.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div class="logoContainer">
              <a href="https://www.motiva.fi/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/motiva.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div class="logoContainer">
              <a href="https://www.op.fi/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/op.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div class="logoContainer">
              <a href="https://www.cgi.fi/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/cgi.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.aalto.fi/en/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/aalto.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.tampere.fi/" target="_blank">
                <img
                  className="BIGLOGO"
                  src={require('../../../assets/logos/partner/tampere.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className="partnerHeading">Online Partners</h2>
        <div className="partnerTier">
          <div class="logoBGR-small">
            <div class="logoContainer">
              <a href="https://aito.ai/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/aito.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>
            <div class="logoContainer">
              <a href="https://www.brella.io/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/brella.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div class="logoContainer">
              <a href="https://www.columbiaroad.com/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/columbia road.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>
            <div class="logoContainer">
              <a href="https://just-ai.com/en/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/just ai.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.d-fence.fi/home" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/defence.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.rovio.com/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/rovio.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.hus.fi/" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/hus.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>

            <div className="logoContainer">
              <a href="https://www.oph.fi/en" target="_blank">
                <img
                  className="logoIMG"
                  src={require('../../../assets/logos/partner/opetus.png')}
                  alt="connected-logo-here"
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className="partnerHeading">Supporting Partners</h2>
        <div class="logoBGR-small">
          <div class="logoContainer">
            <a href="https://techchill.co/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/techchill.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://printify.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/printify.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a
              href="https://www.teknologforeningen.fi/?lang=en"
              target="_blank"
            >
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/tf.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://urbanmill.org/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/urban mill-.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.tek.fi/en" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/tek .png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://atkins.fi/en/frontpage/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/atkins.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://techflipp.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/techflipp.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.sture.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/sture.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://hackkosice.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/hack k.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="http://www.enklaavi.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/eenklaavi.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="http://trapfactory.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/trapfactory.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="http://fiksuruoka.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/fiksuruoka.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.6722.space/en" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/67-22.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://hackyeah.pl/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/hackyeah.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://swwekenya.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/swwe.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.facebook.com/CELECUSTHB" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/supporting/celec.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
        </div>
      </HeaderSection>
    </Page>
  )
}

const mapStateToProps = (state) => {
  const content = selectContent(state)
  let contentTexts = {}
  for (let key of Object.keys(textsJSON)) {
    //Find key in strapi if exists, else use fallback in texts.json
    contentTexts[key] = content[textsJSON.prefix + key] || textsJSON[key]
  }

  return contentTexts
}

const mapDispatchToProps = (dispatch) => ({
  updateEvents: () => dispatch(updateEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedHome)
