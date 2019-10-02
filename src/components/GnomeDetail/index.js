import React from 'react'
import { connect } from "react-redux"
import { selectItemById } from "./selectors"

class GnomeDetail extends React.Component {
    componentDidMount() {
        console.log('props', this.props.gnomeData)
    }
    render () {
        const gnome = this.props.gnomeData;
        return (
            <div>
                {gnome.name}
                {gnome.age}
                {gnome.weight}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    gnomeData: selectItemById(state, 0)
})

export default connect(mapStateToProps)(GnomeDetail)