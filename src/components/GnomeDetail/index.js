import React from 'react'
import { connect } from "react-redux"
import { selectItemById, selectFriendsIdsById } from "./selectors"
import { hot } from 'react-hot-loader/root'
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";
import GnomeTable from "../GnomeTable/index"
import "./index.css"

class GnomeDetail extends React.Component {
    componentDidMount() {}
    render () {
        if (!this.props.gnomeData) {
            return (
                <div>Something went wrong! <br/>
                    <Link className="btn btn-outline-dark" to='/'>Return to main page </Link>
                </div>
            )
        }
        const gnomeRaw = this.props.gnomeData;
        const gnome = {
            ...gnomeRaw,
            weight: Math.floor(gnomeRaw.weight),
            height: Math.floor(gnomeRaw.height),
            gender: Math.random() >= 0.5 ? "Boy" : "Girl",
            // parse from whole name
            firstName: gnomeRaw.name.replace(/ .*/,'')
        }
        const iconsColOne = {
            age: 'fa-birthday-cake',
            weight: 'fa-balance-scale',
            height: 'fa-arrows-v',
            hair_color: 'fa-user',
            gender: 'fa-venus-mars'    
        }
        const iconsColTwo = {
            professions: 'fa-briefcase',
            friends: 'fa-users',
        }
        const suffixMessages = {
            age: 'y.o.',
            weight: 'kg',
            height: 'cm',
            hair_color: 'hair color',
        }
        
        return (
            
        <div className="row py-5 px-4">
            <div className="col-12 col-xl-10 mx-auto">
                <div className="bg-white shadow rounded ">
                    <div className="px-4 pt-0 pb-4 bg-dark">
                        <Link to={'/'} className="btn btn-dark btn-sm mt-4">
                            <i className="fa fa-chevron-left"></i>
                        </Link>
                        <div className="media align-items-end profile-header">
                            <div className="profile mr-3">
                                <img src={gnome.thumbnail} alt="..." width="150" className="rounded mb-2 img-thumbnail"/>                                
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">{gnome.name}</h4>
                                <p className="small mb-4"> 
                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                    Brastlewark
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="bg-light pl-4 pt-5 pb-5 pr-4">
                        <h3 className="mt-3">Gnome info:</h3>
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <GnomeTable gnome={gnome} colIcons={iconsColOne} suffixMessages={suffixMessages}/>
                            </div>
                            <div className="col-12 col-md-9">
                                <GnomeTable gnome={gnome} colIcons={iconsColTwo} gnomeFriends={this.props.gnomeFriends}/>
                                {/* <Table borderless>
                                    <tbody>
                                        <tr>
                                            <td className="ico">
                                                <i className="fa fa-users"></i>
                                            </td>
                                            <td> 
                                                {gnome.friends.length
                                                    ? gnome.firstName + `'s friends are ` + gnome.friends
                                                    : gnome.firstName + ' doesnt have any friends'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="ico">
                                                <i className="fa fa-briefcase"></i>
                                            </td>
                                            <td>{gnome.profession} y.o</td>
                                        </tr>                      
                                    </tbody>
                                </Table> */}
                            </div>
                        </div>
                        <Link to={'/'} className="btn btn-dark btn-sm float-right">
                            Back
                        </Link>
                    </div>                
                </div>
            </div>
        

/* 
            // <div>
            //     {gnome.name}
            //     {gnome.age}
            //     {gnome.weight}
            //     <img src={gnome.thumbnail} alt="img"/>
            // </div> */
        )//}
        // else return <div>nic</div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        gnomeData: selectItemById(state, props.match.params.id),
        gnomeFriends: selectFriendsIdsById(state, props.match.params.id)
    }
}

export default process.env.NODE_ENV === "development"  
    ? hot(connect(mapStateToProps)(GnomeDetail)) 
    : connect(mapStateToProps)(GnomeDetail)