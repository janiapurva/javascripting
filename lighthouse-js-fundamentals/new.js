for (let number = 100; number <=200; number++){
  if(number % 3 === 0 && number % 4 === 0 ){
    console.log("LoopyLighthouse");
  } else if(number % 3 === 0){
    console.log("Loopy");
  } else if(number % 4 === 0){
    console.log("Lighthouse");
  } else{
    console.log(number);
  }
}

const amounts =[61.00, 52.25, 112.99, 5.00];
const total = 0;
for (let i =0; i < amounts.length; i++){
  total += amounts[i];
}
console.log("Order total is:", total);

const total = 0;
for(let amount of amounts){
  total += amount;
}
console.log('Order total is: ' , total);
