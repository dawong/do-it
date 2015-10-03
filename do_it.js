var myAudio = new Audio();
myAudio.src = "Shia LaBeouf_Just_Do_It_Motivational_Speech.mp3";
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