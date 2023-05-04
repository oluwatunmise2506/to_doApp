
window.onload = (event) => {
    let itemsToBuy = ["Mango", "Orange", "Pawpaw"]
    
    for (let index = 0; index < itemsToBuy.length; index++) {
        let item = itemsToBuy[index]
        appendItem(item)
    }

  };

  function appendItem(item) {
    let parent = document.getElementById("parent")
    let checkBoxId = `${item}1`
    let labelId = `${item}2`
    let buttonId = `${item}3`
    let htmlToAdd = `
    <div class="list-item">
        <input type="checkbox" id="${checkBoxId}">
        <label id="${labelId}">${item}</label>
        <div class="item-btn">
            <button type="button" id="${buttonId}" onclick="markAsBought('${labelId}', '${checkBoxId}', '${buttonId}')">Bought</button>
        </div>
    </div>
    `
    parent.innerHTML += htmlToAdd

  }
//get each element of the array and log it to the console
//append the html with each element of the array

function markAsBought(itemId, itemCheckbox, itemBtn) {

    //step 1: get the text of the button
    let buttontext = document.getElementById(itemBtn).innerText
    let normalisedButtonText = buttontext.toLowerCase()

    //step 2: check if the button text is bought or done
    if (normalisedButtonText === "bought") {
        //step 3: if it is 'bought', line through and check box
        document.getElementById(itemCheckbox).checked = true
        document.getElementById(itemId).style.textDecoration = 'line-through'
        document.getElementById(itemBtn).innerText = "done"
        document.getElementById(itemBtn).style.color = 'red'
    }
    if (normalisedButtonText.toLowerCase() === "done") {
        //step 4: if it is 'done', uncheck box and remove line thru
        document.getElementById(itemCheckbox).checked = false
        document.getElementById(itemId).style.textDecoration = "none"
        document.getElementById(itemBtn).innerText = "Bought"
        document.getElementById(itemBtn).style.color = 'black'
    }
}

function addNewItem() {
    //get the value of the text in the box
    let addedItem = document.getElementById("itemText").value
   if (addedItem) {
    appendItem(addedItem)
      }
   else{
    alert("There is nothing there")
   }
   
   
}