let k = 0; // счетчик промежуточных шагов от a до b
let intervalId = 0; // Id интервала
function set(a, b){
    k = 0; // обнуляем
    steps = b-a+1; // подсчитаем количество шагов
    intervalId = setInterval(print, 1000, a, steps); // запускаем
}
function print(a, steps){
    console.log(a + k); // выводим начальное+счетчик
    k++; // считаем шаги
    if(k == steps)
        clearInterval(intervalId) // если прошли все шаги выключаем интервал
}

set(5, 15);