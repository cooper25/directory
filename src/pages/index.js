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
          <a draggable="false" target="_blank" rel="noreferrer" href="https://discord.com/users/307273393600724994/"><button>Discord</button></a>
          <a draggable="false" target="_blank" rel="noreferrer" href="https://twitter.com/loertis_"><button>Twitter</button></a>
          <a draggable="false" target="_blank" rel="noreferrer" href="https://behance.com/coopertsoris"><button>Behance</button></a>
          <a draggable="false" target="_blank" rel="noreferrer" href="mailto:hello@coopertsoris.dev"><button>Email</button></a>
          <br/><a draggable="false" href="https://coopertsoris.dev"><button>Main Site</button></a>
        </div>
      </div>
      <div className="right_image"></div>
    </body>
  )
}

export default IndexPage