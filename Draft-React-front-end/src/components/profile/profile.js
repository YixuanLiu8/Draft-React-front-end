import React from 'react'
import { connect } from 'react-redux'
import ProfileForm from './profileForm'
//basic structure for profile
export const Profile = ({location,toMainPage,user}) => {
    let headline;
    return(
        <div>
            <div className="navbar">
                <input id="goMain" className="btn" type="submit"
                       value="Back to Main Page" onClick={(event) =>
                {event.preventDefault();
                    goMain(location,toMainPage,user)}
                }/>
                <br/>
            </div>
            <ProfileForm/>
        </div>
    )
}
// go to the main page
const goMain=(location,toMainPage,user)=>{
    toMainPage(user)
}

export default connect(
    (state) => {
        return {
            location:state.location,
            user: state.user
        }
    },
    (dispatch) => {
        return {
            toMainPage :(user)=>dispatch({type: 'TO_MAIN_PAGE'},user)
        }
    }
)(Profile)
