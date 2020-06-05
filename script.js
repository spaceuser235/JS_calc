'use strict';

function $() {
  let funcs = [
    ['+', '-', '*', '/', '**', '***'],
	['rInt', 'rFloat', 'findPrimes'],
	['round', 'floor', 'ceil', 'isPrime'],
  ];
  
  let funcsStr = '';
  for(let arr of funcs) {
	funcsStr += `${ arr.join(', ') }, `;
  };
  funcsStr = funcsStr.slice(0, funcsStr.length - 2);
  
  let funcsFull = funcsStr.split(', ');
  
  let x;
  
  while( !valueIn(x, funcsFull) ) {
    x = prompt(`Что делаем?(${funcsStr})`, '');
	if(x === null || x === '') return;
  };
  
  let result;
  if( valueIn(x, funcs[0]) ) {
	result = calc2nums(x);
  } else if( valueIn(x, funcs[1]) ) {
	result = calcMinMax(x);
  } else if( valueIn(x, funcs[2]) ) {
    result = calc1num(x);
  };
  
  if(typeof result == 'object') {
	result = result.join(', ');
  };
  
  if(result === false) return;
  if(result === undefined) {
	alert('Ошибка');
	return;
  };
  
  let message = `Релультат: ${result}`;
  
  alert(message);
  
  
  function calc2nums(x) {
	let a = prompt('Введите первое число', '');
	if( !(+a) && a !== '0' ) {
	  alert('Ошибка');
	  return false;
	};
	let b = prompt('Введите второе число', '');
	if( !(+b) && b !== '0' ) {
	  alert('Ошибка');
	  return false;
	};
	
	a = +a;
	b = +b;
	
	let result;
	
	switch(x) {
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
	    result = powPlus(a, b);
		break;
	};
	
	return result;
  };
  
  function calcMinMax(x) {
	let min = prompt('Введите минимальное число', '');
	if( !(+min) && min !== '0' ) {
	  alert('Ошибка');
	  return false;
	};
	let max = prompt('Введите максимальное число', '');
	if( !(+max) && max !== '0' ) {
	  alert('Ошибка');
	  return false;
	};
	
	min = +min;
	max = +max;
	
	let result;
	
	switch(x) {
      case 'rFloat':
	    result = randomFloat(min, max);
		break;
	  case 'rInt':
	    result = randomInt(min, max);
		break;
	  case 'findPrimes':
	    result = findPrimes(min, max);
	};
	
	return result;
  };
  
  function calc1num(x) {
    let num = prompt('Введите число');
	if( !(+num) && num !== '0' ) {
	  alert('Ошибка');
	  return false;
	};
	
	num = +num;
	
	let result;
	
	switch(x) {
	  case 'round':
	    result = Math.round(num);
		break;
      case 'floor':
	    result = Math.floor(num);
		break;
      case 'ceil':
	    result = Math.ceil(num);
		break;
	  case 'isPrime':
	    let preResult = isPrime(num);
		result = (preResult) ? `${num} - это простое число` : `${num} - это не простое число`
	};
	
	return result;
  };
};

function powPlus(a, b) {
  let result = a;
	
  if( b < 1 || Math.trunc(b) != b ) {
    alert(`${b}-ая сверхстепень ${a} не поддеживается!`);
    return false;
  };
	
  for(let i = 0; i < b; i++) {
	result = a ** result;
  };
	
  return result;
};
  
function randomFloat(min, max) {
  return min + Math.random() * (max - min);
};
  
function randomInt(min, max) {
  return Math.round( min - 0.5 + Math.random() * (max + 1 - min) )
};
  
function isPrime(num) {
  if(num < 2 || Math.trunc(num) != num) return false;
  
  for(let i = 2; i < num; i++) {
	if(num % i == 0) return false;
  };
  
  return true;
};

function findPrimes(min, max) {
  let primes = [];
  
  for(let i = min; i < max; i++) {
	if( !isPrime(i) ) continue;
	primes.push(i);
  };
  
  return primes;
};

function valueIn(value, valueIn) {
  if( typeof valueIn != 'object' ) return (valueIn === value);
  
  for(let valueX of valueIn) {
    if(value === valueX) return true;
  };
  
  return false;
};