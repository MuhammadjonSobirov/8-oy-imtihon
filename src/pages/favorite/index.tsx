import line from "../../assets/line.svg";
import card from "../../assets/card.svg";
import { useState } from "react";
import Table from "../../components/table/Table";
import CardData from "../../components/cardData/CardData";
import useStore from "../../zustand/store.js";

const Favorite = () => {
  const [tableData, setTableData] = useState(1);

  const { tickets } = useStore();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "50px" }}>
        <h2 style={{ fontFamily: "Roboto, sans-serif", marginLeft: "40px", alignItems: "center", display: "flex" }}>
        Избранное
        </h2>
        <div>
          <button onClick={() => setTableData(1)} style={{ border: "none", backgroundColor: "inherit" }}>
            <img src={line} alt="line" />
          </button>
          <button onClick={() => setTableData(2)} style={{ border: "none", backgroundColor: "inherit" }}>
            <img src={card} alt="card" />
          </button>
        </div>
      </div>
      <div>
        {tableData === 1 ? <Table data={tickets} /> : <CardData data={tickets} />}
      </div>
    </div>
  );
};

export default Favorite;
