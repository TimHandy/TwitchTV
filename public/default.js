// TODO: Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// TODO: Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// TODO: Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// TODO: Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.


// TODO: select to view All/Online/Offline somehow
// TODO: search within each of All/Online/Offline somehow



var streamerNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

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
			if (data.stream !== null) {
				var text = (data.stream.channel.display_name + " is live");
				var link = '<a href="https://twitch.tv/' + streamer + '">' + text + '</a>';
				console.log(link);
				var li = document.createElement('li');
				li.innerHTML = link;
				li.className = "stream-live";
				document.getElementById("streams-list").appendChild(li);
				$('.stream-live').prependTo('#streams-list'); // TODO: sort by name

			} else {
				var text = (streamer + " is offline");
				var link = '<a href="https://twitch.tv/' + streamer + '">' + text + '</a>';
				var li = document.createElement('li');
				li.innerHTML = link;
				li.className = "stream-offline";
				document.getElementById("streams-list").appendChild(li);
			}
		});
	});

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
		$('.stream-offline').addClass('hidden');
		$('.stream-live').removeClass('hidden');
	});

	$('#offline-button').click(function() {
		$('.stream-live').addClass('hidden');
		$('.stream-offline').removeClass('hidden');
	});

});

	// for (var i = 0; i < streamObjects.length; i++) {
	// 	printStreamLi(streamObjects[i]);
	// }















// Here's an example call to fetch Free Code Camp's Twitch channel data:

// $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//   console.log(data);
// });


// Use these people:
//
