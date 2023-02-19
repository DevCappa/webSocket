var Server;

$(document).ready(function() {

	Server = new FancyWebSocket('ws://'+url);
	Server.bind("open", function() { })
	Server.bind("close", function(data) { })
	Server.bind("message", function(payload) { })
	Server.connect();

	var xValues = [50,60,70,80,90,100,110,120,130,140,150];
	var yValues = [7,8,8,9,9,9,10,11,14,14,15];

	var myChart = new Chart("myChart", {
	  type: "line",
	  labels: "Line",
	  data: {
	    labels: xValues,
	    datasets: [{
	      backgroundColor: "rgba(255,255,255,0)",
	      borderColor: "rgba(255,255,0,0.1)",
	      data: yValues
	    }]
	  },
	})
})


function send(text){
	Server.send("message", text);
}

var FancyWebSocket = function(url){
	
	var callbacks = {};
	var ws_url = url;
	var conn;

	this.bind = function(event_name, callbacks){
		callbacks[event_name] = callbacks[event_name] || [];
		callbacks[event_name].push(callbacks);
		return this;
	}

	this.send = function(event_name, event_data){
		this.conn.send(event_data);
		return this;
	}

	this.connect = function(){
		if(typeof(MozWebSokect) == "function")
			this.conn = new MozWebSokect(url);
		else
			this.conn = new WebSocket(url);

		this.conn.onmessage = function(evt){
			dispatch('message', evt.data);
		}

		this.conn.onclose = function(){dispatch('close', null)};
		this.conn.onopen = function(){dispatch('open', null)};
	}

	this.disconnect = function(){
		this.conn.close();
	}

	var dispatch = function(event_name, message){
		if(message == null || message == ""){
			console.log("No se envio");
		}else{
			if(message[0] == "V"){
				$("#containerMessages").append('<li class="yourMessage"><label>Admin: </label> '+message+' </li>');
			}else{
				var JSONdata = JSON.parse(message);
				var nameData = JSONdata[0].name;
				var messageData = JSONdata[0].message;
				var sesionData = JSONdata[0].sesion;
				var dateTime = JSONdata[0].dataTime;
				$("#containerMessages").append('<li class="yourMessage"><label>'+nameData+': </label> '+messageData+' time:'+dateTime+'</li>');
			}

			var height = $("body").prop("scrollHeight");
			$("body").scrollTop(height);
		}
	}
}