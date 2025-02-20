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
]

//sorok létrehozása
const fejlec = {
    uralkodo: "Uralkodó",//fejléc első változó létrehozása
    esemeny: "Esemény",//fejléc második változó létrehozása
    evszam: "Évszám"//fejléc harmadik változó létrehozása
}

const table = document.createElement('table')//létrehozok egy table elemet
document.body.appendChild(table)//a table elemet hozzáadom a body-hoz

const tbody = document.createElement('tbody')//létrehozok egy tbody elemet
table.appendChild(tbody)//a tbody elemet hozzáadom a table-hoz

const thead = document.createElement('thead')//létrehozok egy thead elemet
table.appendChild(thead)//a thead elemet hozzáadom a table-hoz

//colgroup létrehozása
function createHeader() {
    const colgroup = document.createElement('colgroup')//létrehozok egy colgroup elemet
    table.appendChild(colgroup)//a colgroup elemet hozzáadom a table-hoz

    const col1 = document.createElement('col')//létrehozok egy col elemet
    colgroup.appendChild(col1)//a col elemet hozzáadom a colgroup-hoz
    col1.classList.add('fontos')//a col1-hez hozzáadok egy class-t

    const col2 = document.createElement('col')//létrehozok egy col elemet
    colgroup.appendChild(col2)//a col elemet hozzáadom a colgroup-hoz  

    const col3 = document.createElement('col')//létrehozok egy col elemet  
    colgroup.appendChild(col3)//a col elemet hozzáadom a colgroup-hoz
    col3.classList.add('fontos')//a col3-hoz hozzáadok egy class-t

    createHeaderRow()//fejléc sor létrehozása
}

//fejléc létrehozása
function createHeaderRow() {
    const tr = document.createElement('tr')//létrehozok egy tr elemet
    thead.appendChild(tr)//a tr elemet hozzáadom a thead-hoz

    const headers = [fejlec.uralkodo, fejlec.esemeny, fejlec.evszam]//fejléc adatok tömbje

    headers.forEach(headerText => {
        const th = document.createElement('th')//létrehozok egy th elemet
        tr.appendChild(th)//a th elemet hozzáadom a tr-hoz
        th.innerHTML = headerText//a th-nek beállítom a szövegét
    })
}

createHeader()//függvény meghívása

function rendermenu() {
    //táblázat létrehozása ciklussal
    for (const adat of array) {
        const tr = document.createElement('tr')//létrehozok egy tr elemet
        tbody.appendChild(tr)//a tr elemet hozzáadom a tbody-hoz

        const td1 = document.createElement('td')//létrehozok egy td elemet
        tr.appendChild(td1)//a td elemet hozzáadom a tr-hoz
        td1.innerHTML = adat.uralkodo//a td1-nek beállítom a szövegét

        const td2 = document.createElement('td')//létrehozok egy td elemet
        tr.appendChild(td2)//a td elemet hozzáadom a tr-hoz
        td2.innerHTML = adat.esemeny1 || adat.esemeny//a td2-nek beállítom a szövegét

        const td3 = document.createElement('td')//létrehozok egy td elemet
        tr.appendChild(td3)//a td elemet hozzáadom a tr-hoz
        td3.innerHTML = adat.evszam1 || adat.evszam//a td3-nek beállítom a szövegét

        //elágazás létrehozása
        if (adat.esemeny2 && adat.evszam2) {
            td1.rowSpan = 2//beállítom a rowspan-t

            const tr2 = document.createElement('tr')//létrehozok egy tr elemet
            tbody.appendChild(tr2)//a tr elemet hozzáadom a tbody-hoz

            const td2_2 = document.createElement('td')//létrehozok egy td elemet
            tr2.appendChild(td2_2)//a td elemet hozzáadom a tr2-hoz
            td2_2.innerHTML = adat.esemeny2//a td2_2-nek beállítom a szövegét

            const td3_2 = document.createElement('td')//létrehozok egy td elemet
            tr2.appendChild(td3_2)//a td elemet hozzáadom a tr2-hoz
            td3_2.innerHTML = adat.evszam2//a td3_2-nek beállítom a szövegét
        }
    }
}
rendermenu()//függvény meghívása

function generateForm() {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault()//megakadályozza az alapértelmezett eseményt
        const uralkodo = document.getElementById('uralkodo_nev')//lekéri az uralkodo mező értékét
        const esemeny1 = document.getElementById('esemeny1')//lekéri az esemeny1 mező értékét
        const evszam1 = document.getElementById('evszam1')//lekéri az evszam1 mező értékét
        const esemeny2 = document.getElementById('esemeny2')//lekéri az esemeny2 mező értékét
        const evszam2 = document.getElementById('evszam2')//lekéri az evszam2 mező értékét

        let isvalid = true//isvalid változó létrehozása
        if (!validatform(uralkodo, "kötelező megadni az uralkodót", 'uralkodo_error')) {//ha a validatform függvény értéke hamis, akkor
            isvalid = false//isvalid változó értékét hamisra állítja
        }
        if (!validatform(esemeny1, "kötelező megadni az eseményt", 'esemeny1_error')) {//ha a validatform függvény értéke hamis, akkor
            isvalid = false//isvalid változó értékét hamisra állítja
        }
        if (!validatform(evszam1, "kötelező megadni az évszámot", 'evszam1_error')) {//ha a validatform függvény értéke hamis, akkor
            isvalid = false//isvalid változó értékét hamisra állítja
        }
        if ((esemeny2.value && !evszam2.value) || (!esemeny2.value && evszam2.value)) {//ha az esemeny2 mezőben van érték, de az evszam2 mezőben nincs, vagy az esemeny2 mezőben nincs érték, de az evszam2 mezőben van, akkor
            if (!esemeny2.value) {//ha az esemeny2 mezőben nincs érték, akkor
                document.getElementById('esemeny2_error').innerHTML = 'Kötelező megadni az eseményt'//kiírja a hibaüzenetet
            }
            if (!evszam2.value) {//ha az evszam2 mezőben nincs érték, akkor
                document.getElementById('evszam2_error').innerHTML = 'Kötelező megadni az évszámot'//kiírja a hibaüzenetet
            }
            isvalid = false//isvalid változó értékét hamisra állítja
        }

        if (isvalid) {//ha az isvalid változó értéke igaz, akkor
            const ujuralkodo = {
                uralkodo: uralkodo.value,//uralkodo változó létrehozása
                esemeny1: esemeny1.value,//esemeny1 változó létrehozása
                evszam1: evszam1.value,//evszam1 változó létrehozása
                esemeny2: esemeny2.value,//esemeny2 változó létrehozása
                evszam2: evszam2.value//evszam2 változó létrehozása
            }
            array.push(ujuralkodo)//ujuralkodo hozzáadása az array-hez
            tbody.innerHTML = ''//a tbody-t ürítem
            rendermenu()//függvény meghívása
        }
    })
}

generateForm()//form generálás függvény meghívása

//összetett validálás függvénye
function validatform(inputHtmlElement, errorMessage, errorElementId) {//validalo fuggveny
    let valid = true//kezdetben igaz
    if (inputHtmlElement.value === '') {//ha ures
        document.getElementById(errorElementId).innerHTML = errorMessage//hibauzenet
        valid = false//ha hibas, hamis
    } else {
        document.getElementById(errorElementId).innerHTML = ''//törli a hibauzenetet
    }
    return valid//visszaadjuk az erteket
}