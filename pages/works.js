import React from "react";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";

const Works = props => {
  return (
    <Layout title="Dustin Heisey | Works">
      <main className="padding-lg works">
        <Card>
          <h1 className="margin-b-md">Featured Projects</h1>
          <p className="margin-b-md color-m">
            Here are some of my featured projects. Work with me and I'll add
            yours to the list!
          </p>
        </Card>
        <div className="works-grid">
          <Card
            image
            hover
            link="http://www.aerialsgymnastics.net"
            classes="height-p-lg"
          >
            <img
              src="../static/aerials-works.jpg"
              alt="Aerials Gymnastics"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Aerials Gymnastics</h2>
              <p className="margin-b-md text-md">
                Join a high performing gymnastics gym that treats its students
                like family.
              </p>
            </div>
          </Card>
          <Card
            image
            hover
            link="https://www.my-teamgear.com"
            classes="height-p-lg"
          >
            <img
              src="../static/team-works.jpg"
              alt="Aerials Gymnastics"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">MY Team Gear</h2>
              <p className="margin-b-md text-md">
                Custom team gear for every sport and fan imaginable.
              </p>
            </div>
          </Card>
          <Card
            image
            hover
            link="https://geomancy.dustinheisey.com"
            classes="height-p-lg"
          >
            <img
              src="../static/geomancy-works.jpg"
              alt="Geomancy"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Geomancy</h2>
              <p className="margin-b-md text-md">
                Can you tap your way to the final shape?
              </p>
            </div>
          </Card>
          <Card
            image
            hover
            link="https://snake.dustinheisey.com"
            classes="height-p-lg"
          >
            <img
              src="../static/snake-works.jpg"
              alt="Snake"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Snake</h2>
              <p className="margin-b-md text-md">
                Play a nostalgic game with a minimal aesthetic.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </Layout>
  );
};

export default Works;
