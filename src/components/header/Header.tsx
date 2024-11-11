import { Button, Input, Modal } from 'antd';
import type { GetProps } from 'antd';
import file from '../../assets/file.svg';
import like from '../../assets/favorite.svg';
import user from '../../assets/person.svg';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header = ({ open }: { open: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  return (

    <div className={`header ${open ? 'header-open' : 'header-closed'}`}>
      <div className="logo">
        <Search
          className="custom-search"
          placeholder="Найти объявления..."
          onSearch={onSearch}
        />
      </div>
      <div>
        <Modal title="вы еще не зарегистрированы" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Пожалуйста зарегистрируйтесь</p>
        </Modal>
      </div>
      <div className="header-actions">
        <button onClick={() => { token ? navigate('/post') : showModal() }} className="post-button">Разместить объявление</button>
        <img src={file} alt="file" />
        <button onClick={() => navigate('/favorite')} className="like-button"><img src={like} alt="like" /></button>
        <Link to={token ? '/profile' : '/login'}><img src={user} alt="user" /></Link>
        <select className="language-select" name="language">
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
