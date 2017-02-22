//--realeaze function bubbleSort--//

var numbers = [1, 1000, 30000, 550, 6, 100, 51, 10, 1000000];
var btn = document.getElementsByClassName('btnSuccess')[0];
btn.addEventListener('click', function bubbleSort() {
    var changet;
    do {
        changet = false;
        for (var i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                changet = true;
            }
        }
    } while (changet);
    alert(numbers);
});

var jsonData;

//--realeaze function Selection Sort--//
$.getJSON("dataFeb-21-2017.json", function (json) {
    jsonData = json;
    outer(json, 'before');
    outer(json, 'after');
});

function outer(data, tableName) {
    var table = document.getElementById(tableName);
    clearTable(table)
    for (i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        var tdNames = document.createElement('td');
        var tdCity = document.createElement('td');
        var tdCountry = document.createElement('td');
        var tdZipCode = document.createElement('td');
        tr.appendChild(tdNames);
        tr.appendChild(tdCity);
        tr.appendChild(tdCountry);
        tr.appendChild(tdZipCode);
        tdNames.innerText = data[i].Names;
        tdCity.innerText = data[i].City;
        tdCountry.innerText = data[i].Country;
        tdZipCode.innerText = data[i]["Zip code"];
        table.appendChild(tr);
    }
}

function clearTable(table) {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

var InsertionSortUp = document.getElementById('btnsortUp');
InsertionSortUp.addEventListener('click', sortAsc);

var InsertionSortDown = document.getElementById('btnsortDown');
InsertionSortDown.addEventListener('click', sortDesc);

//по спаданню
function sortDesc() {
    var data = jsonData;
    var len = data.length,
        i, j, val;
    for (i = 0; i < len; i++) {
        val = data[i];

        for (j = i - 1; j > -1 && data[j].Names.localeCompare(val.Names) == -1; j--) {
            data[j + 1] = data[j];
        }

        data[j + 1] = val;
    }

    outer(data, 'after');
}

//по зростанню
function sortAsc() {
    var data = jsonData;
    var len = data.length,
        min, i, j;
    for (i = 0; i < len; i++) {
        min = i; //Мінімальний набір для цієї позиції
        //перевірити решту масиву, щоб побачити, чи ще є щось менше
        for (j = i + 1; j < len; j++) {
            if (data[j].Names.localeCompare(data[min].Names) == -1) {
                min = j;
            }
        }
        //якщо мінімум не на позиції, поміняти його
        if (i != min) {
            swap(data, i, min);
        }
    }
    outer(data, 'after');
}


function swap(data, firstIndex, secondIndex) {
    var temp = data[firstIndex];
    data[firstIndex] = data[secondIndex];
    data[secondIndex] = temp;
}


