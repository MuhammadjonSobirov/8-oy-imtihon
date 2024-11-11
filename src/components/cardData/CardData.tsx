import { Pagination } from "antd";
import favorite from "../../assets/favorite.svg";
import { useState } from "react";
import { Card } from "antd";
import "./CardData.css";
import about2 from "../../assets/about2.svg";
import useStore from "../../zustand/store.js";
import likedpost from "../../assets/licedpost.svg";
import { Link, useNavigate } from "react-router-dom";



const { Meta } = Card;

interface RenderProps {
  data: {
    id: number;
    name: string;
    avatar: string;
    price: number;
    location: string;
  }[];
}

const CardData: React.FC<RenderProps> = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const { setTicket, tickets, deleteTicket } = useStore();
  const navigate = useNavigate();


  const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTicketClick = (post: any) => {
    const ticketExists = tickets.some(ticket => ticket.id === post.id);
    if (ticketExists) {
      alert("Такой билет уже бронирован");
    } else {
      setTicket(post);
    }
  };

  const handleDeleteTicket = (id: number) => {
    deleteTicket(id);
  };

  return (
    <div>
      <ul className="card-list">

        {currentData.map((post) => {
          const isLiked = tickets.some(ticket => ticket.id === post.id);

          return (
            <li key={post.id} className="card-item">
              <Card
                hoverable
                className="card"
                cover={<img onClick={() => navigate(`/content/${post.id}`)} className="card-image" alt="example" src={post.avatar} />}
              >
                <Link to={`/content/${post.id}`}>
                  <Meta title={post.name} className="card-meta" />
                </Link>
                <div className="card-footer">
                  <p className="card-price">{post.price} $</p>
                  <button
                    className={`like-button ${isLiked ? "liked" : ""}`}
                    onClick={() => isLiked ? handleDeleteTicket(post.id) : handleTicketClick(post)}
                  >
                    <img className="like-icon" src={isLiked ? likedpost : favorite} alt="like" />
                  </button>
                </div>
                <div className="card-about"><img className="card-about-icon" src={about2} alt="about" /></div>
                <p className="card-location"><span>{post.location}</span> <span className="card-time">22:38 25-Окт</span> </p>
              </Card>

            </li>)
        })}
      </ul>

      <div className="pagination-container">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CardData;
