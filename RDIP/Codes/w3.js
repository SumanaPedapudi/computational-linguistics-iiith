$("#rf").hide();
$("#cc").hide();
$("#cfs").hide();
$("#w").hide();
$("#gcs").hide();
var e1 = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],["some students like to study in the night","at night some students like to study"],["John and Mary went to church","Mary and John went to church"],["John went to church after eating","after eating John went to church","John after eating went to church"],["did he go to market","he did go to market"],["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],["John goes to the library and studies","John studies and goes to the library"],["John ate an apple so did she","she ate an apple so did John"],["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var se = ["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]
var h1 = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var sh=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]

function display(a){
	if(a == "eng"){
		document.getElementById("ds").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
		document.getElementById("ds1").innerHTML ="<i>(select the buttons in proper order)</i>"
		es()
	}
	else if(a == "hin"){
		document.getElementById("ds").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
		document.getElementById("ds1").innerHTML ="<i>(select the buttons in proper order)</i>"
		hs()
	}
	
	else{
		alert("Select language");
	}
}
function es() {
	// body..
	var a = Math.floor(Math.random()*se.length);
    var b =se[a];
    var c = s(b);
	button(c);
}
function hs() {
	// body...
	var a1 = Math.floor(Math.random()*sh.length);
var b1 = sh[a1];
var c1 = s(b1);
	button(c1);
}
function s(n) {
	// body...
	var na = n.split(' ');                      
  for(var i=0 ; i<=na.length-1 ; ++i) {
    var j = Math.floor(Math.random()*na.length);      
    var temp = na[i];            
    na[i] = na[j];
    na[j] = temp;
  }
  string = na.join(' ');                
  return string;                        
}
function button(n) {
	// body...
	var count =0;
	function b(){
	document.getElementById("ss").innerHTML = " "
	var na = n.split(" ")
	for( var i = 0; i <= na.length-1; i++) {
    var button = document.createElement("button");
     button.innerHTML= na[i];
     count++;
     button.className += "nc"
     var c = document.getElementById("ss");
     c.appendChild(button);
 }
}
 b();
 var cnt = count;
 function a(){
 	document.getElementById("rf").innerHTML = null;
 	document.getElementById("cfs").innerHTML = null;
 	var cnt1 =0;
 	var str = " "
 	$(".nc").click(function(){
 		var vv = $(this).text();
 		document.getElementById("cfs").innerHTML += vv + " ";
			$(this).hide();
			cnt1 = cnt1+1;
			document.getElementById("ss1").innerHTML += vv + " ";
			document.getElementById("fs").innerHTML = "<br>"+"<b>Formed Sentence</b>"+"<i>(after selecting words)</i>"+"<br>";
			$("#rf").show();
			document.getElementById("rf").innerHTML = "Re-form the sentence"
			str = str+vv+" "
			count(str)
     })
     document.getElementById("ss1").innerHTML = " "
     document.getElementById("fs").innerHTML = " "
     document.getElementById("r").innerHTML = " "
     document.getElementById("w").innerHTML = " "
     $("#rf").hide();
     $("#cc").hide();
     $("#gcs").hide()
     $("#cs").hide();
     $("#rf").click(function(){
		$("#ss1").hide();
		$("#fs").hide();
		$("#rf").hide();
		$("#cc").hide();
		$("#gcs").hide();
		$("#cs").hide();
		b();
		a();
		$("#ss1").show();
		$("#fs").show();
})
     function count(n){
				if(cnt == cnt1){
					$("#cc").show();
					var cn1 = 0;
					$("#cc").click(function(){
						var ind = document.getElementById("select").selectedIndex;
						var val = document.getElementById("select")[ind].value;
						var s1 = n.trim();	
						if(val == "eng"){
						for (var i = 0; i < 10; i++) {
							for (var j = 0; j < e1[i].length; j++) {
								if(s1 == e1[i][j]){
									cn1++;
								}
							}
						}
						if(cn1 == 1){
							$("#r").show()
							$("#w").hide();
							document.getElementById("r").innerHTML = "Right answer!!!"
							$("#cc").click(function(){
								$("#w").hide();
								$("#gcs").hide()
								$("#cs").hide()
							})
							$("#gcs").hide();
							$("#cs").hide()
							
						}
						else{
							$("#w").show();
							document.getElementById("w").innerHTML = "Wrong answer!!!"
							$("#gcs").show();
							dis();
							csen(s1)
						}
					}
					else{
						for (var i = 0; i < 7; i++) {
							for (var j = 0; j < h1[i].length; j++) {
								if(s1 == h1[i][j]){
									cn1++;
								}
							}
						}
						if(cn1 == 1){
							$("#r").show()
							$("#w").hide();
							document.getElementById("gcs").innerHTML = null;
							document.getElementById("r").innerHTML = "Right answer!!!"
							$("#cs").hide()
							$("#cc").click(function(){
								$("#w").hide();
								$("#gcs").hide()
								$("#cs").hide()
							})
						}
						else{
							$("#w").show();
							document.getElementById("w").innerHTML = "Wrong answer!!!"
							$("#gcs").show();
							dis();
							csen(s1)
						}
					}
					})
				}
				function csen(s){
				$("#gcs").click(function(){
						var sp =s.split(" ");
						var arr = sp;
						var count = 0;
						var ind = document.getElementById("select").selectedIndex;
						var val = document.getElementById("select")[ind].value;
						if(val == "eng"){
							for (var j = 0; j < 10; j++) {
								for(var i = 0;i < arr.length;i++){
									if(se[j].search(arr[i]) >= 0){
										count++;
									}
								}
								if(count != arr.length){
									count = 0;
								}
								else if(count == arr.length){
									var v = j;
									var s1 = e1[v];
									document.getElementById("cs").innerHTML = " "
									for(var k = 0;k < s1.length;k++){
										document.getElementById("cs").innerHTML += s1[k]+"<br>"
									}
									break;
								}
							}
						}
						if(val == "hin"){
							for (var j = 0; j < 7; j++) {
								for(var i = 0;i < arr.length;i++){
									if(sh[j].search(arr[i]) >= 0){
										count++;
									}
								}
								if(count != arr.length){
									count = 0;
								}
								if(count == arr.length){
									var v1 = j;
									var s2 = h1[v1];
									document.getElementById("cs").innerHTML = " "
									for(var k = 0;k < s2.length;k++){
										document.getElementById("cs").innerHTML += s2[k]+"<br>"
									}
									break;
								}
							}
						}
				})
			}
				function dis(){
					document.getElementById("gcs").innerHTML = "Get correct Sentence"
					$("#gcs").click(function(){
								$("#cs").show()
								document.getElementById("gcs").innerHTML = "Hide the correct Sentence"
								h();
								function h(){
									if(document.getElementById("gcs").innerHTML == "Hide the correct Sentence"){
											$("#gcs").click(function(){
											$("#cs").hide();
											document.getElementById("gcs").innerHTML="Get Answers"
											s();
										})
										}
									}
									function s(){
										if(document.getElementById("gcs").innerHTML == "Get Answers"){
											$("#gcs").click(function(){
											$("#cs").show();
											document.getElementById("gcs").innerHTML = "Hide the correct Sentence"
											h();
									})
								}
									}
							})
				
			}
			}
     }
     a();
}
