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
const fejlec = [//fejléc létrehozása
    {
        uralkodo: "Uralkodó",// fejléc első változó létrehozása
        esemeny: "Esemény",//fejléc masodik változó létrehozása 
        evszam: "Évszám"//fejléc harmadik változó létrehozása
    }
]

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
th1.innerHTML = fejlec[0].uralkodo // a th1-nek beállítom a szövegét

const th2 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th2)// a th elemet hozzáadom a tr-hoz
th2.innerHTML = fejlec[0].esemeny// a th2-nek beállítom a szövegét

const th3 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th3)// a th elemet hozzáadom a tr-hoz
th3.innerHTML = fejlec[0].evszam// a th3-nek beállítom a szövegét

//elso sor hozzáadása a táblázathoz

const tr1 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr1)// a tr elemet hozzáadom a tbody-hoz

const elsocella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(elsocella)// a td elemet hozzáadom a tr1-hez
elsocella.rowSpan = 2// az elsocella td-nek beállítom a rowspan-jét
elsocella.innerHTML = array[0].uralkodo// az elsocella td-nek beállítom a szövegét

const masodikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(masodikcella)// a td elemet hozzáadom a tr1-hez
masodikcella.innerHTML = array[0].esemeny// a masodikcella td-nek beállítom a szövegét

const harmadikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(harmadikcella)// a td elemet hozzáadom a tr1-hez
harmadikcella.innerHTML = array[0].evszam// a harmadikcella td-nek beállítom a szövegét

//masodik sor hozzáadása a táblázathoz

const tr2 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr2)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(elsocellasor2)// a td elemet hozzáadom a tr2-hoz
elsocellasor2.innerHTML = array[0].esemeny2// az elsocellasor2 td-nek beállítom a szövegét

const masodikcellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(masodikcellasor2)// a td elemet hozzáadom a tr2-hoz
masodikcellasor2.innerHTML = array[0].evszam2// a masodikcellasor2 td-nek beállítom a szövegét

//harmadik sor hozzáadása a táblázathoz

const tr3 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr3)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(elsocellasor3)// a td elemet hozzáadom a tr3-hoz
elsocellasor3.innerHTML = array[1].uralkodo// az elsocellasor3 td-nek beállítom a szövegét

const masodikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(masodikcellasor3)// a td elemet hozzáadom a tr3-hoz
masodikcellasor3.innerHTML = array[1].esemeny // a masodikcellasor3 td-nek beállítom a szövegét

const harmadikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(harmadikcellasor3)// a td elemet hozzáadom a tr3-hoz
harmadikcellasor3.innerHTML = array[1].evszam// a harmadikcellasor3 td-nek beállítom a szövegét

//negyedik sor hozzáadása a táblázathoz

const tr4 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr4)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(elsocellasor4)// a td elemet hozzáadom a tr4-hoz
elsocellasor4.rowSpan = 2// az elsocellasor4 td-nek beállítom a rowspan-jét
elsocellasor4.innerHTML = array[2].uralkodo// az elsocellasor4 td-nek beállítom a szövegét

const masodikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(masodikcellasor4)// a td elemet hozzáadom a tr4-hoz
masodikcellasor4.innerHTML = array[2].esemeny// a masodikcellasor4 td-nek beállítom a szövegét

const harmadikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(harmadikcellasor4)// a td elemet hozzáadom a tr4-hoz
harmadikcellasor4.innerHTML = array[2].evszam// a harmadikcellasor4 td-nek beállítom a szövegét

//ötödik sor hozzáadása a táblázathoz

const tr5 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr5)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(elsocellasor5)// a td elemet hozzáadom a tr5-hoz
elsocellasor5.innerHTML = array[2].esemeny2// az elsocellasor5 td-nek beállítom a szövegét

const masodikcellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(masodikcellasor5)// a td elemet hozzáadom a tr5-hoz
masodikcellasor5.innerHTML = array[2].evszam2// a masodikcellasor5 td-nek beállítom a szövegét

//hatodik sor hozzáadása a táblázathoz

const tr6 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr6)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(elsocellasor6)// a td elemet hozzáadom a tr6-hoz
elsocellasor6.rowSpan = 2// az elsocellasor6 td-nek beállítom a rowspan-jét
elsocellasor6.innerHTML = array[3].uralkodo// az elsocellasor6 td-nek beállítom a szövegét

const masodikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(masodikcellasor6)// a td elemet hozzáadom a tr6-hoz
masodikcellasor6.innerHTML = array[3].esemeny// a masodikcellasor6 td-nek beállítom a szövegét

const harmadikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(harmadikcellasor6)// a td elemet hozzáadom a tr6-hoz
harmadikcellasor6.innerHTML = array[3].evszam// a harmadikcellasor6 td-nek beállítom a szövegét

//hetedik sor hozzáadása a táblázathoz

const tr7 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr7)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(elsocellasor7)// a td elemet hozzáadom a tr7-hoz
elsocellasor7.innerHTML = array[3].esemeny2// a elsoellasor7 td-nek beállítom a szövegét

const masodikcellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(masodikcellasor7)// a td elemet hozzáadom a tr7-hoz
masodikcellasor7.innerHTML = array[3].evszam2// a masodikcellasor7 td-nek beállítom a szövegét

