import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="https://lh3.googleusercontent.com/XXTqVbaG2N313S6RZ0yQH0l8-3-DVkCNbTxE4k-H7atkHfi5qTT3yO_elrzUBbE8E4e6ogbonotbVuF-jATwk07A8wykjsNftlfdtXRPbWu-p-dOTDD0sAlXR7Pmm6Ub2-TYmICW1YM4aaZ6KL0N4TyTEc0-Et0jHRM7COfaPr9qe8IzRpANkUew5qunt28tkZyfzhO2tyotq-4bWmGE738pZ1hDIX3hl88uEJnzyS9lxa0ItT1dqH_tFTCv1CXxrZYCoDkccCg9ZBP5x_yTnBt6GSUXNafhS72A3UYxBoQlwchf76atvI76buvLwxlOQxYrw6dKkIiK0iDHiK3exZOCYs_g3pwYaFoJrGpPYANscXzOv4EQOiCj6bhQ-PyG7IXFa37ZzPa32hD5XEAyt-quuU_0L4MqTKMvLIDc9N2yjyKITLQ31PbK-WWaXZROrsQA3c-T9v8XuWDqf9AF3uhuaJgn1zbndiCc8ux5Oh7jTOx5Hg1TCYK2jRSONidr-RvZsOl5Sauu89zJbILF91OWFsFQI4DXepVo4fvwwIeCySP_dCFFgJwIvCP7yLOn1wA-AfiSixR5WlpUPTFuCDbgFPvZHv_jZHnjwIzNICFzh4AAMV4EIR-Pm63sc_iFPORr-1k_88Y_890Th3fyZPBdqvoEN4-PoMy1Va3H7HNYqZht6Ro3GV_LdfMfTE_RQoL9fnjQIiXfQ3-Cc_o4AdGrIg=w1293-h969-no"
              style={{ borderRadius: "100%" }}
              alt="avatar"
            />

            <div className="banner-text">
              <h1> Software Developer</h1>

              <hr />
              <p>
                Java : Core Java | Spring MVC | SpringBoot | RESTful <br />
                <br /> Python: NumPy | Pandas | Scikit-learn | NLTK | Tensorflow
                <br />
                <br />
                Database Systems: Oracle SQL | PostgreSQL | MongoDB(NoSQL)
                <br />
                <br />
                Experience of C/C++ | OOPs | C# .Net | Unity3D | Git |
                Distributed Systems
                <br />
                <br />
                Front-End: HTML/CSS | React | JavaScript | JSON
                <br />
                <br />
                Working knowledge: LINUX | AWS S3, EC2 | Redis | Kubernetes |
                Docker
              </p>
              <div className="social-links">
                {/* LinkedIn
                 */}
                <a
                  href="https://www.linkedin.com/in/arpit-sharma-usc/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github
                 */}
                <a
                  href="https://github.com/Arpit-Sharma-USC"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* youtube
                 */}
                <a
                  href="https://www.youtube.com/channel/UC56gCKhI6Rbc5prly_rlOPQ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* Instagram
                 */}
                <a
                  href="https://www.instagram.com/arpit_07_sharmaji_ka_ladka/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
