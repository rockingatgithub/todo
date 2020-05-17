//onclick function...
var count=0;
function toAddItem()
{
    count++;
    let itemcount= document.getElementById('count').innerHTML = `${count} items`;
    var att5= document.createAttribute("name");
    att5.value= `${count}`;
    //get value from element..
    var item= document.getElementById("enter-item").value;
    var text= document.createTextNode(item);
    //create li element..
    var newItem= document.createElement("li");
    newItem.appendChild(text);
    //add id to attach styling to li..
    var att= document.createAttribute("class");
    att.value="list-container";
    newItem.setAttributeNode(att);
    newItem.setAttributeNode(att5);
    //set the text to li..
    document.getElementById("list-items").appendChild(newItem);

    //add image within button..
    var deleteimage= document.createElement("img");
    var att1= document.createAttribute("src");
    att1.value="https://image.flaticon.com/icons/svg/2089/2089646.svg";
    deleteimage.setAttributeNode(att1);
    var att2= document.createAttribute("class");
    att2.value="add-item";
    deleteimage.setAttributeNode(att2);
    var att6= document.createAttribute("name");
    att6.value= `${count}`;
    deleteimage.setAttributeNode(att6);
    var item1= document.createElement("button");
    var att3= document.createAttribute("class");
    att3.value= "delete";
    item1.setAttributeNode(att3);
    var att4= document.createAttribute("onclick");
    att4.value= "deleteItem(this)";
    var att7= document.createAttribute("id");
    att7.value= `${count}`;
    newItem.setAttributeNode(att7);
    item1.setAttributeNode(att4);
    newItem.appendChild(item1);
    item1.appendChild(deleteimage);
}


//function for deleting item..
function deleteItem(listItem){
    // var obj = listItem.getAttribute("name");
    var obj1= document.getElementById(`${count}`);
    obj1.remove();
    count--;
    let itemcount= document.getElementById('count').innerHTML = `${count} items`;
}