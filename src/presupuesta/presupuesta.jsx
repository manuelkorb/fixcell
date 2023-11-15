import React from "react";
import "./presupuesta.css";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Modal } from "antd";
import { useState } from "react";

function FormModal({ onFormSuccess, onFormError }) {
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
  const handleFormSubmit = () => {
    const success = true;

    if (success) {
      onFormSuccess();
      handleOk();
    } else {
      onFormError();
    }
  };
  return (
    <>
      <Button type="primary" className="button-presupuesto" onClick={showModal}>
        PRESUPUESTO
      </Button>
      <Modal
        className="modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          action="https://formsubmit.co/manuelkorb12@gmail.com"
          method="POST"
        >
          <h1>COMPLETE EL FORMULARIO</h1>
          <div>
            <label for="nombre">NOMBRE:</label>
            <Input type="text" name="nombre" required />
          </div>

          <div>
            <label for="mail">MAIL:</label>
            <Input type="text" name="mail" required />
          </div>

          <div>
            <label for="numero">NUMERO DE CELULAR:</label>
            <Input type="text" name="numero" required />
          </div>

          <div>
            <label for="modelo">MODELO DE CELULAR:</label>
            <Input type="text" name="modelo" required />
          </div>

          <div>
            <label for="asunto">ASUNTO:</label>
            <TextArea
              name="asunto"
              placeholder="Contanos con qué te podemos ayudar!"
              required
            />
          </div>

          <div>
            <Button
              style={{ width: "100%", marginTop: "10px", height: "40px" }}
              type="default"
              htmlType="submit"
              onClick={handleFormSubmit}
            >
              ENVIAR
            </Button>
          </div>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/"
          ></input>
        </form>
      </Modal>
    </>
  );
}

export default FormModal;
