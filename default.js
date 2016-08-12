// TODO: Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// TODO: Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// TODO: Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// TODO: Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.


// TODO: select to view All/Online/Offline somehow
// TODO: search within each of All/Online/Offline somehow


// stream will have properties: name, image, isOnline,
// streams: [],

var model = {
	streamerNames: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
	requestTwitchStreamers: function(streamerNames) {
		var streamObjects = [];
		this.streamerNames.forEach(function(streamer){
			var twitchApiUrl = 'https://api.twitch.tv/kraken/streams/' + streamer + '?callback=?';
			$.getJSON(twitchApiUrl, function(data) {
				streamObjects.push(data);
		  	});
		});
		return streamObjects;
  	}
};


var controller = {
	getTwitchData: function() {
		var twitchData = model.requestTwitchStreamers();
		view.displayStream(twitchData);
		//console.log('controller: ' + twitchData);
	}
};


var view = {
	displayStream: function(data) {
		//console.log('view: ' + data);
		// display an li with the streamer name
	}
};




$(document).ready(function() {
	controller.getTwitchData();
});














// Here's an example call to fetch Free Code Camp's Twitch channel data:

// $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//   console.log(data);
// });


// Use these people:
//
