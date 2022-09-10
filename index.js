const colorPicked = document.querySelector("input")
const colorMode = document.querySelector("select")
    

          
  function renderColor(data){
         let colorArray = []
                for(let i = 0; i < data.colors.length; i++){
                    colorArray.push(data.colors[i].hex.value)}
       
        let html = ""
                for (let color of colorArray){
                    html += `
                        <div id="parent-color-layout"> 
                            <div id= "color-layout">
                                <p class="color" style="background:${color}"></p>
                            </div>
                            <div id= "code-layout">
                                <p class = "code">${color}</p>
                            </div>
                        </div>
                    ` 
                }
                  
          document.getElementById("color-api").innerHTML = html 
          
          }
        
           
document.getElementById("btn").addEventListener("click", (event) => {
            
            event.preventDefault()
            
            const color = colorPicked.value.slice(1)
            const mode = colorMode.value.toLowerCase()
            
           fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
            .then(response => response.json())
            .then(data => renderColor(data))

          })

