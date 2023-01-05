let item = []
const inputEl = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

let localStorageItem = JSON.parse(localStorage.getItem("item"))
if(localStorageItem){
    item = localStorageItem
    console.log(localStorageItem)
    render(item)
}

addBtn.addEventListener("click", function(){
    item.push(inputEl.value)    
    inputEl.value =  ""
    console.log(item)
    localStorage.setItem("item", JSON.stringify(item))
    render(item)
})
function render(item){
    let items =""
    for(let i=0;i<item.length;i++){
        items += `<li>${item[i]}</li>`
    }
    ulEl.innerHTML = items
}
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    item = []
    render(item)
})