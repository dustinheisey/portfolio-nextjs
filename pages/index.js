import "../scss/style.scss";
import React, { Component } from "react";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";
import Button from "../components/Button";

class Index extends Component {
  render() {
    return (
      <Layout title="Get an Online Presence | Dustin Heisey">
        <main className="padding-lg landing">
          <Card name="landing-services">
            <h1 className="margin-b-md">
              Take Your Business to The Next Level
            </h1>
            <p className="margin-b-md color-m">
              Let me design and build you a highly converting, mobile first,
              secure and optimized website today.
            </p>
            <Button text="Check Out My Services" link="/services" />
          </Card>

          <Card name="landing-benefits" image>
            <img
              src="../static/benefits.jpg"
              alt="Benefits of getting an online presence"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md">Why Online?</h2>
              <p className="margin-b-md">
                Find out why you can't succeed without an online presence in
                2018.
              </p>
              <Button text="Explore The Benefits" link="/benefits" />
            </div>
          </Card>

          <Card name="landing-about">
            <h2 className="margin-b-lg">You Need More Than Just a Website</h2>
            <div className="display-f align-c justify-l width-p-lg">
              <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
                <img
                  src="../static/mobile.svg"
                  alt="Mobile First"
                  className="height-p-xmd t-height-p-lg"
                />
              </div>
              <div className="display-f direction-c align-l justify-se">
                <h3>Responsive</h3>
                <p className="color-m">
                  Make users love your site on all screen sizes.
                </p>
              </div>
            </div>
            <div className="display-f align-c justify-l width-p-lg">
              <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
                <img
                  src="../static/bulb.svg"
                  alt="Purposeful Design"
                  className="height-p-xmd t-height-p-lg"
                />
              </div>
              <div className="display-f direction-c align-l justify-se">
                <h3>Made With Purpose</h3>
                <p className="color-m">Design your app thoughtfully.</p>
              </div>
            </div>
            <div className="display-f align-c justify-l width-p-lg">
              <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
                <img
                  src="../static/security.svg"
                  alt="Security"
                  className="height-p-xmd t-height-p-lg"
                />
              </div>
              <div className="display-f direction-c align-l justify-se">
                <h3>Secure</h3>
                <p className="color-m">Keep your data safe.</p>
              </div>
            </div>
            <div className="display-f align-c justify-l width-p-lg">
              <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
                <img
                  src="../static/optimize.svg"
                  alt="Optimization"
                  className="height-p-xmd t-height-p-lg"
                />
              </div>
              <div className="display-f direction-c align-l justify-se">
                <h3>Optimized</h3>
                <p className="color-m">
                  Use new technology for blazing fast speeds.
                </p>
              </div>
            </div>
            <h4 className="margin-tb-lg">
              <strong>
                Learn how I'm different from your average UX Professional.
              </strong>
            </h4>
            <Button text="Discover My Process" link="/about" />
          </Card>

          {/* <Testimonials /> */}

          <Card name="landing-works">
            <h2 className="margin-b-md">Check Out My Recent Work</h2>
            <a href="https://www.my-teamgear.com">
              <div>
                <img
                  src="../static/team.jpg"
                  alt="MY Team Gear"
                  className="width-p-lg height-a"
                />
                <h3 className="margin-b-md">MY Team Gear</h3>
                <p className="margin-b-md color-m">
                  Custom team gear for every sport and fan imaginable.
                </p>
              </div>
            </a>
            <a href="http://www.aerialsgymnastics.net">
              <div>
                <img
                  src="../static/aerials.jpg"
                  alt="Aerials Gymnastics"
                  className="width-p-lg height-a"
                />
                <h3 className="margin-b-md">Aerials</h3>
                <p className="margin-b-md color-m">
                  Join a high performing gymnastics gym that treats its students
                  like family.
                </p>
              </div>
            </a>
            <Button text="See More" link="/works" />
          </Card>

          <Card name="landing-contact">
            <h1 className="margin-b-md">Ready to Invest in Your Business?</h1>
            <p className="margin-b-md color-m">
              Let's make your online presence today. send me some basic
              information and I'll get in touch ASAP!
            </p>
            <Button text="Let's Connect" link="/contact" />
          </Card>
        </main>
      </Layout>
    );
  }
}

export default Index;
