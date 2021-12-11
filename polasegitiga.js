var s='';
for(var a=1; a<=10; a++){
    for(var b=1; b<a; b++){
        s += '.';
    }
    for(var c=10; c>=a; c--){
        s += '*';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var c=10; c>=a; c--){
        s += '.';
    }
    for(var b=1; b<a; b++){
        s += '*';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var c=10; c>=a; c--){
        s += '*';
    }
    for(var b=1; b<a; b++){
        s += '.';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var b=1; b<a; b++){
        s += '*';
    }
    for(var c=10; c>=a; c--){
        s += '.';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var b=1; b<a; b++){
        s += '-';
    }
    for(var c=10; c>=(2*a-1); c--){
        s += '*';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var c=10; c>a; c--){
        s += '.';
    }
    for(var b=1; b<=(2*a-1); b++){
        s += '*';
    }
    s +='\n';
}
console.log(s);

var s='';
for(var a=1; a<=10; a++){
    for(var b=1; b<a; b++){
        s += '-';
    }
    for(var c=10; c>=(2*a-1); c--){
        s += '*';
    }
    s +='\n';
}
console.log(s);