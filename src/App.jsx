import React from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Presupuesta from "./presupuesta/presupuesta";
import { ServiceList } from "./services/services";
import { WhatsAppOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { FooterSpace } from "./footer/footer";
import { QuestionsList } from "./questions/questions";

const openWhatsApp = () => {
  window.open("https://wa.me/541128626198", "_blank");
};

function App() {
  return (
    <>
      <div id="home">
        <Menu />
      </div>
      <div id="services">
        <ServiceList />
      </div>
      <QuestionsList />
      <FooterSpace />
      <FloatButton
        className="float-button"
        icon={<WhatsAppOutlined />}
        onClick={openWhatsApp}
        tooltip={<div>WhatsApp</div>}
      />
    </>
  );
}

export default App;
