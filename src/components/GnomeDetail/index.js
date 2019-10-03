import React from 'react'
import { connect } from "react-redux"
import { selectItemById } from "./selectors"
import { hot } from 'react-hot-loader/root'
import "./index.css"

class GnomeDetail extends React.Component {
    componentDidMount() {
    }
    render () {
        if (this.props.gnomeData) {
        const gnome = this.props.gnomeData;
        return (
            
        <div class="row py-5 px-4">
            <div class="col-xl-10 col-md-10 col-sm-10 mx-auto">
                <div class="bg-white shadow rounded ">
                    <div class="px-4 pt-0 pb-4 bg-dark">
                        <div class="media align-items-end profile-header">
                            <div class="profile mr-3">
                                <img src={gnome.thumbnail} alt="..." width="150" class="rounded mb-2 img-thumbnail"/>
                                {/* <a href="#" class="btn btn-dark btn-sm btn-block">Edit profile</a> */}
                            </div>
                            <div class="media-body mb-5 text-white">
                                <h4 class="mt-0 mb-0">{gnome.name}</h4>
                                <p class="small mb-4"> 
                                <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                    San Farcisco
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="bg-light p-4 text-center">
                        <p>{gnome.age}</p>
                        <p>{gnome.weight}</p>
                        <p>{gnome.height}</p>
                        <p>{gnome.hair_color}</p>
                        <p>{gnome.professions}</p>
                        <p>{gnome.friends}</p>
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
        )
        }
        else return <div>nic</div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        gnomeData: selectItemById(state, props.match.params.id)
    }
}


// export default connect(mapStateToProps)(GnomeDetail)
export default process.env.NODE_ENV === "development"  
    ? hot(connect(mapStateToProps)(GnomeDetail)) 
    : connect(mapStateToProps)(GnomeDetail)