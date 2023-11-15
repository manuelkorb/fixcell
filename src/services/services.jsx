import React from "react";
import { useState } from "react";
import { Modal } from "antd";
import "./services.css";

const initServices = [
  {
    id: "1",
    cat: "Reparacion de Pantalla",
    img: "/assets/service1.jpg",
    modal: "Te reemplzamos la pantalla aberiada y te lo dejamos como nuevo!",
  },
  {
    id: "2",
    cat: "Cambio de Bateria",
    img: "/assets/service2.jpg",
    modal:
      "Sacamos la bateria que ya no rinde y te colocamos una nueva y por supuesto de primera marca!",
  },
  {
    id: "3",
    cat: "Soluciones Tecnicas",
    img: "/assets/service3.jpg",
    modal:
      "Ante cualquier problema que tenga tu dispositivo nosotros lo podemos solucionar!",
  },
];

const ServiceItem = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const serviceStyle = {
    backgroundImage: `url(${service.img})`,
  };

  return (
    <div className="service" style={serviceStyle}>
      <button className="service-button" onClick={showModal}>
        {service.cat}
      </button>
      <Modal
        className="service-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <p>{service.modal}</p>
        </div>
      </Modal>
    </div>
  );
};

export function ServiceList() {
  const services = initServices;
  return (
    <div className="service-list-container">
      <h1 className="title-servicelist">SERVICIOS</h1>
      <div className="service-list">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
