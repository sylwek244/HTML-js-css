const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const RegulaminButton = document.querySelector('.Regulamin');

const functionButtons = document.querySelectorAll('.functions');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');


let result = '';






function displayNumbers () 
{
        if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
        if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'

        currentNumber.innerHTML += this.textContent;
}




function operate () 
{
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }
    

     else if (currentNumber.innerHTML === '') {
        return;
     }

     if(mathSign.innerHTML !== '') {
         showResult();
     }
     previousNumber.innerHTML = currentNumber.innerHTML;
     mathSign.innerHTML = this.textContent;
     currentNumber.innerHTML ='';
}

function operate1 () 
{
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }
    

     else if (currentNumber.innerHTML === '') {
        return;
     }

     if(mathSign.innerHTML !== '') {
         showResult();
     }
     previousNumber.innerHTML = currentNumber.innerHTML;
     mathSign.innerHTML = this.textContent;
     currentNumber.innerHTML ='';
}





function showResult () 
{
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;
	let functions = mathSign.innerHTML;


    switch(operator) 
	{
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
     	if(a!=0&&b!=0)
		{
			 result = a * b;
		}else
			window.alert("To zawsze daje 0");
			result = a * b;
        break;
        case '/':
		if(a!=0&&b!=0)
		{
			result = b / a;
		}else
			
			window.alert("Nie wolno dzielić przez 0, popraw działanie i spróbuj jeszcze raz");
        break;
     
    }
	switch(functions)
	{
		case 'Sin()':
		result = Math.sin(a);
		break;
		case 'Cos()':
		result = Math.cos(a);
		break;
		case 'Tg()':
		result = Math.tan(a);
		break;
		case 'Ctg()':
		result = 1/Math.tan(a);
		break;
	}

    addToHistory();
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function addToHistory () 
{
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
}


function clearHistory () 
{
    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent === '') {
        historyBtn.classList.remove('active');
    }
}

function clearScreen () 
{
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function show () 
{
	window.alert("Instrukcja Obsługi\n\n1 Wpisuj działania tak jak by to była kartka\n2 Aby policzyć sinus wpisz jeden przed znakiem funkcji\n3 Nie wolno dzielić przez 0\n4 Każde mnożenie przez 0 zawsze da 0\n5 Każde wykonane działanie zostanie zapisane w histori\n    bez obaw możesz do niego wrócić\n6 Historię można kasować w każdym momencie\n7 Działania działają w pętli tak więc możemy \n    kontynuować nasze liczenie\n 8 Symbole klawiatury odpowiedzialne za działania\n - + - q\n - - - w\n - * - e\n - / - r\n - = - Enter\n - C - Backspace \n\nŻycze miłego liczenia :) ");
}
 const move = (e) => 
 {
	
	 console.log(e.keyCode)
	 switch(e.keyCode)
	 {
		 case 49:
		 currentNumber.innerHTML =  currentNumber.innerHTML + 1;
		 break;
		 case 50:
		 currentNumber.innerHTML = currentNumber.innerHTML + 2;
		 break;
		 case 51:
		 currentNumber.innerHTML = currentNumber.innerHTML + 3;
		 break;
		 case 52:
		 currentNumber.innerHTML =  currentNumber.innerHTML +4;
		 break;
		 case 53:
		 currentNumber.innerHTML =  currentNumber.innerHTML + 5;
		 break;
		 case 54:
		 currentNumber.innerHTML = currentNumber.innerHTML + 6;
		 break;
		 case 55:
		 currentNumber.innerHTML = currentNumber.innerHTML + 7;
		 break;
		 case 56:
		 currentNumber.innerHTML = currentNumber.innerHTML + 8;
		 break;
		 case 57:
		 currentNumber.innerHTML = currentNumber.innerHTML + 9;
		 break;
		 case 48:
		 currentNumber.innerHTML = currentNumber.innerHTML + 0;
		 break;
		 case 81:
		previousNumber.innerHTML = currentNumber.innerHTML;
		mathSign.innerHTML = "+";
		currentNumber.innerHTML ='';
		result = currentNumber.innerHTML + previousNumber.innerHTML ;
		
		break;
		 case 87:
		 previousNumber.innerHTML = currentNumber.innerHTML;
		mathSign.innerHTML = "-";
		currentNumber.innerHTML ='';
		result = currentNumber.innerHTML - previousNumber.innerHTML ;
		 break;
		 case 69:
		 previousNumber.innerHTML = currentNumber.innerHTML;
		 mathSign.innerHTML = "*";
		 currentNumber.innerHTML ='';
		 result = currentNumber.innerHTML * previousNumber.innerHTML ;
		 break;
		 case 82:
		 previousNumber.innerHTML = currentNumber.innerHTML;
		mathSign.innerHTML = "/";
		currentNumber.innerHTML ='';
		result = currentNumber.innerHTML / previousNumber.innerHTML ;
		 break;
		 case 13:
		 addToHistory();
		 historyBtn.classList.add('active');
		 currentNumber.innerHTML = result;
		 previousNumber.innerHTML = '';
		 mathSign.innerHTML = '';
		 break;
		 case 8:
		 result = '';
		 currentNumber.innerHTML = '';
		 previousNumber.innerHTML = '';
		 mathSign.innerHTML = '';
		 break;
	

		 
		 
	 }
 }
 window.addEventListener("keydown",move)

 operatorsButtons.forEach((button) => button.addEventListener('click', operate))
 
 functionButtons.forEach((button) => button.addEventListener('click', operate1))

 equalsButton.addEventListener('click', showResult);
 
 RegulaminButton.addEventListener('click', show);

 clearButton.addEventListener('click', clearScreen);

 numbersButtons.forEach((button) => {
     button.addEventListener('click', displayNumbers)
 })


 historyBtn.addEventListener('click', clearHistory);