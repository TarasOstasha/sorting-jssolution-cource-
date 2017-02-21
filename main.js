                        
                        //--realeaze function bubbleSort--//

var numbers = [1, 1000, 30000, 550, 6, 100, 51, 10, 1000000];
var btn = document.getElementsByClassName('btnSuccess')[0];
btn.addEventListener('click', function bubbleSort() {
    var changet;
    do {
        changet = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (numbers[i] > numbers[i+1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                changet = true;
            }
        }
    } while (changet);
 alert(numbers); 
});






                //--realeaze function Selection Sort--//

var xhr = new XMLHttpRequest();
xhr.open("get", "/dataFeb-21-2017.json");
xhr.responseType = "json";
xhr.addEventListener("readystatechange", function() {
    if (this.readyState !== 4) {
        return;
    }
    var beforeTable = document.getElementById('before');
    outer(this.response, beforeTable);

    var afterTable = document.getElementById('after');
    outer(this.response, afterTable);
    // code...
    //this.response // <- json loaded from server
});
xhr.send();

function outer(data, table) {
    for( var i = 0; i < data.length; i++) {
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

var InsertionSort =  document.getElementById('btnsort');
InsertionSort.addEventListener('click', function sort(data) {
    var len = data.length,
    min, i, j;
    for(i = 0; i < len; i++) {
        min = i; //Мінімальний набір для цієї позиції
        //перевірити решту масиву, щоб побачити, чи ще є щось менше
        for(j = i + 1; j < len; j++) {
            if(data[j] < data[min]) {
                min = j;
            }
        }
        //якщо мінімум не на позиції, поміняти його
        if(i != min) {
            swap(data, i, min);
        }
    }
    return data;
});





function swap(data, firstIndex, secondIndex) {
    var temp = data[firstIndex];
    data[firstIndex] = data[secondIndex];
    data[secondIndex] = temp;
}


