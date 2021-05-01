import * as React from "react";
import "../components/main.css";
import Helmet from "react-helmet";
import name from "../images/cooper.svg";
import favicon from "../images/favicon.png";

const IndexPage = () => {
  return (
    <body lang="en">
      <Helmet>
        <title>cppr.design - directory</title>
        <link rel="shortcut icon" type="image/png" href={favicon}></link>
        <meta name="author" content="Cooper Tsoris"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cc640b32a0bb4966b346d0f9083e3489"}'></script>
      </Helmet>
      <div className="cursor"></div>
      <div className="elements">
        <img src={name} draggable="false" alt="cooper"/><br/><br/>
        <div className="buttons">
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><button>Discord</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><button>Twitter</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://behance.net/coopertsoris"><button>Behance</button></a>
          <a draggable="false" target="_blank" rel="noopener noreferrer" href="mailto:hello@coopertsoris.dev"><button>Email</button></a>
          <a draggable="false" href="https://coopertsoris.dev"><button>Main Site</button></a>
        </div>
      </div>
      <div className="right_image-container">
        <header><b>Did you know my directory is open-source?</b> View it on <a href="https://github.com/cooper25/directory">GitHub</a>!</header>
        <div className="right_image"></div>
        <footer>Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@linglivestolaugh">Ling Tang</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/t/wallpapers">Unsplash</a>   </footer>
      </div>
    </body>
  )
}

export default IndexPage
