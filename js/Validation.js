window.addEventListener('DOMContentLoaded',(event)=>
{
const name=document.querySelector("#name");
const textError = document.querySelector(".text-error");
name.addEventListener('input', function () 
{
  if(name.value.length==0)
  {
    textError.textContent="";
    return;
  }
try
{
  (new AddressBookData()).fullName=name.value;
  textError.textContent="";
}
catch(e)
{
  textError.textContent=e;
}
});

const phoneNumber=document.querySelector("#phone");
const textPhoneError = document.querySelector(".text-errorPhone");
phoneNumber.addEventListener('input', function () 
{
  if(phoneNumber.value.length==0)
  {
    textPhoneError.textContent="";
    return;
  }
try
{
  (new AddressBookData()).phoneNum=phoneNumber.value;
  textPhoneError.textContent="";
}
catch(e)
{
    textPhoneError.textContent=e;
}
});

const zip=document.querySelector("#zip");
const textZipError = document.querySelector(".text-errorZip");
zip.addEventListener('input', function () 
{
  if(zip.value.length==0)
  {
    textZipError.textContent="";
    return;
  }
try
{
  (new AddressBookData()).zipCode=zip.value;
  textZipError.textContent="";
}
catch(e)
{
    textZipError.textContent=e;
}
});
});