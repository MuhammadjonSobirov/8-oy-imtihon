import { Pagination } from "antd";
import favorite from "../../assets/favorite.svg";
import likedpost from "../../assets/licedpost.svg";
import { useState } from "react";
import "./table.css";
import about from "../../assets/about.svg";
import fileData from "../../assets/fileData.svg";
import useStore from "../../zustand/store.js";
import { Link, useNavigate } from "react-router-dom";

interface RenderProps {
  data: {
    id: number;
    name: string;
    avatar: string;
    price: number;
    location: string;
  }[];
}

const Table: React.FC<RenderProps> = ({ data = [] }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const { setTicket, tickets, deleteTicket } = useStore();

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
      <ul className="table-list">
        {currentData.map((post) => {
          const isLiked = tickets.some(ticket => ticket.id === post.id);

          return (
            <li className="table-item" key={post.id}>
              <Link style={{ textDecoration: "none" , color: "inherit"}} to={`/content/${post.id}`}>
                <div className="table-info-container">
                  <div className="table-image-container">
                    <img className="table-image" src={post.avatar} alt={post.name} />
                  </div>
                  <div className="table-info">
                    <h3 className="table-title">{post.name}</h3>
                    <img src={about} alt="about" />
                    <p>{post.location}</p>
                  </div>
                </div>
              </Link>
              <div className="table-price-container">
                <button
                  className={`like-button ${isLiked ? "liked" : ""}`}
                  onClick={() => isLiked ? handleDeleteTicket(post.id) : handleTicketClick(post)}
                >
                  <img className="like-icon" src={isLiked ? likedpost : favorite} alt="like" />
                </button>
                <p>{post.price} $</p>
                <p><img src={fileData} alt="data" /></p>
              </div>
            </li>
          );
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

export default Table;
