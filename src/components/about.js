import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="landing-grid">
        <br />
        <div className="banner-text">
          <h1>About Me</h1>
          <hr />
          <p>
            Software Developer using Java Amazon Web Services, MongoDB, ElastiSearch, PostGreSQL, React,
            with an emphasis on Backend development and data science modeling
            using Python and Tensorflow. Experienced in building CRUD
            applications, Microservices, RESTful APIs using SpringBoot and
            Maven, Machine learning models using scikit-learn.
            Common use of UI libraries: React-Bootstrap, HTML CSS
            and Javascript. Also has experience shipping VR and mobile games
            using Unity 3D, C# and Unity Networking. Posseses working knowledge
            of MapReduce, OpenCV. <br />
          </p>
        </div>
        <div className="banner-text">
          <h1>Background and Leisure Interests</h1>
          <hr />
          <p>
            I hail from Delhi, the beating heart of India, and was raised in
            Bangalore, a fascinating city in the south of India. I like to
            travel places, shoot pictures on my iPhone and indulge in content
            creation of these pictures on Adobe Photoshop/LightRoom. Check out
            some of my captures through my{" "}
            <a
              href="https://www.instagram.com/arpit_07_sharmaji_ka_ladka/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              Instagram
            </a>{" "}
            handle.I have explored 16 Indian states, 5 of the American states
            (more to come ;) ) and 5 different countries. I hope to one day
            visit atleast 100 countries across the globe.
            <br />
            <br />I also like to game on my Xbox. FP Shooters, RPGs and Fifa are
            among some of my favorite Genres. I can cook a variety of dishes
            from Indian, Italian, Continental cuisines. Watching and Playing
            Soccer is another of my hobbies, I play across the line as a
            forward. P.S I am also a Game of Thrones enthusiast and am open to a
            discussion about my beloved world of ice and fire.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
