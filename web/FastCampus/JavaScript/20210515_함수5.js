//============================================================

/*
    객체 함수 안에서 함수를 만들어 리턴.
    함수를 호출하면 함수를 만들어서 리턴??
*/

function plus(base) {
    return function(num) {
        return base+num;
    }
}

const plus5 = plus(5); // 현재 base 5가 들어간 객체 function(num)이 plus5에 저장되어있다.

console.log(plus5(10));

const plus7 = plus(7);

console.log(plus7(8));



// =============================================

/*
    함수를 호출할 때, 인자로 함수를 사용
*/

function hello (c) {
    console.log('hello');
    c();
}

hello (function(){console.log("콜백");})