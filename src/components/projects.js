import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton
} from "react-mdl";
import { CardText } from "react-mdl/lib/Card";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      {
        /* Game Dev*/
      }
      return (
        <div className="projects-grid">
          {/*wordplay vr*/}
          <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "196px",
                background:
                  "url(https://i.ytimg.com/vi/WTB64rh9KrY/maxresdefault.jpg) center/cover"
              }}
            >
              {" "}
            </CardTitle>
            <CardText>
              This game, in an immersive virtual reality setting, offers the
              Parkinson’s patient an opportunity to attend a rehabilitation
              session without actually giving him/her the notion of being in
              one. The main idea behind the game is to provide the player with
              an opportunity to perform several types of exercise in the game in
              a manner that trains his/her afflicted muscles. These exercises
              will help develop his motor-system to function better and
              eventually lead him to a path of recovery from the dreaded
              disease.{" "}
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/Arpit-Sharma-USC/WordPlayVR_final"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>

              <Button colored>
                <a
                  href="
                  https://harmeet651.github.io/WordPlay-Vr-Site/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website
                </a>
              </Button>
              <Button colored>
                <a
                  href="
              https://youtu.be/x635_m9kY5ELiveDemo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*space ball*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "196px",
                background:
                  "url(https://www.acorn-ind.co.uk/_assets/images/blog/2012/10/bearing-in-space.jpg) center/cover"
              }}
            >
              SPACE BALL{" "}
            </CardTitle>
            <CardText>
              The game is a ‘Keep It Moving’ in 3D for a handheld android device
              and can be played in either portrait or landscape mode. The
              objective of the game is collect coins/rewards and move as far
              ahead as possible avoiding several types of obstacles and
              death-traps in the way. The mechanics are very fundamental; move
              the ball by swiping left or right. The ball can be slowed down if
              the user presses and holds the screen. This makes the ball to move
              very slow. As soon as the player releases the screen, the ball
              will instantly speed up back to its original speed. This control
              of speed is required for the player to time their movements to
              avoid an obstacles or jump to next block of a moving/rotatting
              path
            </CardText>
            <CardActions border>
              {" "}
              <center>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/SpaceBall"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  {" "}
                  <a
                    href="https://docs.google.com/document/d/16wJz71jGK3Lo1ic5JYCKR0tqpDvgvODbPwH06fmS0cw/edit?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    More Info
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="
                  https://www.youtube.com/watch?v=o5LU7mmeAO4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="
                  https://youtu.be/o5LU7mmeAO4?t=252"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Multiplayer Demo
                  </a>
                </Button>{" "}
              </center>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      {
        /* Machine learning*/
      }
      return (
        <div className="projects-grid">
          {/*3sat*/}
          <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "346px",
                background:
                  "url(https://www.inovex.de/blog/wp-content/uploads/2018/08/mLSTM-artikel.jpg) center/cover"
              }}
            >
              Bertrand Mimicker LSTM
            </CardTitle>
            <CardText>
              An LSTM to mimic the writing style of prominent British
              Mathematician, Philosopher, prolific writer, and political
              activist, Bertrand Russell.
            </CardText>
            <CardActions border>
              <center>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/Writing-Mimicker"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>{" "}
              </center>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*lstm mimic*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "296px",
                background:
                  "url(https://formtitanhelpdeskimage.s3.amazonaws.com/70c78f9df2fd5c130e7021644f78f4c5.jpg) center/cover"
              }}
            >
              3SAT-Sentiment Analysis of Tweets
            </CardTitle>
            <CardText>
              {" "}
              Semi-Supervised Sentiment Analysis of Tweets(3SAT) recycling
              concepts of analytics, Support Vector Machines, data modeling and
              self-learning/training based architecture design patterns.
              Dedicated Semeval dataset of tweets was used; 3SAT is educational
              in understanding context of tweets and user’s sentiment{" "}
            </CardText>
            <CardActions border>
              <center>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/INF-552-project"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/INF-552-project/blob/master/Report__3SAT-%20A%20Semi-Supervised%20Learning%20approach%20to%20Sentiment%20Analysis%20and%20Classification%20of%20Tweets__Arpit_Sharma__Sarah_Riaz.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Research Paper
                  </a>
                </Button>{" "}
              </center>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Robust Face Matching*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "316px",
                background:
                  "url(https://docs.opencv.org/2.4/_images/optimal-hyperplane.png) center/cover"
              }}
            >
              Active Learning with SVMs
            </CardTitle>
            <CardText>
              This is a binary classiﬁcation problem. Comparison between Active
              and Passive Learning on the BankNote Authentication dataset using
              Support Vector Machines via active and passive learning. The
              project also exhibits the results of monte-carlo simulation.
            </CardText>
            <CardActions border>
              <center>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/Active-Learning-SVMs_BankNote-Authentication-Dataset"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </center>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      {
        /*React*/
      }
      return (
        <div className="projects-grid">
          {/*Portfolio*/}
          <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center/cover"
              }}
            />
            <CardText>
              I used react along with react-mdl and react router to make my own
              portfolio
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://www.youtube.com/channel/UC56gCKhI6Rbc5prly_rlOPQ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
            </CardActions>
            {/*  <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Description here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://www.youtube.com/channel/UC56gCKhI6Rbc5prly_rlOPQ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>XYZ</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      {
        /* Databases*/
      }
      return (
        <div className="projects-grid">
          {/*Geospatial Data handling*/}
          <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "256px",
                background:
                  "url(https://raw.githubusercontent.com/Arpit-Sharma-USC/Geospatial_Handling_PostgreSQL/master/total_result.png) center/cover"
              }}
            >
              Geospatial Data Handling
            </CardTitle>
            <CardText>
              {" "}
              An environment on Amazon Web Services (AWS) RDS to run a PostgrSQL
              database instance which parses a KML file in Google Maps with 12
              user-picked locations and determines their convex hull. Displays
              path to 4 nearest neighbors from a source location selected and
              plots its Spirograph via ArcGIS and JavaScript{" "}
            </CardText>
            <CardActions border>
              <center>
                <Button colored>
                  <a
                    href="https://github.com/Arpit-Sharma-USC/Geospatial_Handling_PostgreSQL"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </center>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab> Game Dev</Tab>
          <Tab> Machine Learning </Tab>
          <Tab> Web Development</Tab>
          <Tab> Databases</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
