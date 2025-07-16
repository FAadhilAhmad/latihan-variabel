document.addEventListener('DOMContentLoaded', function(){
    const btnNama = document.getElementById('btnNama');
    const itemNama = document.getElementById('nama');
    const itemNamaDua = document.getElementById('namaDua');

    btnNama.addEventListener('click', function(){
        itemNama.classList.toggle('noneNama');
        itemNamaDua.classList.toggle('noneNama');

        if(itemNama.classList.contains('noneNama')){
            btnNama.textContent = 'GANTI NAMA';
        }else{
            btnNama.textContent = 'GANTI NAMA';
        }
    });
    console.log(btnNama);
});
let nama = 'Fadhil';
let hobi = 'Membaca';
let favorit = 'baca buku, gambar, menulis dan jogging';
let hasil = 'Haloo saya ' + nama + ' hobi saya adalah ' + hobi + ' dan hal yang  paling saya suka adalah ' + favorit;


document.getElementById('output').innerHTML = hasil;
document.getElementById('output-nama').innerHTML = 'Nama: ' + nama;
document.getElementById('output-hobi').innerHTML = 'Hobi: ' + hobi;
document.getElementById('output-favorit').innerHTML = 'Favorit: ' + favorit;


let nameElement = document.getElementById('name');
let hobiElement = document.getElementById('hobi');  
let favoritElement = document.getElementById('favorit');

let btnControl = document.getElementById('btnControl');

btnControl.addEventListener('click', function() {
    nameElement.classList.toggle('hide-content');
    hobiElement.classList.toggle('hide-content');
    favoritElement.classList.toggle('hide-content');

    if (nameElement.classList.contains('hide-content')) {
        btnControl.textContent = 'Lihat';
    } else {
        btnControl.textContent = 'sembunyikan';
    }
})
let dataPribadi = ["ganteng", "pintar", "jago olah raga","baik hati"];

document.getElementById('out-aray').innerHTML = "saya " + dataPribadi[0] + " hobi saya adalah " + dataPribadi[2];

// funtion from
let outputNama = document.getElementById('output-namaFrom');
let outputHobi = document.getElementById('output-hobiFom');
let outputFavorit = document.getElementById('output-flimFavorit');
let btnSubmit = document.getElementById('btn-submit');
let hideContainer = document.getElementById('container-output');



btnSubmit.addEventListener('click', function() {
    let inputNama = document.getElementById('input-nama').value;
    outputNama.innerHTML =  inputNama;

    let inputHobi = document.getElementById('input-hobi').value;
    outputHobi.innerHTML = inputHobi;
    
    let inputFavorit = document.getElementById('input-flimFavorit').value;
    outputFavorit.innerHTML = inputFavorit;

    hideContainer.classList.remove('hide-container');
  

});
// end funtion from

let dataCharacter = [];
let btnArray = document.getElementById('btn-array');

btnArray.addEventListener('click', function() {
    let inputCharacter = document.getElementById('character').value;
    let inputRole = document.getElementById('role').value;

    dataCharacter.push({
        character: inputCharacter,
        role: inputRole
    });
    console.log(dataCharacter);
});

