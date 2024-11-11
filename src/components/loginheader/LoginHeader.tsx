import file from '../../assets/file.svg';
import like from '../../assets/favorite.svg';
import user from '../../assets/person.svg';
import logo from '../../assets/logo.svg';
import './loginHeader.css';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { useState } from 'react';

const LoginHeader = ({ open }: { open: boolean }) => {
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
    <div className={`header1`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Modal title="вы еще не зарегистрированы" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Пожалуйста зарегистрируйтесь</p>
        </Modal>
      </div>
      <div className="header-actions">
        <button onClick={() => token ? navigate('/post') : showModal()} className="post-button">Разместить объявление</button>
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

export default LoginHeader;
