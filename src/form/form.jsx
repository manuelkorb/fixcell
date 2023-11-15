import React from "react";
import "./form.css";
import { Button, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";

function Form({ onFormSuccess, onFormError }) {
  const [messageApi, contextHolder] = message.useMessage();

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
      <form
        className="form"
        action="https://formsubmit.co/manuelkorb12@gmail.com"
        method="POST"
      >
        <h1 className="form-h1">
          ¿Todavía no solicitaste un presupuesto para reparar tu teléfono?
        </h1>
        <p className="form-p">
          Completa el formulario y recibí una cotización en el momento.
        </p>
        <div className="form-inputs">
          <Input
            type="text"
            name="nombre"
            placeholder="Nombre"
            style={{ marginBottom: "5px", marginTop: "15px" }}
            required
          />

          <Input
            type="text"
            name="mail"
            placeholder="Mail"
            style={{ marginBottom: "5px" }}
            required
          />

          <Input
            type="text"
            name="numero"
            style={{ marginBottom: "5px" }}
            placeholder="Numero de Celular"
            required
          />

          <Input
            type="text"
            name="modelo"
            style={{ marginBottom: "5px" }}
            placeholder="Modelo"
            required
          />

          <TextArea
            name="asunto"
            placeholder="Contanos con qué te podemos ayudar!"
            required
          />

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
    </>
  );
}

export default Form;
