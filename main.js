const table = document.createElement('table')// létrehozok egy table elemet
document.body.appendChild(table)// a table elemet hozzáadom a body-hoz

const tbody = document.createElement('tbody')// létrehozok egy tbody elemet
table.appendChild(tbody)// a tbody elemet hozzáadom a table-hoz

const thead = document.createElement('thead')// létrehozok egy thead elemet
table.appendChild(thead)// a thead elemet hozzáadom a table-hoz

//változok létrehozása
const fejléc1 = "Uralkodó"// fejléc első változó létrehozása
const fejléc2 = "Esemény"//fejléc masodik változó létrehozása 
const fejléc3 = "Évszám"//fejléc harmadik változó létrehozása

const elsosor1 = "I. István"// első sor első változó létrehozása
const masodiksor1 = "Koronázás"// első sor masodik változó létrehozása
const harmadiksor1 = "1000"// első sor harmadik változó létrehozása
const elsooszlop1 = "Pannonhalmi apátság megalapítása"// első sor második esemény változó létrehozása
const masodikoszlop1 = "1001"// első sor második évszám változó létrehozása

const elsosor2 = "IV. Béla"// második sor első változó létrehozása
const masodiksor2 = "tatárjárás"// második sor masodik változó létrehozása
const harmadiksor2 = "1241-1242"// második sor harmadik változó létrehozása

const elsosor3 = "Mátyás király"// harmadik sor első változó létrehozása
const masodiksor3 = "Bécs elfoglalása"// harmadik sor masodik változó létrehozása
const harmadiksor3 = "1485"// harmadik sor harmadik változó létrehozása
const elsooszlop2 = "Kenyérmzei csata"// harmadik sor második esemény változó létrehozása
const masodikoszlop2 = "1479"// harmadik sor második évszám változó létrehozása

const elsosor4 = "II. Rákóczi Ferenc"// negyedik sor első változó létrehozása
const masodiksor4 = "A szabadságharc kezdete"// negyedik sor masodik változó létrehozása
const harmadiksor4 = "1703"// negyedik sor harmadik változó létrehozása
const elsooszlop3 = "szabadságharc vége"// negyedik sor második esemény változó létrehozása
const masodikoszlop3 = "1711"// negyedik sor második évszám változó létrehozása


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
th1.innerHTML = fejléc1 // a th1-nek beállítom a szövegét

const th2 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th2)// a th elemet hozzáadom a tr-hoz
th2.innerHTML = fejléc2// a th2-nek beállítom a szövegét

const th3 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th3)// a th elemet hozzáadom a tr-hoz
th3.innerHTML = fejléc3// a th3-nek beállítom a szövegét

//elso sor hozzáadása a táblázathoz

const tr1 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr1)// a tr elemet hozzáadom a tbody-hoz

const elsocella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(elsocella)// a td elemet hozzáadom a tr1-hez
elsocella.rowSpan = 2// az elsocella td-nek beállítom a rowspan-jét
elsocella.innerHTML=elsosor1// az elsocella td-nek beállítom a szövegét

const masodikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(masodikcella)// a td elemet hozzáadom a tr1-hez
masodikcella.innerHTML = masodiksor1// a masodikcella td-nek beállítom a szövegét

const harmadikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(harmadikcella)// a td elemet hozzáadom a tr1-hez
harmadikcella.innerHTML = harmadiksor1// a harmadikcella td-nek beállítom a szövegét

//masodik sor hozzáadása a táblázathoz

const tr2 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr2)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(elsocellasor2)// a td elemet hozzáadom a tr2-hoz
elsocellasor2.innerHTML = elsooszlop1// az elsocellasor2 td-nek beállítom a szövegét

const masodikcellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(masodikcellasor2)// a td elemet hozzáadom a tr2-hoz
masodikcellasor2.innerHTML=masodikoszlop1// a masodikcellasor2 td-nek beállítom a szövegét

//harmadik sor hozzáadása a táblázathoz

const tr3 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr3)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(elsocellasor3)// a td elemet hozzáadom a tr3-hoz
elsocellasor3.innerHTML = elsosor2// az elsocellasor3 td-nek beállítom a szövegét

const masodikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(masodikcellasor3)// a td elemet hozzáadom a tr3-hoz
masodikcellasor3.innerHTML = masodiksor2 // a masodikcellasor3 td-nek beállítom a szövegét

const harmadikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(harmadikcellasor3)// a td elemet hozzáadom a tr3-hoz
harmadikcellasor3.innerHTML = harmadiksor2// a harmadikcellasor3 td-nek beállítom a szövegét

//negyedik sor hozzáadása a táblázathoz

const tr4 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr4)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(elsocellasor4)// a td elemet hozzáadom a tr4-hoz
elsocellasor4.rowSpan = 2// az elsocellasor4 td-nek beállítom a rowspan-jét
elsocellasor4.innerHTML=  elsosor3// az elsocellasor4 td-nek beállítom a szövegét

const masodikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(masodikcellasor4)// a td elemet hozzáadom a tr4-hoz
masodikcellasor4.innerHTML = masodiksor3// a masodikcellasor4 td-nek beállítom a szövegét

const harmadikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(harmadikcellasor4)// a td elemet hozzáadom a tr4-hoz
harmadikcellasor4.innerHTML= harmadiksor3// a harmadikcellasor4 td-nek beállítom a szövegét

//ötödik sor hozzáadása a táblázathoz

const tr5 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr5)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(elsocellasor5)// a td elemet hozzáadom a tr5-hoz
elsocellasor5.innerHTML = elsooszlop2// az elsocellasor5 td-nek beállítom a szövegét

const masodikcellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(masodikcellasor5)// a td elemet hozzáadom a tr5-hoz
masodikcellasor5.innerHTML = masodikoszlop2// a masodikcellasor5 td-nek beállítom a szövegét

//hatodik sor hozzáadása a táblázathoz

const tr6 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr6)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(elsocellasor6)// a td elemet hozzáadom a tr6-hoz
elsocellasor6.rowSpan = 2// az elsocellasor6 td-nek beállítom a rowspan-jét
elsocellasor6.innerHTML =elsosor4// az elsocellasor6 td-nek beállítom a szövegét

const masodikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(masodikcellasor6)// a td elemet hozzáadom a tr6-hoz
masodikcellasor6.innerHTML = masodiksor4// a masodikcellasor6 td-nek beállítom a szövegét

const harmadikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(harmadikcellasor6)// a td elemet hozzáadom a tr6-hoz
harmadikcellasor6.innerHTML = harmadiksor4// a harmadikcellasor6 td-nek beállítom a szövegét

//hetedik sor hozzáadása a táblázathoz

const tr7 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr7)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(elsocellasor7)// a td elemet hozzáadom a tr7-hoz
elsocellasor7.innerHTML = elsooszlop3// a elsoellasor7 td-nek beállítom a szövegét

const masodikcellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(masodikcellasor7)// a td elemet hozzáadom a tr7-hoz
masodikcellasor7.innerHTML=masodikoszlop3// a masodikcellasor7 td-nek beállítom a szövegét

