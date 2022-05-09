import {React, Component} from "react";

class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:undefined
        };
        this.onValueChange = this.onValueChange.bind(this)

    }

    onValueChange(e) {
        this.setState({inputValue: e.target.value})
    }

    OnSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state.inputValue)
        this.setState(
            {inputValue: ""}
        )
    }

    render() {
        const {addPost} = this.props
        return (
            <form className="footer-panea d-flex justify-content-center my-5" onSubmit={this.OnSubmit}>
                <input
                    type="text"
                    placeholder="What are you thing about ?"
                    name="addpost"
                    className="form-control"
                    value={this.state.inputValue}
                    onChange={this.onValueChange}
                />
                <button className="btn btn-outline-primary" onSubmit={this.OnSubmit}>Add</button>
            </form>
        );
    }
}


export default PostAdd;