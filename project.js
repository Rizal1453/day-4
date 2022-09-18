let data =[]

function addData (event){
    event.preventDefault();
        let projectName = document.getElementById("input-project").value
        let startDate = document.getElementById("input-start").value
        let endDate = document.getElementById("input-end").value
        let description = document.getElementById("input-description").value
        let nodeJs = document.getElementById("nodejs").checked
        let vueJs = document.getElementById("vuejs").checked
        let reactJs = document.getElementById("reactjs").checked
        let java = document.getElementById("java").checked

        let image = document.getElementById("input-image").files
        image = URL.createObjectURL(image[0])
    

        if(nodeJs){
           nodeJs = document.getElementById("nodejs").value
        } else{
            nodeJs = ""
        } 
        if(vueJs){
            vueJs = document.getElementById("vuejs").value
        } else{
             vueJs = ""
         } if(reactJs){
            reactJs = document.getElementById("reactjs").value
         } else{
             reactJs = ""
         } if(java){
            java = document.getElementById("java").value
         } else{
             java = ""
         } 

    let tampung = {
        projectName,
        startDate,
        endDate,
        description,
        image,
        nodeJs,
        vueJs,
        reactJs,
        java,
    durasi:durasi(new Date (startDate),new Date(endDate)) 

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
           <div class="card">
           <img src="${data[index].image}" alt="" width="100%">
           <p>${data[index].projectName}</p>
           <p>duration : ${data[index].durasi}</p>
             <div class="content">
             ${data[index].description}
             <div> 
               <i class="fa-brands fa-${data[index].nodeJs}"></i>
               <i class="fa-brands fa-${data[index].reactJs}"></i>
               <i class="fa-brands fa-${data[index].vueJs}"></i>
               <i class="fa-brands fa-${data[index].java}"></i>
             </div>
             <div>
               <button>edit</button>
               <button>delete</button>
             </div>
             </div>
           </div>
           

            `
        }
    }
    function durasi(start,end){
        let time = end-start

        let milisecond = 1000 // milisecond
        let secondInHours = 3600 // 1 jam 3600 detik
        let hoursInDay = 24 // 1 hari 24 jam
        

        let hari = Math.floor (time/(milisecond*secondInHours*hoursInDay))
        
        let bulan = Math.floor(hari/30)
        console.log(bulan);

        
        let tahun = Math.floor(bulan/12)
        console.log(tahun);
         
        if(tahun > 0){
            return `${tahun} tahun`
        } else if (bulan >0){
            return `${bulan} bulan`
        } else {
            return `${hari} hari`
        }
        

    }
