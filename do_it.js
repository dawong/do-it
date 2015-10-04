var myAudio = new Audio();
myAudio.src = "just_do_it.mp3";
var play = true;
chrome.browserAction.onClicked.addListener(function() {
	if (myAudio.ended || play) {
		myAudio.load();
		myAudio.play();
		play = false;
	} else {
		myAudio.pause();
		play = true;
	}
});
