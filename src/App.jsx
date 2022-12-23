import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Background,
  Commands,
  Contact,
  Footer,
  Home,
  Navbar,
} from "./components";
import { Provider } from "./Contexts/Context";
import axios from "axios";
import config from "./settings/config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/commands",
    element: <Commands />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  const [user, setUser] = useState(null);
  const [about, setAbout] = useState(null);
  const [cmdsData, setCmdsData] = useState(null);
  // fetching home data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${config.baseurl}/home`);
      setUser(data);
    };
    getData();
  }, []);
  // fetching about data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${config.baseurl}/about`);
      setAbout(data);
    };
    getData();
  }, []);
  // fetching commands data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${config.baseurl}/commands`);
      setCmdsData(data);
    };
    getData();
  }, []);
  return (
    <Provider value={{ user, about, cmdsData }}>
      <Navbar />
      <Background />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  );
};

export default App;
