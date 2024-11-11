import { useState } from "react"
import "./myProfile.css"
import InputMask from "react-input-mask"

const MyProfile = () => {
  const [tel, setTel] = useState<string>('')

  return (
    <div className="myProfile">
      <h2>Мой профиль</h2>
      <div>
        <p>Имя</p>
        <input className="input_name" type="text" placeholder="Имя" />
      </div>
      <div>
        <p>Телефон</p>
        <InputMask onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} value={tel} className="input_tel" mask="+999 (99) 999-99-99" replacement={{ _: /\d/ }} placeholder="Телефон" />
      </div>
      <button className="save">Сохранить</button>
      <div>
        <p className="tarif">Текущий тариф</p>
        <h3>Optimal Plan 3</h3>
        <p className="tarif">Разрешение на размещение объявлений</p>
        <h3 className="yes">Есть</h3>
        <p className="tarif">Разрешение на просмотр дополнительной информации об объявлении</p>
        <h3 className="no">Нет
          <span className="tarif_btn">Подписаться на
            <span className="tarif_span">тарифный план</span>
          </span>
        </h3>
        <button className="save">Поднять объявление в топ</button>
      </div>
    </div>
  )
}

export default MyProfile