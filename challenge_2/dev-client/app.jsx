import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get( 'https://api.coindesk.com/v1/bpi/historical/close.json' )
      .then( ( response ) => {
        this.setState( { 'data': response.data } )
      })
      .catch( (error)=>console.log('there was an error \n', error))
  }

  render () {
    return (
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render( <App />, document.getElementById( 'btc-app' ) );