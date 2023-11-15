import React, { useState, useEffect } from "react";
import FormModal from "../presupuesta/presupuesta";
import Form from "../form/form";
import { message } from "antd";

export const FooterForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSuccess = () => {
    messageApi.success("¡Formulario enviado con éxito!");
  };

  const handleFormError = () => {
    messageApi.error(
      "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo."
    );
  };

  useEffect(() => {
    // Escuchar cambios en el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer-form">
      {isMobile ? (
        <>
          <h1 className="form-h1">
            ¿Todavía no solicitaste un presupuesto para reparar tu teléfono?
          </h1>
          <p className="form-p">
            Completa el formulario y recibí una cotización en el momento.
          </p>
          <FormModal
            onFormSuccess={handleFormSuccess}
            onFormError={handleFormError}
          />
        </>
      ) : (
        <Form onFormSuccess={handleFormSuccess} onFormError={handleFormError} />
      )}
    </div>
  );
};
