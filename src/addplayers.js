import React, { Component } from 'react';

class AddName extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.player1Input.value, this.player2Input.value);

        this.player1Input.value = '';
        this.player2Input.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Enter Your Names</h3>
                <input placeholder="Player1" ref={player1Input => this.player1Input = player1Input} />
                <input placeholder="Player2" ref={player2Input => this.player2Input = player2Input} />
                <button>Start</button>

                <hr />
            </form>
        )
    }
}

export default AddName;