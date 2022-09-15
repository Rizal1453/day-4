let data =[]

function addData (event){
    event.preventDefault();
        let projectName = document.getElementById("input-project").value
        let startDate = document.getElementById("input-start").value
        let endDate = document.getElementById("input-end").value
        let nodeJs = document.getElementById("nodeJs").checked
        let nextJs = document.getElementById("nextJs").checked
        let reactJs = document.getElementById("reactJs").checked
        let typescript = document.getElementById("typescript").checked

        let image = document.getElementById("input-image").files
        image = URL.createObjectURL(image[0])
   
       

    let tampung = {
        projectName,
        startDate,
        endDate,
        description,
        image,
        nodeJs,
        nextJs,
        reactJs,
        typescript
        
    }
    data.push(tampung);
    console.log(data);
    renderform();
    }

    function renderform(){
        document.getElementById("card1").innerHTML = ''
  
        
        
        for (let index = 0;index < data.length;index++){
          console.log(data[index]);


           document.getElementById("card1").innerHTML +=`
           <div class="card" style="
           margin: 20px auto;
           width: 250px;
           text-align: center;">
            <img src="${data[index].image}" alt="" width="100%">
            <p>${data[index].startDate}</p>
            <div class="content">
            ${data[index.description]}
            <div class="action">
            <button class="edit">edit</button>
            <button class="delete">delete</button>
            </div>

            </div>
            </div>
                `

       }
    }
