function test1(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    console.log(result);
    return result;
}
  
test1(3, 2);
  
  
  // Arrow Function
  const test2 = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    console.log(result);
    return result;
}
  
test2(2, 3);