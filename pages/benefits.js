import React from "react";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";
import Button from "../components/Button";

const Benefits = props => {
  return (
    <Layout title="Dustin Heisey | Benefits">
      <main className="padding-lg benefits">
        <Card name="benefits-intro">
          <h1 className="margin-b-md">
            What are the benefits of having your own website?
          </h1>
          <p className="margin-b-md color-m">
            There are many benefits to owning your own website, and every day
            their number and importance increases. Check out some of the
            benefits below.
          </p>
        </Card>
        <Card name="benefits-demand">
          <h1 className="margin-b-md">
            Expands demand for your product or service
          </h1>
          <p className="margin-b-md color-m">
            By having a website, you expand your reach from your local area to
            potentially the entire world. It doesn't matter how amazing your
            product or service is if nobody knows about it. Having a website
            makes many more people aware of your wonderful company.
          </p>
        </Card>
        <Card name="benefits-questions">
          <h1 className="margin-b-md">
            Gives users answers to questions immediately
          </h1>
          <p className="margin-b-md color-m">
            Customers obviously prefer to have their questions answered as soon
            as possible. With a website you can direct them to those answers
            immediately instead of having to answer the same questions over and
            over again.
          </p>
        </Card>
        <Card name="benefits-competitors">
          <h1 className="margin-b-md">
            Gives you an advantage over your competitors
          </h1>
          <p className="margin-b-md color-m">
            In 2018 it has become a standard for companies of all industries and
            sizes to have their own online presence. If you don't follow this
            trend, your competitors will. Attract your customers by getting a
            website before your competitors do.
          </p>
        </Card>

        <Card name="benefits-contact">
          <h1 className="margin-b-md">And Many More</h1>
          <p className="margin-b-md color-m">
            There are so many benefits to owning your own website that that it's
            hard to say them all. Contact me and I can tell you a little more
            about them.
          </p>
          <Button text="Connect With Me" link="/contact" />
        </Card>
      </main>
    </Layout>
  );
};

export default Benefits;
