function action(a){
    return function(b){
      let sum = a + b;
      console.log(sum)
      return sum;
    }
}
  
action(3)(4);