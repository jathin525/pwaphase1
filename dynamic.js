function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);

}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  CARRIER(data.CARRIER);
  EDUCATIONAL(data.EDUCATIONAL);
  skills(data.skills);
})

var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){

var image=document.createElement('img');
image.src=pro.image;
left.appendChild(image);
main.appendChild(left);

var name=document.createElement("h2");
name.textContent=pro.name;
left.appendChild(name);
main.appendChild(left);

var hr=document.createElement("hr");
hr.textContent=pro.hr;
left.appendChild(hr);
main.appendChild(left);
var email=document.createElement("h3");
email.textContent=pro.email;
left.appendChild(email);
main.appendChild(left);


}
function CARRIER(c) {
  var rh=document.createElement("h2");
  rh.textContent="CARRIER";
  right.appendChild(rh);
    main.appendChild(right);
  var hh=document.createElement("hr");
    hh.textContent=c.hr;
    right.append(hh);
    main.appendChild(right);
    var info=document.createElement("info");
    info.textContent=c.info;
    right.appendChild(info);
    main.appendChild(right);

  }
  function EDUCATIONAL(ed){

    var rr=document.createElement("h2");
    rr.textContent="EDUCATIONAL";
    right.appendChild(rr);
      main.appendChild(right);

      var hr=document.createElement("hr");
        right.append(hr);

        var table=document.createElement('table');
        let row='';
        row+= "<tr>"+"<th>"+"sno"+"</th>"+
        "<th>"+"degree"+"</th>"+
        "<th>"+"institute"+"</th>"+
        "<th>"+"percentage"+"</th>"+
        "<th>"+"yop"+"</th>"+
        "</tr>";
        for(i in ed){


              row+="<tr>"+"<td>"+ed[i].sno+"</td>"+
              "<td>"+ed[i].degree+"</td>"+
              "<td>"+ed[i].institute+"</td>"+
              "<td>"+ed[i].percentage+"</td>"+
              "<td>"+ed[i].yop+"</td>"+
              "</tr>";
        }
        table.innerHTML=row;
        right.appendChild(table);
        main.appendChild(right);

}
function skills(l) {
  var ph=document.createElement("h2");
  ph.textContent="SKILLS";
  right.appendChild(ph);
    main.appendChild(right);

    var ul=document.createElement(ul);
    right.appendChild(ul);
    for(i in l){
      var li=document.createElement("li");
      li.textContent=l[i].info;
      ul.append(li);
    }
}
