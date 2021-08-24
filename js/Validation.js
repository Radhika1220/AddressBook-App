//Validation for input(name,phone number ,zipcode)
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
//onclicking the add button (data will be populated in alert box)

const save=()=>
{
  try
  {
    let addrBookData=createAddrBook();
    createAndUpdateStorage(addrBookData);
  }
  catch(e)
  {
    return;
  }
}
//storing in local storage
function createAndUpdateStorage(addrBookData)
{
  let addrBookDataList=JSON.parse(localStorage.getItem("AddressBookList"));
  if(addrBookDataList!=undefined)
  {
    addrBookDataList.push(addrBookData);
  }
  else{
    addrBookDataList=[addrBookData];
  }
  alert(addrBookDataList.toString());
  localStorage.setItem("AddressBookList",JSON.stringify(addrBookDataList));
}
//creating address book 
const createAddrBook=() =>
{
  let addrBookData=new AddressBookData();
  try{
    addrBookData.fullName=getInputValueById("#name");
  }
  catch(e)
  {
    setTextValue(".text-error",e);
    throw e;
  }
  try{
  addrBookData.phoneNum=getInputValueById("#phone");
  }
  catch(e)
  {
      setTextValue(".text-errorPhone",e);
      throw e;
  }
  addrBookData.address=getInputValueById("#Address");
  addrBookData.city=getInputValueById("#City");
  addrBookData.state=getInputValueById("#State");
  try
  {
  addrBookData.zipCode=getInputValueById("#zip");
  
  }
  catch(e)
  {
      setTextValue(".text-errorZip",e);
      throw e;
  }
  alert(addrBookData.toString());
  return addrBookData;
}


const getInputValueById=(id) =>
{
  let value=document.querySelector(id).value;
  return value;
}



const setTextValue=(id,value) =>
{
  const element=document.querySelector(id);
  element.textContent=value;
}
//reset functionality

const resetForm=() =>
{
   setTextValue('#name','');
   setTextValue('#phone','');
   setTextValue('#Address','');
   setTextValue('#zip','');
   setTextValue(".text-error",'');
   setTextValue('.text-errorPhone','');
   setTextValue('.text-errorZip','');
   alert("Reseted!!!");
}




