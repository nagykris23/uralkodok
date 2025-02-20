//tömb bevezetése 
const array = [
    {
        uralkodo: "I. István",//uralkodo változó létrehozása
        esemeny: "Koronázás",//esemeny változó létrehozása
        evszam: "1000",//evszam változó létrehozása
        esemeny2: "Pannonhalmi apátság megalapítása",//esemeny2 változó létrehozása
        evszam2: "1001"//evszam2 változó létrehozása
    },
    {
        uralkodo: "IV. Béla",//uralkodo változó létrehozása
        esemeny: "tatárjárás",//esemeny változó létrehozása
        evszam: "1241-1242"//evszam változó létrehozása
    },
    {
        uralkodo: "Mátyás király",//uralkodo változó létrehozása
        esemeny: "Bécs elfoglalása",//esemeny változó létrehozása
        evszam: "1485",//evszam változó létrehozása
        esemeny2: "Kenyérmzei csata",//esemeny2 változó létrehozása
        evszam2: "1479"//evszam2 változó létrehozása
    },
    {
        uralkodo: "II. Rákóczi Ferenc",//uralkodo változó létrehozása
        esemeny: "A szabadságharc kezdete",//esemeny változó létrehozása
        evszam: "1703",//evszam változó létrehozása
        esemeny2: "szabadságharc vége",//esemeny2 változó létrehozása
        evszam2: "1711"//evszam2 változó létrehozása
    }
]
//sorok létrehozása
const fejlec = 
    {
        uralkodo: "Uralkodó",// fejléc első változó létrehozása
        esemeny: "Esemény",//fejléc masodik változó létrehozása 
        evszam: "Évszám"//fejléc harmadik változó létrehozása
    }


const table = document.createElement('table')// létrehozok egy table elemet
document.body.appendChild(table)// a table elemet hozzáadom a body-hoz

const tbody = document.createElement('tbody')// létrehozok egy tbody elemet
table.appendChild(tbody)// a tbody elemet hozzáadom a table-hoz

const thead = document.createElement('thead')// létrehozok egy thead elemet
table.appendChild(thead)// a thead elemet hozzáadom a table-hoz

//colgroup létrehozása
const colgroup = document.createElement('colgroup')// létrehozok egy colgroup elemet
table.appendChild(colgroup)// a colgroup elemet hozzáadom a table-hoz

const col1 = document.createElement('col')// létrehozok egy col elemet
colgroup.appendChild(col1)// a col elemet hozzáadom a colgroup-hoz
col1.classList.add('fontos')// a col1-hez hozzáadok egy class-t

const col2 = document.createElement('col')// létrehozok egy col elemet
colgroup.appendChild(col2)// a col elemet hozzáadom a colgroup-hoz  

const col3 = document.createElement('col')// létrehozok egy col elemet  
colgroup.appendChild(col3)// a col elemet hozzáadom a colgroup-hoz
col3.classList.add('fontos')// a col3-hoz hozzáadok egy class-t

//fejléc létrehozása
const tr = document.createElement('tr')// létrehozok egy tr elemet
thead.appendChild(tr)// a tr elemet hozzáadom a thead-hoz

const th1 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th1)// a th elemet hozzáadom a tr-hoz
th1.innerHTML = fejlec.uralkodo // a th1-nek beállítom a szövegét

const th2 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th2)// a th elemet hozzáadom a tr-hoz
th2.innerHTML = fejlec.esemeny// a th2-nek beállítom a szövegét

const th3 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th3)// a th elemet hozzáadom a tr-hoz
th3.innerHTML = fejlec.evszam// a th3-nek beállítom a szövegét

//táblázat létrehozása ciklussal 
for(const adat of array){
    const tr = document.createElement('tr')// létrehozok egy tr elemet
    tbody.appendChild(tr)// a tr elemet hozzáadom a tbody-hoz

    const td1 = document.createElement('td')// létrehozok egy td elemet
    tr.appendChild(td1)// a td elemet hozzáadom a tr-hoz
    td1.innerHTML = adat.uralkodo// a td1-nek beállítom a szövegét

    const td2 = document.createElement('td')// létrehozok egy td elemet
    tr.appendChild(td2)// a td elemet hozzáadom a tr-hoz
    td2.innerHTML = adat.esemeny// a td2-nek beállítom a szövegét

    const td3 = document.createElement('td')// létrehozok egy td elemet
    tr.appendChild(td3)// a td elemet hozzáadom a tr-hoz
    td3.innerHTML = adat.evszam// a td3-nek beállítom a szövegét
//elágazás létrehozása
    if(adat.esemeny2 && adat.evszam2){
        td1.rowSpan = 2 // beállítom a rowspan-t

        const tr2 = document.createElement('tr')// létrehozok egy tr elemet
        tbody.appendChild(tr2)// a tr elemet hozzáadom a tbody-hoz

        const td2_2 = document.createElement('td')// létrehozok egy td elemet
        tr2.appendChild(td2_2)// a td elemet hozzáadom a tr-hoz
        td2_2.innerHTML = adat.esemeny2// a td2-nek beállítom a szövegét

        const td3_2 = document.createElement('td')// létrehozok egy td elemet
        tr2.appendChild(td3_2)// a td elemet hozzáadom a tr-hoz
        td3_2.innerHTML = adat.evszam2// a td2-nek beállítom a szövegét
    }
}

