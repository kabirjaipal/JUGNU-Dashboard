import React from "react";
import { useState } from "react";
import "./contact.css";
import DiscordWebhook from "discord-webhook-ts";
import { developers } from "../../settings/developers";

const fromOptions = [
  {
    name: `name`,
    type: `text`,
    placeholder: `Enter Your Name ...`,
  },
  {
    name: `email`,
    type: `email`,
    placeholder: `Enter Your Email ...`,
  },
  {
    name: `subject`,
    type: `text`,
    placeholder: `Why are You Sending This Mail ?`,
  },
];

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleFrom = async (e) => {
    // code
    e.preventDefault();
    const channel = new DiscordWebhook(import.meta.env.VITE_WEBHOOK_URL);
    await channel
      .execute({
        content: `<@882481863661342770> New Email Here`,
        embeds: [
          {
            author: {
              name: `Email From ${user.name}`,
              icon_url: "",
            },
            description: `${user.message.substring(0, 4000)}`,
            fields: [
              {
                name: `Name `,
                value: `> ${user.name}`,
              },
              {
                name: `Subject `,
                value: `> ${user.subject}`,
              },
              {
                name: `Email `,
                value: `> ${user.email}`,
              },
            ],
            footer: {
              text: `Coded By Kabir Singh`,
              icon_url: "",
            },
          },
        ],
      })
      .then(() => {
        e.target.reset();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  function toCap(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="contactbox">
        <h1>Developers</h1>
        <div className="dev_info">
          {developers.map((dev, index) => (
            <div key={index} className="dev">
              <p>Name : {dev.name}</p>
              <p>Skills : {dev.skills} </p>
              <p>Discord Tag : {dev.tag} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="contact_form">
        <h1 className="contact_form_title">Contact US</h1>
        <form onSubmit={handleFrom} className="form">
          {fromOptions.map((item, index) => (
            <div className="form_box" key={index}>
              <label htmlFor={item.name}>{toCap(item.name)}</label>
              <input
                type={item.type}
                name={item.name}
                onChange={handleValue}
                placeholder={item.placeholder}
                required={true}
              />
            </div>
          ))}
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleValue}
            name="message"
            placeholder="Write Your Message Here"
          ></textarea>
          <button type={"submit"} className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
