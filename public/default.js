// TODO: Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// TODO: Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// TODO: Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// TODO: Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.


// TODO: select to view All/Online/Offline somehow
// TODO: search within each of All/Online/Offline somehow



var model = {
	streamerNames: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],

	requestTwitchStreamers: function() {
		var streamObjects = [];

		this.streamerNames.forEach(function(streamer){
			var twitchApiUrl = 'https://api.twitch.tv/kraken/streams/' + streamer + '?callback=?';
			$.getJSON(twitchApiUrl, function(data) {
				streamObjects.push(data);		// QUESTION: Random question: what happens if you have lots of steps that are dependent on the next... do you somehow have to nest lots of callbacks? Doesn't that get messy?
		  	});
		});

		//console.log('in the model');
		//console.log ('streamernames: ' + this.streamerNames) //works
		//console.log(streamObjects);
		return streamObjects;
  	},

};

// model.requestTwitchStreamers();


var controller = {
	getTwitchData: function() {
		var twitchData = model.requestTwitchStreamers();  // think might need a callback here? wait for data before displayStream.

		view.displayStream(twitchData);
		//return twitchData;
		//console.log('in the controller');
		//console.log(twitchData);
	},

	outputListOfStreams: function(streamObjects) {
		streamObjects.forEach(function(stream) {
			// stick it in an Li
			console.log(stream);
			// append to the ul
		});
	}

	// take each entry from streamObjects,

};


var view = {
	createLi: function(stream) {
		li = document.createElement('li');
		li.textContent = stream;
		li.className = "stream";
		return li;
	},

	displayStream: function(twitchData) {
		//debugger;
		console.log(twitchData);

		//console.log('in the view');
		// display an li with the streamer name
	}
};



$(document).ready(function() {
 	controller.getTwitchData();  // call api to pull all data for the streamerNames
 	//console.log('in the view');
 });














// Here's an example call to fetch Free Code Camp's Twitch channel data:

// $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//   console.log(data);
// });


// Use these people:
//
