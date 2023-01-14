import React, { useState } from "react";
import "./styles.css";

const seriesList = {
  Adventure: [
    {
      name: "Game of Thrones",
      rating: "9.2/10",
      about:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },

    {
      name: "The Witcher",
      rating: "8.1/10",
      about:
        "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
    },

    {
      name: "House of the Dragon",
      rating: "8.5/5",
      about:
        "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen."
    }
  ],

  Anime: [
    {
      name: "Death Note",
      rating: "9/10",
      about:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    },

    {
      name: "Naruto",
      rating: "8.4/10",
      about:
        "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja."
    },

    {
      name: "Attack on Titan",
      rating: "9/10",
      about:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
    }
  ],
  Drama: [
    {
      name: "Alchemy of Souls",
      rating: "8.8/10",
      about:
        "The fate of two people becomes twisted due to the magic when the souls of the dead return to the living."
    },

    {
      name: "Extraordinary Attorney Woo",
      rating: "8.7/10",
      about:
        "About an autistic 27-year-old lawyer. Due to her high IQ of 164, impressive memory, and creative thought process, the brilliant Woo Young Woo graduated at the top of her class from a prestigious law school."
    },

    {
      name: "Crash Landing on You",
      rating: "8.7/10",
      about:
        "The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her."
    }
  ]
};

export default function App() {
  var [genre, setgenre] = useState("Adventure");

  function genreHandler(genre) {
    setgenre(genre);
  }

  return (
    <div className="App">
      <nav className="header">
        <h1>
          <span>🎥</span> Series Recommendation App
        </h1>
        <small>A list of recommended series seperated by genres.</small>
      </nav>
      <div>
        {Object.keys(seriesList).map((genre) => (
          <button onClick={() => genreHandler(genre)} className="buttonStyle">
            {genre}
          </button>
        ))}
      </div>

      <hr style={{ width: "70%" }}></hr>

      <ul style={{ listStyle: "none" }}>
        {seriesList[genre].map((series) => (
          <li key={series.name}>
            <div className="container container-center ">
              <h2 style={{ textAlign: "center", fontSize: "x-large" }}>
                {series.name}
              </h2>
              <h3 style={{ textAlign: "center" }}>
                IMDB Rating: {series.rating}
              </h3>
              <p style={{ textAlign: "justify" }}>{series.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
