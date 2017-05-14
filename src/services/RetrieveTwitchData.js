// dependencies:
//   jQuery

import React from 'react';
import $ from "jquery";

export default class TwitchSearch extends React.Component{
 constructor(props){
    super(props)
      this.state={
        searchWord:'',
        searchResult:[],
        TWITCH_CLIENT_ID:'dyc23qeea3qkutzs8xxr9l3njrmtr9',

      }

    }
searchInput= function(){
    this.setState({
        searchWord: document.getElementById('searchInput').value,
    })
}


ApiRequest=function(requestString) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken' + requestString,
            headers: {
                'Client-ID': this.state.TWITCH_CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            } 
        })
        .done(function(data) {
            resolve(data);
        });
    });
}


searchForChannels=function() {
    return new Promise(function(resolve, reject) {
        var formattedChannelName = this.state.searchWord.replace(' ', '%20');
        var channelList=this.ApiRequest('/search/channels?query=' + formattedChannelName);
        channelList.then(function(data) {
            resolve(data);
        });
    });
}



getStreamInfo=function(streamId) {
    return new Promise(function(resolve, reject) {
        var channelList=this.ApiRequest('/streams/' + streamId);
        channelList.then(function(data) {
            resolve(data);
        });
    })
}


    render(){
        return(
            <div>
              <input id="searchInput" onChange={()=>this.searchInput}/>
              <button onClick={()=> this.searchForChannels()}> Search</button>
            </div>
            )
    }
}





