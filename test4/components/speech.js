window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const background = document.querySelector('body');
const recognition = new SpeechRecognition();
const link = document.querySelector('#link');

recognition.interimResults = true;

recognition.addEventListener('result', e => {
  console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    if (transcript.includes('hello')) {
      link.removeAttribute('link');
    }
    console.log(transcript);
});


recognition.addEventListener('end', recognition.start);
recognition.start();
