// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// my solution

function past(h, m, s){
  //#Happy Coding! ^_^
  let hoursInSec = (h*60) * 60;
  let minsInSec = m *60;
  let total = hoursInSec + minsInSec + s;
  total = total * 1000;
  return total;
}


//more consise solution

function past2(h,m,s){

    return ((h*3600)+(m*60)+s)*1000;
}