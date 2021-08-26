//getter and setter fields for input
class AddressBookData
{
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id=id;
    }
    get fullName()
    {
        return this._fullName;
    }
    set fullName(fullName)
    {
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}([\\s]?[A-Za-z]{1,})*$");
        if(nameRegex.test(fullName))
        {
            this._fullName=fullName;
        }
       else throw "Invalid name";
    }


    get phoneNum()
    {
        return this._phoneNum;
    }
    set phoneNum(phoneNum)
    {
        let phoneRegex = RegExp("^[0-9]+\\s[0-9]{10}$");
        if(phoneRegex.test(phoneNum))
        {
            this._phoneNum=phoneNum;
        }
       else throw "Invalid Phone number"
    }

    get address()
    {
        return this._address;
    }
    set address(address)
    {
        this._address=address;
    }
    
    get city()
    {
        return this._city;
    }
    set city(city)
    {
        this._city=city;
    }

    get state()
    {
        return this._state;
    }
    set state(state)
    {
        this._state=state;
    }

    get zipCode()
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let zipRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");
        if(zipRegex.test(zipCode))
        {
            this._zipCode=zipCode;
        }
      else throw "Invalid ZipCode";
    }
    toString()
    {

        return "FullName = "+this.fullName+" || PhoneNumber: "+this.phoneNum+" || Address: "+this.address+" || City: "+this.city+
        " || State: "+this.state+ " ||ZipCode: "+this.zipCode;
    }
}
