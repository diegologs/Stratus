function getWeather() {
	var ajax = new XMLHttpRequest();
	var json;
	var apiKEY = "fe68c339c0765aca16a04b7eede836dd";
	var url = "https://api.darksky.net/forecast/a4f5bf18fc5658fe8ede41e91c12ff88/40.1262812,-3.848989500000016"

	var temperatureF;
	var temperatureC;
	var humidity;
	var windSpeed;
	var iconAPI;
	var icon = "wi-day-sunny";
	var title = "Despejado";
	var image;



	ajax.open("GET", url, true);
	ajax.send();
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			json = JSON.parse(ajax.responseText);


			if (json != undefined) {



				temperatureF = json.currently.temperature;

				humidity = json.currently.humidity;
				humidity = humidity * 100;

				iconAPI = json.currently.icon;

				windSpeed = json.currently.windSpeed;
				windSpeed = windSpeed * 1.60934;

				temperatureC = (temperatureF - 32) * 5 / 9;
				temperatureC = temperatureC.toFixed(1);

				windSpeed = windSpeed.toFixed(1);

				icon = getIcon(iconAPI, icon);
				title  = getTitle(iconAPI, icon);

				image = getImage(iconAPI);


				daily =  json.daily.data;

				var d = new Date();
				var weekday = new Array(7);
				weekday[0] = "Lunes";
				weekday[1] = "Martes";
				weekday[2] = "Miercoles";
				weekday[3] = "Jueves";
				weekday[4] = "Viernes";
				weekday[5] = "Sábado";
				weekday[6] = "Domingo";
				weekday[7] = "Lunes";
				weekday[8] = "Martes";
				weekday[9] = "Miercoles";
				weekday[10] = "Jueves";
				weekday[11] = "Viernes";
				weekday[12] = "Sábado";
				weekday[13] = "Domingo";
				weekday[14] = "Lunes";
						

			

				for (var i=0; i<daily.length; i++){
					var currentDay = weekday[d.getDay() + i];
					console.log(daily[i]);
					var tempDaily = (daily[i].temperatureMax - 32) * 5 / 9;
					tempDaily = tempDaily.toFixed(1);

					var tempMinDaily = (daily[i].temperatureMin - 32) * 5 / 9;
					tempMinDaily = tempMinDaily.toFixed(1);

					$("#daily").append('<h3><div class="col-sm-6 daily"><i id="iconDaily'+i+'" class="wi wi-night-sleet icon"></i> '+currentDay+" <span class='daily-temp blue'>"+tempMinDaily+"º </span>"+" <span class='daily-temp red'>"+tempDaily+"º </span>"+"</h3>");
					$("iconDaily").removeClass("wi-night-sleet");
					var iconDaily = getIcon(daily[i].icon, iconDaily);
					console.log(iconDaily);
					$("#iconDaily"+i).removeClass("wi-night-sleet");
					$("#iconDaily"+i).addClass(iconDaily);
					var iconDaily = "";

					
				}

				$("#appName").remove();
				$("#temp").html(temperatureC + "º" + " / " + title);
				$("#list").append("Humedad:  " + humidity + " %" + "<br>");
				$("#list").append("Velocidad del viento:  " + windSpeed + " Km/h" + "<br>");
				$("#list").append("Probabilidad de lluvia: " + json.currently.precipProbability*100 + " %")
				$("#icon").removeClass("wi-night-sleet");
				$("#icon").addClass(icon);
				$("#main").css("background", "linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.68) ), url("+image+")");  
				$("#main").css("background-position", "center center"); 
				
				







			} else {


			}
		}
	}
}


function getTitle(iconAPI, title) {
	switch (iconAPI) {
		case "clear-day":
			title = "Soleado";
			break;
		case "clear-night":
			title = "Noche despejada";
			break;
		case "rain":
			title = "Lluvia";
			break;
		case "snow":
			title = "Nieve";
			break;
		case "sleet":
			title = "Aguanieve";
			break;
		case "sleet":
			title = "Aguanieve";
			break;
		case "wind":
			title = "Viento";
			break;
		case "fog":
			title = "Niebla";
			break;
		case "cloudy":
			title = "Nubes";
			break;
		case "partly-cloudy-day":
			title = "Parcialmente nublado";
            break;
		case "hail":
			title = "Granizo";
            break;
		case "thunderstorm":
			title = "Truenos";
            break;
		case "tornado":
			title = "Tornado :(";
			break;
		default:
			title = "Soleado";
	}
	return title;
}

function getIcon(iconAPI, icon) {
	switch (iconAPI) {
		case "clear-day":
			icon = "wi-day-sunny";
			break;
		case "clear-night":
			icon = "wi-night-clear";
			break;
		case "rain":
			icon = "wi-day-rain";
			break;
		case "snow":
			icon = "wi-day-snow";
			break;
		case "sleet":
			icon = "wi-day-sprinkle";
			break;
		case "sleet":
			icon = "wi-day-sprinkle";
			break;
		case "wind":
			icon = "wi-day-windy";
			break;
		case "fog":
			icon = "wi-day-fog";
			break;
		case "cloudy":
			icon = "wi-day-cloudy";
			break;
		case "partly-cloudy-day":
			icon = "wi-day-cloudy";
            break;
		case "hail":
			icon = "wi-day-rain-mix";
            break;
		case "thunderstorm":
			icon = "wi-day-lightning";
            break;
		case "tornado":
			icon = "wi-tornado";
			break;
		default:
			icon = "wi-day-sunny";
	}
	return icon;
}

function getImage(iconAPI){

	var random = Math.floor(Math.random()*(3-1+1)+1);
	var path = "images/"+iconAPI+"/"+random + ".jpg";
	return path;

}








$("document").ready(function () {

	getWeather();


});
