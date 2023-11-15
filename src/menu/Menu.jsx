import React from "react";
import "./menu.css";
import FormModal from "../presupuesta/presupuesta";
import { FooterForm } from "../components/footer";
import { DownOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useState } from "react";

function Menu() {
  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSuccess = () => {
    messageApi.success("¡Formulario enviado con éxito!");
  };

  const handleFormError = () => {
    messageApi.error(
      "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo."
    );
  };
  const handleScrollClick = (elementId) => {
    const sectionToScroll = document.getElementById(elementId);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { key: "1", label: "Servicios", href: "#servicios" },
    { key: "2", label: "Presupesta", href: "#presupesta" },
    { key: "3", label: "En donde estamos?", href: "#ubicacion" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-title">
          <span className="header-title-icon">
            <MobileOutlined />
          </span>
          CellFixers
        </h1>
        <nav className="nav">
          <ul className="nav-ul">
            {/* <li className="nav-ul-li">
              <a
                className="nav-ul-a"
                href="https://www.google.com/maps/dir//Local+3+Galeria+de+las+Escaleras,+Constituci%C3%B3n+481,+B1646+CXI,+Provincia+de+Buenos+Aires/@-34.4374873,-58.6438462,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1b54c0bf66bdd25:0x52736f5720216cca!2m2!1d-58.5613817!2d-34.4374625?entry=ttu"
              >
                UBICACION
              </a>
            </li> */}
            <li className="nav-ul-li">
              <Button
                className="button-service"
                type="none"
                onClick={() => handleScrollClick("services")}
              >
                SERVICIOS
              </Button>
            </li>
            <li className="nav-ul-li">
              <FormModal />
            </li>
          </ul>
        </nav>
      </header>
      <div className="home">
        <div className="content">
          <h1 className="home-h1">
            <span className="blue-text">REPARACION</span> DE CELULARES
          </h1>
          <p className="home-p">+ DE 8 AÑOS EN EL MERCADO</p>
        </div>
        <button
          className="home-button"
          onClick={() => handleScrollClick("services")}
        >
          <DownOutlined style={{ color: "#000000", fontSize: "18px" }} />
        </button>
      </div>
    </>
  );
}

export default Menu;
