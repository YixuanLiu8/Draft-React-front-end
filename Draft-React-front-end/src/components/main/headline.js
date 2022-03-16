import React from 'react'
import { connect } from 'react-redux'
//headline basic structure
export const Headline = ({headlineMsg,headlineInfo,user}) => {
    let headline;
    return(
        <div>
            <img src="3.jpeg"/>
            <div>{user.name}</div>
            <div><b>{headlineInfo}</b></div>
            <br/>
            <input className="input1" type="text"  ref={(node)=>headline = node}/>
            <br/><br/>
            <input id="changeHl" className="btn" type="submit"
                   value="Change Headline" onClick={(event) =>
            {event.preventDefault();
                changeHeadline(headlineMsg,headline,headlineInfo)}
            }/>
            <br/>
        </div>
    )
}
//change the headline
const changeHeadline=(headlineMsg,headline,headlineInfo)=>{
    headlineInfo=headline.value
    headlineMsg(headlineInfo)
}
export default connect(
    (state) => {
        return {
            headlineInfo: state.headlineInfo,
            user: state.user
        }
    },
    (dispatch) => {
        return {
            headlineMsg: (headlineInfo)=>
                dispatch({type: 'UPDATE_HEADLINE',headlineInfo})
        }
    }
)(Headline)
