var total = 0;

function takeANumber(katzDeliLine){
  katzDeliLine.push(total + 1);
  total++;
  return(`Welcome you are number ${total}.`);
  
}
total + 1 
total = total + 1 

function nowServing(katzDeliLine){
  var i = 0;
  while (i < katzDeliLine.length){
    i++;
  }
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else return(`Currently serving ${katzDeliLine.shift()}.`)
}


function currentLine(katzDeliLine){
 var line = [];
  for (var i = 0;i < katzDeliLine.length;i++){
  line.push(` `+[i+1]+`. `  + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else 
  return(`The line is currently:` + line);
}

