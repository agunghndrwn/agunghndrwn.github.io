/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function addRow(){
   let table = document.getElementById("isiTabel");
   let row = table.insertRow(0);
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(1);
   let nama = document.getElementById('InputNama').value;
   let umur = document.getElementById('InputUmur').value;
   cell1.innerHTML = nama;
   cell2.innerHTML = umur;
}
function deleteRow(){
    document.getElementById('isiTabel').deleteRow(0);
    
}

fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
.then(response => response.json())
.then(data => bacaDataVaksin(data));

function bacaDataVaksin(data){
    console.log(data['data']);
    let table = document.getElementById("isiTabelCovid");

    data['data'].forEach(element => {
        if(element['kota'] == 'KAB. NAGAN RAYA'){
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let kode = element['kode'];
    let kecamatan = element['nama'];
    let kabupaten_kota = element['kota'];
    let provinsi = element['provinsi'];
    let status = element['status'];
    cell1.innerHTML = kode;
    cell2.innerHTML = kecamatan;
    cell3.innerHTML = kabupaten_kota;
    cell4.innerHTML = provinsi;
    cell5.innerHTML = status;
        }
    });
    
}