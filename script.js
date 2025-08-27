let buttons = document.querySelectorAll(".btn-copy");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let card = this.parentNode.parentNode;        
    let text = card.querySelector(".text-to-copy").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  });
}

function byId(id){
    let element = document.getElementById(id) ;
    return element;
}


// delegation
byId("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("btn-heart")) {
    let newTotalHeart = Number(byId('total-heart').innerText) + 1;
    byId('total-heart').innerText = newTotalHeart;
    }
    if (e.target.className.includes("btn-call")) {
        const typeHelp = e.target.parentNode.parentNode.children[1].innerText;
        const   number = e.target.parentNode.parentNode.children[3].innerText; 
        let newTotalCoin = Number(byId('total-coin').innerText) - 20;
        byId('total-coin').innerText = newTotalCoin ;
        if(newTotalCoin<0){
            byId('total-coin').innerText = 0 ;
            alert(`❌ You don't have enough coins. You need at least 20 coins to make a call.`)
        }
        else{
            alert(`📞 Calling ${typeHelp} ${number}....`);
        const historyCard = byId('call-history-parent');
        const newCallHistoryCard = document.createElement('div');
        newCallHistoryCard.classList.add('new-hstry-cntnr');
        const currentTime = new Date().toLocaleTimeString(); 
        newCallHistoryCard.innerHTML = `
        <div class="bg-[#FAFAFA] flex justify-between items-center p-[16px] rounded-sm mb-[12px] gap-[16px]">
                <div>
                    <p class="font-semibold text-xl">${typeHelp}</p>
                    <p class="text-gray-500">${number}</p>
                </div>
                <div class='text-gray-500'>
                    ${currentTime}
                </div>
            </div>`
        historyCard.append(newCallHistoryCard); 
        }      
    }   
})
byId('call-history-parent').addEventListener("click", function (e) {
    if (e.target.className.includes("btn-clear-all")) {
    const newHstryCntnr = document.querySelectorAll(".new-hstry-cntnr");
    for(let eachHstryCntnr of newHstryCntnr ){
        eachHstryCntnr.innerHTML = `` ;
    }
    }
})
      
