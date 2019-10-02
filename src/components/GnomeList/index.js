import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux"
import { fetchAllGnomes } from '../../redux/gnomeListActions';
import { Link } from "react-router-dom";

class GnomeList extends React.Component {
    componentDidMount() {
        this.props.fetchAllGnomes()
        
    }
    
    render() {
        if(this.props.allGnomes.length > 0) {
            return (
                <ul>
                    {this.props.allGnomes.map(gnome => (
                    // TODO: component
                    <li key={gnome.id}>
                        <img src={gnome.thumbnail} width="100" alt="image"/>
                        <p>{gnome.name}</p>
                        <p>{gnome.age}</p>
                        <Link to={`/detail/${gnome.id}`}>LINK</Link>
                    </li>
                    ))}
                </ul>
            )
        } else {
            return (
                <h2>loading...</h2>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllGnomes: () => dispatch(fetchAllGnomes())
})

const mapStateToProps = state => ({
  allGnomes: state.allGnomes
})

export default connect(mapStateToProps, mapDispatchToProps)(GnomeList);

GnomeList.propTypes = {
    gnomes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            weight: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            hair_color: PropTypes.number.isRequired,
            professions: PropTypes.arrayOf(PropTypes.string),
            friends: PropTypes.arrayOf(PropTypes.string)
        })
    )
}