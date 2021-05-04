# 김용준 [201840208]

## [05월 04일]
> 오늘 배운 내용
- 생성자 함수
- 프로토타입
### 표준 내장 객체
#### 기본 자료형과 객체 자료형의 차이
#### Number 객체
- 메소드
- Number 객체
- String 객체
>속성과 메소드<br>
메소드 활용<br>
>- 문자열 포함, 문자열 분해

> 요약
- 생성자함수
>function Product(name, price){<br>
    this.name = name;<br>
    this.price = price;<br>
}<br>
// 객체를 생성합니다.<br>
let product = new Product("바나나",1200);<br>
//출력합니다.<br>
console.log(product);
- 프로토타입
### 표준 내장 객체
#### 기본 자료형과 객체 자료형의 차이
> 기본 자료형 숫자의 속성이나 메소드를 사용하면, 자동으로 Number 객체 자료형으로 변환되어 속성이나 메소드를 사용할 수 있습니다.
#### Number 객체
- 메소드
> let foo = 273;<br>
let bar = 111;<br><br>
Number.prototype.method = function(){<br>
    return "Add Method";<br>
}<br><br>
console.log(foo.method());
- Number 객체
> let foo = Number.MAX_VALUE;<br>
let bar = Number.MAX_VALUE+1000000;<br><br>
console.log(foo);<br>
console.log(bar);<br>

> let foo = Number.MIN_VALUE;<br>
let bar = Number.MIN_VALUE+1000000;<br><br>
console.log(foo);<br>
console.log(bar);<br>
- String 객체(1) 속성과 메소드
>let foo = "abcdefgh";<br><br>
let bar = foo.toUpperCase();<br>
console.log(foo);<br>
console.log(bar);<br>

>let foo = "abcdefgh";<br><br>
let bar = foo.toUpperCase();<br>
console.log(foo);<br>
console.log(bar);<br>
- String 객체(2) 메소드 활용 ※문자열 포함
>let foo = "안녕하세요. 좋은 아침입니다.";<br><br>
if(foo.indexOf('아침')>=0){<br>
    console.log('좋은 아침입니다.');<br>
} else {<br>
console.log('안녕히 주무세요.');<br>
}<br>
- String 객체(2) 메소드 활용 ※문자열 분해<br>
>let string = '감자, 고구마, 바나나, 사과';<br><br>
let array = string.split(',');<br>
console.log(array);<br>
## [04월 27일]
> 오늘 배운 내용
#### 타이머 함수
- setInterval()
- setTimeout()
#### 익명 함수와 선언적 함수의 생성 순서
- 변수 덮어쓰기
- 함수 덮어쓰기(1)
- 함수 덮어쓰기(2)
### 객체
#### 객체 기본
- 배열
#### 객체와 반복문
- 객체와 반복문
#### 속성과 메소드
- 메소드 : 객체의 속성 중 자료형이 함수인 속성
#### 생성자 함수와 프로토타입
- 개요
- 생성자 함수
> 요약
#### 타이머 함수
- setInterval()
- setTimeout()
>let foo = setInterval( ()=>{ <br>
    console.log("출력합니다."); <br>
},1000);

>setTimeout(function(){<br>
    clearInterval(foo);<br>
},3050);
#### 익명 함수와 선언적 함수의 생성 순서
- 변수 덮어쓰기
> let bar;<br>
bar = 10;<br>
bar = 20;<br><br>
console.log(bar);
- 함수 덮어쓰기(1)
>let foo;<br>
foo = () => {console.log("첫번째 함수");}<br>
foo = ()=>{<br>
    console.log("두번째 함수");<br>
}<br><br>
foo();
- 함수 덮어쓰기(2)
>foo = function(){<br>
    console.log("첫번째 함수");<br>
}<br>
function foo(){<br>
    console.log("두번째 함수");<br>
}<br><br>
foo ();
### 객체
#### 객체 기본
- 배열
>let foo = ['사과', '바나나', '딸기'];<br>
let product = {<br>
    제품명 : '건조 망고',<br>
    유형 : '당절임',<br>
    원산지: '필리핀'<br>
}<br>
>console.log(product);<br><br>
>console.log(foo[1]);<br>
console.log(product['원산지']);<br>
#### 객체와 반복문
> 생성한 객체에 for in 반복문으로 반복을 적용할 수 있습니다.<br>
for of 반복문도 적용할 수 있지만, 일반적인 개발에서는 거의 사용하지 않으므로 생략합니다.

