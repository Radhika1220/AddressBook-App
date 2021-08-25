let addrBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addrBookList=getAddressBookFromLocalStorage();
    document.querySelector(".addr-count").textContent=addrBookList.length;
    createInnerHtml();
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
        <img id="${addrBookData._name}" src="../assests/icons/delete-black-18dp.svg" alt="delete icon">
        <img id="${addrBookData._name}" src="../assests/icons/create-black-18dp.svg" alt="create icon">
    </td>
</tr>
    `;

        document.querySelector('#display').innerHTML = innerHtml;

    }
}




