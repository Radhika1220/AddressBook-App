//Validation for input(name,phone number ,zipcode)
let isUpdate=false;
let contactObj={};
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
checkForUpdate();
});
//check for update
const checkForUpdate=() =>
{
  var contactDataJson=localStorage.getItem('editContact');
  isUpdate=contactDataJson?true: false;
  if(!isUpdate) return;
  contactObj=JSON.parse(contactDataJson);
  setForm();
}
//populate 
const setForm= () =>
{
  setValue('#name',contactObj._fullName);
  setValue('#phone',contactObj._phoneNum);
  setValue('#Address',contactObj._address);
  setValue('#City',contactObj._city);
  setValue('#State',contactObj._state);
  setValue('#zip',contactObj._zipCode);
}
//onclicking the add button (data will be populated in alert box)

const save=(event)=>
{
  event.preventDefault();
  event.stopPropagation();
  try
  {
   setContactDataObject();
   createAndUpdateStorage();
   resetForm();
  
   window.location.replace(site_Properties.home_page);
  }
  catch(e)
  {
    return;
  }
}
const setContactDataObject=()=>{
  contactObj._fullname=getInputValueById('#name');
  contactObj._phoneNum = getInputValueById('#phone');
  contactObj._address = getInputValueById('#Address');
  contactObj._city=getInputValueById('#City');
  contactObj._state =getInputValueById('#State');
  contactObj._zipCode = getInputValueById('#zip');
}
//storing in local storage
function createAndUpdateStorage()
{
  let addrBookDataList=JSON.parse(localStorage.getItem("AddressBookList"));
  if(addrBookDataList)
 {
   let addrData= addrBookDataList
   .find(contact => contact._id == contactObj._id);
   if(!addrData)
   {
    addrBookDataList.push(createContactInAddressBook());
   }
   else{
     const index= addrBookDataList.map(contact => contact._id)
     .indexOf(addrData._id);
     addrBookDataList.splice(index,1,createContactInAddressBook(addrData._id));
   }
 }
 else{
  addrBookDataList=[createContactInAddressBook()]
 }
  localStorage.setItem("AddressBookList",JSON.stringify(addrBookDataList));
}

const createContactInAddressBook=(id)=>
{
  let addrBookData=new AddressBookData();
  if(!id) addrBookData._id=createNewContactId();
  else
  addrBookData._id=id;
  setContactData(addrBookData);
  return addrBookData;
}

const setContactData = (addrBookData)=>{
  try {
    addrBookData.fullName = contactObj._fullname;
    addrBookData.phoneNum = contactObj._phoneNum;
    addrBookData.address=contactObj._address;
    addrBookData.city=contactObj._city;
    addrBookData.state=contactObj._state;
    addrBookData.zipCode=contactObj._zipCode;
 }catch(e){
     alert(e);
 }
 alert(addrBookData.toString());
};

//creating a id
const createNewContactId=()=>
{
  let conatctId=localStorage.getItem("ContactId");
  conatctId=!conatctId ? 1:(parseInt(conatctId)+1).toString();
  localStorage.setItem("ContactId",conatctId);
  return conatctId;
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




const setValue=(id,value)=>{
  const element = document.querySelector(id);
  element.value=value;
}