import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    const { resumeExperience, resumeBasicInfo } = this.props;

    if (!resumeExperience || !resumeBasicInfo) {
      return null; // Add proper handling for missing data
    }

    const sectionName = resumeBasicInfo.section_name.experience;
    const workElements = resumeExperience.map((work, i) => {
      const { technologies, mainTech, years, title, company } = work;

      const mainTechBadges = mainTech.map((technology, i) => (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));

      const techBadges = technologies.map((technology, i) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work"
          date={years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-angular experience-icon"></i>}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTechBadges}
          </div>
          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{techBadges}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black", textAlign: "center" }}>
              <span className="text-black">{sectionName}</span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {workElements}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
