import React from 'react'
import { connect } from 'react-redux'
import HeadLine from './headline'
import Navigation from './navigation'
import Following from './following'
import Article from '../article/article'
//basic structure for main page
export const Main = ({}) => (
    <div>
        <header>
            <Navigation />
        </header>
        <h1>Hi</h1>
        <table className="main">
            <tbody>
            <tr>
                <td className='Hi'>
                    <div className="box1">
                        <HeadLine/>
                    </div>
                    <div className="box1">
                        <Following followings=
                                       {require('../../data/followers.json').followings}/>
                    </div>
                </td>
                <td className='Hi'>
                    <div className="box">
                        <Article/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)

export default connect(
)(Main)
