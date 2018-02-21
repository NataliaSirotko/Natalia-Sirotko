document.querySelector('#cardNumber').addEventListener('click', colorBorder);
			
			function colorBorder() {
				this.style.borderBottom= '1px solid blue';
			}


		const cardImage = document.querySelector('#cardImage'); 

		document.querySelector('#cardNumber').addEventListener('keyup', function(e) { 
		if (this.value[0] === '4') { 
		cardImage.setAttribute('src', 'resources/visa.svg'); 
		} else if (this.value[0] === '5') { 
		cardImage.setAttribute('src', 'resources/mastercard.svg'); 
		} else if (this.value[0] === '6') { 
		cardImage.setAttribute('src', 'resources/maestro.svg'); 
		} 
	});

		const verificationCode = document.querySelector('#verificationCode'); 

		document.querySelector('#cardNumber').addEventListener('keyup', function(e) { 
		if (this.value[0] === '4') { 
		verificationCode.innerHTML='CVV'; 
		} else if (this.value[0] === '5') { 
		verificationCode.innerHTML='CVC'; 
		} 
	});

		document.querySelector('#cardNumber1').addEventListener('click', colorBorder);
			
			function colorBorder() {
				this.style.borderBottom= '1px solid blue';
			}
		
		const cardImage1 = document.querySelector('#cardImage1'); 

		document.querySelector('#cardNumber1').addEventListener('keyup', function(e) { 
		if (this.value[0] === '4') { 
		cardImage1.setAttribute('src', 'resources/visa.svg'); 
		} else if (this.value[0] === '5') { 
		cardImage1.setAttribute('src', 'resources/mastercard.svg'); 
		} else if (this.value[0] === '6') { 
		cardImage1.setAttribute('src', 'resources/maestro.svg'); 
		} 
	});
