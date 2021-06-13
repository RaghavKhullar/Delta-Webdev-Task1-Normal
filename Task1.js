var m=document.getElementById("moves");
var moves=0;
var t=document.getElementById("Timer");
var time=0;
var question=document.getElementsByClassName("question");
var colors=["#FF355E","#FFFF66","#0000ff","#66ff66","#6CDAE7","#FF6EFF"];
var work=document.getElementsByClassName("work");
var index=null;
console.log(question);

const alphaCount = 9;
const deltaCount = 25;

for (let i=0; i<alphaCount; i++) {
    document.getElementById("alpha").innerHTML += `<div class="question"></div>`;//3x3 matrix dynamic generation
}



for(var i=0;i<9;i++)
{
 var colr=colors[Math.floor(Math.random()*6)];
question[i].style.backgroundColor=colr;

} 



function bigb(){
    document.getElementById("delta").style.display = "grid";
for (let i=0; i<deltaCount; i++) {
    document.getElementById("delta").innerHTML += `<div class="work"></div>`;
}

var ar= getarray();
function getarray(){
    let temp,c;
var a=[];
for(var i=0;i<25;i++)
a[i]=i;

for(i=0;i<25;i++)
{c=Math.floor(Math.random()*25);
    temp=a[c];
    a[c]=a[i];
    a[i]=temp;

}
return a;
}


for(i=0;i<24;i++)
{if(i<9)
    { var colr=question[i].style.backgroundColor;
        work[ar[i]].style.backgroundColor=colr;}
else{
    colr=colors[Math.floor(Math.random()*6)];
    work[ar[i]].style.backgroundColor=colr;}
}
borderchange();
work[ar[24]].style.backgroundColor="bisque";
index=ar[24];}

var d=null;
document.getElementById("delta").addEventListener('click',(delta)=>{
    if(work[index-5]==delta.target&&index>=5)//moving up
    {d=work[index-5].style.backgroundColor;
     work[index].style.backgroundColor=d;
     work[index-5].style.backgroundColor="bisque";
     index=index-5;
     ++moves;
     m.innerHTML='Moves: '+moves;
     condition=check();
     }
     if(work[index+5]==delta.target&&index<=19)//moving down
     {d=work[index+5].style.backgroundColor;
      work[index].style.backgroundColor=d;
      work[index+5].style.backgroundColor="bisque";
      index=index+5;
      ++moves;
      m.innerHTML='Moves: '+moves;
      condition=check();
      }
      if(work[index-1]==delta.target&&index%5!=0)//moving left
      {d=work[index-1].style.backgroundColor;
       work[index].style.backgroundColor=d;
       work[index-1].style.backgroundColor="bisque";
       index=index-1;
       ++moves;
       m.innerHTML='Moves: '+moves;
       condition=check();
       }
       if(work[index+1]==delta.target&&index%5!=4)//moving right
       {d=work[index+1].style.backgroundColor;
        work[index].style.backgroundColor=d;
        work[index+1].style.backgroundColor="bisque";
        index=index+1;
        ++moves;
        m.innerHTML='Moves: '+moves;
        condition=check();
        } 
});

var condition=false;

function start(){
    bigb();
    seconds_stopwatch();
}

function seconds_stopwatch(){
t.innerHTML=time;
++time;
if(condition==false)
setTimeout("seconds_stopwatch()",1000);
else if (condition==true)alert("CONGRATULATIONS!!! You took "+moves+" moves and "+time+" seconds");
}






function check()//to check if the task matches with the inner 3x3 grid
{for(var i=0;i<3;i++)
{for(j=0;j<3;j++)
{
    if(question[i*3+j].style.backgroundColor!=work[(i+1)*5+j+1].style.backgroundColor)
     break;

}
if(j!=3)
break;
}    
if(i==3 && j==3)
return true;
else return false;
   
}


function borderchange() {
    //to check if the task matches with the inner 3x3 grid
    for (var i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
    
          
          work[(i + 1) * 5 + j + 1].style.border="solid black";
    
          
      }
      
    }
  
  }

  
  