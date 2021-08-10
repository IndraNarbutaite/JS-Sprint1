// Pasiemam mygtuka
var forma = document.getElementById('forma');
// Pasiemam tbody
var tbody = document.querySelector('tbody');
forma.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);
    // Pasiemam reiksmes is input'u
    var data = document.getElementById('data').value;
    var numeris = document.getElementById('numeris').value;
    var kelias = parseFloat(document.getElementById('kelias').value);
    var laikas = parseFloat(document.getElementById('laikas').value);
    if (data && numeris && kelias && laikas) {
        // Susikuriam tuscius lenteles elementus
        var tableRow = document.createElement('tr');
        var dataTd = document.createElement('td');
        var numerisTd = document.createElement('td');
        var keliasTd = document.createElement('td');
        var laikasTd = document.createElement('td');
        // Sudedam lenteles elementus i tbody ir tuo paciu i td sudedam pries tai pasiimtas reiksmes
        tableRow.appendChild(dataTd).innerHTML = data;
        tableRow.appendChild(numerisTd).innerHTML = numeris;
        tableRow.appendChild(keliasTd).innerHTML = kelias;
        tableRow.appendChild(laikasTd).innerHTML = laikas;
        tbody.appendChild(tableRow);
        // Isvalom inputu reiksmes
        document.getElementById('data').value = '';
        document.getElementById('numeris').value = '';
        document.getElementById('kelias').value = '';
        document.getElementById('laikas').value = '';
    } else {
        alert('iveskite visus duomenis');
    }
});