import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import { Col, Row, Image } from "react-bootstrap"; // Assuming you are using Bootstrap components

class About extends Component {
  render() {
    const { sharedBasicInfo, resumeBasicInfo } = this.props;

    const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : null;
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : null;
    const hello = resumeBasicInfo ? resumeBasicInfo.description_header : null;
    const about = resumeBasicInfo ? resumeBasicInfo.description : null;

    return (
      <section id="about">
        <Row className="mx-auto mb-5">
          <Col md={4} className="mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <Image height="250px" src={profilepic} alt="Avatar placeholder" />
                <Icon icon={angularIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
                <Icon icon={reactIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
                <Icon icon={vueIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
              </span>
            </div>
          </Col>

          <Col md={8} className="center">
            <Col md={10}>
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>{" "}
                  &nbsp;{" "}
                  <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>{" "}
                  &nbsp;{" "}
                  <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </section>
    );
  }
}

export default About;
