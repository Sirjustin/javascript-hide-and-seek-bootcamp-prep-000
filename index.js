function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

///looked at solution should try again
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(".ranked-list")
   
   for (var i=0, l = rankedLists.length; i < l; i++){
     var listItem = rankedLists[i].children
     
     for (var j=0, m=listItem.length; j < m; j++) {
      listItem[j].innerHTML = parseInt(listItem[j].innerHTML) + n      
     }
   }  
 }


function deepestChild(){
  let grandNode=document.getElementById('grand-node');
  let childNode=grandNode.children[0];

while(childNode){
  grandNode=childNode;
  childNode=grandNode.children[0];
}
  return grandNode;
}