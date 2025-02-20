//tömb bevezetése
const array = [
    {
        uralkodo: "I. István",//uralkodó változó létrehozása
        esemeny1: "Koronázás",//esemény1 változó létrehozása
        evszam1: "1000",//évszám1 változó létrehozása
        esemeny2: "Pannonhalmi apátság megalapítása",//esemény2 változó létrehozása
        evszam2: "1001"//évszám2 változó létrehozása
    },
    {
        uralkodo: "IV. Béla",//uralkodó változó létrehozása
        esemeny: "tatárjárás",//esemény változó létrehozása
        evszam: "1241-1242"//évszám változó létrehozása
    },
    {
        uralkodo: "Mátyás király",//uralkodó változó létrehozása
        esemeny1: "Bécs elfoglalása",//esemény1 változó létrehozása
        evszam1: "1485",//évszám1 változó létrehozása
        esemeny2: "Kenyérmzei csata",//esemény2 változó létrehozása
        evszam2: "1479"//évszám2 változó létrehozása
    },
    {
        uralkodo: "II. Rákóczi Ferenc",//uralkodó változó létrehozása
        esemeny1: "A szabadságharc kezdete",//esemény1 változó létrehozása
        evszam1: "1703",//évszám1 változó létrehozása
        esemeny2: "szabadságharc vége",//esemény2 változó létrehozása
        evszam2: "1711"//évszám2 változó létrehozása
    }
];

//sorok létrehozása
const fejlec = {
    uralkodo: "Uralkodó",//fejléc első változó létrehozása
    esemeny: "Esemény",//fejléc második változó létrehozása
    evszam: "Évszám"//fejléc harmadik változó létrehozása
};

const table = document.createElement('table');//létrehozok egy table elemet
document.body.appendChild(table);//a table elemet hozzáadom a body-hoz

const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//a tbody elemet hozzáadom a table-hoz

const thead = document.createElement('thead');//létrehozok egy thead elemet
table.appendChild(thead);//a thead elemet hozzáadom a table-hoz


createHeader();//függvény meghívása


rendermenu();//függvény meghívása

//form letrehozasa
const form = document.createElement('form');//form elem letrehozasa
form.id = 'form';//form id beallitasa
form.action = '#';//form action beallitasa


//form elemeinek letrehozasa
createFormField('Uralkodó neve:', 'uralkodo_nev', 'uralkodo_nev');//uralkodo neve mezot letrehozza
createFormField('Első esemény:', 'esemeny1', 'esemeny1');//elso esemeny mezot letrehozza
createFormField('Első esemény évszáma:', 'evszam1', 'evszam1');//elso evszam mezot letrehozza
createFormField('Második esemény:', 'esemeny2', 'esemeny2');//masodik esemeny mezot letrehozza
createFormField('Második esemény évszáma:', 'evszam2', 'evszam2');//masodik evszam mezot letrehozza

const button = document.createElement('button');//gomb letrehozasa
button.type = 'submit';//gomb típusának beállítása
button.innerHTML = 'Hozzáadás';//gomb szoveg beallitasa
form.appendChild(button);//gomb hozzaadasa a formhoz

document.body.appendChild(form);//form hozzaadasa a body-hoz

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();//megakadályozza az alapértelmezett eseményt
    const uralkodo = document.getElementById('uralkodo_nev');//lekéri az uralkodo mező értékét
    const esemeny1 = document.getElementById('esemeny1');//lekéri az esemeny1 mező értékét
    const evszam1 = document.getElementById('evszam1');//lekéri az evszam1 mező értékét
    const esemeny2 = document.getElementById('esemeny2');//lekéri az esemeny2 mező értékét
    const evszam2 = document.getElementById('evszam2');//lekéri az evszam2 mező értékét

    let isvalid = true;//isvalid változó létrehozása
    if (!validatform(uralkodo, "kötelező megadni az uralkodót", 'uralkodo_nev_error')) {//ha a validatform függvény értéke hamis, akkor
        isvalid = false;//isvalid változó értékét hamisra állítja
    }
    if (!validatform(esemeny1, "kötelező megadni az eseményt", 'esemeny1_error')) {//ha a validatform függvény értéke hamis, akkor
        isvalid = false;//isvalid változó értékét hamisra állítja
    }
    if (!validatform(evszam1, "kötelező megadni az évszámot", 'evszam1_error')) {//ha a validatform függvény értéke hamis, akkor
        isvalid = false;//isvalid változó értékét hamisra állítja
    }
    if ((esemeny2.value && !evszam2.value) || (!esemeny2.value && evszam2.value)) {//ha az esemeny2 mezőben van érték, de az evszam2 mezőben nincs, vagy az esemeny2 mezőben nincs érték, de az evszam2 mezőben van, akkor
        if (!esemeny2.value) {//ha az esemeny2 mezőben nincs érték, akkor
            document.getElementById('esemeny2_error').innerHTML = 'Kötelező megadni az eseményt';//kiírja a hibaüzenetet
        }
        if (!evszam2.value) {//ha az evszam2 mezőben nincs érték, akkor
            document.getElementById('evszam2_error').innerHTML = 'Kötelező megadni az évszámot';//kiírja a hibaüzenetet
        }
        isvalid = false;//isvalid változó értékét hamisra állítja
    }

    if (isvalid) {//ha az isvalid változó értéke igaz, akkor
        const ujuralkodo = {
            uralkodo: uralkodo.value,//uralkodo változó létrehozása
            esemeny1: esemeny1.value,//esemeny1 változó létrehozása
            evszam1: evszam1.value,//evszam1 változó létrehozása
            esemeny2: esemeny2.value,//esemeny2 változó létrehozása
            evszam2: evszam2.value//evszam2 változó létrehozása
        };
        array.push(ujuralkodo);//ujuralkodo hozzáadása az array-hez
        tbody.innerHTML = '';//a tbody-t ürítem
        rendermenu();//függvény meghívása
        form.reset();//form resetelése
    }
});

