document.getElementById('btn-submit').addEventListener('click', function(){
     const inputEmail = document.getElementById('input-email');
     const emailText = inputEmail.value;
     const inputPassword = document.getElementById('input-password');
     const passwordText = inputPassword.value;

 if(emailText=='sarzilmuntaha@gmail.com' && passwordText =='muntaha'){
      window.location.href = 'bank.html';
 }
 else{
    alert('Your information wrong!! Please right information.');  
 }
 
 });