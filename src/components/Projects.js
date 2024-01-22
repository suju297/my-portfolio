import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      selectedProject: null,
    };
  }

  showDetailsModal = (project) => {
    this.setState({ detailsModalShow: true, selectedProject: project });
  };

  hideDetailsModal = () => {
    this.setState({ detailsModalShow: false, selectedProject: null });
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;
    const { detailsModalShow, selectedProject } = this.state;

    if (resumeProjects && resumeBasicInfo) {
      const sectionName = resumeBasicInfo.section_name.projects;
      const projects = resumeProjects.map((project) => (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div
              className="foto"
              onClick={() => this.showDetailsModal(project)}
            >
              <div>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      ));

      return (
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
              show={detailsModalShow}
              onHide={this.hideDetailsModal}
              data={selectedProject}
            />
          </div>
        </section>
      );
    }

    return null;
  }
}

export default Projects;
