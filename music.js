console.log("welcom to Music");
let songindex=0;
let audioElement = new Audio('jan.mp3');
let audio=document.getElementById('audio');
let myprogressbar=document.getElementById('myprogressbar');
let songs=[
    {songname:"jan hai tu",filePath:"jan.MP3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"},
    {songname:"jan hai tu",filePath:"jan.mp3",coverpath:"cover/1.jpg"}
]
//audioElement.play();
audio.addEventListener( click,()=>{
    if(audioElement.Paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log ('timeupdats')
 })
 // Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    // Create the performance observer.
    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Logs all server timing data for this response
        console.log('Server Timing', entry.serverTiming);
      }
    });
    // Start listening for `navigation` entries to be dispatched.
    po.observe({type: 'navigation', buffered: true});
  } catch (e) {
    // Do nothing if the browser doesn't support this API.
  }