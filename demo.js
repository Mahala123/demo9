// var items = document.getElementsByClassName("list-group-item");
// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";
// var items1 = document.getElementsByClassName("list-item1");
// items1[0].style.fontWeight = "bold";
// //var items1 = document.getElementsByTagName("li");
// //items[1].style.fontWeight = "bold";
// items1[0].style.backgroundColor = "green";
var itemList = document.getElementById("items");
itemList.addEventListener("click", removeItem);
//removeItem
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
