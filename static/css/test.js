var question_='',choiceA='',pos=0,choiceB,choiceC,correctAns,counter=0
var to_pick=[
  ['90/9?','10','15','12','A'],
  ['100/10?','10','15','20','A'],
  ['100*5','600','500','400','B'],
  ['120*5/2','300','400','300','A'],
  ['What is X,if X=πr²  r=15','706.85','567.45','564.34','A']

]
var test=document.getElementById('test')
var retcount=document.getElementById('test_info')

function getQuestion() {
question_=to_pick[pos][0]
choiceA=to_pick[pos][1]
choiceB=to_pick[pos][2]
choiceC=to_pick[pos][3]
correctAns=to_pick[pos][4]
document.getElementById('empty').innerHTML=' '
test.innerHTML="<h1>"+question_+"</h1>"+"<br>"
test.innerHTML+='<input type="radio" name="choice" value="A">'+choiceA+"<br>"
test.innerHTML+='<input type="radio" name="choice" value="B">'+choiceB+"<br>"
test.innerHTML+='<input type="radio" name="choice" value="C">'+choiceC+"<br>"+"<br>"
test.innerHTML+='<input type="submit"  onClick="submit()" name="" value="Submit">'+"<br>"
pos+=1
}
function timer() {
  var interval_count= 120
  var timer=setInterval(() =>{
  retcount.innerHTML=`${interval_count} seconds left`
    interval_count-=1
    if (interval_count<=0 || pos===6){
      clearInterval(timer)
      test.innerHTML= "<h1>"+'Your Score Is:'+counter+"</h1>"
    }
  },1000)
}
function submit() {
  var choice= document.getElementsByName('choice')
for (var i = 0; i < choice.length; i++) {
  if (choice[i].checked ) {
if (choice[i].value===correctAns) {
counter++
}
   }
  }
  getQuestion()
}
