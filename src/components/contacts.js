import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Arpit Sharma</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am currently based in Los Angeles, CA. I would love to meet new
              people over a coffee or lunch. The best way to contact me is at my
              cell between 10:00 - 20:00 Pacific Standard Time (PDT) or reach
              out to me via my email
            </p>
          </Cell>

          <Cell col={6}>
            <h2> Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a
                      href="tel:1-213-352-3026"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      +1-(213)-352-3026
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a
                      href="mailto:arpitsha@usc.edu?Subject=Hello%20Arpit"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      arpitsha@usc.edu
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a
                      href="skype:arpitshrm07?call"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i className="fa fa-skype" aria-hidden="true" />
                      arpitshrm07
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
