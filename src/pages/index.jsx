import * as React from "react";
import "../components/main.css";
import Helmet from "react-helmet";
import name from "../images/cooper.svg";

//var header = "<b>It's earth-day!</b> <a href='https://www.earthday.org/our-work/'>Learn more</a> about earth-day and its importance.";

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
      <div className="right_image">
        <header><b>It's earth-day!</b> <a href="https://www.earthday.org/our-work/" target="_blank" rel="noopener noreferrer">Learn more</a> about earth-day and its importance.</header>
      </div>
      <div className="mobile-round"></div>
    </body>
  )
}

export default IndexPage


// does anybody know howw the fuck I fix this