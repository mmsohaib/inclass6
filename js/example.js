// ADD NEW ITEM TO END OF LIST
// getting list from zero
var list = document.getElementsByTagName('ul')[0];

// create item at the end and add text
var item = document.createElement('li');
var text = document.createTextNode('cream');
// adding text to list and item to list
item.appendChild(text);
list.appendChild(item);

// ADD NEW ITEM START OF LIST
// create item at the start and add text
item = document.createElement('li');
text = document.createTextNode('kale');
// adding text to list and item to list
item.appendChild(text);
list.insertBefore(item, list.firstChild);

var allItemList = document.getElementsByTagName('li');
var itemListCounter = allItemList.length;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i = 0;
while (i < itemListCounter)
{
  allItemList[i].className = 'cool';
  i++;
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var headingItem = document.querySelector('h2');
item = document.createElement('span');
text = document.createTextNode(itemListCounter);
item.appendChild(text);
headingItem.appendChild(item);
