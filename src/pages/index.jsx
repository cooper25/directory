import * as React from "react";
import "../components/main.css";
import Helmet from "react-helmet";
import name from "../images/cooper.svg";

const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>cppr.design - directory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cc640b32a0bb4966b346d0f9083e3489"}'></script>
      </Helmet>
      <div className="cursor"></div>
      <div className="elements">
        <img src={name} draggable="false" alt="cooper"/><br/><br/>
        <div className="buttons">
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><button>Discord</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><button>Twitter</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://behance.com/coopertsoris"><button>Behance</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="mailto:hello@coopertsoris.dev"><button>Email</button></a>
          <a draggable="false" href="https://coopertsoris.dev"><button>Main Site</button></a>
        </div>
      </div>
      <div className="right_image-container">
        <header><b>Did you know my directory is open source?</b> You can view it on Github by clicking <a target="_blank" rel="noopener noreferrer" href="https://github.com/cooper25/directory/">here</a></header>
        <div className="right_image"></div>
        <footer>Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@linglivestolaugh">Ling Tang</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/t/wallpapers">Unsplash</a>   </footer>
      </div>
    </body>
  )
}

export default IndexPage
