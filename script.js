const firstOne = document.querySelector('.grid-triviaCards');
firstOne.querySelector('.button1').innerText = 'HTML IS A PROGRAMING LANGUAGE';

document.querySelector('.button1').addEventListener('click', function () {
	document.getElementById('demo1').innerHTML = "TRY AGAIN YOU'RE INCORRECT";
});

const secondOne = document.querySelector('.grid-triviaCards');
secondOne.querySelector('.button2').innerText =
	'HTML WAS INVENTED BY AN ANONYMOUS SOURCE';

document.querySelector('.button2').addEventListener('click', function () {
	document.getElementById('demo2').innerHTML = "TRY AGAIN YOU'RE INCORRECT";
});

const thirdOne = document.querySelector('.grid-triviaCards');
thirdOne.querySelector('.button3').innerText =
	'JAVA AND JAVASCRIPT ARE THE SAME PROGRAMING LANGUAGE';

document.querySelector('.button3').addEventListener('click', function () {
	document.getElementById('demo3').innerHTML = "TRY AGAIN YOU'RE INCORRECT";
});

const fourthOne = document.querySelector('.grid-triviaCards');
fourthOne.querySelector('.button4').innerText =
	'YOU CAN USE JAVASCRIPT TO APPLY CSS STYLINGS';

document.querySelector('.button4').addEventListener('click', function () {
	document.getElementById('demo4').innerHTML = 'YOU ARE CORRECT!';
});

const fifthOne = document.querySelector('.grid-triviaCards');
fifthOne.querySelector('.button5').innerText =
	'HTML WAS INVENTED BY TIM BERNERS-LESS ';

document.querySelector('.button5').addEventListener('click', function () {
	document.getElementById('demo5').innerHTML = 'YOU ARE CORRECT!';
});

const sixthOne = document.querySelector('.grid-triviaCards');
sixthOne.querySelector('.button6').innerText =
	'JAVASCRIPT IS A FRONT END SYNTAX LANGUAGE';

document.querySelector('.button6').addEventListener('click', function () {
	document.getElementById('demo6').innerHTML = 'YOU ARE CORRECT!';
});

const seventhOne = document.querySelector('.grid-triviaCards');
seventhOne.querySelector('.button7').innerText =
	'HTML CAN BE LOOKED AT LIKE THE BONES OF A WEBSITE';

document.querySelector('.button7').addEventListener('click', function () {
	document.getElementById('demo7').innerHTML = 'YOU ARE CORRECT!';
});

const eighthOne = document.querySelector('.grid-triviaCards');
eighthOne.querySelector('.button8').innerText =
	'HTML IS NOT A COMPUTER LANGUAGE';

document.querySelector('.button8').addEventListener('click', function () {
	document.getElementById('demo8').innerHTML = 'YOU ARE CORRECT!';
});

const ninthOne = document.querySelector('.grid-triviaCards');
ninthOne.querySelector('.button9').innerText =
	'CSS IS ONLY USED FOR THE STYLING OF A PAGE OR APP';

document.querySelector('.button9').addEventListener('click', function () {
	document.getElementById('demo9').innerHTML = 'YOU ARE CORRECT!';
});
