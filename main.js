const form=document.getElementById("form");
const ul=document.getElementById("items");

// adding event listner to form 
form.addEventListener("submit",addingItem);

function addingItem(e){
 e.preventDefault();
 let name=document.getElementById("item-name").value;
 let description=document.getElementById("des").value;
 let price=document.getElementById("price").value;
 let qty=document.getElementById("qty").value;

 let items={
  "name":name,
  "description":description,
  "price":price,
  "qty":qty
 }
 axios.post("https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems",items)
 .then(res=>showItemsOnScreen(res.data))
 .catch(err=>console.log(err));
//  showItemsOnScreen(items);
}

// adding function to show item details in screen 
function showItemsOnScreen(items){
  let name=items.name;
  let description=items.description;
  let price=items.price;
  let qty=items.qty;
  let id=items._id;
  console.log(id);

  // creating li node 
  let li=document.createElement("li");

  // creating text nodes for adding details 
  let nameNode=document.createTextNode(name);
  let descriptionNode=document.createTextNode(description);
  let priceNode=document.createTextNode(price);
  let qtyNode=document.createTextNode(qty);

  // creating buttons for buy one
  let buyOne=document.createElement("button");
  buyOne.className="buyOne";
  buyOne.textContent="Buy-one";
  buyOne.onclick=(event)=>buyOneItem(event,name,description,price,qty,id);

    // creating buttons for buy two
    let buyTwo=document.createElement("button");
    buyTwo.className="buyTwo";
    buyTwo.textContent="Buy-two";
    buyTwo.onclick=(event)=>buyTwoItem(event,name,description,price,qty,id);

      // creating buttons for buy three
  let buyThree=document.createElement("button");
  buyThree.className="buyThree";
  buyThree.textContent="Buy-three";
  buyThree.onclick=(event)=>buyThreeItem(event,name,description,price,qty,id); 

  li.append(nameNode," ",descriptionNode," ",priceNode," ",qtyNode,buyOne,buyTwo,buyThree);
  ul.append(li);
}

// adding function to show items even when page is refreshed 
window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems")
  .then(res=> {
    for(let i=0;i<res.data.length;i++){
      showItemsOnScreen(res.data[i]);
    }
  })
  .catch(err=>console.log(err));
})

// adding function for buying one item 
function buyOneItem(event,name,description,price,qty,id){
  if(event.target.classList.contains("buyOne")){
    if(qty>=1){
      let user={
        "name":name,
        "description":description,
        "price":price,
        "qty":qty-1,  
      }
      
      axios.delete(`https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
      // removing from the screen 
      let parent=event.target.parentElement;
      ul.removeChild(parent);

      axios.post("https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems", user)
      .then(res=>showItemsOnScreen(res.data))
      .catch(err=>console.log(err));
    }
  }
}

// adding function for buying two item 
function buyTwoItem(event,name,description,price,qty,id){
  if(event.target.classList.contains("buyTwo")){
    if(qty>=2){
      let user={
        "name":name,
        "description":description,
        "price":price,
        "qty":qty-2,  
      }
      
      axios.delete(`https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
      // removing from the screen 
      let parent=event.target.parentElement;
      ul.removeChild(parent);

      axios.post("https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems", user)
      .then(res=>showItemsOnScreen(res.data))
      .catch(err=>console.log(err));
    }
  }
}

// adding function for buying three item 
function buyThreeItem(event,name,description,price,qty,id){
  if(event.target.classList.contains("buyThree")){
    if(qty>=3){
      let user={
        "name":name,
        "description":description,
        "price":price,
        "qty":qty-3,  
      }
      
      axios.delete(`https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
      // removing from the screen 
      let parent=event.target.parentElement;
      ul.removeChild(parent);

      axios.post("https://crudcrud.com/api/2f42e20c4aea441eb3cbfc1877142fb6/storeItems", user)
      .then(res=>showItemsOnScreen(res.data))
      .catch(err=>console.log(err));
    }
  }
}