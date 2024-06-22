import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((project, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={project.img} alt={project.name} />
            </CardLeft>
            <CardRight>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <TechCardContainer>
                {project.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                <a
                  className="btn SecondaryBtn btn-shadow"
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>

                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo ➜
                </a>
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
