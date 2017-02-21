                        //--realeaze function bubbleSort--//
                        
var numbers = [1, 1000, 30000, 550, 6, 100, 51, 10, 1000000];
document.write('Нажміть кнопку для того що відсортувати масив чисел' + numbers);
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
