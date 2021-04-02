let data = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

if (date.getHours() < 12) {
    console.log("오전");
}
console.log("오후");