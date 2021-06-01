# 김용준 [201840208]
## [06월 01일]
> 오늘 배운 내용
### 12.웹 브라우저의 자바스크립트
#### 1. 사용할 수 없는 코드
1. let 키워드와 const 키워드
    > 웹 브라워저에서는 let 키워드와 const 키워드를 사용할 수 없다.
2. 템플릿 문자열    
    > 웹 브라우저에서는 템플릿 문자열을 사용할 수 없다.
3. 화살표 함수
    > 웹 브라우저에서는 화살표 함수를 사용할 수 없다.<br>
    함수를 만들 때는 반드시 <b>function</b>키워드를 사용
4. for of 반복문
    > 웹 브라우저에서는 for of 반복문을 사용할 수 없다.<br>
    for of 반복문을 사용하고 싶을 때는 for in 반복문을 사용해 대체
5. 사용할 수 없는 메소드를 사용한 코드
    > Array 객체의 forEach() 메소드, map() 메소드, filter() 메소드 활용 할 수 없다.<br>
    배열과 관련된 처리를 할때는 대부분 반복문을 사용
#### 2. 브라우저 객체 모델
> 웹브라우저와 관련된 객체를 브라우저 객체 모델이라고 함
#### 3. window 객체
>경고출력을 하는 경고창과 입력을 하는 프롬프트를 제공<br>
- 경고 함수와 입력함수
    최신 버전 자바스크립트 코드|인터넷 익스플로러에서 사용해야 하는 코드
    ---|---|
    alert(<메세지>) | 경고창을 출력<br>
    prompt(<메세지>,<임시 글자>) | 프롬프트를 출력
#### 4. screen 객체
> 웹 브라우저 화면이 아니라 운영체제 화면의 속성을 가지므로 웹 브라우저마다 속성이 다름
- screen 객체의 속성
    속성|설명
    ---|---|
    width|화면의 너비
    height|화면의 높이
    availWidth|실제 화면에서 사용 가능한 너비
    availHeight|실제 화면에서 사용 가능한 높이
    colorDepth|사용 가능한 색상 수
    pixelDepth|한 픽셀당 비트 수
