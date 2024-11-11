import "./profile.css"
import user from "../../assets/person.svg"
import like from "../../assets/favorite.svg"
import file from "../../assets/file.svg"
import balans from "../../assets/balans.svg"
import idingiz from "../../assets/idingiz.svg"
import tarif from "../../assets/tarif.svg"
import fikrlar from "../../assets/fikrlar.svg"
import exit from "../../assets/exit.svg"
import { Modal } from "antd"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import MyProfile from "../../components/myProfile"

const Profile = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [count, setCount] = useState(1);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    return (
        <div className="profile">
            <h1>Мой аккаунт</h1>
            <div className="profile__container">
                <div className="profile__left">
                    <ul className="profile__list">
                        <li onClick={() => setCount(1)} className={count === 1 ? "profile__item_active" : "profile__item"}>
                            <img src={user} alt="user" /> Мой профиль
                        </li>
                        <li onClick={() => setCount(2)} className={count === 2 ? "profile__item_active" : "profile__item"}>
                            <img src={file} alt="user" /> Мои объявления
                        </li>
                        <li onClick={() => navigate('/favorite')} className={count === 3 ? "profile__item_active" : "profile__item"}>
                            <img src={like} alt="user" /> Избранное
                        </li>
                        <li onClick={() => setCount(4)} className={count === 4 ? "profile__item_active" : "profile__item"}>
                            <img src={balans} alt="user" /> Баланс: <span>10,000 UZS</span>
                        </li>
                        <li onClick={() => setCount(5)} className={count === 5 ? "profile__item_active" : "profile__item"}>
                            <img src={idingiz} alt="user" /> Ваш ID:
                            <span>1001</span>
                        </li>
                        <li onClick={() => setCount(6)} className={count === 6 ? "profile__item_active" : "profile__item"}>
                            <img src={tarif} alt="user" /> Тарифы
                        </li>
                        <li onClick={() => setCount(7)} className={count === 7 ? "profile__item_active" : "profile__item"}>
                            <img src={fikrlar} alt="user" /> Отзывы
                        </li>
                        <li className="profile__item1">
                            <button onClick={() => { token ? showModal() : navigate('/login') }} className="profile__btn">
                                <img src={exit} alt="user" />  Выйти из аккаунта
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    {
                        count === 1 ? <MyProfile /> :
                            count === 2 ? <h1>Мои объявления</h1> :
                                count === 3 ? <h1>Избранное</h1> :
                                    count === 4 ? <h1>Баланс</h1> :
                                        count === 5 ? <h1>Ваш ID</h1> :
                                            count === 6 ? <h1>Тарифы</h1> :
                                                count === 7 ? <h1>Отзывы</h1> :""
                    }
                </div>
                <Modal title="вы правда хотите выйти" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>если вы хотите выйти</p>
                </Modal>
            </div>
        </div>
    )
}

export default Profile