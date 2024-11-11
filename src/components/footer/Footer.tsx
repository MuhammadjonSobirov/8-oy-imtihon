import "./footer.css";
import { MailOutlined, PhoneOutlined, } from "@ant-design/icons";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { TbBrandFacebook } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3>Полезные Ссылки</h3>
          <ul>
            <li><a className="footer__column_children" href="#!">О Нас</a></li>
            <li><a className="footer__column_children" href="#!">Пользовательское Соглашение</a></li>
          </ul>
        </div>

        <div>
          <h3>Наши Страницы</h3>
          <ul className="footer__social">
            <li><a className="social" href="#!"><TbBrandTelegram /></a></li>
            <li><a className="social" href="#!"><CiYoutube /></a></li>
            <li><a className="social" href="#!"><TbBrandFacebook /></a></li>
            <li><a className="social" href="#!"><FaInstagram /></a></li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column_title"><PhoneOutlined /> Тех. поддержка</p>
          <h3> +998 99 880 80-80</h3>
          <p className="footer__column_text"><MailOutlined /> info@utopia.uz</p>
          <p className="footer__column_text"><AiOutlineHome /> г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>©️ 2021 Utopia | Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
