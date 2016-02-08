var1=0;
var2=1;
evenFibonacci = [];

for(num=1; num <=60; num++) {
    var3 = var1+var2;
    if (var3 < 4000000 && var3 % 2 === 0){
    evenFibonacci.push(var3)};
    var1=var2;
    var2=var3;
};
