
function quoting (){
const response = fetch('https://api.kanye.rest/')
  .then(response => {
    return response.json()
    .then(({ quote }) => {

    const cls = document.getElementsByClassName("cls")
    const children = cls[0].childNodes
    children[0].textContent = quote;
         
      });
 
  })
 
}

// new shoe
  let counter = 0
  
    function nextButton(){
      counter++
      // console.log(counter)
         quoting()
      
  
    }
    function previousQuote(){
      let p = document.getElementById("quote");
      p.innerHTML = quoteList[(quoteList.length - 1) - 1];
      // quoteList.pop();
  }
    function previousButton(){
     
    }
    document.getElementById("next").onclick = nextButton
    document.getElementById("previous").onclick = previousButton

