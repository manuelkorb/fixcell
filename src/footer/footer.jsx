import React from "react";
import "./footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import Form from "../form/form";
import FormModal from "../presupuesta/presupuesta";
import { FooterForm } from "../components/footer";

const openSocialMedia = (link) => {
  window.open(link, "_blank");
};

export const FooterSpace = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSuccess = () => {
    messageApi.success("¡Formulario enviado con éxito!");
  };

  const handleFormError = () => {
    messageApi.error(
      "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo."
    );
  };
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-principal">
          <h1 className="footer-title">
            <span className="footer-title-icon">
              <MobileOutlined />
            </span>
            CellFixers
          </h1>
          <div className="footer-content">
            <div className="social-media">
              <h4 className="social-media-h4">
                ¿Necesitás ayuda? Mandanos un WhatsApp
              </h4>
              <ul className="social-media-ul">
                <li>
                  <a
                    href="https://wa.me/541128626198"
                    className="social-media-wpp"
                  >
                    +54911 28626198
                  </a>
                </li>
                <div className="social-media-buttons">
                  <li>
                    <Button
                      className="buttons-social-media"
                      onClick={() =>
                        openSocialMedia("https://www.facebook.com/tupagina")
                      }
                    >
                      <FacebookOutlined className="buttons-icons" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="buttons-social-media"
                      onClick={() =>
                        openSocialMedia("https://www.instagram.com/tuinstagram")
                      }
                    >
                      <InstagramOutlined />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="buttons-social-media"
                      onClick={() =>
                        openSocialMedia(
                          "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwQnlTKMmzmZTJpsfXXqjHnKTsjTBsTsHnLmxDgdfSfSLvtBjDzwcxhZFNHczfgRPTJZplb"
                        )
                      }
                    >
                      <MailOutlined className="buttons-icons" />
                    </Button>
                  </li>
                </div>
              </ul>
            </div>
            <div className="address">
              <a
                href="https://www.google.com/maps/place/En+un+toque+Reparaci%C3%B3nes./@-34.4375127,-58.5627325,18z/data=!3m1!4b1!4m6!3m5!1s0x1b54c0bf66bdd25:0x52736f5720216cca!8m2!3d-34.4375149!4d-58.561445!16s%2Fg%2F11b7grh8x9?entry=ttu"
                className="social-media-ubi"
              >
                Constitucion 801, San Fernando
              </a>
            </div>
            <div className="opening-hours">
              <h4 className="opening-hours-h4">Horarios de atención</h4>
              <p className="footer-paragraph">
                Lunes a Viernes de 10:00 a 13:00 y de 14:00 a 18:00
              </p>
              <p className="footer-paragraph">Sábados de 10:30 a 13:30</p>
            </div>
          </div>
        </div>
        <div className="fotter-form">
          <FooterForm />
        </div>
      </div>
      <div className="copyright">
        <p className="footer-paragraph">
          &copy; 2023 MKWebDevelop. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};
