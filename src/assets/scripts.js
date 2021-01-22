/**
* MIT License
*
* Copyright (c) 2021 John McDonald
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
// Various utilities

function playAudio() {
  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
    return;
  }

  audio.volume = 0.35;
  audio.play();
}

function init() {
  // load audio file
  audio = new Audio("./assets/support.mp3");
  // set example background image
  document
    .getElementById("download-file-link")
    .addEventListener("click", downloadImage, false);
}

function readFile() {
  var file = document.querySelector("input[type=file]")["files"][0];
  var reader = new FileReader();
  var baseString;
  reader.onloadend = function () {
    baseString = reader.result;
    //console.log(baseString);
    setUserImage(baseString);
    //bernieImageObj = baseString;
    //userImageObj.src = baseString;
    document.getElementById("blah").src = baseString;
    document.getElementById("blah").setAttribute("style", "dispaly: inline");
  };
  reader.readAsDataURL(file);
}

document.getElementById("imgInp").addEventListener("change", readFile);

var _IMAGE;
var audio; // global so we can persist clip state!
init();
