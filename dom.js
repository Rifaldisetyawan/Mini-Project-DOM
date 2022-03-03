
  function myFunction() {
    alert("This Button Unavailable");
  }
//    set atribute
 document.getElementById('feedback').setAttribute('style','background-color:blue;color:white');

// remove element(){ 
    document.getElementById('activity').remove();
    
  
// add element
  function bidButton() {
    document.getElementById('modal-bid-button').remove();

    let bidLabel = document.createElement('label')
        bidLabel.innerHTML="type your bid here ($)"

    let formElement = document.createElement("input")
        formElement.classList.add('form-label');
        formElement.setAttribute('type','number')

    let btn = document.createElement("button");
        btn.innerHTML = "Bid";
        btn.classList.add('btn-primary');
        btn.onclick =()=>
        {
          alert('Sorry, this button Unavailable')
          window.location.reload();
        };

    document.getElementById('element-bid').append(bidLabel,formElement,btn)
   }



