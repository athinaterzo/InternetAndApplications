import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StickyHeadTable from './StickyHeadTable';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      condition : '',
      drug: '',
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fakeSubmit   = this.fakeSubmit.bind(this);
  }
  

  fakeSubmit(event){
    console.log("fake")
    event.preventDefault();
    fetch("http://localhost:3001/info/Cyclophosphamide/cancer")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({data:result});
          ReactDOM.render(<StickyHeadTable data={result} />, document.getElementById('res'));
          console.log("result", result, this.state.data)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
         console.log('error', error)
        }
      )
  }




  handleChange(event) {    
    console.log(event.target.id)
    if(event.target.id === "condition"){
      this.setState({condition: event.target.value});
    }
    else{
      this.setState({drug: event.target.value});
    }
     
   }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementById('result').style.display = 'block';
    if(this.state.condition.length!==0 && this.state.drug.length!==0){ 
      let url = "http://localhost:3001/info/"+this.state.drug+"/"+this.state.condition
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            console.log("result", result)
            if(result.length===0){
              ReactDOM.render(<h3>No data found for those inputs</h3>, document.getElementById('res'));
              document.getElementById('description').style.display = 'none';
            }
            else{
              this.setState({data:result});
              document.getElementById('description').style.display = 'block';
              ReactDOM.render(<StickyHeadTable data={result} condition = {this.state.condition} drug = {this.state.drug} />, document.getElementById('res'));
            }
            
          },

          (error) => {
            console.log('error', error)
            ReactDOM.render(<h3>Somthing went wrong</h3>, document.getElementById('res'));
          }
        )
      }
    else{
      alert("Both fields are requierd")
    }
  }




  
  render() {



    return (
      <section id="search">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Input</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <br/>
                 <form onSubmit={this.handleSubmit}>
                
                  <table>
                    <tbody >
                      <tr>
                        <td >
                          <div style={{marginRight:10}}>
                            <h4>Condition:</h4>
                            <input style={{width:340}} id="condition" type="text" name="name" value={this.state.condition} onChange={this.handleChange}/>
                          </div>
                        </td>
                        <td>
                          <div style={{marginLeft:10}}>
                            <h4>Drug:</h4>
                            <input style={{width:340}} id="drug" type="text" name="name" value={this.state.drug} onChange={this.handleChange}/>
                          </div>
                    
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input type="submit" value="Submit" />
                </form>
                
                 
                 
               </div>
            </div>
         </div>
      </div>


      <div id='result' style={{display:'none'}} className="row work">

        <div className="three columns header-col">
          <h1><span>Result</span></h1>
          <br></br>
          <div id="description" style ={{display:'none'}}>
            You can find the brief summart and the elegibillity criteria 
            if you press the button with the NCT ID of the trial
          </div>
        </div>

        <div id="res" className="nine columns main-col">
          
        </div>
       
        
    </div>

   </section>
    );
  }
}

export default Search;

