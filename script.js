'use strict';

function $() {
  
  let x = prompt( 'Что делаем?(+, -, *, /, **, ***)', '' );
  let bool = (x == '+' || x == '-' || x == '*' || x == '/' || x == '**' || x == '***' );
  if( x === null ) return;
  else if ( !bool ) {
    alert( 'Ошибка' );
	return;
  };
  
  let num = {
    one: prompt( 'Введите первое число', '' ),
  };
  if( num.one === null ) return;
  else if( !(+num.one) && +num.one !== 0 ) {
    alert( 'Ошибка' );
	return;
  };
   
  num.two = prompt( 'Введите второе число', '' );
  if( num.two === null ) return;
  else if( !(+num.two) && +num.two !== 0 ) {
	alert( 'Ошибка' );
	return;
  };
  
  let result;
  
  num.one = +num.one;
  num.two = +num.two;
  
  switch( x ) {
    case '+':
	  result = num.one + num.two;
	  break;
    case '-':
	  result = num.one - num.two;
	  break;
	case '*':
	  result = num.one * num.two;
	  break;
	case '/':
	  result = num.one / num.two;
	  break;
	case '**':
	  result = num.one ** num.two;
	  break;
	case '***':
	  result = powPlus( num.one, num.two )
  };
   
  let message = ( result == Infinity ) ? 'Результат infinity':
  ( result == -Infinity ) ? 'Результат -infinity':
  `Результат ${result}`;
  alert( message );
  
  function powPlus( num1, num2 ) {
	if( !(+num1) || !(+num2) ) return;
	let result = num1;
	if( num2 < 1 ) {
	  alert( `Ошибка! ${num2}-я степень ${num1} не поддерживается!` );
	  return;
	};
	for(let i = 1; i < num2; i++) {
	  result = num1 ** result;
	};
	return result;
  };
  
};
