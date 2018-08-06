import React from "react";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";
import CardGrid from "../components/cards/CardGrid";
import Facebook from "../static/Facebook.svg";
import Twitter from "../static/Twitter.svg";
import Instagram from "../static/Instagram.svg";
import Github from "../static/GitHub.svg";
import LinkedIn from "../static/Linkedin.svg";
import Messenger from "../static/Messenger.svg";
import Phone from "../static/phone.svg";
import Email from "../static/envelope.svg";

const Contact = props => {
  return (
    <Layout title="Dustin Heisey | Contact">
      <main className="padding-lg contact height-p-lg">
        <Card name="contact-text" classes="align-c justify-c">
          <h1 className="margin-b-sm">Connect With Me</h1>
          <div className="display-f justify-l align-c width-p-lg">
            <img
              src={Phone}
              alt="Phone Number"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="tel:+4697189783"
              className="margin-sm color-d hover-color-m cursor-p"
            >
              (469) 718-9783
            </a>
          </div>
          <div className="display-f justify-l align-c width-p-lg">
            <img
              src={Email}
              alt="Email Address"
              className="margin-r-sm height-v-xsm"
            />
            <p className="margin-sm color-d">hello@dustinheisey.com</p>
          </div>
        </Card>
        <CardGrid name="contact-social">
          <a
            href="https://www.facebook.com/heisey.dustin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://twitter.com/dustin_heisey"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Twitter}
              alt="Twitter"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://www.instagram.com/dustin_heisey/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          {/* <a
            href="https://dustin-heisey.slack.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Slack} alt="Slack" className="grow border-r-xmd" />
          </a> */}
          <a
            href="https://github.com/dustinheisey"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Github}
              alt="Github"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          {/* <a
            href="https://www.pinterest.com/dustin_heisey/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Pinterest}
              alt="Pinterest"
              className="grow border-r-xmd"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/heisey-dustin/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="http://m.me/heisey.dustin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Messenger}
              alt="Messenger"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
        </CardGrid>
        <Card name="contact-form">
          <form
            name="contact"
            method="POST"
            action="https://formspree.io/dustin@dustinheisey.com"
            className="display-f direction-c align-l justify-sb margin-tb-md width-p-lg"
          >
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="name" className="margin-sm">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                autoComplete="name"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="email" className="margin-sm">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                autoComplete="email"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="message" className="margin-sm">
                <strong>
                  Message <span className="text-sm color-m">(Optional)</span>
                </strong>
              </label>
              <textarea
                id="message"
                name="Message"
                rows="6"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <input type="hidden" name="_next" value="/" />
            <button
              type="submit"
              className="border-r-md bg-p-d padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l"
            >
              <p className="color-l">Send</p>
            </button>
          </form>
        </Card>
      </main>
    </Layout>
  );
};

export default Contact;
