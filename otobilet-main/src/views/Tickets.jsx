import { useState, useContext } from "react";
import Bilet from "../components/Bilet";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Tickets = (props) => {
  const {
    eklenenBiletler,
    biletKaldir
  } = useContext(Context);


  const navigate = useNavigate();
const [show,setShow]=useState(false)


  return (
    <div className="filtre2">

      <h2>Seçilen Biletler</h2>
      <br />
      



      {eklenenBiletler.length > 0 &&
        eklenenBiletler.map((b) => <Bilet key={b.id} biletDetay={b} mode="sil" biletKaldir={biletKaldir}/>)}
      {eklenenBiletler.length < 1 && "Seçili Bilet Listeniz Boş"}


        
        <div className="satinal">
          <button className="satinalb" onClick={()=>setShow(true)}>
            Satın Al
          </button>

<br />
<br />

        

        </div>
    

        <div className="App">
            <br />
     {
       show?
       
        <div className="buyticket">
          <label htmlFor="">Kartın Üstündeki İsim</label>
          <br />
          <input type="text" />
          <br />
          <br />
          <label htmlFor="">Kart Numarası</label>
          <br />
          <input type="text" pattern="[0-9]+ " placeholder="XXXX XXXX XXXX XXXX" />
          <br />
          <br />
          <label htmlFor="">Son Kullanma Tarihi</label>
          <br />
          <input type="date" />
          <label htmlFor="">CVV</label>
          <input type="text" className="cvv" />
          <br />


          <button onClick={()=> {alert("Satın alma işlemi başarılı. Bilet detaylarınız mail adresinize gönderildi.")}} className="buybutton">Güvenli Ödeme</button>

        </div>
        :null
     }
    
    </div>
    </div>
  )
}

export default Tickets