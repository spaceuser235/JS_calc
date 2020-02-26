'use stirict';

function $() {
  
  let x = prompt( 'Что делаем?(+, -, *, /, **, ***, round, ceil)', '' );
  let bool = (x == '+' || x == '-' || x == '*' || x == '/' || x == '**' || x == '***' ||  x == 'round' || x == 'ceil' || x == 'floor' );
  let only1NumReq = ( x == 'round' || x == 'ceil' || x == 'floor' );
  if( x === null ) return;
  else if ( !bool ) {
    alert( 'Ошибка' );
	return;
  };
  
  let num1Str = ( !only1NumReq ) ? 'первое ' : '';
  
  let a = prompt( `Введите ${num1Str}число`, '' );
  if( a === null ) return;
  else if( !(+a) && +a !== 0 ) {
    alert( 'Ошибка' );
	return;
  };
   
  let b;
  if( !only1NumReq ) {
	b = prompt( 'Введите второе число', '' );
    if( b === null ) return;
    else if( !(+b) && +b !== 0 ) {
	  alert( 'Ошибка' );
	  return;
   };
  };
  
  let result;
  
  a = +a;
  if( !only1NumReq ) b = +b;
  
  switch( x ) {
    case '+':
	  result = a + b;
	  break;
    case '-':
	  result = a - b;
	  break;
	case '*':
	  result = a * b;
	  break;
	case '/':
	  result = a / b;
	  break;
	case '**':
	  result = a ** b;
	  break;
	case '***':
	  result = calc.powPlus( a, b );
	case 'round':
	  result = Math.round( a );
	  break;
	case 'ceil':
	  result = Math.ceil( a );
	  break;
	case 'floor':
	  result = Math.floor( a );
	  break;
  };
   
  let message = ( result == Infinity ) ? 'Результат infinity':
  ( result == -Infinity ) ? 'Результат -infinity':
  ( x == '***' && result === undefined ) ? false:
  `Результат ${result}`;
  if( message ) {
	alert( message );
  };
  
  let calc = {
    powPlus( a, b ) {
	  if( !(+a) && +b !== 0 || !(+b) && +b !== 0 ) return;
	  let result = a;
	  if( num2 < 1 ) {
	    alert( `Ошибка! ${b}-я сверхстепень ${a} не поддерживается!` );
	    return;
	  };
	  for(let i = 1; i < num2; i++) {
	    result = num1 ** result;
	  };
	  return result;
    },
  };
  
};