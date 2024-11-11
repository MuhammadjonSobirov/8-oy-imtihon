import { Button } from "antd";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import metr from "../../assets/metr.svg";
import xona from "../../assets/xona.svg";
import "./filter.css";

const Filter = ({ onClose }: { onClose: () => void }) => {

  return (
    <div className="filter-container">
      <Button
        className="close-drawer"
        type="primary"
        onClick={onClose}
      >
        <img src={menu} alt="close menu" />
      </Button>
      <div className="filter-logo-container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="filter-title-container">
        <h3 className="filter-title">Фильтр</h3>
        <div className="filter-selects-container">
          <div className="filter-select-container">
            <span className="filter-span"></span>
            <select className="filter-select" name="Продажа">
              <option value="Продажа">Продажа</option>
              <option value="Аренда">Аренда</option>
              <option value="Сожит">Сожит.</option>
            </select>
          </div>
          <div className="filter-select-container">
            <span className="filter-span"></span>
            <select className="filter-select" name="Продажа">
              <option value="Аренда">Аренда</option>
              <option value="Продажа">Продажа</option>
              <option value="Сожит">Сожит.</option>
            </select>
          </div>
          <div className="filter-select-container">
            <span className="filter-span"></span>
            <select className="filter-select" name="Продажа">
              <option value="Сожит">Сожит.</option>
              <option value="Продажа">Продажа</option>
              <option value="Аренда">Аренда</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <select className="filter_select" name="Категория недвижимости">
              <option value="Категория недвижимости">Категория недвижимости</option>
              <option value="Область">Область</option>
              <option value="Район">Район</option>
              <option value="Ремонт">Ремонт</option>
            </select>
          </div>
          <div>
            <select className="filter_select" name="Область">
              <option value="Область">Область</option>
              <option value="Продажа">Продажа</option>
              <option value="Аренда">Район</option>
              <option value="Ремонт">Ремонт</option>
            </select>
          </div>
          <div>
            <select className="filter_select" name="Категория недвижимости">
              <option value="Район">Район</option>
              <option value="Категория недвижимости">Категория недвижимости</option>
              <option value="Область">Область</option>
              <option value="Ремонт">Ремонт</option>
            </select>
          </div>
          <div>
            <select className="filter_select" name="Категория недвижимости">
              <option value="Ремонт">Ремонт</option>
              <option value="Категория недвижимости">Категория недвижимости</option>
              <option value="Область">Область</option>
              <option value="Район">Район</option>
            </select>
          </div>
          <div className="filter_select_container">
            <span>Комнат</span><span className="xona"><img src={xona} alt="xona" /></span>
          </div>
          <div className="filter_select_container">
            <span>Комнат</span><span className="xona"><img src={metr} alt="metr" /></span>
          </div>
          <div>
            <h4>Комиссионные</h4>
            <div className="filter_commission">
              <label>
                <span>Да</span>
                <input type="radio" name="commission" value="yes" />
              </label>
              <label>
                <span>Нет</span>
                <input type="radio" name="commission" value="no" />
              </label>
              <button onClick={onClose} className="filter-button">Применить</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
