document.getElementById ("deposit-button").addEventListener('click' ,function(){
    ///// get innput and convert the vlue
   const depositInfild = document.getElementById("deposit-input")
   console.log(depositInfild);
   const inputText =depositInfild.value 
  const inputAmount =parseFloat(inputText);
console.log( inputAmount);

  ////// 
const depositTotal = document.getElementById("deposit-total")
console.log(depositTotal);
const previoursDipositText = depositTotal.innerText;
const priviousDipAmount = parseFloat(previoursDipositText)

const newDipoTotal = priviousDipAmount + inputAmount;
 depositTotal.innerText = newDipoTotal;
// clear the feel
depositInfild.value = ''

// New balance feeld
const priviousBalanceTotal = document.getElementById("balace-total")
const priviousBalanceTotalTextTo = priviousBalanceTotal.innerText
const priviousBalanceAmount = parseFloat(priviousBalanceTotalTextTo)
const newBalanceTotal = priviousBalanceAmount + inputAmount
priviousBalanceTotal.innerText = newBalanceTotal ;
})


                                                // withdrow fi
  document.getElementById("withdra-button").addEventListener('click', function(){
   const withdraFild= document.getElementById("withdraw-input")
   console.log(withdraFild);
   const withdrawInputText = withdraFild.value
   const withraAmount = parseFloat(withdrawInputText)
   console.log(withraAmount );
   //////////
   
   const withdraTotal = document.getElementById("withdraw-total")
const updatewithdra = withdraTotal.innerText
const updatewithdraTextTo = parseFloat(updatewithdra)
const ubdateWithdaAmount = updatewithdraTextTo + withraAmount;
withdraTotal.innerText = ubdateWithdaAmount;
// clear the withdrw input valu
withdraFild.value = ''

const priviousBalanceTotal = document.getElementById("balace-total")
const priviousBalanceTotalTextTo = priviousBalanceTotal.innerText
const priviousBalanceAmount = parseFloat(priviousBalanceTotalTextTo)
const newBalanceTotal = priviousBalanceAmount - withraAmount
priviousBalanceTotal.innerText = newBalanceTotal ;


   
    
  })                                              