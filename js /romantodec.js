function romtodec(str){
	var a=0;
	for(i=0;i<str.length;i++){
		if(str[i]=="X"){
			a=a+10;
		}
		else if(str[i]=="V"){
			a=a+5;
		}
		else if(str[i]=="I"){
			a=a+1;
		}
		else if(str[i]=="L"){
			a=a+50;
		}
		else if(str[i]=="C"){
			a=a+100;
		}
		else if(str[i]=="D"){
			a=a+500;
		}
		else if(str[i]=="M"){
			a=a+1000;
		}
	}
	return a;
}

var roman="LXVII";
console.log(romtodec(roman));