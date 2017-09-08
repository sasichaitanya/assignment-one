function comelem(a1,a2){
 var str=[];
 for(i=0;i<a1.length;i++){
 	for(j=0;j<a2.length;j++){
 		if(a1[i]==a2[j]){
 			str.push(a2[j])
 		}
 	}
 }
 return str;
}

var array1=['1','2','3','4','5','6','7'];
var array2=['5','6','7','8','9'];
console.log(comelem(array1,array2))