import React from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'
//Add a new article which the contents are from the textarea.
const AddArticle = ({addNew,user}) => {
    return(
        <div className='new'>
            <p>Add a new Article....<br/><br/></p>
            <textarea  placeholder='Share something new!'className="input1" cols="30" rows='5' id='newArticle'/>
            <br/><br/>
            upload pics:<br/>
            <input className='btn' type='file' id='uploadpics'/>
            <br/><br/>
            <button type='button' className='btn' onClick={() => {
                let time=new Date().toLocaleString()
                var img=getPicture(document.getElementById("uploadimg"))
                let body=document.getElementById('newArticle')
                addNew(user.name,body.value,time,img)
                body.value=''
            }}>Post</button>
            <button type='button' className='btn' onClick={() => {
                let body=document.getElementById('newArticle')
                body.value = ''}
            }>Clear</button>
        </div>
    )
}

//Get the picture user have uploaded
const getPicture=(img)=>{
    var $file = $("#uploadpics");
    var fileObj = $file[0];
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    if(fileObj && fileObj.files && fileObj.files[0]){
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
    }else{
        dataURL = $file.val();
    }
    return dataURL;
}

export default connect(
    (state) => {
        return {
            user : state.user
        }
    },
    (dispatch) => {
        return {
            addNew: (username,text,time,img) =>
                dispatch({type: 'ADD_ARTICLE',username,text, time,img})
        }
    }
)(AddArticle)
