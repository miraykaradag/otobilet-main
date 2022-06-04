import React, { useState, createContext, useEffect } from "react";
import { BILET_LISTESI } from "../db/bilet_listesi"; //bilet ve sehir listesi import edildi
import { SEHIR_LISTESI } from "../db/sehir_listesi";

const Context = createContext(); //context yaratıldı. 

const ContextProvider = (props) => { //contextin içine yarattığım useSateler konumlandırıldı
  const [slogan, setSlogan] = useState(
    "Türkiye'nin en büyük otobüs bileti sitesi"
  );

  
  

  const [biletler, setBiletler] = useState(BILET_LISTESI);
  const [sehirler, setSehirler] = useState(SEHIR_LISTESI);
  const [filtre, setFiltre] = useState({
    kalkis_noktasi: "",
    varis_noktasi: "",
    tarih: "",
  });

  const [filtrelenmisBiletler, setFiltrelenmisBiletler] = useState([]); //filtreleme için de bir context içinde 

  const [eklenenBiletler, setEklenenBiletler] = useState(  //eklenen biletleri json parse edip localstoragea eklendi
    JSON.parse(localStorage.getItem("eklenen_biletler")) || []
  );

  const biletEkle = (eklenenBilet) => { //bilet ekle butonu ( bilet.jsx'de) için bir fonksiyon oluşturuldu
    alert(`${eklenenBilet.id} numaralı bilet eklendi.`);
    setEklenenBiletler([...eklenenBiletler, eklenenBilet]);
  };

  useEffect(() => {
    localStorage.setItem("eklenen_biletler", JSON.stringify(eklenenBiletler));
  }, [eklenenBiletler]);

  const eklenenTumBiletleriKaldir = () => {
    setEklenenBiletler([]);
  };

  const biletKaldir = (id) => {
    setEklenenBiletler(eklenenBiletler.filter((e) => e.id != id));
  };

  return (
    <Context.Provider 
      value={{
        slogan,
        biletler,
        setBiletler,
        sehirler,
        setSehirler,
        filtre,
        setFiltre,
        filtrelenmisBiletler,
        setFiltrelenmisBiletler,
        eklenenBiletler,
        biletEkle,
        biletKaldir,
        eklenenTumBiletleriKaldir,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
