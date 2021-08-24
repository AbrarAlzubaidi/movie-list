let img=['action.png',
  'adventure.png',
  'animation.png',
  'comedy.png',
  'detective.png',
  'fantasy.png',
  'history.png',
  'horror.png',
  'musical.png',
  'pirate.png',
  'romantic.png',
  'sci-fi.png',
  'war.png',
  'western.png'];

let imgName=[];

let arrObj=[];

let select=document.getElementById('imgList');
let movieName=document.getElementById('name');
let movieRelease=document.getElementById('release');
let saveBtn=document.getElementById('save');
let clear=document.getElementById('clearLS');

let table=document.getElementById('table');


function Movie(name,path,release){
  this.name=name;
  this.path=path;
  this.release=release;
  console.log(this.name,this.path,this.release);
  arrObj.push(this);

}
//calling
pushList();

Movie.prototype.render.call(this);


//===================
saveBtn.addEventListener('click',saveHandler);
function saveHandler(e){
  e.preventDefault();
  getFromForm();

  localStorage.setItem('movies',JSON.stringify(arrObj));

}

clear.addEventListener('click', clearHandel);
function clearHandel(e){
  e.preventDefault();
  localStorage.clear();
}

function getFromForm(){
  let returnedName=movieName.value;
  select.value;
  let returnedRelease=movieRelease.value;
  console.log(typeof(select.value));
  for(let i=0;i<img.length;i++){
    if(img[i].includes(select.value.toLocaleLowerCase())){
      console.log('yes');
      console.log(img[i]);
      new Movie(returnedName,img[i],returnedRelease);
      console.log(arrObj);
    }
  }

}

Movie.prototype.render=function(){


  for(let i=0;i<arrObj.length;i++){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let td1=document.createElement('td');
    td1.textContent= './img/'+arrObj[i].path;
    tr.appendChild(td1);

    let td2=document.createElement('td');
    td2.textContent= arrObj[i].name;
    tr.appendChild(td2);

    let td3=document.createElement('td');
    td3.textContent= arrObj[i].release;
    tr.appendChild(td3);
  }

};

function pushList(){
  for(let i=0; i<img.length;i++){
    imgName [i]= img[i].split('.')[0];
    let option=document.createElement('option');
    select.appendChild(option);
    option.textContent= imgName [i].charAt(0).toUpperCase() + imgName [i].slice(1);
  }

}
