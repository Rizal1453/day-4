let data =[]

function addData (event){
    event.preventDefault();
        let projectName =document.getElementById("input-project").value
        let startDate   =document.getElementById("input-start").value
        let endDate     =document.getElementById("input-end").value
        let description =document.getElementById("input-description").value
        let image       =document.getElementById("input-image").files
        image = URL.createObjectURL(image[0])
   
       

    let tampung = {
        projectName,
        startDate,
        endDate,
        description,
        image
        
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
           <div>
              <img src="${data[index].image}" alt="">
            <div>
                <h3>${data[index].projectName}</h3>
                <p class="time">durasi : 3 bulan</p>
                <br>
                <p>${data[index].description}<br>
                    Happy download</p>
                <div>
                    <i class="fa-brands fa-google-play"></i>
                    <i class="fa-brands fa-apple"></i>
                    <i class="fa-brands fa-java"></i>
                </div>
                <div class="action">
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                </div>
            </div>
                `

       }
    }
