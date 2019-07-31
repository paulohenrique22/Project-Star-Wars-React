import React from 'react'
import './Char.css'



class Char extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            Pesquisa: props.match.params.Pesquisa,
            result: {},
            error: null,
            isLoaded: false

        }
        console.log(this.state.Pesquisa)
    }
    componentWillMount() {

        this.BuscarPerson(this.state.Pesquisa)
    }


    BuscarPerson(id) {

        fetch(`https://swapi.co/api/people/${id}/`)
            .then(res => res.json())
            .then((response) => {
                this.setState({ result: response ,isLoaded: true})
              
            },(error) => {
                this.setState({
                  isLoaded: true,
                  error
                });})


    }

    render() {
        const { result,error, isLoaded } = this.state
        if (error) {
            return <div className ="Loading">Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div className ="Loading">Loading...</div>;
          } else {
        return (
            <div>
                <div className="DivX">
                    <a href="javascript:window.history.back()">
                        <svg className="botaox" xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 48 48" fill="#fff">
                            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
                        </svg>
                    </a>
                </div>
                <div className="Divnome">
                    <div className="char">
                        <p><a className="neon" href="#">{result.name}</a></p>
                    </div>
                </div>                
            </div>
        )}

    }
}
export default Char;