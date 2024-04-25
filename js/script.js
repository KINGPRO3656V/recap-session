/* ini file js */

let isReverse = false;

function reverse() {
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

    if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "none";
        cToF.style.display = "block";
        isReverse = false;
    } else {
        // ini tampilan default
        console.log(isReverse);
        cToF.style.display = "none";
        fToC.style.display = "block";
        isReverse = true;
    }
}

function convert() {
    let celcius = document.getElementById("c-to-f-input").value;
    if (!isNaN (/[^1-4]/g)) {
        alert("Tolong input Nomor Saja");
    }
    console.log(celcius);
}

//document.getElementById("button-convert").addEventListener('click', () => convert());
/* ini file js */
