import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    handleInputSubmit = (query) => {
        console.log("handling form submit: ", query);
    }

    renderInput = (field) => {
        return <input type="text" placholder="placeholder" { ...field.input } />
    }

    render() {
        return (
            <form className="search-bar" onSubmit={ this.handleInputSubmit }>
                <Field name="query" component={ this.renderInput } />
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: "searchBar"
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;