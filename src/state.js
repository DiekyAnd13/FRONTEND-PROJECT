import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            varian: "Hitam"
        }
    }
    render = () => {
        return (
            <div>
                <center>
                    <h2>{this.state.varian}</h2>
                    <button onClick={() => this.setState({ varian: "Merah" })}>Ganti Warna</button>
                </center>
            </div>
        )
    }
}

export default State;