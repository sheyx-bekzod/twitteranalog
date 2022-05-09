import './Search.css'
import {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onChangeValue = (e) => {
        const valueInput = e.target.value
        this.setState({term: valueInput})
        this.props.search(valueInput)
    }

    render() {
        const {post} = this.state
        return (
            <>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by posts"
                    className="form-control"
                    value={post}
                    onChange={this.onChangeValue}
                />
            </>
        )
    }
}

export default Search;