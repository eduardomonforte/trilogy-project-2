var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
// var savePNGButton = wrapper.querySelector("[data-action=save-png]");
// var saveJPGButton = wrapper.querySelector("[data-action=save-jpg]");
// var saveSVGButton = wrapper.querySelector("[data-action=save-svg]");
var canvas = wrapper.querySelector("canvas");
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: "rgb(255, 255, 255)"
});

function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);

  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  signaturePad.clear();
}

// listen to orientation change,
window.onresize = resizeCanvas;
resizeCanvas();

// function download(dataURL, filename) {
//   if (
//     navigator.userAgent.indexOf("Safari") > -1 &&
//     navigator.userAgent.indexOf("Chrome") === -1
//   ) {
//     window.open(dataURL);
//   } else {
//     var blob = dataURLToBlob(dataURL);
//     var url = window.URL.createObjectURL(blob);

//     var a = document.createElement("a");
//     a.style = "display: none";
//     a.href = url;
//     a.download = filename;

//     document.body.appendChild(a);
//     a.click();

//     window.URL.revokeObjectURL(url);
//   }
// }

// function dataURLToBlob(dataURL) {
//   // Code taken from https://github.com/ebidel/filer.js
//   var parts = dataURL.split(";base64,");
//   var contentType = parts[0].split(":")[1];
//   var raw = window.atob(parts[1]);
//   var rawLength = raw.length;
//   var uInt8Array = new Uint8Array(rawLength);

//   for (var i = 0; i < rawLength; ++i) {
//     uInt8Array[i] = raw.charCodeAt(i);
//   }

//   return new Blob([uInt8Array], { type: contentType });
// }

clearButton.addEventListener("click", function(event) {
  signaturePad.clear();
});

// savePNGButton.addEventListener("click", function(event) {
//   if (signaturePad.isEmpty()) {
//     alert("Please provide a signature first.");
//   } else {
//     var dataURL = signaturePad.toDataURL();
//     download(dataURL, "signature.png");
//   }
// });

// saveJPGButton.addEventListener("click", function(event) {
//   if (signaturePad.isEmpty()) {
//     alert("Please provide a signature first.");
//   } else {
//     var dataURL = signaturePad.toDataURL("image/jpeg");
//     download(dataURL, "signature.jpg");
//   }
// });

// saveSVGButton.addEventListener("click", function(event) {
//   if (signaturePad.isEmpty()) {
//     alert("Please provide a signature first.");
//   } else {
//     var dataURL = signaturePad.toDataURL("image/svg+xml");
//     download(dataURL, "signature.svg");
//   }
// });
