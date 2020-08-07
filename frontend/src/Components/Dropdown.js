import React, { Component } from 'react'
import Select from 'react-select';

const selectStyle = {
    width:350,
    padding: 10,
    textAlign: ' justify',
    justifyContent: 'space-between',
}


class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendData = this.sendData.bind(this)
    }
    
    sendData = () => {
        this.props.value(this.state.label);
    }; 
    handleChange(inputValue){
        //console.log("Label: ",inputValue.label)
        this.setState({label:inputValue.label},() => this.sendData())
    }


    
    render() {
        
        return <div style = {selectStyle}>
        <Select
          onChange = {this.handleChange}
          className="basic-single"
          classNamePrefix="select"
          options={this.list}
        />

        
    </div>
        
    }
}


export default Dropdown