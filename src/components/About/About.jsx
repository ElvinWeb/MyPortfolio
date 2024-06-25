import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Elvin Sarkarov</strong>. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Iste, aspernatur
              nulla sapiente dolore, provident voluptatum dolorum iusto
              voluptatem, saepe ab distinctio reiciendis quis maiores.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quas magni provident sunt soluta perferendis dolores facere quod
              illo. Hic quo, nam ullam magnam placeat dolorem laborum quos
              quisquam quod.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quas magni provident sunt soluta perferendis dolores facere quod
              illo. Hic quo, nam ullam magnam placeat dolorem laborum quos
              quisquam quod.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
