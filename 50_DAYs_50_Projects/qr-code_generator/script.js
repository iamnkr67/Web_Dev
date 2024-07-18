const qrinput = document.getElementById("qr-input");
const qrbtn = document.getElementById("qr-btn");
const qrimg = document.getElementById("qr-img");
const download = document.getElementById("download-link");

console.log(qrinput, qrimg, qrbtn);

qrbtn.addEventListener("click", () => {
  if (qrinput.value === "") {
    alert("Please enter a valid URL");
    return;
  } else {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput.value}`;

    qrimg.src = qrCode;
    qrimg.alt = `QR code for ${qrinput.value}`;
    download.style.display = "";
    download.href = qrCode;
    download.download = `QRCode_${qrinput.value}.png`;
  }
});
