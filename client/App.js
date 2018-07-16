import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.bam = this.bam.bind(this);
    }
    bam() {
        console.log("clicked");
        axios.get('/hello')
            .then(res => {
                console.log("res", res.data);
            })
            .catch(err => {
                console.log("err", err);
            })
    }
    render() {
        return(
            <button onClick={this.bam}>Click Me </button>
        )
    }
}
