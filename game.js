function rpsgame(choice)
{
    //console.log(choice.id)

    var humanChoice,botChoice;
    humanChoice=choice.id;
    botChoice=numberToChoice(randToInt());
    console.log(humanChoice+"  "+ botChoice)
    result=decideWinner(humanChoice,botChoice);
    console.log(result);
    message=finalMessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);

}

function randToInt()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissor'][number];
}
function decideWinner(yourChoice,compChoice)
{
    var rpsDatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'rock':0,'paper':1,'scissor':0.5}
    };
    var yourScore=rpsDatabase[yourChoice][compChoice];
    var compScore=rpsDatabase[compChoice][yourChoice];
    
    return [yourScore,compScore];
}



function finalMessage([yourScore,compScore])
{
    if(yourScore===0)
    {
        return {'message':'Oops You Lost!','color':'red'};
    }
    else if(yourScore===0.5)
    {
        return {'message':'Match Tied','color':'yellow'};
    }
    else{
        return  {'message':'You Won Game !','color':'Green'};
    }
}

function rpsFrontEnd(humanChoice,botChoice,finalMessage)
{
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }
    //Remove all images from the frontend
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

 
    
   var humanDiv=document.createElement('div');
   var botDiv=document.createElement('div');
   var messageDiv=document.createElement('div');

   humanDiv.innerHTML="<img src='"+ imageDatabase[humanChoice]+ "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233 , 1)'>"
   messageDiv.innerHTML="<h1 style='color:" + finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
   botDiv.innerHTML="<img src='"+ imageDatabase[botChoice]+ "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24 , 1)'>"
   
   document.getElementById('final').appendChild(humanDiv);
   document.getElementById('final').appendChild(messageDiv);
   document.getElementById('final').appendChild(botDiv);
   


}

function reset()
{
    document.getElementById('final').remove();
    




}