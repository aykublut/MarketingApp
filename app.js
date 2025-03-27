const container = document.querySelector(".container");
const gorselAlani = document.querySelector(".gorselAlani")

const adetUn = document.querySelector("#adetUn");
const adetGofret = document.querySelector("#adetGofret");
const adetElma = document.querySelector("#adetElma");
const clearButton = document.querySelector("#clear");
const elmasayac = document.querySelector("#elmasayac");
const gofretsayac = document.querySelector("#gofretsayac");
const unsayac = document.querySelector("#unsayac");

const toplamTutarKapsayicisi = document.querySelector("#toplamTutarKapsayici");


container.addEventListener("click", exe);
clearButton.addEventListener("click", clearAll);



let elmaAdet = 0;
let elmaFiyat = 4;

let gofretAdet = 0;
let gofretFiyat = 5;

let unAdet = 0;
let unFiyat = 60;

function clearAll() {
    elmaAdet = 0;
    gofretAdet = 0;
    unAdet = 0;

    adetUn.textContent = `Adet`;
    adetElma.textContent = `Adet`;
    adetGofret.textContent = `Adet`;
    const sepettekiler = Array.from(gorselAlani.children);
    sepettekiler.forEach((herbiri) => {
        herbiri.remove();
    })
    const silinecekElemean = Array.from(toplamTutarKapsayicisi.children);
    silinecekElemean.forEach((Elemean) => {
        Elemean.remove();
    })
    elmasayac.textContent = elmaAdet;
    gofretsayac.textContent = gofretAdet;
    unsayac.textContent = unAdet;

}
function exe(e) {
    const tiklananArac = e.target.id;
    //elma
    if (tiklananArac === "elmaAzalt" && elmaAdet > 0) {
        const icerik = "elma";
        elmaAdet = elmaAdet - 1;
        let elmaTutar = elmaAdet * elmaFiyat;
        gonder(icerik, elmaAdet, elmaTutar);
        elmasayac.textContent = elmaAdet;
    }
    if (tiklananArac === "elmaEkle") {
        const icerik = "elma";
        elmaAdet = elmaAdet + 1;
        let elmaTutar = elmaAdet * elmaFiyat;
        gonder(icerik, elmaAdet, elmaTutar);
        elmasayac.textContent = elmaAdet;
    }
    //gofret
    if (tiklananArac === "gofretAzalt" && gofretAdet > 0) {
        const icerik = "gofret";
        gofretAdet = gofretAdet - 1;
        let gofretTutar = gofretAdet * gofretFiyat;
        gonder(icerik, gofretAdet, gofretTutar);
        gofretsayac.textContent = gofretAdet;
    }
    if (tiklananArac === "gofretEkle") {
        const icerik = "gofret";
        gofretAdet = gofretAdet + 1;
        let gofretTutar = gofretAdet * gofretFiyat;
        gonder(icerik, gofretAdet, gofretTutar);
        gofretsayac.textContent = gofretAdet;
    }
    //un
    if (tiklananArac === "unAzalt" && unAdet > 0) {
        const icerik = "un";
        unAdet = unAdet - 1;
        let unTutar = unAdet * unFiyat;
        gonder(icerik, unAdet, unTutar);
        unsayac.textContent = unAdet;
    }
    if (tiklananArac === "unEkle") {
        const icerik = "un";
        unAdet = unAdet + 1;
        let unTutar = unAdet * unFiyat;
        gonder(icerik, unAdet, unTutar);
        unsayac.textContent = unAdet;
    }
}

function gonder(icerik, adet, tutar) {
    const sepettekiler = Array.from(gorselAlani.children);
    sepettekiler.forEach((herbiri) => {
        if (herbiri.id === icerik) {
            herbiri.remove();
        }
    })
    for (let i = 0; i < adet; i++) {
        const img = document.createElement("img");
        img.src = `./images/${icerik}.png`
        img.classList.add("gorselAlani-img");
        img.id = icerik;
        gorselAlani.appendChild(img);
    }
    adetUn.textContent = `Adet:${unAdet}`;
    adetElma.textContent = `Adet:${elmaAdet}`;
    adetGofret.textContent = `Adet:${gofretAdet}`;


    const silinecekElemean = Array.from(toplamTutarKapsayicisi.children);
    silinecekElemean.forEach((Elemean) => {
        Elemean.remove();
    })


    const toplamTutar = document.createElement("h2");
    toplamTutar.textContent = `Toplam Tutar: ${toplamfiyathesapla()} ₺`
    toplamTutarKapsayicisi.appendChild(toplamTutar);

}

function toplamfiyathesapla() {
    const toplamFiyat = (elmaAdet * elmaFiyat) + (gofretAdet * gofretFiyat) + (unAdet * unFiyat);
    return toplamFiyat;
}