const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector('[name ="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    // console.log(voices);
    voiceDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
        .join('');
    //voiceDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toogle();
}

function toogle(starOver = true) {
    speechSynthesis.cancel()
    if (starOver) {
        speechSynthesis.speak(msg);
    }

}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toogle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toogle);
stopButton.addEventListener('click', toogle.bind(null, false))