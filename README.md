# 김용준 [201840208]

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