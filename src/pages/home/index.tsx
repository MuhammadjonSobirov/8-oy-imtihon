import line from "../../assets/line.svg";
import card from "../../assets/card.svg";
import { useState } from "react";
import Table from "../../components/table/Table";
import useGetData from "../../components/useCard"
import CardData from "../../components/cardData/CardData";
import fire from "../../assets/fire.svg"
interface Film {
  id: number
  title: string
  image: string
  description: string
}

interface ICard {
data:Film[],
loading: boolean,
error: string | null
}

const HomePage = () => {
  const [tableData, setTableData] = useState(1);
  const { data} = useGetData('https://670fdc12a85f4164ef2c3ac4.mockapi.io/films')

  return (
    <div>
      
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:"50px"}}>
        <h2 style={{fontFamily: "Roboto, sans-serif",marginLeft:"40px" , alignItems:"center", display:"flex"}}>Топ объявления <img style={{margin:"0"}} src={fire} alt="" /></h2>
        <div>
          <button onClick={() => setTableData(1)} style={{border:"none" , backgroundColor:"inherit"}}><img src={line} alt="line" /></button>
          <button onClick={() => setTableData(2)} style={{border:"none" , backgroundColor:"inherit"}}><img src={card} alt="card" /></button>
        </div>
      </div>
      <div>
        {tableData === 1 ? <Table data={data} /> : <CardData data={data} />}
      </div>
    </div>
  )
}

export default HomePage