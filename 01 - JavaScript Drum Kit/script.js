window.addEventListener("keydown",e=>{
    const selectedKey = document.querySelector(`div[data-key="${e.keyCode}"]`); // specific  div
    const selectedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // specific music       
    if(!selectedAudio){
        return; //  we pressed a key that wasn't mapped to any sound
    }
    selectedAudio.currentTime = 0;
    selectedAudio.play();
    selectedKey.classList.add("playing");       
    selectedAudio.addEventListener("ended",()=>{ // feels more natural to remove highlist when corelated to sound 
        selectedKey.classList.remove("playing"); // also not saving all array just for a specific key 
    })                                           // andd cause of arrow function we have access to the audio object
    console.log(selectedAudio);
    console.log(selectedKey);
})
