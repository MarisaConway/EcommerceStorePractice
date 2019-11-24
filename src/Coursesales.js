import React, { Component } from 'react';


class Coursesales extends Component {
    sumPrice(price){
        this.setState({total: this.state.total + price});
    }
    constructor(props){
        super(props);
        this.state = {
            total: 0
        };
    }
    render(){
        console.log(this.props.items);
        return(
            <div>

            </div>
        );
    }
}


export default Coursesales;