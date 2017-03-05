// dependencies:
//   jQuery

var TWITCH_CLIENT_ID = 'dyc23qeea3qkutzs8xxr9l3njrmtr9';

function ApiRequest(requestString) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken' + requestString,
            headers: {
                'Client-ID': TWITCH_CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            } 
        })
        .done(function(data) {
            resolve(data);
        });
    });
}

function searchForChannels(channelName) {
    return new Promise(function(resolve, reject) {
        var formattedChannelName = channelName.replace(' ', '%20');
        var channelList = ApiRequest('/search/channels?query=' + formattedChannelName);
        channelList.then(function(data) {
            resolve(data);
        });
    });
}

function getStreamInfo(streamId) {
    return new Promise(function(resolve, reject) {
        var channelList = ApiRequest('/streams/' + streamId);
        channelList.then(function(data) {
            resolve(data);
        });
    })
}

