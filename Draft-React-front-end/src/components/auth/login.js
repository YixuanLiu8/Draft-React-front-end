import React from 'react'
import { connect } from 'react-redux'

//basic structure of the login module
const users = require('../../data/followers.json')
const userspr=users.followings
export const Login = ({addUser,toMainPage}) => {
    let username;
    let password;
    return(
        <div>
            <h2>Log In</h2>
            <br/>
            <div className="box1">
                <form>
                    User Name:
                    <input className="hint" type="text" placeholder="Enter user name here"
                           ref={(node)=>username = node} id="Name" />
                    <br/><br/>
                    Password:
                    <input className="hint" type="password"
                           ref={(node)=>password = node} id="YourPassword" />
                    <br/>
                    <span className="hint1" id='Pswalert'></span>
                    <br/>
                    <br/>
                    <input id="login" className="btn" type="submit" value="Login"
                           onClick={(event) => {
                               event.preventDefault();
                               getInfo(addUser,toMainPage,username,password)
                           }
                           }/>
                    <input className="btn" type="reset" value="Clear" />

                </form>
            </div>
        </div>
    )}

//get the input info and save it in the state tree and turn to the main page
const getInfo=(addUser,toMainPage,username,password)=>{
    var myBirth="1999-10-18"
    if(username.value===''||password.value===''){
        document.getElementById('Pswalert').innerHTML="Enter your name and password here!"
    }
    else if((username.value!=='Leanne Graham'&&password.value!=='Kulas Light')
        &&(username.value!=='Ervin Howell'&&password.value!=='Victor Plains')
        &&(username.value!=='Clementine Bauch'&&password.value!=='Douglas Extension')
        &&(username.value!=='Patricia Lebsack'&&password.value!=='Hoeger Mall')
        &&(username.value!=='Chelsey Dietrich'&&password.value!=='Skiles Walks')
        &&(username.value!=='Mrs. Dennis Schulist'&&password.value!=='Norberto Crossing')
        &&(username.value!=='Kurtis Weissnat'&&password.value!=='Rex Trail')
        &&(username.value!=='Nicholas Runolfsdottir V'&&password.value!=='Ellsworth Summit')
        &&(username.value!=='Glenna Reichert'&&password.value!=='Dayna Park')
        &&(username.value!=='Clementina DuBuque'&&password.value!=='Kattie Turnpike')){
        document.getElementById('Pswalert').innerHTML="Please register first!"
    }
    else{
        var user={
            name:username.value,
            email:"",
            phone:"",
            zipcode:"",
            password:password.value,
            birthday:myBirth
        }
        addUser(user)
        toMainPage(user)
    }
}

export default connect(
    (state) => {
        return {
            user: state.user
        }
    },
    (dispatch) => {
        return {
            addUser: (user)=>dispatch({type: 'LOG_IN',user}),
            toMainPage: (user)=>dispatch({type: 'TO_MAIN_PAGE'},user)
        }
    }
)(Login)
