import React from 'react'
import { connect } from 'react-redux'
import Myself from './myself'
//basic structure of the profilw form
// eslint-disable-next-line
export const ProfileForm = ({addUser,user}) => {
    let name;
    let email;
    let phone;
    let zipcode;
    let pw1;
    let pw2;
    let dob;
    let a1;
    let a2;
    let a3;
    let a4;
    let a5;
    let a6;
    return(
        <div className="main">
            <h1>Profile Page</h1>
            <div className="box1">
                <form>
                    <Myself/>
                    Name:
                    <input className="input1" type="text" placeholder="your user name"
                           ref={(node)=>name = node} id="Name" />
                    <span id="Namenow">{user.name}</span>
                    <br/>
                    <span className="hint1" id='Namealert2'></span>
                    <br/>
                    <br/>
                    Email:
                    <input className="input1" type="text" placeholder="xxx@xxx.xxx"
                           ref={(node)=>email = node} id="Email" />
                    <span id="Emailnow">{user.email}</span>
                    <br/>
                    <span className="hint1" id='Emailalert2'></span>
                    <br/>
                    <br/>
                    DoB:
                    <input className="input1" type="date"
                           ref={(node)=>dob = node} id="Birthday" />
                    <span id="dobnow">{user.dob}</span>
                    <br/>
                    <span className="hint1" id='DoBalert2'></span>
                    <br/>
                    <br/>
                    Phone:
                    <input className="input1" type="text" placeholder="xxx-xxx-xxxx"
                           ref={(node)=>phone = node} id="Phone" />
                    <span id="Phonenow">{user.phone}</span>
                    <br/>
                    <span className="hint1" id='Phonealert2'></span>
                    <br/>
                    <br/>
                    Zipcode:
                    <input className="input1" type="text" placeholder="xxxxx"
                           ref={(node)=>zipcode = node} id="Zipcode" />
                    <span id="Zipcodenow">{user.zipcode}</span>
                    <br/>
                    <span className="hint1" id='Zipalert2'></span>
                    <br/>
                    <br/>
                    Password:
                    <input className="input1" type="password" ref={(node)=>pw1 = node}
                           id="YourPassword" /><br/>
                    <span className="hint1" id='pswalert1'></span>
                    <br/>
                    <br/>
                    PW Confirm:
                    <input className="input1" type="password" ref={(node)=>pw2 = node}
                           id="PasswordConfirmation" /><br/>
                    <span className="hint1" id='pswalert2'></span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <input id="update" className="btn" type="submit" value="Update"
                           onClick={(event) =>
                           {event.preventDefault();
                               validateInfo(addUser,a1,a2,a3,a4,a5,a6,pw1,pw2,name,
                                   email,phone,zipcode,dob,user)}
                           }/>
                    <input className="btn" type="reset" value="Clear"/>
                </form>
            </div>
        </div>
    )
}
//validate the info user input
const validateInfo=(addUser,a1,a2,a3,a4,a5,a6,Pw1,Pw2,Name,Email,Phone,Zipcode,dob,user)=> {
    var flag = true;
    a1 = document.getElementById('Namealert2');
    a2 = document.getElementById('Emailalert2');
    a3 = document.getElementById('DoBalert2');
    a4 = document.getElementById('Phonealert2');
    a5 = document.getElementById('Zipalert2');
    //validate accountname
    if(validateAccountName(Name)||Name.value===""||Name.value==null){
        a1.innerHTML = "";
    }
    else if (!validateAccountName(Name)) {
        a1.innerHTML = "Name can only consist with upper/lower letters/numbers and cannot start with a number. ";
        flag = false;
    }
    //validate email
    if(validateEmail(Email)||Email.value===""||Email.value==null){
        a2.innerHTML = "";
    }
   else if (!validateEmail(Email)) {
        a2.innerHTML = "Fill in your e-mail address in correct form.(x@x.x)";
        flag = false;
    }
    if(validatePhone(Phone)||Phone.value===""||Phone.value==null){
        a3.innerHTML = "";
    }
   else if (!validatePhone(Phone)) {
        a3.innerHTML = "Fill in your phone number in correct form.(xxx-xxx-xxxx)";
        flag = false;
    }
    //validate zipcode
    if(validateZipCode(Zipcode)||Zipcode.value===""||Zipcode.value==null){
        a4.innerHTML = "";
    }
   else if (!validateZipCode(Zipcode)) {
        a4.innerHTML = "Fill in your ZipCode in correct form.(xxxxx)";
        flag = false;
    }

    //password
    if(validatePassword(Pw1,Pw2)||Pw1.value===""||Pw1.value==null||Pw2.value===""||Pw2.value==null){
        a5.innerHTML = "";
    }
   else if (!validatePassword(Pw1, Pw2)) {
        a5.innerHTML = "Two password are not the same!";
        flag = false;
    }

    if (flag) {
            newOne(addUser, Pw1, Pw2, Name, Email, Phone, Zipcode, dob, user);
    }
}
// add the changed info in to the state
    const newOne = (addUser, Pw1, Pw2, Name, Email, Phone, Zipcode, dob, user) => {
        var myName;
        var myEmail;
        var myPhone;
        var myZipcode;
        var myPassword;
        var myBirth;
        if (Name.value !== "") {
            myName = Name.value;
        } else {
            myName = user.name;
        }
        if (Email.value !== "") {
            myEmail = Email.value;
        } else {
            myEmail = user.email;
        }
        if (Phone.value !== "") {
            myPhone = Phone.value;
        } else {
            myPhone = user.phone;
        }
        if (Zipcode.value !== "") {
            myZipcode = Zipcode.value;
        } else {
            myZipcode = user.zipcode;
        }
        if (Pw1.value !== "") {
            myPassword = Pw1.value;
        } else {
            myPassword = user.password;
        }
        if (dob.value!==""){
            myBirth = dob.value;
        }
        else {
            myBirth = user.dob;
        }
        var user = {
            name: myName,
            email: myEmail,
            phone: myPhone,
            zipcode: myZipcode,
            password: myPassword,
            dob: myBirth
        }
        addUser(user)
    }
//validate the name by regular expression
    const validateAccountName = (element) => {
        var reg = /^([a-zA-Z]{1})([a-zA-Z0-9]{1})+$/;
        if (element.value.match(reg) || element === null || element.value === "") {
            return true;
        }
        return false;
    }
//validate the email by regular expression
    const validateEmail = (element) => {
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (element.value.match(reg) || element === null || element.value === "") {
            return true;
        }
        return false;
    }
//validate the phone by regular expression
    const validatePhone = (element) => {
        var reg = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
        if (element.value.match(reg) || element === null || element.value === "") {
            return true;
        }
        return false;
    }
//validate the zipcode by regular expression
const validateZipCode=(element)=>{
    var reg = /^([0-9]{5})$/;
    if(element.value.match(reg)||element===null||element.value===""){
        return true;
    }
    return false;
}
//validate the password
const validatePassword=(element1,element2)=>{
    if((element1===null&&element2===null) ||(element1.value==="" && element2.value==="")){
        return true;
    }
    if(element1.value!=element2.value){
        return false;
    }
    return true;
}

export default connect(
    (state) => {
        return {
            user: state.user
        }
    },
    (dispatch) => {
        return {
            addUser: (user)=>
                dispatch({type: 'REGISTER',user}),
        }
    }
)(ProfileForm)
