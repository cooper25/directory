import * as React from "react";
import "../components/main.css";
import Helmet from "react-helmet";
import $ from "jquery";
import name from "../images/cooper.svg";

$.getJSON("http://worldtimeapi.org/api/timezone/America/Chicago", function(data){
  console.log(data.datetime)
})

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
        <div className="right_image"></div>
        <header><b>Do you like the directory?</b> Give me your thoughts by <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScHxqRdDrGO7YCUq6BAxxRTAghPusxdJfV8BHfKo8C8QQgiew/viewform?usp=sf_link">clicking here</a>.</header>
        <footer>Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@linglivestolaugh">Ling Tang</a> on <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/t/wallpapers">Unsplash</a>   </footer>
      </div>
    </body>
  )
}

export default IndexPage