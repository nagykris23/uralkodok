/**
 * Colgroup létrehozása
 */
function createHeader() {
    const colgroup = document.createElement('colgroup');//létrehozok egy colgroup elemet
    table.appendChild(colgroup);//a colgroup elemet hozzáadom a table-hoz

    const col1 = document.createElement('col');//létrehozok egy col elemet
    colgroup.appendChild(col1);//a col elemet hozzáadom a colgroup-hoz
    col1.classList.add('fontos');//a col1-hez hozzáadok egy class-t

    const col2 = document.createElement('col');//létrehozok egy col elemet
    colgroup.appendChild(col2);//a col elemet hozzáadom a colgroup-hoz  

    const col3 = document.createElement('col');//létrehozok egy col elemet  
    colgroup.appendChild(col3);//a col elemet hozzáadom a colgroup-hoz
    col3.classList.add('fontos');//a col3-hoz hozzáadok egy class-t

    createHeaderRow();//fejléc sor létrehozása
}

/**
 * Fejléc létrehozása
 */
function createHeaderRow() {
    const thead = document.querySelector('thead');//létrehozok egy tr elemet
    const tr = document.createElement('tr');//létrehozok egy tr elemet
    thead.appendChild(tr);//a tr elemet hozzáadom a thead-hoz
 
    const headers = [fejlec.uralkodo, fejlec.esemeny, fejlec.evszam];//fejléc adatok tömbje
 
    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement('th');//létrehozok egy th elemet
        tr.appendChild(th);//a th elemet hozzáadom a tr-hoz
        th.innerHTML = headers[i];//a th-nek beállítom a szövegét
    }
}

/**
 * Táblázat létrehozása ciklussal
 */
function rendermenu() {
    for (let i = 0; i < array.length; i++) {
        const tbody = document.querySelector('tbody');//létrehozok egy tbody elemet
        const adat = array[i];
        const tr = document.createElement('tr');//létrehozok egy tr elemet
        tbody.appendChild(tr);//a tr elemet hozzáadom a tbody-hoz

        const td1 = document.createElement('td');//létrehozok egy td elemet
        tr.appendChild(td1);//a td elemet hozzáadom a tr-hoz
        td1.innerHTML = adat.uralkodo;//a td1-nek beállítom a szövegét

        const td2 = document.createElement('td');//létrehozok egy td elemet
        tr.appendChild(td2);//a td elemet hozzáadom a tr-hoz
        td2.innerHTML = adat.esemeny1 || adat.esemeny;//a td2-nek beállítom a szövegét

        const td3 = document.createElement('td');//létrehozok egy td elemet
        tr.appendChild(td3);//a td elemet hozzáadom a tr-hoz
        td3.innerHTML = adat.evszam1 || adat.evszam;//a td3-nek beállítom a szövegét

        //elágazás létrehozása
        if (adat.esemeny2 && adat.evszam2) {
            td1.rowSpan = 2;//beállítom a rowspan-t

            const tr2 = document.createElement('tr');//létrehozok egy tr elemet
            tbody.appendChild(tr2);//a tr elemet hozzáadom a tbody-hoz

            const td2_2 = document.createElement('td');//létrehozok egy td elemet
            tr2.appendChild(td2_2);//a td elemet hozzáadom a tr2-hoz
            td2_2.innerHTML = adat.esemeny2;//a td2_2-nek beállítom a szövegét

            const td3_2 = document.createElement('td');//létrehozok egy td elemet
            tr2.appendChild(td3_2);//a td elemet hozzáadom a tr2-hoz
            td3_2.innerHTML = adat.evszam2;//a td3_2-nek beállítom a szövegét
        }
    }
}

/**
 * Form létrehozása
 */
function createform() {//függvény létrehozása
    //form letrehozasa
    const form = document.createElement('form');//form elem letrehozasa
    form.id = 'form';//form id beallitasa
    form.action = '#';//form action beallitasa

    //form elemeinek letrehozasa
    createFormField(form,'Uralkodó neve:', 'uralkodo_nev', 'uralkodo_nev');//uralkodo neve mezot letrehozza
    createFormField(form,'Első esemény:', 'esemeny1', 'esemeny1');//elso esemeny mezot letrehozza
    createFormField(form,'Első esemény évszáma:', 'evszam1', 'evszam1');//elso evszam mezot letrehozza
    createFormField(form,'Második esemény:', 'esemeny2', 'esemeny2');//masodik esemeny mezot letrehozza
    createFormField(form,'Második esemény évszáma:', 'evszam2', 'evszam2');//masodik evszam mezot letrehozza

    const button = document.createElement('button');//gomb letrehozasa
    button.type = 'submit';//gomb típusának beállítása
    button.innerHTML = 'Hozzáadás';//gomb szoveg beallitasa
    form.appendChild(button);//gomb hozzaadasa a formhoz

    document.body.appendChild(form);//form hozzaadasa a body-hoz
}

/**
 * Mezők létrehozása
 * @param {string} labelText - A mező címkéje
 * @param {string} inputId - A mező azonosítója
 * @param {string} inputName - A mező neve
 */
function createFormField(form, labelText, inputId, inputName) {
    const label = document.createElement('label');//label letrehozasa
    label.htmlFor = inputId;//label for attributum beallitasa
    label.innerHTML = labelText;//label szoveg beallitasa

    const input = document.createElement('input');//input letrehozasa
    input.type = 'text';//input tipus beallitasa
    input.id = inputId;//input id beallitasa
    input.name = inputName;//input name beallitasa

    const errorSpan = document.createElement('span');//hibauzenet hely letrehozasa
    errorSpan.id = `${inputId}_error`;//hibauzenet id beallitasa
    errorSpan.className = 'error';//hibauzenet osztaly beallitasa

    form.appendChild(label);//label hozzaadasa a formhoz
    form.appendChild(document.createElement('br'));//uj sor letrehozasa
    form.appendChild(input);//input hozzaadasa a formhoz
    form.appendChild(document.createElement('br'));//uj sor letrehozasa
    form.appendChild(errorSpan);//hibauzenet hely hozzaadasa
    form.appendChild(document.createElement('br'));//uj sor letrehozasa
}

/**
 * Validálja a form mezőt és megjeleníti a hibaüzenetet, ha szükséges
 * @param {HTMLInputElement} inputHtmlElement - A form mező HTML eleme
 * @param {string} errorMessage - A megjelenítendő hibaüzenet
 * @param {HTMLInputElement} errorElementId - A hibaüzenet megjelenítésére szolgáló HTML elem azonosítója
 * @returns {boolean} - A validálás eredménye, true ha érvényes, false ha nem
 */
function validatform(inputHtmlElement, errorMessage, errorElementId) {//validalo fuggveny
    let valid = true;//kezdetben igaz
    if (inputHtmlElement.value === '') {//ha ures
        document.getElementById(errorElementId).innerHTML = errorMessage;//hibauzenet
        valid = false;//ha hibas, hamis
    } else {
        document.getElementById(errorElementId).innerHTML = '';//törli a hibauzenetet
    }
    return valid;//visszaadjuk az erteket
}