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
// image manipulation client side methods
// Author: John McDonald <jcm.codes@gmail.com>
// GitHub: https://github.com/alpinstang
// MIT License
function johnMcDonald() {
  let hello = "Hello from Florida, ";
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    console.log(hello + "Opera");
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    console.log(hello + "Chrome");
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    console.log(hello + "Safari");
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    console.log(hello + "Firefox");
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    console.log(hello + "IE");
    let tag = document.getElementById("top-warning");
    tag.innerHTML = "Your browser may cause this site to be unavailable.";
    tag.setAttribute("style", "display: block;");
  } else {
    console.log(hello + "unknown");
  }
}

johnMcDonald();
