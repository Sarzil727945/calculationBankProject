document.getElementById('btn-withdraw').addEventListener('click', function(){
     // withdraw input value 
      const inputWithdraw = document.getElementById('input-withdraw');
      const inputWithdrawValue = inputWithdraw.value;
      inputWithdraw.value ='';

      if(isNaN(inputWithdrawValue)){
          alert('Please give your input number!!');
          return;
     }
     if(Number(inputWithdrawValue)<0){
          alert('Your value is invalid!!')
          return;
     }
     if(Number(inputWithdrawValue)==0){
          alert('Your value is null!!')
          return;
     }

     //  Withdraw total push
      const withdrawTotal = document.getElementById('withdraw-total');
      const withdrawTotalText = withdrawTotal.innerText;
      

     // balance to withdraw 
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;

     // totalNewBalance thake withdrawTotal basi hola
     if(Number(balanceTotalText) < Number(inputWithdrawValue)){
          alert('This balance is not available!!');
          return;
     }

     // balance to withdraw part
     const newTotalWithdraw = Number(withdrawTotalText) + Number(inputWithdrawValue);
     withdrawTotal.innerText = newTotalWithdraw;

     // totalNewBalance thake withdrawTotal basi hola part
     const totalNewBalance = Number(balanceTotalText) - Number(inputWithdrawValue);
     balanceTotal.innerText = totalNewBalance;

     })
     