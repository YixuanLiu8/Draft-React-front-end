import React from 'react'
import { connect } from 'react-redux'
import {Myself} from "../profile/myself";
//basic structure for register module
export const Register = ({addUser,toMainPage}) => {
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
    let a7;
    return(
        <div>
            <h2>Register</h2>
            <div className="box1">
                <form>
                    Name:
                    <input className="input1" type="text" placeholder="Enter user name here"
                           ref={(node)=>name = node} id="Name"/>
                    <br/>
                    <span className="hint1" id='Namealert'></span>
                    <br/>
                    <br/>
                    Email:
                    <input className="input1" type="text" placeholder="xxx@xxx.xxx"
                           ref={(node)=>email = node} id="Email" />
                    <br/>
                    <span className="hint1" id='Emailalert'></span>
                    <br/>
                    <br/>
                    Date of Birth:
                    <input className="input1" type="date"  placeholder="YY/MM/DD"
                           ref={(node)=>dob = node} id="Birthday" />
                    <br/>
                    <span className="hint1" id='DoBalert'></span>
                    <br/>
                    <br/>
                    Phone:
                    <input className="input1" type="text" placeholder="xxx-xxx-xxxx"
                           ref={(node)=>phone = node} id="Phone" />
                    <br/>
                    <span className="hint1" id='Phonealert'></span>
                    <br/>
                    <br/>
                    Zipcode:
                    <input className="input1" type="text" placeholder="xxxxx"
                           ref={(node)=>zipcode = node} id="Zipcode" />
                    <br/>
                    <span className="hint1" id='Zipalert'></span>
                    <br/>
                    <br/>
                    Password:
                    <input className="input1" type="password" placeholder="*******"
                           ref={(node)=>pw1 = node} id="YourPassword"
                           onKeyup={()=>{
                               let pwd1 = document.getElementById('PasswordConfirmation');
                               pwd1.value = pwd1.value.replace(/./g, '*');
                           }
                           }
                    />
                    <br/>
                    <span className="hint1" id='Pw1alert'></span>
                    <br/>
                    <br/>
                    PW Confirm:
                    <input className="input1" type="password" placeholder="*******"
                           ref={(node)=>pw2 = node} id="PasswordConfirmation"
                           onKeyup={()=>{
                              let pwd2 = document.getElementById('PasswordConfirmation');
                                 pwd2.value = pwd2.value.replace(/./g, '*');
                          }
                          }
                           />
                    <br/>
                    <span className="hint1" id='Pw2alert'></span>
                    <br/>
                    <br/>
                    <input id="login" className="btn" type="submit" value="Register"
                           onClick={(event) =>
                           {event.preventDefault();
                               validateInfo(addUser,a1,a2,a3,a4,a5,a6,a7,toMainPage,
                                   pw1,pw2,name,email,phone,zipcode,dob)}
                           }/>
                    <input className="btn" type="reset" value="Clear"/>
                </form>
            </div>
        </div>

    )
}
//validate the input information
const validateInfo=(addUser,a1,a2,a3,a4,a5,a6,a7,toMainPage,Pw1,Pw2,
                    Name,Email,Phone,Zipcode,dob)=>{
    var flag=true;
    a1=document.getElementById('Namealert');
    a2=document.getElementById('Emailalert');
    a3=document.getElementById('DoBalert');
    a4=document.getElementById('Phonealert');
    a5=document.getElementById('Zipalert');
    a6= document.getElementById('Pw1alert');
    a7=document.getElementById('Pw2alert');
    //validate accountname
    if(validate(Name)&&validateAccountName(Name)){
        a1.innerHTML=""
    }
    else if(!validate(Name)){
        a1.innerHTML="Enter your name here."
        flag=false;
    }
    else if(!validateAccountName(Name)){
        a1.innerHTML="Name can only consist with upper/lower letters/numbers and cannot start with a number."
        flag=false;
    }
    //validate email
    if(validate(Email)&&validateEmail(Email)){
        a2.innerHTML=""
    }
    else if(!validate(Email)){
        a2.innerHTML="email address can not be empty!"
        flag=false;
    }
    else if(!validateEmail(Email)){
        a2.innerHTML="Fill in your e-mail address in correct form.(x@x.x)"
        flag=false;
    }
    if(validate(dob)){
        a3.innerHTML=""
    }
    else if(!validate(dob)){
        a3.innerHTML="Date of Birth can not be empty!"
        flag=false;
    }
    //validate phone
    if(validate(Phone)&&validatePhone(Phone)){
        a4.innerHTML=""
    }
    else if(!validate(Phone)){
        a4.innerHTML="Phone number can not be empty!"
        flag=false;
    }
    else if(!validatePhone(Phone)){
        a4.innerHTML="Fill in your phone number in correct form.(xxx-xxx-xxxx)"
        flag=false;
    }
    //validate zipcode
    if(validate(Zipcode)&&validateZipCode(Zipcode)){
        a5.innerHTML=""
    }
    else if(!validate(Zipcode)){
        a5.innerHTML="Zipcode can not be empty!"
        flag=false;
    }
    else if(!validateZipCode(Zipcode)){
        a5.innerHTML="Fill in your ZipCode in correct form.(xxxxx)"
        flag=false;
    }

    //password
    if(validate(Pw1)&&validatePassword1(Pw1)){
        a6.innerHTML="";
    }
    else if(!validate(Pw1)){
        a6.innerHTML="password can not be empty!"
        flag=false;
    }
   else if(!validatePassword1(Pw1)){
        a6.innerHTML="Password should in letters or numbers between 8-16 digits!"
        flag=false;
    }
    if(validate(Pw2)&&validatePassword2(Pw2)&&validatePassword3(Pw1,Pw2)){
        a7.innerHTML=""
    }
    else if(!validate(Pw2)){
       a7.innerHTML="Pasword Confirmation can not be empty!."
        flag=false;
    }
    else if(!validatePassword2(Pw2)){
        a7.innerHTML="Password should in letters or numbers between 8-16 digits!"
        flag=false;
    }
    else if(!validatePassword3(Pw1,Pw2)){
        a7.innerHTML="Password is not the same!"
        flag=false;
    }

    if(flag){
        newOne(addUser,toMainPage,Pw1,Pw2,
            Name,Email,Phone,Zipcode,dob);
    }
}
//validate if the element exists
const validate=(element)=>{
    if(element.value === ""||element.value === null){
        return false;
    }
    return true;
}
//add this to the state tree and turn to the main page
const newOne=(addUser,toMainPage,Pw1,Pw2,
                  Name,Email,Phone,Zipcode,dob)=>{
    var user={
        name:Name.value,
        email:Email.value,
        phone:Phone.value,
        zipcode:Zipcode.value,
        password:Pw1.value,
        dob:dob.value
    }
    addUser(user)
    toMainPage(user)
}
//validate the name by regular expression
const validateAccountName=(element)=>{
    var reg=/^([a-zA-Z]{1})([a-zA-Z0-9]{1})+$/;
    if(element.value.match(reg)||!(validate(element))){
        return true;
    }
    return false;
}
//validate the email by regular expression
const validateEmail=(element)=>{
    var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(element.value.match(reg)||(!validate(element))){
        return true;
    }
    return false;
}
//validate the phone by regular expression
const validatePhone=(element)=>{
    var reg = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if(element.value.match(reg)||(!validate(element))){
        return true;
    }
    return false;
}
//validate the zipcode by regular expression
const validateZipCode=(element)=>{
    var reg = /^([0-9]{5})$/;
    if(element.value.match(reg)||(!validate(element))){
        return true;
    }
    return false;
}
//validate the password by regular expression
const validatePassword1=(element1)=>{
    var reg = /^[a-zA-Z0-9]{8,16}$/;
    if(element1.value.match(reg)||(!validate(element1))){
        return true;
    }
    return false;
}
const validatePassword2=(element2)=>{
    var reg = /^[a-zA-Z0-9]{8,16}$/;
    if(element2.value.match(reg)||(!validate(element2))){
        return true;
    }
    return false;
}
const validatePassword3=(element1,element2)=>{
    if(element1.value===element2.value&&validatePassword2(element2)&&validatePassword1(element1)){
        return true;
    }
        return false;

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
            toMainPage: (user)=>
                dispatch({type: 'TO_MAIN_PAGE'},user)
        }
    }
)(Register)
