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
            <h4 style={{ color: "grey" }}> Software Engineer</h4>
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
            <p>1266 N Serrano Avenue #2, Los Angeles, CA, 90029 </p>
            <h5>Phone</h5>
            <p>+1-213-352-3026 </p>
            <h5>Email</h5>
            <p>arpitshrm07@gmail.com </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2019}
              schoolName={"M.S at University of Southern California"}
              schoolDescription={
                "I completed my Master's degree in computer science from University of Southern California."
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
              startYear={2019}
              endYear={'Current'}
              jobName={"Service Technologies Inc: Software Engineer"}
              jobDescription={
                <List>
                  <ListItem style={{ color: "white" }}>
                    • Designed, implemented and exposed several internal and external
                     REST APIs, leveraging AWSLambda, SQS and APIGateway 
                     to enable functionality for third-party partners to 
                     integrate withService, enabling multiple business 
                     relationships raising the customer base by 20K
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Enabled data extraction from 5+ airlines’ email 
                    template through rules-based parsing and supervised 
                    machine learning to assist to Service’s complaint filing 
                    with the corresponding airline
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Led the development of a user-facing feature to provide 
                    the customers with the ability to deletetheir request to or
                    relay a custom message to the airline complaint system; significantly
                    increasing the flexibility provided to the users and 
                    improving the user experience
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Co-Led the renovation of Service’s data analytics via an 
                    automated ETL pipeline over Fargate to migrate data from 
                    various databases and SaaS platforms into BigQuery using Segment API
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Involved in containerization of Service’s hotel rate-drop 
                    system and its dependencies over to anAWS EKS infrastructure 
                    to improve the stability and uptime by 5% and cut costs by 27%
                  </ListItem>
                </List>
              }
            />
            <Experience
              startYear={2015}
              endYear={2017}
              jobName={"Tata Consultancy Services: Software Engineer"}
              jobDescription={
                <List>
                  <ListItem style={{ color: "white" }}>
                    • Analyzed and Worked on developing, testing, deploying and 
                    documenting retail functionalitiesfor Lloyds Banking Group(LBG)
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Led the development of REST APIs to allow integration of 
                    existing application functionalities toallow non-UK 
                    customers to bank with LBG increasing the customers by 15K
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Orchestrated a Python application to clean the NoSQL 
                    user data and transform it to an ACID based data-set
                     which was used to develop APIs to forecast credit-card 
                     eligibility of customers
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Took ownership in developing and exposing in-house REST 
                    APIs leveraging ACID(SQL) data to predict credit-card 
                    eligibility of users
                  </ListItem>
                  <ListItem style={{ color: "white" }}>
                    • Involved  in  the  entire  Agile  development  flow,  
                    training  new  engineers,  building  and  managing 
                    application components, unit testing and other software
                    development and release activities
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
            <Skills skill="Docker" progress={70} />
            <Skills skill="Python" progress={80} />
            <Skills skill="ElasticSearch" progress={70} />
            <Skills skill="Amazon Web Services" progress={70} />
            <Skills skill="C# .Net" progress={60} />
            <Skills skill="C++" progress={70} />
            <Skills skill="HTML / CSS" progress={80} />
            <Skills skill="React" progress={30} />
            <Skills skill="Javascript" progress={50} />
            <Skills skill="PostgreSQL" progress={90} />
            <Skills skill="MongoDB" progress={50} />
            <Skills skill="Git" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
