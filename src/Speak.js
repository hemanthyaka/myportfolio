import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className='container-fluid w-100 p-5 ' style={{backgroundColor:'#ffffffd5',overflow:'hidden'}} >
      <h2 className='text-center text-uppercase text-black'>Text to Speech</h2>
      {/* <h4>Fun Task</h4> */}
      <center><input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text -- Just for fun"
        className='px-5 py-2 border rounded border-success p-2 mb-2 d-block'
      />
      <button 
        onClick={handleSpeak}
        className='btn btn-success'
      >
        Speak
      </button> </center>
    </div>
  );
}

export default TextToSpeech;
