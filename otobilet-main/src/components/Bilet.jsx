import React, { useState, useEffect } from "react";

//biletekle kaldır deya

function Bilet({ biletDetay, biletEkle, biletKaldir, mode="ekle" }) {
  return (
    <>
      <div>
        <div>{biletDetay.id}</div>
        <div>{biletDetay.tarih}</div>
        <div>{biletDetay.firma}</div>
        <div>{biletDetay.kalkis_noktasi}</div>
        <div>{biletDetay.varis_noktasi}</div>
        <div>{biletDetay.fiyat}</div>
        <div>
          {mode == "ekle" ? (
            <button className="biletEkle" onClick={() => biletEkle(biletDetay)}> + </button>
          ) : (
            <button className="biletSil"onClick={() => biletKaldir(biletDetay.id)}> -</button>
          )}
          

         
        </div>
      </div>
    </>
  );
}

export default Bilet;
