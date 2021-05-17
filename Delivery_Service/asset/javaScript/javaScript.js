
function LoadJSON(){
    return fetch('../data/data2.json')
    .then(respone => respone.json())
    .then(json => json.items)
}

function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map( item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `  <li class="item">
                <div class="store_container">
                    <img src = "${item.img}" alt="${item.type}" class="food">
                    <h3 class = "food_name">${item.food}</h3>
                    <strong class="store">${item.name}</strong>
                </div>
                <div class="charge_container">
                    <h3 class = "charge">배송비</h3>
                    <strong class="fee">${item.fee}</strong>
                </div>
            </li>`
}
function setEventListeners(item){
    const target1 = document.querySelector('.target1');
    const target2 = document.querySelector('.target2');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');

    target1.addEventListener('click', () => displayItems(item));
    target2.addEventListener('click', () => displayItems(item));
    button1.addEventListener('click', event => onButtonsClick(event,item));
    button2.addEventListener('click', event => onButtonsClick(event,item));
}

function onButtonsClick(event,item){
    console.log(event.target)
    const dataset = event.target.dataset;
    const key = dataset.key
    const value = dataset.value

    if (key == null || value == null ){
        return;
    }
    const filtered = item.filter(items => items[key] == value)
    displayItems(filtered);
}

LoadJSON()

    .then(items =>{
        console.log(items)
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log)






