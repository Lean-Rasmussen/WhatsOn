import React, { Component } from 'react';
import './App.css';

//Components
import Favorits from './components/Favorits'
import Player from './components/Player'
import SaveLoadFavorits from './components/SaveLoadFavorits'
import Search from './components/Search'
import TwitchSearch from './services/RetrieveTwitchData'



  class App extends Component {
    constructor(props){
    super(props)
    this.state={
//State for player      
      activeStream:'http://player.twitch.tv/?channel=medrybw&muted=true',

//State for Search      
      streamProviders:['Twitch', 'YouTube'],
      searchingStream:'',

// State for favorits
      favorits:[
                {name:"Jeffs channel",
                id:112,
                img:'http://www.allcscollectibles.com/wp-content/uploads/2014/03/MTGlogo.jpg',
                link: 'http://player.twitch.tv/?channel=tjcollectibles',
                },
                {name:"Kripp channel",
                id:113,
                img:'data:image/jpeg;base64,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',
                link: 'http://player.twitch.tv/?channel=nl_kripp',
                },

                ],
    }
  }


    addToFavorits(){
      let name = document.getElementById("streamNameInput").value
      let newFavorit = {
        name: name,
        link: this.state.twitchBaseLink + name,
        image:'',
        id:'',
      }
        this.state.favorits.push(newFavorit);
      document.getElementById("streamNameInput").value =''
}

//Changing channel
changeChannel(indexOfSelectedChannel){
  this.setState({
    activeStream:this.state.favorits[indexOfSelectedChannel].link,
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Whats On</h2>
          <p>find your favorit streams across platforms</p> 
        </div>
        <Search streamProviders ={this.state.streamProviders}/>
        <TwitchSearch/>
        <div className='TVcontainer'>
          <Player activeStream={this.state.activeStream} /> 
          <div  className='channelSelector'>
            <h2>My favorit channels</h2>
            <SaveLoadFavorits/>
            <Favorits favorits={this.state.favorits}/> 
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
