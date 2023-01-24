const form=document.getElementById("form");
 const firstName=document.getElementById("firstname");
 const lastName=document.getElementById("lastname");
 const email=document.getElementById("email");
 const password=document.getElementById("password");
 form.addEventListener('submit',(e)=>{
      e.preventDefault();
      checkInputs();
 });
 function checkInputs(){
      const firstNameValue=firstName.value.trim();
      const lastNameValue=lastName.value.trim();
      const emailValue=email.value.trim();
      const passwordValue=password.value.trim();

      //first name
       if (firstNameValue ===''){
             setError (firstName,"First Name cannot be empty");
       }
       else{
            setSuccess(firstName);
       }
       //email
       if (lastNameValue ===''){
            setError (lastName,"Last Name cannot be empty");
       }
       else{
           setSuccess(lastName);
       }
       //email
       if (emailValue ===''){
           setError (email,"Email cannot be empty");
       }
       else if(!isEmail(emailValue)){
           setError(email,"Looks like this is not an email");
       } 
       else{
            setSuccess(email);
       }
       //password
       if (passwordValue ===''){
            setError (password,"Password cannot be empty");
       }
       else{
            setSuccess(password);
    }
 
  }
  
function setError(input,message){
  const formControl=input.parentElement;
  const formControls=formControl.querySelector('.erroricon');
  const small= formControl.querySelector('small');
  formControls.classList.add('active');
  small.innerText=message;
  small.classList.add('activeError');
  //console.log(small);
 // console.log(formControls);
}
function setSuccess(input){
  const formControl=input.parentElement;
  const formControls=formControl.querySelector('.erroricon');
  const small= formControl.querySelector('small');
  formControls.classList.remove('active');
  const success=formControl.querySelector('input');
  success.classList.add('success');
  small.classList.remove('activeError');
}
 
 function isEmail(email){
   return /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/.test(email);

 }