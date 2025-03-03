let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  //   console.log(i);
}
let j = 0;
// 1-10
do {
  console.log("A");
  if (j == 3) {
    continue;
  }
  j++;
  console.log(j);
} while (j < 10);
/*
step 1 : j = 0 
loop 1 : 
    step 1 : P(A)
    step 2 : if (j === 3 ) false
    step 3 : j++=> 1
    step 4 : P(1)
loop 2 : 
    step 1 : P(A)
    step 2 : if( 1===3) false
    step 3 : j++ => 2
    step 4 : P(2)
loop 3 : 
    step 1 : P(A)
    step 2 : if( 2===3 ) false
    step 3 : j++ => 3
    step 4 : P(3)

loop 4 :  
    step 1 : P(A)
    step 2 : if(3 === 3) true continue skip 

loop 5 : 
    step 1 : P(A)
    step 2 : if(3 === 3 ) true continue skip

loop 6 :  
    step 1 : P(A)
    step 2 : if(3 === 3 ) true continue skip
    
*/




