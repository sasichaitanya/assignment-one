function vowelrem(str){
var a="";
for(i=0;i<str.length;i++){
	if((str[i]!=="a") && (str[i]!=="e") && (str[i]!=="i") && (str[i]!=="o") && (str[i]!=="u")){
     a=a+str[i];		
	}
}
return a;
}

console.log(vowelrem("helloworld"));