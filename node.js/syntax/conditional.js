var args = parseInt(process.argv.slice(2));
console.log(args);
console.log('A');
console.log('B');
if(args){
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');