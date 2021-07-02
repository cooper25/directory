import * as React from "react";
import "../components/main.css";
import Helmet from "react-helmet";
import name from "../images/cooper.svg";
import favicon from "../images/favicon.png";
import meta from "../images/meta.png";

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
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cc640b32a0bb4966b346d0f9083e3489"}'></script>
        <script src='https://cooper25.github.io/hotjar.js'></script>
      </Helmet>
      <div className="cursor"></div>
      <div className="elements">
        <img src={name} draggable="false" alt="cooper"/><br/><br/>
        <div className="buttons">
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><button id="main">cooper#0325</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><button>Twitter</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://behance.net/coopertsoris"><button>Behance</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://github.com/cooper25"><button>GitHub</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="mailto:cooper@cppr.dev"><button>Email</button></a>
          <a draggable="false" href="https://coopertsoris.dev"><button>Main Site</button></a>
        </div>
      </div>
      <div className="right_image-container">
        <div className="right_image"></div>
        {/*<footer>Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@linglivestolaugh">Ling Tang</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/t/wallpapers">Unsplash</a></footer>*/}
        <footer>Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@colbyjray">Colby Ray</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/t/wallpapers">Unsplash</a></footer>
      </div>
    </body>
  )
}

export default IndexPage
