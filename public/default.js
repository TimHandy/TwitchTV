// Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.

// TODO: search within each of All/Online/Offline somehow



var streamerNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "numfin", "brunofin", "comster404" ];

// function requestTwitchStreamers() {
// 	var streamObjects = [];
//
// 	streamerNames.forEach(function(streamer){
// 		var twitchApiUrl = 'https://api.twitch.tv/kraken/streams/' + streamer + '?callback=?';
// 		$.getJSON(twitchApiUrl, function(data) {
// 			streamObjects.push(data);		// QUESTION: Random question: what happens if you have lots of steps that are dependent on the next... do you somehow have to nest lots of callbacks? Doesn't that get messy?
// 	  	});
// 	});
// 	return streamObjects;
// }



function requestTwitchStream() {
	streamerNames.forEach(function(streamer) {
		var twitchApiUrl = 'https://api.twitch.tv/kraken/streams/' + streamer + '?callback=?';
		$.getJSON(twitchApiUrl, function(data) {
			console.log(data);
			// if username is not valid/dead
			if (data.status === 422) {
				var text = (streamer + " has closed their Twitch account (or the account never existed)");
				var url = text;
				createLi("stream-offline", url);
			// if username is streaming
			} else if (data.stream !== null) {
				var onlineShow = data.stream.game;
				var text = (streamer + " is streaming " + onlineShow);  // QUESTION: text is already defined. So? should I not use var subsequent times?
				var url = '<a href="https://twitch.tv/' + streamer + '">' + text + '</a>';
				//console.log(url);
				createLi("stream-live", url);
				// sort live streams at top
				$('.stream-live').prependTo('#streams-list'); // TODO: sort by name
			// if username is offline
			} else {
				var text = (streamer + " is offline");
				var url = '<a href="https://twitch.tv/' + streamer + '">' + text + '</a>';
				createLi("stream-offline", url);
			}
		});
	});
}

function createLi(status, url) {
	var li = document.createElement('li');
	li.innerHTML = url;
	li.className = status;
	document.getElementById("streams-list").appendChild(li);
}



// function createLi() {
// 	li = document.createElement('li');
// 	li.textContent = stream;
// 	li.className = "stream";
// 	return li;
// }
//
// function printStreamLi(stream) {
// 	var li = createLi(stream);
// 	document.getElementById("streams-list").appendChild(li);
// }
//



$(document).ready(function() {

 	requestTwitchStream(); // call api to pull all data for the streamerNames
	//console.log(streamObjects);

	$('#all-button').click(function() {
		$('li').removeClass('hidden');
	});

	$('#live-button').click(function() {
		$('.stream-live').removeClass('hidden');
		$('.stream-offline').addClass('hidden');

	});

	$('#offline-button').click(function() {
		$('.stream-offline').removeClass('hidden');
		$('.stream-live').addClass('hidden');
	});

});
