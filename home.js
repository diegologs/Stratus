function getWeather() {
    var ajax = new XMLHttpRequest();
    var json;
    var apiKEY = "fe68c339c0765aca16a04b7eede836dd";
    var url = "https://api.darksky.net/forecast/a4f5bf18fc5658fe8ede41e91c12ff88/40.1262812,-3.848989500000016"


    ajax.open("GET", url, true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            json = JSON.parse(ajax.responseText);
            
           
            if (json != undefined) {
                
              
         
             
            
                $("body").html(json.timezone);
             
                
            } else {
                
               
            }
        }
    }
}

 
         
     
              
                



$("document").ready(function () {
 
 getWeather();
  

});



