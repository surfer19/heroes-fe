import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import GnomeItem from "../GnomeItem"
import InfiniteScroll from "react-infinite-scroller";
import "./index.css"
import { filterGnomesByRange } from './selectors'

import { fetchAllGnomes } from '../../redux/gnomeListActions';
import { Spinner } from 'reactstrap';

class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadMore: true,
            gnomesToLoad: []
        }
    }
    componentDidMount() {
        this.props.fetchAllGnomes();
    }

    loadMoreGnomes() {
        const toLoad = this.state.gnomesToLoad.length
        const nextNotLoadedItems = this.props.allGnomes.slice(
            toLoad,
            toLoad + 20
        );

        if (toLoad >= this.props.allGnomes.length) {
            this.setState({
                gnomesToLoad: this.state.gnomesToLoad,
                loadMore: false
            });
            return;
        }
        this.setState({
            gnomesToLoad: this.state.gnomesToLoad.concat(nextNotLoadedItems),
            loadMore: true
        });
    }
    
    render() {
        if(this.props.allGnomes.length > 0) {
            return (
                    <InfiniteScroll
                        className="row"
                        pageStart={0}
                        loadMore={this.loadMoreGnomes.bind(this)}
                        hasMore={this.state.loadMore}
                        useWindow={true}
                        threshold={100}
                        loader={
                            <div className="loader" key={0}>                                
                                <Spinner color="warning" key="0" className="spinner"/>                                
                            </div>}>
                            
                        {this.state.gnomesToLoad.map((gnome, i) => (
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-4" key={i}>
                                <GnomeItem gnome={gnome}/>
                            </div>
                        ))}          
                    </InfiniteScroll>
            )
        } else {
            return (
                <div>
                    <Spinner color="dark" type="grow" style={{
                        position: "fixed",
                        width:"4rem",
                        height: "4rem",
                        transform: "translateX(-50%,-50%)",
                        top: "50%",
                        left: "50%"
                    }}/>
                </div>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchAllGnomes: () => dispatch(fetchAllGnomes())
})

const mapStateToProps = state => {
    return {
        allGnomes: state.gnomeListReducer.allGnomes
    }
}

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