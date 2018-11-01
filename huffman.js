str = 'aabcdbcddcbbcccddd'
function frequency(str) { 
var freqs = {};
for (var i in str) {
	if(freqs[str[i]]==undefined) {
		freqs[str[i]]=1; 

	}
	else {  
		freqs[str[i]]=freqs[str[i]]+1; 
	} 
}


return freqs; 

}

console.log(frequency(str));

function sortFreq(freqs) {
	tuples = [];
	for (var i in freqs) {
		tuples.push(freqs[i], i);
}
return tuples; 
} 

w=frequency(str);
console.log(sortFreq(w));


 //build tree  
  function buildTree(tuples)  
  {  
      while(tuples.length>1)  
      {  
      leastTwo=[tuples[0][1],tuples[1][1]]  
      //console.log(leastTwo);  
      theRest=tuples.slice(2,tuples.length);  
      //console.log(theRest);  
      combFreq=tuples[0][0]+tuples[1][0];  
      //console.log(combFreq);  
      tuples=theRest;  
      end=[combFreq,leastTwo];  
      tuples.push(end);  
      //console.log(tuples);  
      tuples.sort();  
      //console.log(tuples);  
      }  
     return tuples[0][1];  

  }  
  tree=buildTree(tuples);  
  console.log(tree);  
 
code={};  
pat='';  
//assiging codes to each letter  
function assignCode(node,pat) {  
      if(typeof(node)==typeof(""))  
          code[node]=pat;  
      else  
      {  if(node){
          assignCode(node[0], pat+'0');  
	      
          assignCode(node[1], pat+'1');
      }
      }  
}  
assignCode(tree,pat);  
//console.log(code);  






function encode(str){
	var output="";
	for(var ch in str){
		output=output+code[str[ch]];}

return output

} 


function decode(tree,str){
	 output="";
	 p=tree;
	 for (var bit in str){
		 if (str[bit]==0){
			 p=p[0]}
		 else{
			 p=p[1]}
		 if (typeof p ==typeof ""){
			 output=output+p
			 p=tree}
	 }
return output
}

console.log(encode(str))
//console.log(decode(encode(str)))

