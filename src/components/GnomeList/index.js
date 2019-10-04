import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import GnomeItem from "../GnomeItem"
import InfiniteScroll from "react-infinite-scroller";
import "./index.css"
import { selectUniqueProfessions, selectGnomesByProfession } from "./selectors"
import { fetchAllGnomes, fetchFilteredGnomes } from '../../redux/gnomeListActions';
import { Spinner, FormGroup, Input} from 'reactstrap';

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
        const baseGnomes =  this.props.filteredGnomes.length > 0 ? this.props.filteredGnomes : this.props.allGnomes 
        const nextNotLoadedItems = baseGnomes.slice( // slice 20 more items
            toLoad,
            toLoad + 20
        );

        if (toLoad >= baseGnomes.length) {
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

    handleChange(props, e) {
        const gnomesByProfession = selectGnomesByProfession(props, e.target.value)
        this.props.fetchFilteredGnomes(gnomesByProfession)
        // reset loaded gnomes invoke loadMoreGnomes()        
        this.setState({
            gnomesToLoad: []
        })        
    }
    
    render() {
        if(this.props.allGnomes.length > 0) {
            return (
                    <div>
                        <div className="row justify-content-end">
                            <div className="col col-lg-3">
                                <FormGroup className="mt-4">
                                    <Input type="select" name="select" onChange={(e) => this.handleChange(this.props, e)}>
                                        <option selected="selected">Filter Gnomes by job</option>
                                        {this.props.jobTypes.map(type =>
                                            <option value={type}>{type}</option>
                                        )}            
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>
                        <InfiniteScroll
                            className="row"
                            pageStart={0}
                            loadMore={this.loadMoreGnomes.bind(this)}
                            hasMore={this.state.loadMore}
                            useWindow={true}
                            threshold={200}
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
                    </div>
            )
        } else {
            return (
                <div>
                    <Spinner color="light" type="grow" style={{
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
    fetchAllGnomes: () => dispatch(fetchAllGnomes()),
    fetchFilteredGnomes: (gnomes) => dispatch(fetchFilteredGnomes(gnomes))
})

const mapStateToProps = state => {
    return {
        allGnomes: state.gnomeListReducer.allGnomes,
        filteredGnomes: state.gnomeListReducer.filteredGnomes,
        jobTypes: selectUniqueProfessions(state)
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