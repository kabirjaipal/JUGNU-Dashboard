import { useContext } from "react";
import { channelimg, helpimg, playerimg } from "../../assets";
import { GlobalContext } from "../../Contexts/Context";
import "./home.css";

const FeatureOptions = [
  {
    title: `Music System`,
    description: `A Advance Music System With Custom Channel Support Where you can play songs and control with buttons and see queue directly on top`,
    image: channelimg,
  },
  {
    title: `Music Player`,
    description: `A Beautiful Music Player With Buttons. You Can Control Player By Buttons`,
    image: playerimg,
  },
  {
    title: `Help Command`,
    description: `A Beautiful Help Command So You Can See What Features and Commands Bot Have`,
    image: helpimg,
  },
];

const Home = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div className="bot">
      <h1 className="bot_title hover_line"> {user?.username} </h1>
      <p className="bot_description">
        An advanced Music Bot, with Button interactivity, Best Filters , Best UI
        , Own bot channel supported , based on Distube.JS and Discord.JS
      </p>

      <div className="features">
        {FeatureOptions.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature_info">
              <h1 className="hover_line"> {feature.title} </h1>
              <p> {feature.description} </p>
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className="feature_img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
