import React from 'react'
import {connect} from 'react-redux'

const articlesText = require('../../data/articles.json')
const articles = articlesText.articles
//the basic sturcture for each piece of article
const Box = ({article, index, user}) => (
    <tbody>
    <tr>
        <td className="box1">
            <div className="note">{article.author} said on {article.timestamp}</div>
            <div> { article.text} </div>
            <br/>
            <button type='button' className='btn'>Comment</button>
            <button type='button' className='btn'>Edit</button>
            <br/><br/>
        </td>
        {article.picture === "" ? (
            <td className="box1"></td>
        ) : (
            <td className="box1"><img src={article.picture} alt="pic"/></td>
        )}
    </tr>
    </tbody>
)

// this is the class get what we need from the state and build the basic structure for article with the info
class ArticlesView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {articles: props.articles, articlesFilt: props.articles}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            articles: nextProps.articles,
            articlesFilt: nextProps.articles
        })
    }

    render() {
        return(
            <div>
                <div className='box1'>
                    <input id="yourFeed"className="hint" type="text"
                           placeholder="search you feed"
                           onChange={() => dosearch(this)}/>
                </div>
                <div className='articlesView'>
                    <table>
                        {
                            this.state.articlesFilt.map((article, index, user) => {
                                return (
                                    <Box key={index} article={article}
                                          index={index} user={user}/>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}

//filter the article according to the input of the user
const dosearch = (self) => {
    var keyWord = document.getElementById('yourFeed').value
    if(keyWord === "") {
        self.setState({
            ...self.state,
            articlesFilt: self.state.articles
        })
    } else {
        self.setState({
            ...self.state,
            articlesFilt: self.state.articles.filter((article) => {
                if(article.author.indexOf(keyWord) === -1
                    && article.text.indexOf(keyWord) === -1) {
                    return false;
                }
                return true;
            })
        })
    }

}
export default connect(
    (state) => {
        return {
            articles: state.articles,
            user : state.user
        }
    },
    (dispatch) => {
        return {

        }
    }
)(ArticlesView)
