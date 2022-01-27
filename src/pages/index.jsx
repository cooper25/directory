import * as React from "react";
import Plausible from 'plausible-tracker'
import "../components/main.css";
import Helmet from "react-helmet";
import name from "../images/cooper.svg";
import favicon from "../images/favicon.png";
import meta from "../images/meta.png";

if (typeof window !== `undefined`) {
    const { enableAutoPageviews } = Plausible({
    domain: 'directory.cppr.dev',
    trackLocalhost: true,
    apiHost: 'https://plausible.tsor.is'
  })

  enableAutoPageviews()
}

const IndexPage = () => {
  return (
    <body lang="en">
      <Helmet>
        <meta charset="UTF-8"/>
        <title>cooper - link directory</title>
        <link rel="shortcut icon" type="image/png" href={favicon}></link>
        <meta name="author" content="Cooper Tsoris"/>
        <meta name="title" content="cooper - link directory"/>
        <meta name="theme-color" content="#303434"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://directory.cppr.dev/"/>
        <meta property="og:title" content="cooper - link directory"/>
        <meta property="og:image" content={meta}></meta>
        <meta property="twitter:url" content="https://directory.cppr.dev/"/>
        <meta property="twitter:title" content="cooper - link directory"/>
        <meta property="twitter:image" content={meta}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <div className="cursor"></div>
      <div className="elements">
        <img src={name} draggable="false" alt="cooper"/><br/><br/>
        <div className="buttons">
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/add/cooperdev?share_id=MEY5QzBF&locale=en_US"><button id="main">Snapchat</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cooper.tsoris/"><button>Instagram</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><button>Twitter</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><button>cooper#0325</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="mailto:cooper@tsor.is"><button>Email</button></a>
          <a draggable="false" href="https://coopertsoris.dev"><button>Main Site</button></a>
        </div>
      </div>
      <div className="right_image-container">
        <div className="right_image"></div>
        <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com"><footer>Random Image on <b>Unsplash</b></footer></a>
      </div>
    </body>
  )
}

export default IndexPage
