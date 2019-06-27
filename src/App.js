import React,{Component} from 'react';
import './App.css';
import MComponent from './mycomponent';
class App extends Component {
  constructor(props){
    super(props);
    // this.onSubmit=this.onSubmit.bind(this);
    this.state ={
      title: 'App title'
    };
    this.onClick = this.onClick.bind(this);
  }
  // const title="this is jidesh\'s app:";
  // const another="this is another\'s app:"
  // onClick(){
  //   alert("clicked");
  // }
  // onSubmit(event){
  //   event.preventDefault();
  //   console.log(this.input.value)
  //   alert("submitted");


  // }
  // on(event){
  //   console.log(event.target.value);
  // }
  onClick(){
    this.setState({
      title:'New app titile'
    });
  }
render(){

  // const list = [
  //   'item1',
  //   'item2',
  //   'Another Item',
  //   'hss'
  // ];
  return (
    <div className="App">
     {/* <h1>{ true? another : title }</h1> */}
     {/* { list.map(item =>{
       return (
        <div key={item} style={{'color':'red','font-size':'30px','cursor':'pointer'}} onClick={this.onClick}> {item} </div>
       );
     })}
     <form onSubmit={this.onSubmit}>
     <input onChange={this.on} />
     </form> */}
     <h1>{this.state.title}</h1>
     <div onClick={this.onClick}>Click here!</div>
     <MComponent
     title="this is title"
     name="jidesh"
     onClick={this.onClick} 
     />
    </div>
  );
}
}
export default App;
