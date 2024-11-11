import { useNavigate } from "react-router-dom";
import "./register.css";
import { Flex, Input, Typography } from "antd";
import VerificationInput from "react-verification-input";
import { FaLongArrowAltLeft } from "react-icons/fa";


import type { GetProps } from 'antd';
import { useEffect, useState } from "react";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const Login = () => {
    const [count, setCount] = useState<number>(59);
    const [code, setCode] = useState<string>("")
    const navigate = useNavigate();
    const submitHandler = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Login qilishda xatolik");
            }

            const json = await response.json();
            localStorage.setItem("token", json.token);
            alert("Login muvaffaqiyatli amalga oshirildi");
            navigate("/");
        } catch (err: any) {
            alert(err.message);
        }
    };

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000);
        }
    }, [count]);

    return (
        <div className="register">
            <div className="register__container">
                <h3 className="register__title">Подтверждение номера</h3>
                <div className="register__text">
                    <button className="register__button1" onClick={() => navigate("/login")}>
                        <FaLongArrowAltLeft /> Вернуться
                    </button>
                    <p className="register__text1">
                        Введите код из СМС
                    </p>
                    <p className="register__text2">
                        Не получили код?
                        <button onClick={() => setCount(59)} className="register__text3">
                            Отправить повторно
                        </button>
                    </p>
                    <p className="register__text4">
                        Получить повторный код можно через <span>00:{count}</span>
                    </p>
                </div>
                <div className="register__form">
                    <Flex gap="middle" align="flex-start" vertical>
                        <VerificationInput classNames={{
                            container: "container1",
                            character: "character",
                            characterInactive: "character--inactive",
                            characterSelected: "character--selected",
                            characterFilled: "character--filled",
                        }} placeholder=" " onChange={setCode} value={code} length={6} />
                    </Flex>
                    <button className="register__button" onClick={submitHandler}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
