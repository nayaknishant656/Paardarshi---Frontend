var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var email = document.getElementById('email')
var address = document.getElementById('address')
var mode = document.getElementById('mode')
var number = document.getElementById('number')
var downloadBtn = document.getElementById('download-btn')


var image = new Image()
image.crossOrigin="anonymous";
image.src = 'image/background4.jpg'
image.onload = function () {
	drawImage()
}

var logo = new Image()
logo.src = 'image/logo.png'
window.onload = function () {
	statictext()
}  
function drawImage() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 20, 20, canvas.width-40, canvas.height-40)
	ctx.drawImage(logo, 325, 10, 120, 120)
}
function statictext()
{
	ctx.font = '550 15px Noto Sans sans-serif '
	ctx.fillStyle = '#e8ff07'
	// Left-top_headingTEXT
	ctx.fillText("Recipet No:", 30, 65)
	ctx.fillStyle = 'white'
	const r = Math.floor(Math.random() * 10000) + 1;
	ctx.fillText(r, 115,65)
	ctx.fillStyle = '#e8ff07'
	ctx.fillText("Date:", 30, 90)
	ctx.fillStyle = 'white'
	const d = new Date().toJSON().slice(0,10)
	ctx.fillText(d, 70, 90)
	ctx.fillStyle = '#e8ff07'
	// right-top_headingTEXT
	ctx.fillText("Ram Mandir,Ranchi-835214,JK", 520, 65)
	ctx.fillText("Website :- https://nishatnkumar.com", 520, 90)
	// Centre_heading_
	ctx.font = '900 18px Noto Sans sans-serif '
	ctx.fillText("SHRI RAM JANMBHOOMI TEERTH KSHETRA", 210, 155)
	// Recipt
	ctx.font = '1000 20px Noto Sans sans-serif '
	ctx.fillText("Receipt", 380, 185)
	// \\left_static
	ctx.font = '400 18px arial sans-serif'
	ctx.fillText("Received with thanks from:", 30, 210)
	// \\\full static
	ctx.font = ' 400 18px Arial sans-serif'
	var yt = 230;
	ctx.fillText("Name::", 30, yt+0)
	ctx.fillText("Email::", 30, yt+25)
	ctx.fillText("Address::", 30, yt+50)
	ctx.fillText("Mode of Donation::", 30, yt+75)
	ctx.fillText("Mobile number::", 30, yt+100)
	ctx.fillText("Sign:..................................", 550, 385)
	ctx.font = '400 13px arial'
	var x = 22;
	var y = 410;
	ctx.fillText("*Pan of Shri Ram Janmbhoomi Teerth Ashertra is AXYPN5481.", x, y)
	ctx.fillText("*Donation made in cash Exceeding Rs 2000/- are not eligible for deduction under aforselond action.", x, y+15)
	ctx.font = '900 15px arial'
	ctx.fillText("*Contact: +91 9263282297 , Email: contact@srjbuj.org.", 190, 465)

}
function drawtext() {
	var yt = 230;
	ctx.font = '16px erriweather serif'
	ctx.fillStyle = 'white'	
	ctx.fillText(nameInput.value, 85, yt)
	ctx.fillText(email.value, 85, yt+25)
	ctx.fillText(address.value, 100, yt+50)
	ctx.fillText(mode.value, 175, yt+75)
	ctx.fillText(number.value, 155, yt+100)
}

function drawborder()
{
	var gradient = ctx.createLinearGradient(0, 0, 470, 0);
	gradient.addColorStop("0.5", "red");
	gradient.addColorStop("1.0", "red");
	ctx.strokeStyle = gradient;
	ctx.lineWidth = 2;
	ctx.strokeRect(15, 15, 770, 470);
}
nameInput.addEventListener('input', function () {
	drawImage()
	drawtext()
    drawborder()
    statictext()

})
downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})

// dignose.addEventListener('click', function () {
//      var link = "nishant.jpg"
// 	var name  = downloadBtn.href
// 	downloadBtn.download = 'Certificate - ' + nameInput.value
// 	console.log(downloadBtn.href)
// })
// module.exports = 'nishant';


