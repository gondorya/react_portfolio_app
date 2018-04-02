import React from 'react';
import { connect } from 'react-redux';
import { setTitleFilter, sortByTitle, sortByDate } from '../actions/filters';

const PhotoListFilters = (props) => (
    <div className="filters">
        <input 
            className="filters__input"
            type="text"
            placeholder="Title"
            defaultValue={props.filters.title} 
            onChange={(e) => {
                props.dispatch(setTitleFilter(e.target.value));
            }}
        />
        <select 
            className="filters__select"
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value == 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value == 'title') {
                    props.dispatch(sortByTitle());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="title">Title</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(PhotoListFilters);