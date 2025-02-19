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
th1.textContent = 'Uralkodó'// a th1-nek beállítom a szövegét

const th2 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th2)// a th elemet hozzáadom a tr-hoz
th2.textContent = 'Esemény'// a th2-nek beállítom a szövegét

const th3 = document.createElement('th')// létrehozok egy th elemet
tr.appendChild(th3)// a th elemet hozzáadom a tr-hoz
th3.textContent = 'Évszám'// a th3-nek beállítom a szövegét

//elso sor hozzáadása a táblázathoz

const tr1 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr1)// a tr elemet hozzáadom a tbody-hoz

const elsocella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(elsocella)// a td elemet hozzáadom a tr1-hez
elsocella.rowSpan = 2// az elsocella td-nek beállítom a rowspan-jét
elsocella.textContent = 'I. István'// az elsocella td-nek beállítom a szövegét

const masodikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(masodikcella)// a td elemet hozzáadom a tr1-hez
masodikcella.textContent = 'Koronázás'// a masodikcella td-nek beállítom a szövegét

const harmadikcella = document.createElement('td')// létrehozok egy td elemet
tr1.appendChild(harmadikcella)// a td elemet hozzáadom a tr1-hez
harmadikcella.textContent = '1000'// a harmadikcella td-nek beállítom a szövegét

//masodik sor hozzáadása a táblázathoz

const tr2 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr2)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(elsocellasor2)// a td elemet hozzáadom a tr2-hoz
elsocellasor2.textContent = 'Pannonhalmi apátság megalapítása '// az elsocellasor2 td-nek beállítom a szövegét

const masodikcellasor2 = document.createElement('td')// létrehozok egy td elemet
tr2.appendChild(masodikcellasor2)// a td elemet hozzáadom a tr2-hoz
masodikcellasor2.textContent = '1001'// a masodikcellasor2 td-nek beállítom a szövegét

//harmadik sor hozzáadása a táblázathoz

const tr3 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr3)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(elsocellasor3)// a td elemet hozzáadom a tr3-hoz
elsocellasor3.textContent = 'IV. Béla'// az elsocellasor3 td-nek beállítom a szövegét

const masodikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(masodikcellasor3)// a td elemet hozzáadom a tr3-hoz
masodikcellasor3.textContent = 'tatárjárás'// a masodikcellasor3 td-nek beállítom a szövegét

const harmadikcellasor3 = document.createElement('td')// létrehozok egy td elemet
tr3.appendChild(harmadikcellasor3)// a td elemet hozzáadom a tr3-hoz
harmadikcellasor3.textContent = '1241-1242'// a harmadikcellasor3 td-nek beállítom a szövegét

//negyedik sor hozzáadása a táblázathoz

const tr4 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr4)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(elsocellasor4)// a td elemet hozzáadom a tr4-hoz
elsocellasor4.rowSpan = 2// az elsocellasor4 td-nek beállítom a rowspan-jét
elsocellasor4.textContent = 'Mátyás király'// az elsocellasor4 td-nek beállítom a szövegét

const masodikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(masodikcellasor4)// a td elemet hozzáadom a tr4-hoz
masodikcellasor4.textContent = 'Bécs elfoglalása'// a masodikcellasor4 td-nek beállítom a szövegét

const harmadikcellasor4 = document.createElement('td')// létrehozok egy td elemet
tr4.appendChild(harmadikcellasor4)// a td elemet hozzáadom a tr4-hoz
harmadikcellasor4.textContent = '1485'// a harmadikcellasor4 td-nek beállítom a szövegét

//ötödik sor hozzáadása a táblázathoz

const tr5 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr5)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(elsocellasor5)// a td elemet hozzáadom a tr5-hoz
elsocellasor5.textContent = 'Kenyérmzei csata'// az elsocellasor5 td-nek beállítom a szövegét

const masodikcellasor5 = document.createElement('td')// létrehozok egy td elemet
tr5.appendChild(masodikcellasor5)// a td elemet hozzáadom a tr5-hoz
masodikcellasor5.textContent = '1479'// a masodikcellasor5 td-nek beállítom a szövegét

//hatodik sor hozzáadása a táblázathoz

const tr6 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr6)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(elsocellasor6)// a td elemet hozzáadom a tr6-hoz
elsocellasor6.rowSpan = 2// az elsocellasor6 td-nek beállítom a rowspan-jét
elsocellasor6.textContent = 'II. Rákóczi Ferenc'// az elsocellasor6 td-nek beállítom a szövegét

const masodikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(masodikcellasor6)// a td elemet hozzáadom a tr6-hoz
masodikcellasor6.textContent = 'Rákóczi szabadságharc'// a masodikcellasor6 td-nek beállítom a szövegét

const harmadikcellasor6 = document.createElement('td')// létrehozok egy td elemet
tr6.appendChild(harmadikcellasor6)// a td elemet hozzáadom a tr6-hoz
harmadikcellasor6.textContent = '1703'// a harmadikcellasor6 td-nek beállítom a szövegét

//hetedik sor hozzáadása a táblázathoz

const tr7 = document.createElement('tr')// létrehozok egy tr elemet
tbody.appendChild(tr7)// a tr elemet hozzáadom a tbody-hoz

const elsocellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(elsocellasor7)// a td elemet hozzáadom a tr7-hoz
elsocellasor7.textContent = 'szabadságharc vége'// a elsoellasor7 td-nek beállítom a szövegét

const masodikcellasor7 = document.createElement('td')// létrehozok egy td elemet
tr7.appendChild(masodikcellasor7)// a td elemet hozzáadom a tr7-hoz
masodikcellasor7.textContent = '1711'// a masodikcellasor7 td-nek beállítom a szövegét

