import React, { Component } from 'react'
import '../App.css';
export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.gotoNextPage();
    }
    render() {

        return (
            <div className='page'>
                {this.props.gotoNextPage &&
                    <button onClick={() => this.handleClick()} className='btn'>Previous</button>
                }
                <button onClick={() => this.handleClick()} className='btn' >Next</button>
            </div>
        )
    }
}