#### 5. location 객체와 history 객체
> 프로토콜의 종류, 호스트 이름, 문서 위치 등 정보가 있다.
- location 객체의 속성
    속성|설명
    ---|---| 
    href | 문서의 URL 주소
    host | 호스트 이름과 포트 번호
    hostname | 호스트 이름
    port | 포트 번호
    pathname | 디렉터리 경로
    hash | 앵커 이름(#~)
    search | 요청 매개 변수
    protocol | 프로토콜 종류
- location 객체의 메소드
    속성|설명
    ---|---|
    assign(<링크>) | 매개 변수로 전달한 위치로 이동
    reload() | 새로고침
    replace() | 매개 변수로 전달한 위치로 이동합니다.(뒤로 가기
 불가능)
 #### 6. navigator 객체
- navigator 객체의 속성
    속성|설명
    ---|---| 
    appCodeName|웹 브라우저의 코드 이름
    appName|웹 브라우저의 이름
    appVersion|웹 브라우저의 버전
    platform|사용 중인 운영체제의 시스템 환경
    userAgent|웹 브라우저의 전체적인 정보

### 14.jQuery
#### 1. jQuery 사용 준비
#### 2. jQuery 객체
```js
window.jQuery = windows.$ = jQuery;
```
#### 3.문서 객체 선택
- 객체 탐색 메소드
    메소드|설명
    ---|---|
    parent()|부모 태그를 선택
    find()|후손 태그를 찾다
#### 4.문서 객체 개별 조작
- 선택된 문서 객체의 수
    속성|설명
    ---|---|
    length|선택된 문서 객체의 수를 구한다
- 선택된 문서 객체 추출
    메소드|설명
    ---|---|
    get()|선택한 문서 객체 중 하나를 선택 
#### 5.문서 객체 조작
- 문자 조작
    메소드|설명
    ---|---|
    text()|html 태그 내부의 문자를 조작
    html()|html 태그 내부의 문자를 조작 
- 스타일 조작
    메소드|설명
    ---|---|
    css()|스타일을 조작
- 속성 조작
    메소드|설명
    ---|---|
    attr()|속성을 조작
#### 6.문서 객체 생성
```js
$('<h1></h1>')
```
#### 7.이벤트
메소드|설명
--|---|
on()|이벤트를 연결
off()|이벤트를 제거
- 이벤트 직접 연결
    ```js
    $(<선택자>).on(<이벤트 이름>,<콜백 함수>)
    ```
- 이벤트 간접 연결
    - 이벤트 제거
        메소드|설명
        ---|---|
        one()|이벤트를 한 번만 연결
#### 8.애니메이션
```js
$(<선택자>).animate(<속성>,<시간>,<콜백 함수>)
``` 
### 13.문서 객체 모델
#### 1. 문서 객체 모델
- 기본 웹 페이지
```html
<!DOCTYPE html>
<html>
<head>
    <title>웹 페이지</title>
    <script>

    </script>
</head>
<body>
    <h1>Header 1</h1>
    <p>Lorem ipsum dolor amet</p>
</body>
</html>
```
#### 2. 웹 페이지 생성 순서
#### 3. 문서 객체 선택
메소드|설명
---|---|
document.getElementByld(아이디)|아이디를 사용해 문서 객체를 선택
document.querySelector(선택자)|선택자를 사용해 문서 객체를 선택
document.getElementsByName(이름)|name 속성으로 여러 개의 문서 객체를 선택
document.getElementsByClassName(클래스)|class 속성으로 여러 개의 문서 객체를 선택
document.querySelectorAll(선택자)|선택자로 여러개의 문서 객체를 선택
#### 4. 문서 객체조작
- 글자 조작 : 문서 객체 내부의 글자를 조작할 때는 innerHTML 속성을 사용
- 스타일 조작: 문서 객체의 스타일을 조작할 때는 style 속성을 사용
- 속성 조작 : 속성을 조작할 때는 다음 메소드를 사용
    메소드|설명
    ---|---|
    setAttribute(속성 이름,속성 값)|속성을 지정
    getAttribute(속성 이름)|속성을 추출
## [05월 25일]
>오늘 배운 내용
### 10.express 모듈
명령어 : npm install express@4
#### 1. 요청과 응답
- 요청 메시지: 클라이언트가 서버로 보내는 편지
- 응답 메시지: 서버가 클라이언트로 보내는 편지
#### 2. express 모듈을 사용한 서버 생성과 실행
- express 모듈의 기본 매소드
    > express(): 서버 애플리케이션 객체를 생성<br>
    app.use(): 요청이 왔을 때 실행할 함수를 지정<br>
    apop.listen(): 서버를 실행
#### 페이지 라우팅
- express 모듈의 페이지 라우팅 메소드
    >get(path, callback): GET 요청이 발생했을 때 이벤트 리스너를 지정<br>
    post(path, callback): POST 요청이 발생했을 때 이벤트 리스너를 지정<br> 
    put(path, callback): PUT 요청이 발생했을 때 이벤트 리스너를 지정<br>
    delete(path, callback): DELETE 요청이 발생했을 때 이벤트 리스너를 지정<br>
    all(path, callback): 모든 요청이 발생했을 때 이벤트 리스너를 지정
- 페이지 라우팅
#### 요청과 응답
1. response 객체
    - response 객체의 매소드
        >send(): 데이터 본문을 제공<br>
        status(): 상태 코드를 제공<br>
        set(): 해더를 설정
    - MIME 형식
        > text/plain: 기본적인 텍스트를 의미<br>
        text/html: html 데이터를 의미<br>
        image/png: png 데이터를 의미<br>
        audio/mpe: MP3 음악 파일을 의미<br>
        video/mpeg: MPEG 비디오 파일을 의미<br>
        application/json: json 데이터를 의미<br>
        multipart/form-data: 입력 양식 데이터를 의미 
    - Content-Type 지정 메소드
        >type(): Content-Type을 MINE 형식으로 지정
    - HTTP 상태 코드의 예
        * HTTP 상태 코드: 404 Not Found
        * 상태 코드: 서버가 클라이언트에 '해당 경로는 이러한 상태'라고 알려 주는 용도
        >1XX - 처리중 - 100 Continue<br>
        2XX - 성공 - 200 OK<br>
        3XX - 리다이렉트 - 300 Multiple Choices<br>
        4XX - 클라이언트 오류 - 400 Bad Request<br>
        5XX - 서버 오류 - 500 Internal Server Error
        * status() 메소드
        >status(): 상태 코드를 지정
    - 리다이렉트
        * redirect() 메소드
        >redirect(): 리다이렉트합니다.
2. request 객체
    - 요청 매개 변수
        * 주소 분석
        >프로토콜 - HTTPS - 통신에 사용되는 규칙을 의미<br>
        호스트 - (search.)naver.com - 애플리케이션 서버(또는 분산 장치 등)의 위치를 의미<br>
        URL - search.naver - 애플리케이션 서버 내부에서 라우트 위치를 나타냄<br>
        요청 매개 변수 - ?where=nexearch&query=초콜릿... - 추가적인 정보를 의미
#### 미들웨어
- 미들웨어 생성 메소드
    >use(): 미들웨어를 설정
1. 정직 파일 제공
    >웹 페이지를 만들 때 굉장히 자주 사용하는 기능
2. morgan 미들웨어
    >npm install morgan
3. body-parser 미들웨어
    > 요청을 분석함
    * 클라이언트에서 서버로 데이터 전송
    >URL을 사용한 요청
    * 요청 본문
        * 요청 본문의 종류
        > application/x-www-form-urlencoded: 웹 브라우저에서 입력 양식을 POST, PUT, DELETE 방식 등으로 전달할 때 사용하는 기본적인 요청 형식<br>
    application/json: JSON 데이터로 요청하는 방식<br>
    multipart/form-data: 대용량 파일을 전송할 때 사용하는 요청 방식
    * body-parser 미들웨어
    > npm install body-parser<br>

    * 속성 정리
    > params 객체: URL의 토큰을 나타냄. 보기가 간편<br>
    query 객체: URL의 요청 매개 변수를 나타냄. 토큰보다 많은 데이터를 전달할 수 있으며, 주소로 어떤 데이터가 오고 가는지 확인할 수 있음<br>
    body 객체: 대용량 문자열 등을 전송할 때 사용. 다만 주소에 데이터를 기록하지 못하므로 새로고침이나 즐겨찾기 기능 등을 활용할 수 없음
### 미니 프로젝트-RESTful 웹 서비스
#### RESTful 웹 서비스 개요
- RESTful 웹 서비스의 구조
    > /collection - /collection/id<br>
GET - 컬렉션을 조회 - 컬렉션의 특정 요소를 조회<br>
POST - 컬렉션에 새로운 데이터를 추가 - 사용하지 않음<br>
PUT - 컬렉션 전체를 한꺼번에 변경 - 컬렉션에 특정한 요소를 수정<br>
DELETE - 컬렉션 전체를 삭제 - 컬렉션의 특정 요소를 삭제<br>
- RESTful 웹 서비스
    > GET - /user - 모든 사용자 정보를 조회<br>
POST - /user - 사용자를 추가<br>
GET - /user/:id - 특정 사용자 정보를 조회<br>
PUT - /user/:id - 특정 사용자 정보를 수정<br>
DELETE - /user/:id - 특정 사용자 정보를 제거
#### 코드 구성
#### Postman 크롬 애플리케이션
 
## [05월 18일]
> 오늘 배운 내용
### Node.js 기본
#### process 객체와 이벤트 개요
- Node.js의 이벤트 연결 메소드
> on(<이벤트 이름>,<이벤트 핸들러>) : 이벤트를 연결합니다.
- process 객체의 이벤트
> exit : 프로세스가 종료될 때 발생합니다.<br>
> uncaughtException : 예외가 일어날 때 발생
#### os 모듈
- os 모듈 추출
> const os = require('os');
- os 모듈의 메소드
> hostname() : 운영체제의 호스트 이름을 리턴<br>
type() : 운영체제의 이름을 리턴<br>
platform() : 운영체제의 플렛폼을 리턴<br>
arch() : 운영체제의 아키텍처를 리턴<br>
release() : 운영체제의 비전을 리턴<br>
uptime() : 운영체제가 실행된 시간을 리턴<br>
loadavg() : 로드 에버리지 정보를 담은 배열을 리턴<br>
totalmem() : 시스템의 총 메모리를 리턴<br>
freemem() : 시스템의 사용 가능한 메모리를 리턴<br>
cpus() : CPU의 정보를 담은 객체를 리턴<br>
getNetworkInterfaces() : 네트워크 인터페이스의 정보를 담은 배열을 리턴
#### url 모듈
- url 모듈 추출
> const url = require('url');
- url 모듈의 메소드
> parse(urlStr [,parseQureyString=false, slashesDenoteHost=false]) : URL 문자열을 URL 객체로 변환해 리턴<br>
format(urlOb) : URL 객체를 URL 문자열로 변환해 리턴<br>
resolve(from, to) : 매개 변수를 조합하여 완전한 URL 문자열을 생성해 리턴
#### File System 모듈
- fs 모듈 추출
> const fs = require('fs');
1. 파일 읽기
    - 파일 읽기 메소드
    > fs.readFileSync(<파일 이름>) : 동기적으로 파일을 읽어 들임<br>
    fs.readFile(<파일 이름>,<콜백 함수>) :  비동기적으로 파일을 읽어 들임
    - 동기와 비동기의 실행 결과는 같지만 내부 실행 구조는 다름
2. 비동기 처리의 장점
3. 파일 쓰기
    - 파일 쓰기 메소드
    > fs.writeFileSync(<파일 이름>,<문자열>)<br>
    fs.writeFile(<파일 이름>,<문자열>,<콜백 함수>)
4. 파일 처리와 예외 처리
    - 동기 코드 예외처리 : try catch 구문 사용
    - 비동기 코드 예외처리 : 콜백 함수로 전달된 첫 번째 매개 변수 error를 활용    
## [05월 11일]
> 오늘 배운 내용
#### Date 객체
>let dateA = new Date();<br>
console.log(dateA);
#### Array 객체
- Array 객체의 매소드
>concat() : 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어리턴<br>
join() : 배열 안의 모든 요소를 문자열로 만들어 리턴<br>
pop()* : 배열의 마지막 요소를 제거하고 리턴<br>
push()* : 배열의 마지막 부분에 새로운 요소를 추가<br>
reverse()* : 배열의 요소 순서 뒤짐<br>
slice() : 배열의 요소의 지정한 부분을 리턴<br>
sort()* : 배열의 요소를 정렬<br>
splice()* : 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴

- ECMAScript5에서 추가된 메소드
#### 프로토타입에 메소드 추가
#### JSON 객체
- JSON 객체의 메소드
> JSON.stringify(<객체>,<변환 함수>,<공백 개수>) : 자바스크립트 객체를 문자로 만듬 <br>
JSON.parse(<문자열>) : 문자열을 자바스크립트 객체로 파싱
### 예외 처리
- 예외 처리 : 오류에 대처할 수 있게 하는 것
#### 예외와 기본 예외 처리
> 자바스크립트에는 undifined 자료형이 있습니다. 이러한 undifined 자료형을 일반적인 객체 또는 함수처럼 다루면 <b>TypeError</b> 예외가 발생<br><br>
> 사전에 해당 데이터가 undifined인지 조건문으로 확인하기만 해도 이러한 예외를 예방할 수 있습니다.
#### 고급 예외 처리
- try 키워드, catch 키워드, finally 키워드로 예외 처리
>배열을 생성할 때 길이를 음수로 지정하면 <b>RangeError</b>가 발생<br><br>
try catch finally 구문을 사용해 예외 처리
#### 예외 객체
- ReferenceError를 발생시킨 이후에 예회 객체의 name 속성과 message 속성을 출력
> try {<br>
} catch (exception) {<br>
}
#### 예외 강제 발생
- throw 키워드 사용
- throw 키워드 뒤에는 문자열 또는 Error 객체를 입력
> throw '강제 예외';
## [05월 04일]
> 오늘 배운 내용
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
```js
let foo = 273;<br>
let bar = 111;<br><br>
Number.prototype.method = function(){
    return "Add Method";
}

console.log(foo.method());
```
- Number 객체
```js
let foo = Number.MAX_VALUE;
let bar = Number.MAX_VALUE+1000000;

console.log(foo);
console.log(bar);
```
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
> 내용 정리
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
> 오늘 배운 내용
- for문 반복문
- 역 for 반복문
- for in 반복문과 for of 반복문
- 중첩 반복문
- break 키워드
- continue 키워드
- 스코프
- 호이스팅
- var 키워드
> 내용 정리
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
> 오늘 배운 내용
- if else if 조건문
- switch 조건문
- 삼항 연산자
- 짧은 초기화 조건문
### 4장 반복문
- 배열
- while문
- for문
> 내용 정리
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
> 오늘 배운 내용 
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
> 내용 정리 <br>

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
> 오늘 배운 내용 
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
> 내용 정리

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
