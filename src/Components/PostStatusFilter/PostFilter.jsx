import {React, Component} from "react";

export default class Poststatus extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {label: "All", name: "all"},
            {label: "Liked", name: "like"}
        ]
    }

    render() {
        const btn = this.buttons.map(({name,label}) => {
            const active = this.props.filter === name
            const btnClass = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${btnClass}`}
                    onClick={() => this.props.filterStatus(name)}
                >
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group mx-1">
                {btn}
            </div>
        );
    }
}




