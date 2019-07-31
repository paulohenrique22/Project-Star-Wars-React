import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Image from '../../image/logostar.svg'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AudioPlayer from '../../Components/Music/Music'






class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Pesquisa: "",
    }   
  }
  Page(e) {
   
    const { Pesquisa } = this.state;
    
    if(Pesquisa != ""){
      e.preventDefault()
      this.props.history.push(`/search/${Pesquisa}`)
    }else{
      e.preventDefault()
      this.props.history.push(`/`)

    }

  }

  render() {
    
    return (
      
      <div>
        <AudioPlayer/>
        <div className="container">            
          <div className="form-group row todo">
            <img src={Image} className="imagem"></img>
            <div className="col-md-6">
              <input className="form-control inputBusca" id="inputBusca" type="text" placeholder="Search .."  value={this.state.Pesquisa} onChange={e => this.setState({ Pesquisa: e.target.value })} />
              <Link to="/Search">
                <button className="btn btn-warning botao" onClick={($event) => this.Page($event)}>BUSCAR</button>
              </Link>
            </div>
          </div>         
        </div>
      </div>
       
    )
    
  }
  
}

export default App;
