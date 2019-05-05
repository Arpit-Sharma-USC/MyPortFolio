import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Arpit Sharma</h2>
            <h4 style={{ color: "grey" }}> Graduate Student</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Outgoing, energetic, computer science professional with a
              successful record of embracing new challenges and a passion for
              computer programming. Driven to establish and achieve business
              objectives. Excellent listening and communication skills and a
              positive demeanor. My aim is to obtain and thrive on a position
              that extends and completely utilizes my current skill-set in order
              to expand my learning curve and allows me to contribute to the
              advancement of the organization.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1225 W 37th Place, Los Angeles, CA, 90007 </p>
            <h5>Phone</h5>
            <p>+1-213-352-3026 </p>
            <h5>Email</h5>
            <p>arpitsha@usc.edu </p>
            <h5>Web</h5>
            <p>my website </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2019}
              schoolName={"M.S at University of Southern California"}
              schoolDescription={
                "I Completed my Master's degree in computer science from University of Southern California."
              }
              courses={
                <List>
                  <ListItem className="resume-lists">
                    Analysis of Algorithms
                  </ListItem>

                  <ListItem className="resume-lists">
                    Machine Learning for Data Informatics
                  </ListItem>
                  <ListItem className="resume-lists">
                    Foundations of Artificial Intelligence
                  </ListItem>

                  <ListItem className="resume-lists">Database Systems</ListItem>
                  <ListItem className="resume-lists">Web Technologies</ListItem>
                  <ListItem className="resume-lists">
                    Game Development for AR/VR
                  </ListItem>
                  <ListItem className="resume-lists">
                    Mobile Games Development
                  </ListItem>
                  <ListItem className="resume-lists">
                    Software Management and Economics
                  </ListItem>
                </List>
              }
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName={"B.E. at Visvesaraya Technological Univeristy (VTU) "}
              schoolDescription={
                "I completed my Bachelor's in computer science and engineering from reva Institute of Technology and Management (VTU) in Bangalore, India"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={2017}
              jobName={"Tata Consultancy Services: Software Engineer"}
              jobDescription={
                <List>
                  <ListItem style={{ color: "white" }}>
                    • Analyzed and worked on developing, testing, deploying and
                    documenting of digital and account management
                    functionalities via micro services for Lloyds Banking Group
                    (LBG) using Java/J2EE, SQL, Apache Tomcat Server, Spring and
                    Docker
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Took ownership in developing backend REST api gateway
                    calls with spring boot and JDBC SQL queries, to allow future
                    non-UK users to bank with LBG, each micro service build was
                    then deployed using Docker (CaaS platforms){" "}
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Utilized Hadoop and Python scripts to clean the JSON Nosql
                    user data and transform it to a Relational DB which was used
                    to develop APIs to forecast credit-card eligibility of
                    customers
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Involved in the entire Agile development process
                    (Programming user stories into tasks, data management,
                    diagnose/debug technical issues, building and managing
                    component, unit testing and other software development
                    release activities
                  </ListItem>
                </List>
              }
            />

            <Experience
              startYear={2015}
              endYear={2015}
              jobName={"Nokia Networks: Student Intern"}
              jobDescription={
                <List>
                  <ListItem style={{ color: "white" }}>
                    • A vital part of product development team which developed
                    and tested an application to test the network connectivity
                    of Network elements (NE) driven by Java SE7 socket
                    programming
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • The application would focus on the status of the NE, if it
                    is able to connect to an IP address, and log all the open
                    transactions
                  </ListItem>
                </List>
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Java" progress={100} />
            <Skills skill="Python" progress={80} />
            <Skills skill="C# .Net" progress={60} />
            <Skills skill="C++" progress={70} />
            <Skills skill="HTML / CSS" progress={80} />
            <Skills skill="React" progress={30} />
            <Skills skill="Javascript" progress={60} />
            <Skills skill="PostgreSQL" progress={90} />
            <Skills skill="MongoDB" progress={50} />
            <Skills skill="Git" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
