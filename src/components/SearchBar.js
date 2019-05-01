import React from 'react'

class SearchBar extends React.Component {
    state = {
        keyword: ''
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.keyword);
    };

    render(){
        return (
            <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Image Search</label>
                    <input 
                        className="prompt"
                        type="text" 
                        value={this.state.keyword}  
                        placeholder="Enter keyword to find images"
                        name ="keyword"
                        onChange={e => {this.setState({ keyword: e.target.value})}}    
                    /> 
                    <button>Search</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar