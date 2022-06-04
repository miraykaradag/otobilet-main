import { useState, useContext } from "react";
import Bilet from "../components/Bilet";
import { Context } from "../context/Context"; //contexti import edererek anasayfada kullandık
import Tickets from "./Tickets";
import { useNavigate } from "react-router-dom";


0
const Home = (props) => {
  const {
    slogan,
    biletler,
    setBiletler,
    sehirler,
    setSehirler,
    filtre,
    setFiltre,
    filtrelenmisBiletler,
    setFiltrelenmisBiletler,
    biletEkle
  } = useContext(Context); // context kullanıldı

  const handleChange = (event) => {
    setFiltre({...filtre,[event.target.name]: event.target.value,});
  };
  const tarihCevir = (tarih) => { //tarihi çeviriyor.
    return tarih.split("-").reverse().join(".");
  };

  const filtreForm = (event) => {
    event.preventDefault();
    const tarih = tarihCevir(filtre.tarih);
    const varis_noktasi = filtre.varis_noktasi;
    const kalkis_noktasi = filtre.kalkis_noktasi;

    const f = biletler.filter(
      (b) =>
        b.tarih.startsWith(tarih) &&
        b.varis_noktasi == varis_noktasi &&
        b.kalkis_noktasi == kalkis_noktasi
    );
    setFiltrelenmisBiletler(f);
  };


  const navigate = useNavigate();


  // const [change, setChange] = useState();

  // const changecomponents =()=>{


  //   setChange(<Tickets/>)

  // }

  return (
   
      <div className="size">
      <div className="slogan">{slogan}</div>

      <form onSubmit={filtreForm}>
        <div className="filtre">
          
          <div>
            <p>Kalkış Noktası</p>
            <p>
              <select className="kalkis_noktasi" name="kalkis_noktasi" value={filtre.kalkis_noktasi} onChange={handleChange} >
                <option defaultValue disabled value=""> Şehir seçin</option>
                
                {sehirler.map((sehir) => (
                 <option key={sehir} value={sehir}>{sehir} </option> //home.jsxdeki sehirler stateine gidip ordan sehir_listesine ulaşıyor.
                ))}

              </select>
            </p>
          </div>


          <div>
            <p>Varış Noktası</p>
            <p>
              <select className="kalkis_noktasi" name="varis_noktasi" value={filtre.varis_noktasi} onChange={handleChange}>
                <option defaultValue disabled value=""> Şehir seçin </option>


                {sehirler.map((sehir) => (
                  <option key={sehir} value={sehir}> {sehir}</option>
                ))}

              </select>
            </p>
          </div>



          <div className="date">
            <p>Tarih</p>
            <p>
              <input name="tarih" value={filtre.tarih} onChange={handleChange}  type="date"></input>
            </p>
          </div>

          <div>
            <button className="otobusbiletibul" type="submit">Otobüs Bileti Bul</button>
          </div>
          

        </div>
      </form>

     
      <h1 className="h1">Seferler</h1>
      <br />
     
      <div className="filtrelenmisBiletler">
    
    
       
       
        {filtrelenmisBiletler.length > 0 &&
          filtrelenmisBiletler.map((b) => <Bilet key={b.id} biletDetay={b} biletEkle={(biletDetay) => biletEkle(biletDetay)}/>)}
          <br />

        {filtrelenmisBiletler.length < 1 && "Lütfen bir sefer seçiniz"}
      </div>
      

    <div className="devamet">
    <button className="devametbutton" onClick={() => navigate("/biletlerim")} > Devam Et</button>


</div>
      
      </div>
     

   
  );
};

export default Home;
