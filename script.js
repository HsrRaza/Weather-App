const btn =  document.getElementById('btn');
const input = document.getElementById('input-filed');
const data = document.getElementById("data");

// const City = input.value.trim();







const API_Key = "f1d4b38ce19a2ab3a86f1a15efee6d30 ";

async  function fetchData(){

    

    try {
        const City = input.value.trim();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},IN&appid=${API_Key}`)
        const  res = await response.json();

        if(!response.ok){
            data.innerHTML =`
            <p>City Not Found </p>
            <p>Try Again  </p>`
            input.value = '';
            
        }
        // console.log(res);
        
         
        const  kelvin = res.main.temp;
        const temperature = kelvin - 273.15;
        const cloud = res.clouds.all;
        const description = res.weather[0].description;

        // console.log(temperature);
        // console.log(cloud);

        data.innerHTML = `<h3 >Weather in ${City} </h3>
        <p>Temperature : ${temperature.toFixed(2)} *C </p>
        <p>Condition : ${description} </p>`


        input.value = ''

        
        
         
      
        

        
    } catch (error) {
        console.log(error);
        
    }
    
    
     
}
btn.addEventListener('click', function(){
    fetchData();
   
    
    
})