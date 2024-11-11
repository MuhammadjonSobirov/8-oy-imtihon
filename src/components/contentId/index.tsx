import "./contentId.css"
import location from "../../assets/location.svg"
import fire2 from "../../assets/fire2.svg"
import favorite from "../../assets/favorite.svg"
import  useStore  from "../../zustand/store.js"
import likedpost from "../../assets/licedpost.svg";
import share from "../../assets/share.svg";
import singleAbout from "../../assets/singleAbout.svg"
import { useState } from "react"

const ContentId = ({ film }) => {
    const { setTicket, tickets, deleteTicket } = useStore();
    const [licked, setLicked] = useState<boolean>(false);

    const handleTicketClick = (post: any) => {
        const ticketExists = tickets.some(ticket => ticket.id === post.id);
        if (ticketExists) {
            alert("Такой билет уже бронирован");
        } else {
            setTicket(post);
            setLicked(!licked);
        }
    };

    const handleDeleteTicket = (id: number) => {
        deleteTicket(id);
        setLicked(!licked);
    };
    return (
        
        <div className="contentId__container">
            <div >
                <div>
                    <img className="contentId__img" src={film.avatar} alt="" />
                </div>
                <ul className="content_img_list">
                    <li className="contentId_img_child">
                        <img className="contentId__img_child_img" src={film.avatar} alt="foto" />
                    </li>
                    <li className="contentId_img_child">
                        <img className="contentId__img_child_img" src={film.avatar} alt="foto" />
                    </li>
                    <li className="contentId_img_child">
                        <img className="contentId__img_child_img" src={film.avatar} alt="foto" />
                    </li>
                    <li className="contentId_img_child">
                        <img className="contentId__img_child_img" src={film.avatar} alt="foto" />
                    </li>
                </ul>
                <div className="contentId__phone">
                    <div className="contentId__phone_container">
                        <span >+998 99 555 60-70</span>
                        <button className="contentId__btn">Показать номер</button>
                    </div>
                    <div className="contentId__phone_container">
                        <span>{film.location}</span>
                        <button className="contentId__btn">Показать номер</button>
                    </div>
                </div>
                <div className="contentId__location">
                    <img className="contentId__location_img" src={location} alt="location" />
                </div>
            </div>
            <div className="contentId__info">
                <div className="contentId__info_block">
                    <div className="contentId__info_title">
                        <img src={fire2} alt="" /><span className="contentId__info_title_text">{film.name}</span>
                    </div>
                    <div>
                        <button className="contentId__info_btn">
                            <img src={share} alt="share" />
                        </button>
                        <button onClick={licked ? () => handleDeleteTicket(film.id) : () => handleTicketClick(film)} className="contentId__info_btn"><img src={licked ? likedpost : favorite} alt="like" /></button>
                    </div>
                </div>
                <div>
                    <h3 className="contentId__info_price">$ {film.price}</h3>
                    <div>
                        <img src={singleAbout} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentId