import React from "react";
import Layout from "../components/Layout";
import CardAbout from "../components/cards/CardAbout";
import Card from "../components/cards/Card";
import Button from "../components/Button";

const About = props => {
  return (
    <Layout title="Dustin Heisey | About">
      <main className="padding-lg about">
        <CardAbout />
        <Card name="about-instructions">
          <h1 className="margin-b-md">
            What Makes Me Different From Other Developers
          </h1>
          <p className="margin-b-md color-m">
            You can choose to work with many designers and developers, but most
            of them don't follow best practices and create a bare minimum
            solution to your problems. Find out how I am different below.
          </p>
        </Card>
        <Card name="about-mobile">
          <h1 className="margin-b-md">I Develop My Projects Mobile First</h1>
          <p className="margin-b-md color-m">
            Some time ago the percentage of users accessing the web on their
            mobile devices surpassed that of desktops. Instead of developing for
            the desktop, and then editing as the screen size gets smaller, I
            adopt the highly converting practice of developing for mobile and
            then editing as more space becomes available. This results in the
            best experience for all of your users.
          </p>
        </Card>
        <Card name="about-purpose">
          <h1 className="margin-b-md">I Design Every Element With Purpose</h1>
          <p className="margin-b-md color-m">
            I start every project by asing my clients what the end goal of their
            website is. Is it to get a sale? To get some contact info? To give
            users information? Whatever the purpose, I make sure that every
            design choice helps you achieve that goal.
          </p>
        </Card>
        <Card name="about-security">
          <h1 className="margin-b-md">I Keep Your Data Safe</h1>
          <p className="margin-b-md color-m">
            Crime has shifted more and more towards the internet over the past
            couple of years. It's no longer safe to have data on the web without
            some safeguards to protect it. All of the projects I complete
            utilize strong security protocols to protect you and your customers
            from data theft.
          </p>
        </Card>
        <Card name="about-reason-optimize">
          <h1 className="margin-b-md">I Optimize Every Project</h1>
          <p className="margin-b-md color-m">
            Site speed has always been important, but recently it has become a
            necessity. I utilize the best coding practices to keep your site
            fast and compliant with every web standard.
          </p>
        </Card>
        <Card name="about-reason-care">
          <h1 className="margin-b-md">I Treat Every Project like My Own</h1>
          <p className="margin-b-md color-m">
            I put the same time and effort as I do to finish my own projects on
            every project I complete. That means you get the best service
            possible, and it also means you get great support for any problems
            you have.
          </p>
        </Card>
        <Card name="about-contact">
          <h1 className="margin-b-md">Interested in Learning More?</h1>
          <p className="margin-b-md color-m">
            Connect with me and I'll help you succeed, guaranteed.
          </p>
          <Button text="Contact Me" link="/contact" />
        </Card>
      </main>
    </Layout>
  );
};

export default About;
