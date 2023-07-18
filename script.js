function addNewWEField(){
    // console.log("Adding new Field")

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    // newNode.setAttribute("rows",3)
    
    let weOb = document.getElementById('we');
    let addButton = document.getElementById('addButton1');

    weOb.insertBefore(newNode,addButton);
}

function addNewAQField(){
    // console.log("Adding new Field")

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    // newNode.setAttribute("rows",3)
    
    let aqOb = document.getElementById('aq');
    let addButton = document.getElementById('addButton2');

    aqOb.insertBefore(newNode,addButton);
}
function skillsField(){
    // console.log("Adding new Field")

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skillField')
    newNode.classList.add('mt-2')
    // newNode.setAttribute("rows",3)
    
    let skob = document.getElementById('sk');
    let addButton = document.getElementById('addButton3');

    skob.insertBefore(newNode,addButton);
}

// Now we are generating our resume..


function generateCV(){
   let nameField = document.getElementById("nameField").value;
   let nameT1 = document.getElementById('nameT1');
   nameT1.innerHTML = nameField;

   //direct
   

   document.getElementById('nameT2').innerHTML = nameField;


   // Specialization 

   document.getElementById('sT').innerHTML = document.getElementById('sField').value;

   //Contact

  document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
  //address
  document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
 
  document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
 
  document.getElementById('linkedT').innerHTML = document.getElementById('linkField').value;
 
  document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;

  //objective 

  document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

  // work experiences

  let wes = document.getElementsByClassName('weField')

  let str = ''

  for(let e of wes){
    str = str + `<li> ${e.value} </li>`;
}

document.getElementById('weT').innerHTML = str;

// Academic Qualification

let aq = document.getElementsByClassName('aqField')

let str1 = ''

for(let e of aq){
  str1 = str1 + `<li> ${e.value} </li>`;
}

document.getElementById('aqT').innerHTML = str1;

// For skill 


let skill = document.getElementsByClassName('skillField')

let str3 = ''

for(let e of skill){
  str3 = str3 + `<li> ${e.value} </li>`;
}

document.getElementById('skillT').innerHTML = str3;

var selectedFile = document.getElementById("imgField").files;
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            var fileToLoad = selectedFile[0];
            // FileReader function for read the file.
            var fileReader = new FileReader();
            
            fileReader.readAsDataURL(fileToLoad);
            
            fileReader.onloadend = function(){
                    document.getElementById('imgTemplate').src = fileReader.result;
                    
            };


        }


document.getElementById('cv-form').style.display = 'none';
document.getElementById('cv-template').style.display = 'block';





}


//print logic here

function printCV(){
    
    window.print();
}

