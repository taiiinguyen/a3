let accessories = ["acc1.png", "acc2.png", "acc3.png"];
let bottoms = ["btm1.png", "btm2.png", "btm3.png", "btm4.png", "btm5.png", "btm6.png", "btm7.png", "btm8.png", "btm9.png", "btm10.png"];
let tops = ["top1.png", "top2.png", "top3.png", "top4.png", "top5.png", "top6.png", "top7.png", "top8.png", "top9.png", "top10.png"];
let shoes = ["shoe1.png", "shoe2.png", "shoe3.png", "shoe4.png", "shoe5.png"];
let hats = ["hat1.png","hat2.png","hat3.png","hat4.png"];


generateHat();
generateBottom();
generateTop();
generateShoe();
generateAccessory();

$("#rcorners2").click(function(){
	generateHat();
	generateBottom();
	generateTop();
	generateShoe();
	generateAccessory();
});



$(".hat").click(function(){
	generateHat();
})

$(".bottom").click(function(){
	generateBottom();
})

$(".top").click(function(){
	generateTop();
})

$(".shoe").click(function(){
	generateShoe();
})

$(".acc").click(function(){
	generateAccessory();
})



function generateHat() {
	let hat = "img/"+hats[Math.floor(Math.random() * hats.length)]
	$(".hat").attr("src",hat)

}

function generateBottom() {

	let bottom = "img/"+bottoms[Math.floor(Math.random() * bottoms.length)]
	$(".bottom").attr("src", bottom)
}

function generateTop() {

	let top = "img/"+tops[Math.floor(Math.random() * tops.length)]
	$(".top").attr("src",top)
}

function generateShoe() {

	let shoe = "img/"+shoes[Math.floor(Math.random() * shoes.length)]
	$(".shoe").attr("src",shoe)
}

function generateAccessory() {

	let accessory = "img/"+accessories[Math.floor(Math.random() * accessories.length)]
	$(".acc").attr("src", accessory)
}



// let hat = Math.florr(Math.random() * hats.length);
//  console.log(hat)

// let bottom = Math.florr(Math.random() * bottoms.length);
//  console.log(bottom)
