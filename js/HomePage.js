let addrBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addrBookList=getAddressBookFromLocalStorage();
    document.querySelector(".addr-count").textContent=addrBookList.length;
    createInnerHtml();
    localStorage.removeItem('editContact');
});
//UC6--getting the data from local storage
const getAddressBookFromLocalStorage=()=>
{
    return localStorage.getItem("AddressBookList") ? JSON.parse(localStorage.getItem("AddressBookList")) : [];
}
//UC5-->employee details from json object(retrieving all jsom object using for loop)
createInnerHtml = () => {
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th><th>ZipCode</th><th>PhoneNumber</th><th></th>";
    let innerHtml = `${headerHtml}`;
    let addrBookList = getAddressBookFromLocalStorage();
    for (const addrBookData of addrBookList) 
    {
        innerHtml = `${innerHtml}
    
    <tr>
 <td>${addrBookData._fullName}</td>
    <td>${addrBookData._address}</td>
    <td>${addrBookData._city}</td>
    <td>
     ${addrBookData._state}
    </td>
    <td>${addrBookData._zipCode}</td>
    <td>${addrBookData._phoneNum}</td>
    <td>
        <img id="${addrBookData._id}" src="../assests/icons/delete-black-18dp.svg" alt="delete icon" onclick="remove(this)">
        <img id="${addrBookData._id}" src="../assests/icons/create-black-18dp.svg" alt="create icon" onclick="update(this)">
    </td>
</tr>
    `;

        document.querySelector('#display').innerHTML = innerHtml;

    }
}
//delete operation 
const remove= (node) =>
{
  let addrBookData=addrBookList.find(contact => contact._id == node.id);
  if(!addrBookData) return ;
  const index= addrBookList.map(contact => contact._id)
  .indexOf(addrBookData._id);
  addrBookList.splice(index,1);
  localStorage.setItem("AddressBookList",JSON.stringify(addrBookList));
  document.querySelector(".addr-count").textContent=addrBookList.length;
  createInnerHtml();
}

//update operation
const update=(node)=>
{
    let addrBookData=addrBookList.find(contact=>contact._id==node.id)
    if(!addrBookData) return;
    localStorage.setItem('editContact',JSON.stringify(addrBookData))
    window.location.replace(site_Properties.add_contact);
}