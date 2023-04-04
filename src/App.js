import React, { Component } from 'react'
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [{ name: 'abc' }, { name: 'def' }],
      currentPageUrl: 'https://pokeapi.co/api/v2/pokemon',
      nextPageUrl: '',
      previousPageUrl: '',
      loading: true
    }
    this.handleState = this.handleState.bind(this);
    this.gotoNextPage = this.gotoNextPage.bind(this);
    this.gotoPreviousPage = this.gotoPreviousPage.bind(this);
  }
  componentDidMount() {
    this.handleState();
  }
  handleState() {
    this.setState({
      loading: true
    })
    axios.get(this.state.currentPageUrl).then(
      res => {
        this.setState({
          pokemons: res.data.results,
          nextPageUrl: res.data.next,
          previousPageUrl: res.data.previous,
          loading: false
        })
      }
    )
  }
  gotoNextPage() {
    this.setState({
      currentPageUrl: this.state.nextPageUrl
    })
    this.handleState();
  }
  gotoPreviousPage() {
    this.setState({
      currentPageUrl: this.state.previousPageUrl
    })
    this.handleState();
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <PokemonList pokemons={this.state.pokemons} />
        <Pagination
          gotoNextPage={this.gotoNextPage}
          gotoPreviousPage={this.gotoPreviousPage}
        />
      </>
    )
  }
}

