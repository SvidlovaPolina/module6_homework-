function IsPrime(n){ 
    if(n > 1000 || n < 2){
        console.log('Данные неверны');
        return;
    }

    for(var i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            console.log('Не простое');
            return;
        }
    }
    console.log('Простое');
}

IsPrime(257);