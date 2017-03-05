import React, { Component } from 'react';

import './App.css';



  class App extends Component {
    constructor(props){
    super(props)
    this.state={
      src: 'https://www.youtube.com/embed/?el=adunit&controls=0&html5=1&playsinline=1&ps=gvn&showinfo=0&widget_referrer=http%3A%2F%2Fplayer.twitch.tv%2F%3Fchannel%3Dmedrybw&enablejsapi=1&origin=http%3A%2F%2Fimasdk.googleapis.com&widgetid=1',
      video:'https://drive.google.com/uc?export=download&id=0B0JMGMGgxp9WMEdWb1hyQUhlOWs',
      activeStream:'http://player.twitch.tv/?channel=medrybw&muted=true',
      favorits:[{name:"Jeffs channel",
                id:112,
                img:'http://www.allcscollectibles.com/wp-content/uploads/2014/03/MTGlogo.jpg',
                link: 'http://player.twitch.tv/?channel=tjcollectibles',
    }],
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
//Saving and loading from Local storage
  saveToLocalStorage(){
    window.localStorage.setItem('favorits', JSON.stringify(this.state.favorits));
  }

loadFromLocalStorage(){
  this.setState({
    favorits: JSON.parse(window.localStorage.getItem("favorits")),
  })
}
//Changing channel
changeChannel(){

  this.setState({
    activeStream:'http://player.twitch.tv/?channel=tjcollectibles',

  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Whats On</h2>
          <button onClick= {() => this.loadFromLocalStorage()} >Load my favorits</button>
          <button onClick= {() => this.saveToLocalStorage()} >Save My favorits</button>

        </div>
        <from>
        <label> search Stuffs</label>
          <select>
            <option>Twitch</option>
            <option>YouTube</option>
          </select>
          <label>Enter name for favorits</label>
          <input id='streamNameInput' type='add'></input> 
          <button onClick={()=> this.addToFavorits()}>Add to favorits</button>

        </from>
        <div className='TVcontainer'>
          <div className='playerContainer'>
            <h1>Player</h1>
            <div className='player'>
            <iframe src={this.state.activeStream} autoPlay='false' height="400" width="600" frameBorder="0" scrolling="no"
    allowFullScreen="true">
</iframe>
            </div>
          </div>
          <div className='channelSelector'>
            <h2>My favorit channels</h2>
            <button>Load Api</button>
            {this.state.favorits.map((channel) =>{
              return(
                <div onClick= {()=> this.changeChannel()} className='favorits' id={channel.id}>
                  <img className='streamImg' src= {channel.img} ></img>
                {channel.name}</div>
              )}
              )
              }
          </div>   
         </div>      
      </div>
    );
  }
}

export default App;
