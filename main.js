function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if (response.ok) {
        resolve(response.json());

      }
      else {
        reject(new Error('error'));
      }
    })
  })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})
var child2=document.querySelector("#child2");
//Career
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
//Education

function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Educational Qualification";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.NO </td>  <td> Degree </td>  <td> institute </td> <td> Data </td>  </tr>";
//table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0;i<edu.length;i++){
    tr1+="<tr> <td>"+(i+1)+"</td> <td>"+edu[i].degree+"</td><td>"+edu[i].institute+"<td>"+edu[i].data+"</td></td> </tr>";
  }
  table.innerHTML=tr+tr1;
}
//skills
function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="Techical skills";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
    for(var i=0;i<skill.length;i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child2.appendChild(title);
  var list=document.createElement("ul");
  child2.appendChild(list);
  console.log(skill[i].set.length);
  for (var j=0;j<skill[i].set.length;j++){
var listItem=document.createElement("li");
listItem.textContent=skill[i].set[j];
list.appendChild(listItem);
  }
}
}
//achievements
function achievements(achievement){
  var heading=document.createElement("h2");
  heading.textContent="Achievements";
  child2.appendChild(heading);
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var list=document.createElement("ul");
  child2.appendChild(list);
  var i=0;
  while(i<achievement.length){
    var listItem=document.createElement("li");
    listItem.textContent=achievement[i].achievedData;
    list.appendChild(listItem);
    i++;
  }

}
