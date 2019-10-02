import React from 'react'
import { connect } from "react-redux"
import { selectItemById } from "./selectors"

class GnomeDetail extends React.Component {
    componentDidMount() {
    }
    render () {
        if (this.props.gnomeData) {
        const gnome = this.props.gnomeData;
        return (
            <div>
                {gnome.name}
                {gnome.age}
                {gnome.weight}
            </div>
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


export default connect(mapStateToProps)(GnomeDetail)