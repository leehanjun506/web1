var member = ['egoing','k8805','hoya'];
var i = 0;
while(i<member.length){
    console.log(member[i]);
    i+=1;
}

var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}

for(var name1 in roles){
    console.log('object =>', name1, 'value =>', roles[name1]);
}