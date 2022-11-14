let array = [0, 7, 2, 2, 100, 122, false, null, 5, 1, "qwe", 148, 0, null, true, 0, 2, 4, 6, 8, "zxc", false, 5, 1, "asd", 7, 1, true, 9, 3, null, 3, 0,];

function GetCountEvensOddsZeros(array){ 

    let evens = 0;
    let odds = 0; 
    let zeros = 0;
  
    for (let i = 0; i < array.length; i++) { 
        if(typeof array[i] == 'number') {
            if(array[i] == 0){
                zeros++; 
            } else {
                if(array[i] % 2 == 0) {
                    evens++;
                } else { 
                    odds++;
                } 
            } 
        } 
    } 
    console.log(`количество четных ${evens}`); 
    console.log(`количество нечетных ${odds}`); 
    console.log(`количество нулевых ${zeros}`); 
} 

GetCountEvensOddsZeros(array);