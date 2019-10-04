import React from "react"
import { Link } from "react-router-dom"

export const GnomeDetailHeader = (props) => {
    return (
        <div className="bg-white shadow rounded ">
            <div className="px-4 pt-0 pb-4 bg-dark">
                <Link to={'/'} className="btn btn-dark btn-sm mt-4">
                    <i className="fa fa-chevron-left"></i>
                </Link>
                <div className="media align-items-end profile-header">
                    <div className="profile mr-3">
                        <img src={props.gnome.thumbnail} alt="..." width="150" className="rounded mb-2 img-thumbnail"/>                                
                    </div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">{props.gnome.name}</h4>
                        <p className="small mb-4"> 
                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                            Brastlewark
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}