let dragaoList = [
	'https://giantbomb1.cbsistatic.com/uploads/original/15/155775/2170020-shenlong.png',
	'https://i.pinimg.com/originals/0b/2e/93/0b2e9309f9fedf80f24bf650bae502a3.png',
	'https://i.pinimg.com/originals/0b/72/75/0b72755a5ea5e1999d6fbfd3aa544355.png',
	'https://i.pinimg.com/originals/0b/2e/93/0b2e9309f9fedf80f24bf650bae502a3.png',
	'https://i.pinimg.com/originals/7a/7f/76/7a7f76ea01702078582a1ae8b7344fb3.png',
	'https://i.pinimg.com/originals/13/19/62/1319628426fa9d3783705daf7db525f8.png',
	'https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png',
	'https://i.pinimg.com/originals/ec/8e/c5/ec8ec55eb1b4d4dfa3f7b2cbffe5bc6c.png',
]
let esferas = document.getElementById('img')
console.log(esferas)
let contador =0
let esquerda = document.getElementById('esquerda')
let direita = document.getElementById('direita')

esquerda.addEventListener('click', function(){
	if (contador>0) {
		contador=contador-1
		esferas.setAttribute('src',dragaoList[contador])
	}
	else{
		contador=7
	    esferas.setAttribute('src',dragaoList[contador])
	}
})
direita.addEventListener('click', function(){
	console.log('click')
    if (contador<7) {
		contador=contador+1
		esferas.setAttribute('src',dragaoList[contador])
	}
	else{
		contador=0
	    esferas.setAttribute('src',dragaoList[contador])
	}
})