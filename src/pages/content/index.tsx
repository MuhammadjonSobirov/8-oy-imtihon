import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../../api/request.js"; 
import "./content.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import ContentId from "../../components/contentId/index.js";

interface Film {
  id: number;
  name: string;
  avatar: string;
  price: number;
  location: string;
}

const Content: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await request.get<Film>(`/${id}`);
        setFilm(response.data);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    if (id) fetchFilm();
  }, [id]);

  return (
    <div className="content">
      <button className="back" onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft /> Вернуться
      </button>

      <div className="content__container">
        {film ? (
          <>
            <ContentId film={film} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Content;