>let foo = ['사과', '바나나', '딸기'];<br>
let product = {<br>
    제품명 : '건조 망고',<br>
    유형 : '당절임',<br>
    원산지: '필리핀'<br>
    테스트 : 1200<br>
}<br>
for(let key in product){<br>
    for (let key in product){<br>
        console.log(`${key}: ${product[key]}`);<br>
    }<br>
} <br>
#### 속성과 메소드
> let foo = ['사과', '바나나', '딸기'];<br>
let name = 123;<br>
let product = {<br>
    name : '건조 망고',<br>
    유형 : '당절임',<br>
    원산지: '필리핀',<br>
    테스트 : 1200,<br>
    print: function(){<br>
        console.log(`${this.name} ${this.유형}`);<br>
    }<br>
}<br>
#### 생성자 함수와 프로토타입
- 개요
>let foo = [<br>
    { name: '바나나', price: 1320}, <br>
    { name: '사과', price: 1000}, <br>
    { name: '딸기', price: 1500}, <br>
    { name: '자두', price: 1300}, <br>
    { name: '복숭아', price: 1220} <br>
];<br><br>
function bar (foo) { <br>
    console.log(`${foo.name} : ${foo.price}`);<br>
}<br><br>
for(let foo1 of foo){<br>
    bar(foo1);<br>
}
- 생성자 함수
## [04월 13일]
> 오늘 배운 내용
### 함수
#### 함수 생성 방법
- 익명함수
- 선언적 함수
- 화살표 함수
#### 함수의 기본 형태
- 함수의 기본 형태
- 매개 변수가 여러 개인 함수
#### 함수의 기본 활용 형태
- 매개 변수와 리턴(1)
- 매개 변수와 리턴(2)
#### 함수 매개 변수 초기화
- 매개 변수를 입력하지 않고 함수 호출
- 조건문을 활용한 매개 변수 초기화
- 짧은 초기화 조건문을 활용한 매개 변수 초기화
#### 콜백 함수
- 콜백 함수
#### 표준 내장 함수
- 숫자 변환 함수
- 타이머 함수(1)<br>
setTimeout(함수,시간)<br>
setInterval(함수,시간)
- 타이머 함수(2)<br>
clearInterval() 함수
> 요약
### 함수
#### 함수 생성 방법
- 익명함수
>let 함수 = function(){<br>
    console.log("함수의 첫 번째 줄");<br>
    console.log("함수의 두 번째 줄");<br>
};<br><br>
함수();<br>
console.log(함수);
- 선언적 함수
>function 함수(){<br>
    console.log("함수의 첫 번째 줄");<br>
    console.log("함수의 두 번째 줄");<br>
};<br><br>
함수();<br>
console.log(함수);
- 화살표 함수
>let 함수 = () => {<br>
    console.log("함수의 첫 번째 줄");<br>
    console.log("함수의 두 번째 줄");<br>
};<br><br>
함수();<br>
console.log(함수);
#### 함수 생성 방법
> function <함수 이름>(<매개 변수>){<br>
    <함수코드>{<br>
    return <리턴 값><br>
}
- 함수 기본 형태
> 함수의 기본 형태<br>
function power(x){<br>
    return x * x;<br>
}<br><br>
>console.log(power(10));<br>
console.log(power(20));<br>

>function foo(x){<br>
    bar = x*x;<br>
    return bar;<br>
}
- 매개 변수가 여러 개인 함수<br>
>function multiplay(x,y){<br>
    return x*y;<br>
}<br><br>
>console.log(multiplay(10,20));<br>
console.log(multiplay(20,6));<br>
- 리턴 없는 함수<br>
>function print(x){<br>
    console.log(`"${x}"이라고 말했습니다.`);<br>
}<br><br>
>print("안녕하세요");
#### 함수의 기본 활용 형태
- 매개 변수와 리턴(1)
> function sum(min, max){<br>
    let output = 0;<br>
    for (let i = min; i<= max; i++){<br>
        output += i;<br>
    }<br>
    return output;<br>
}<br><br>
>console.log(sum(1,100));
- 매개 변수와 리턴(2)
>function multiplay(min, max){<br>
    let output = 1;<br>
    for (let i = min; i<= max; i++){<br>
        output *= i;<br>
    }<br>
    return output;<br>
}<br><br>
>console.log(multiplay(1,10));
#### 함수 매개 변수 초기화
- 매개 변수를 입력하지 않고 함수 호출
>function print(name, count){<br>
    console.log(`${name}이 ${count}개 왔습니다.`)<br>
}<br><br>
>print("사과",10);<br>
print("사과");
- 조건문을 활용한 매개 변수 초기화
>function print(name, count){<br>
    if(!count){<br>
        count = "수량을 알 수 없습니다.";<br>
    }<br><br>
    console.log(`${name}이 ${count}개 있습니다.`)<br>
}<br><br>
>print("사과",10);<br>
print("사과");
- 짧은 초기화 조건문을 활용한 매개 변수 초기화
>function print(name, count){<br><br>
>    count = count || "미입력";<br><br>
>    console.log(`${name}이 ${count}개 있습니다.`)<br>
}<br><br>
>print("사과",10);<br>
print("사과");
#### 콜백 함수
- 콜백 함수
>function callTentime(callback){<br><br>
    for (let i = 0; i < 10; i++){<br>
        callback();<br>
    }<br>
}<br><br>
>callTentime(function(){
    console.log('함수 호출');
});
#### 표준 내장 함수
- 숫자 변환 함수
>let inputA = "52";<br>
let inputB = "52.273";<br>
let inputC = "1401동";<br>
let inputD = "1A동입니다.";<br><br>
>console.log(parseInt(inputA));<br>
console.log(parseFloat(inputA));<br><br>
>console.log(parseInt(inputB));<br>
console.log(parseFloat(inputB));<br><br>
>console.log(parseInt(inputC));<br>
console.log(parseInt(inputD));<br><br>
>console.log(Number(inputA));<br>
console.log(Number(inputB));<br>
console.log(Number(inputC));<br>
console.log(Number(inputD));<br>
- 타이머 함수(1)
>setTimeout(function(){<br>
    console.log("1초가 지났습니다.");<br>
}, 1000);<br><br>
>setInterval(function(){<br>
    console.log("1초 마다 호출됩니다.");<br>
},1000);<br>
- 타이머 함수(2)
>let id = setInterval(function(){<br>
    console.log("출력합니다.");<br>
},1000);<br><br>
setTimeout(function(){<br>
    clearInterval(id);<br>
},3000);<br>
## [04월 06일]
> 오늘 배운 내용 요약
- for문 반복문
- 역 for 반복문
- for in 반복문과 for of 반복문
- 중첩 반복문
- break 키워드
- continue 키워드
- 스코프
- 호이스팅
- var 키워드
> 요약
- for문 반복문
> for (let i = 0; i < <반복 횟수>; i++>){
}
- 역 for 반복문
>for (let i = length - 1; i >= 0; i--){
}  
- for in 반복문과 for of 반복분
>① for (let 인덱스 in 배열){
}
>② for (let 요소 of 배열){
} 
- 중첩 반복문
반복문을 여러 번 사용하면 중첩 반복문
- break 키워드
break 키워드는 switch 조건문이나 반복문을 벗어날 때 사용<br>
>while (true){
    break;
}
- continue 키워드
반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행<br>
>for (let i = 1; i < 10; i++){
    if (i % 2 == 0 ){
        continue;
    }
}
- 스코프
>블록
변수는 선언 위치에 따라 사용할 수 있는 범위가 제한됨
if (<표현식>){
}
console.log(); <- 해당 블록 외부에서 사용할 수 없습니다.
- 호이스팅
해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업
- var 키워드
> let 키워드 : 자바스크립트
let 키워드로 생성한 변수는 해당 블록 내부에서만 사용

> var 키워드 : 익스플로러
var 키워드로 생성한 변수는 모든 곳에서 사용
## [03월 30일]
> 오늘 배운 내용 요약
- if else if 조건문
- switch 조건문
- 삼항 연산자
- 짧은 초기화 조건문
### 4장 반복문
- 배열
- while문
- for문
> 요약
- if else if 조건문<br>
중복되지 않는 세 가지 이상의 조건을 구분할 때 사용<br>
if (<불 표현식>){<br>
}else if(<불 표현식>){<br>
}else if(<불 표현식>){<br>
}else {<br>
}
- switch 조건문<br>
break키워드: switch조건문이나 반복문을 빠져나갈 때 사용<br>
만약 break 키워드를 사용하지 않으면 switch 조건문을 벗어나지 않은 채 문장을 계속 읽어 내립니다<br>
switch(<비교할 값>){<br>
case <값>:<br>
<문장><br>
break;<br>
case <값>:<br>
<문장><br>
break;<br>
default:<br>
<문장><br>
break;<br>}
- 삼항 연산자<br>
연산자이지만 프로그램의 진행을 조건에 따라 변화<br>
<불 표현식> ? <참> : <거짓><br>
자바스크립트는 삼항 연산자를 '해당 변수가 undefined인지 확인할 때'에 자주 사용<br>
- 짧은 초기화<br>
삼항 연산자보다 조금 더 짧게 사용<br>
'변수 test가 undefined일 때 || 기호 뒤에 값으로 초기화' 고정된 형식<br>
참고로 && 연산자는 반대로 동작하지만, 짧은 초기화 조건문으로는 거의 활용하지 않음<br>
<변수> = <대상 변수> || <대상 변수가 undefined일 때 넣을 값><br>
- 배열<br>
여러개의 자료를 한꺼번에 다룰 수 있는 자료형<br>
대괄호 내부의 각 자료는 쉼표로 구분<br>
배열에는 여러 자료형이 섞여 있을 수 있음<br>
요소: 배열 안에 들어있는 각 자료<br>
let 이름 = [자료, 자료, 자료, 자료, 자료]<br>
- while문<br>
if조건문과 형태가 비슷하나 if 조건문과 달리 불표현식이 참인 동안에는 중괄호 안의 문자을 계속 실행<br>
조건이 변하지 않으면 무한 반복하므로 반드시 조건을 false로 만들 수 있는 문장을 포함해야 함<br>
while (<불 표현식>){<br>
// 불 표현식이 참인 동안 실행할 문장<br>
}
- for문<br>
for 반복문은 원하는 횟수만큼 반복하고 싶을 때 사용<br>
for 반복문은 맨 먼저 초기식을 실행하고 조건식을 확인. 조건식이 false이면 반복문을 빠져나가고, true이면 문장과 종결식을 차례로 실행해 다시 조건식이 true인지 확인<br>
for (let i = 0; i < <반복 횟수>; i++{<br>
}
## [03월 23일]
> 오늘 배운 내용 요약
- 문자 선택 연산자
- 탬플릿 문자열
- 비교 연산자
- 논리 연산자
- 논리합 연산자
- 논리곱 연산자
- 복합 대입 연산자
- 증감 연산자
- 자료형 검사
- undefined 자료형
- 강제 자료형 변환<br>
① Number()함수 <br>
② NaN <br>
③ Boolean()함수
- 자동 자료형 변환
① 숫자, 문자열 자료형 <br>
② 불 자료형
- 일치 연산자
- 변수,상수
### 조건문
- if 조건문
- if else 조건문
- 중첩 조건문
> 요약 <br>

- 문자 선택 연산자<br>
console.log(name[1]);<br>
name = "안녕하세요.여러분";<br>
'안녕하세요.여러분'<br>
console.log(name[1]);<br>
녕<br>
console.log(name[5]);<br>
. <br>
- 탬플릿 문자열<br>
`안녕하세요`<br>
`안녕하세요`<br>
`52+273 = ${52+273}`<br>
'52+273 = 325'<br>
<br>
- 비교 연산자<br>
==   같습니다<br>
!=   다릅니다<br>
.>   왼쪽 피연산자가 큽니다<br>
<   오른쪽 피연산자가 큽니다<br>
.>=   왼쪽 피연사자가 크거나 같습니다<br>
<=   오른쪽 피연산자가 크거나 같습니다<br>
.> console.log(52<273);<br>
true<br>
console.log(52>273);<br>
false<br>
console.log("하마"<"가방");<br>
false<br>

- 논리 연산자<br>
!   논리 부정 연산자<br>
!!   논리합 연산자<br>
&&   논리곱 연산<br>
console.log(!true);<br>
false<br>
console.log(!false);<br>
true<br>
console.log(!(52<273));<br>
false<br>
console.log(!(52>273));<br>
true<br>
<br>
- 논리합 연산자<br>
true + true = true<br>
true + false = true<br>
false + true = true<br>
false + false = false<br>
- 논리곱 연산자<br>
true * true = true<br>
true * false = false<br>
false * true = false<br>
false * false = false<br>
<br>
- 복합 대입 연산자<br>
+=   숫자 덧셈 후 대입 연산자<br>
-=   숫자 뺄셈 후 대입 연산자<br>
*=   숫자 곱셈 후 대입 연산자<br>
/=   숫자 나눗셈 후 대입 연산자<br>
%=    숫자 나눗셈 후 나머지숫자 대입 연산자<br>
let a = 10;<br>
a += 10;<br>
20<br>
a -= 5;<br>
15<br>
a *= 2;<br>
30<br>
a /= 3;<br>
10<br>
a %= 3;<br>
1<br>
<br>
- 증감 연산자<br>
변수++   기존 변수 값에 1을 더합니다(후위)<br>
++변수   기존 변수 값에 1을 더합니다(전위)<br>
변수--   기존 변수 값에서 1을 뺍니다(후위)<br>
--변수   기존 변수 값에서 1을 뺍니다(전위)<br>

- 자료형 검사 : typeof<br>
typeof 10<br>
'number'<br>
typeof "문자열"<br>
'string'<br>

- undefined 자료형<br>
let a<br>
undefined<br>

- 강제 자료형 변환<br>
.Number()   숫자로 자료형 변환<br>
String()   문자열로 자료형 변환<br>
Boolean()   불로 자료형 변환<br>

(1) Number()함수와 NaN<br>
Number()함수<br>
console.log(Number("52"));<br>
52<br>
console.log(Number("52.273"));<br>
52.273<br>
console.log(Number(true));<br>
1<br>
console.log(Number(false));<br>
0<br>
console.log(Number("안녕하세요"));<br>
NaN<br>

- NaN(Not a Number)<br>
let nan = Number("안녕하세요");<br>
console.log(nan==nan);<br>
false<br>
console.log(nan!=nan);<br>
true<br>
console.log(isNaN(nan));<br>
true<br>
- Boolean()함수<br>
console.log(Boolean(0));<br>
false<br>
console.log(Boolean(nan));<br>
false<br>
console.log(Boolean(""));<br>
false<br>
console.log(Boolean(null));<br>
false<br>

- 자동 자료형 변환
- 숫자,문자열 자료형<br>
console.log(52+273);<br>
325<br>
console.log("52"+273);<br>
52273<br>
console.log(52+"273");<br>
52273<br>
console.log("52"+"273");<br>
52273<br>
- 볼 자료형<br>
console.log(!!0);<br>
false<br>
console.log(!!nan);<br>
false<br>
console.log(!!n"");<br>
console.log(!!"");<br>
false<br>
console.log(!!null);<br>
false<br>

- 일치 연산자<br>
===   자료형과 값이 같은지 비교<br>
!==   자료형과 값이 다른지 비교<br>
console.log(`52=="52" : ${52=="52"}`);<br>
52=="52" : true<br>
console.log(`52==="52" : ${52==="52"}`);<br>
52==="52" : false<br>
console.log(`0=="" : ${0==""}`);<br>
0=="" : true<br>
console.log(`0==="" : ${0===""}`);<br>
0==="" : false<br>

- 변수<br>
let <식별자> = 자료<br>
: 값을 저장할 목적으로 사용하며, 이후에 변경할 수 있는 값<br>
- 상수<br>
const <식별자> = 자료<br>
: 값을 저장할 목적으로 사용하며, 이후에 변경할 수 없는 값<br>
### 3장조건문
if 조건문 : 서로 값이 같은 지를 확인 후 참이면 실행 아니면 미실행<br>
if else 조건문 : if문에서 조건이 참이 아닐 경우 다른 조건을 내세울때 사용<br>
else if문은 여러번 사용이 가능<br>
다른 조건이 또 필요하면 사용하면 됨<br>
중첩 조건문 : 조건문 안에 조건문이 있는것을 중첩if<br>
바깥쪽에 있는 조건1을 만족해야 조건2로 넘어감<br>
만약 조건1을 틀릴경우 조건2를 검사하지 않음<br>

## [03월 16일]
> 오늘 배운 내용 요약
- 자바스크립트 발전
- 자바스크립트로 할 수 있는 일<br> 
① 웹 클라이언트 애플리케이션 개발<br>
② 웹 서버 개발<br>
③ 모바일 애플리케이션 개발<br>
④ 데스크톱 애플리케이션 개발<br>
⑤ 게임 개발<br>
⑥ 데이터베이스 관리
- 실습 환경 구축<br>
① Atom 에디터<br>
② Node.js
- 기본 실습
- 웹 브라우저 실습
<br>
- 기본 용어<br>
① 표현식 문장<br>
② 키워드<br>
③ 식별자<br>
④ 주석
- 출력<br>
① 출력 메소드<br>
② REPL
- 기본 자료형<br>
① 숫자<br>
② 문자열
> 요약

js2021-4 폴더 생성 - 해당 폴더 선택 - 소스 제어
만약 파일 안보일시 파일 보기에 숨긴 항목 체크

.README.md 생성
.# 이름 [학번]
.## [날짜]
>> 오늘 배운 내용 요약
>> 요약

최근 날짜를 위로 쓴다
ex)
.## [03월 23일]
>> 오늘 배운 내용 요약
>> 요약

.## [03월 16일]
>> 오늘 배운 내용 요약
>> 요약

hello.js 생성
console.log('Hello World...!')

hello.html 생성

- 출력
console.log("Hello World");
- 주석
Ctrl + / -> <.!-- 주석 -->
- 숫자<br>
console.log(1+2);<br>
console.log(1-2);<br>
console.log(1*2);<br>
console.log(1/2);<br>
console.log(1%2);
- 문자열<br>
① 기본 문자열<br>
② 이스케이프 문자<br>
console.log("이름\t나이");<br>
console.log("안녕\n하세요");<br>
console.log("\\\\");<br>
③ 문자열 연결 연산자<br>
console.log("가나다"+"라마"+"바사아"+"자차카타"+"파하");
