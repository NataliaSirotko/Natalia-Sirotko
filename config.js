    document.querySelector('#byn').addEventListener('click', colorButton);	
			
			function colorButton() {
			document.querySelector('#button').style.backgroundColor="green" ;
			
		}


			document.querySelector('#rub').addEventListener('click', colorButton1);	
			
			function colorButton1() {
			document.querySelector('#button').style.backgroundColor="crimson" ;
			
		}


document.querySelector('#byn').addEventListener('click', setCurrency1);
function setCurrency1() {
	var currency= document.querySelectorAll('.currency');
	currency[0].dataset.after='BYN';
	currency[1].dataset.after='BYN';
}
				
        
document.querySelector('#rub').addEventListener('click', setCurrency2);
function setCurrency2() {
	var currency= document.querySelectorAll('.currency');
	currency[0].dataset.after='RUB';
	currency[1].dataset.after='RUB';
}
