document.getElementById('btn-deposit').addEventListener('click', function(){
     // deposit input value 
     const inputDeposit = document.getElementById('input-deposit');
     const newDepositText = inputDeposit.value;
     inputDeposit.value='';

     if(isNaN(newDepositText)){
          alert('Please give your input number!!');
          return;
     }
     if(Number(newDepositText)<=0){
          alert('your value is invalid!!')
          return;
     }
     // deposit total push
     const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;

     const totalNewDeposit = Number(newDepositText) + Number(depositTotalText);
     depositTotal.innerText =  totalNewDeposit;


     // balance add to deposit 
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     
     const totalNewBalance = Number(balanceTotalText) + Number(newDepositText);
     balanceTotal.innerText = totalNewBalance;
     

})