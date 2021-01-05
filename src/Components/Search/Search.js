import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom'
import Image from '../../image/logostar.svg'



class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Pesquisa: props.match.params.Pesquisa,
            nomes: [],
            Resultado: [],
            error: null,
            isLoaded: false

        }

    }

    componentDidMount() {
        this.BuscarSearch(this.state.Pesquisa)
    }
    
    BuscarSearch(Pesquisa) {
        var nomes = new Array();
        fetch(`https://swapi.dev/api/people/?search=${Pesquisa}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((response) => {
                this.setState({ nomes: response.results.map(e => e.name), Resultado: response.results, isLoaded: true, })
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    TrocaPage(e) {
        e.preventDefault()
        const { Pesquisa } = this.state;
        this.props.history.push(`/Char/${Pesquisa}/`)
    }

    AtualizaTela(e) {


        const { Pesquisa } = this.state;
        if (Pesquisa !== "") {
            e.preventDefault()
            this.props.history.push(`/Search/${Pesquisa}/`)
            this.componentDidMount()

        } else {
            e.preventDefault()
        }

    }


    render() {
        const { error, isLoaded } = this.state
        if (error) {
            return <div className="Loading">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="Loading">Loading...</div>;
        } else {
            return (

                <div>
                    <nav className="navbar navbar-light  justify-content-between navb">
                        <Link to="/">
                            <img src={Image} className="logo-search" />
                        </Link>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" value={this.state.Pesquisa} onChange={e => this.setState({ Pesquisa: e.target.value })} aria-label="Search" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" onClick={($event) => this.AtualizaTela($event)}>Search</button>
                        </form>
                    </nav>
                    {this.state.Resultado.map(item => {
                        return (
                            <div key={item.url} className="txt">
                                <Link to={`/Char/${item.url.replace(/[^0-9]/g, '')}/${item.name.replace(/[ ]/, '-')}`}>
                                    <div className="Resultado">
                                        {item.name}
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Search;