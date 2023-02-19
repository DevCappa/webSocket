$(function(){
    $("#formChat").on("submit", function(e){
        e.preventDefault();
        var type = $("#formChat").attr("type");
        if(type == "name"){
            var name = $("#name").val();
            if(name.length > 0){

                $.ajax({
                    type:"POST",
                    url: "",
                    data: 'tipo=Load',
                    success: function(data){
                        $("#formChat table tr").html('<td width="90%"> <input type="text" placeholder="Ingrese el mesaje" id="message" autofocus autocomplete="off"></td><td><input type="submit" value="Ingresar" id="submit"></td>');
                        $("#submit").attr("userName", name);
                        $("#submit").attr("sesionName", data);
                        $("#formChat").attr("type", "chat");
                        $("#userName").html(name)
                        $("#name").val('')
                        $("#message").focus();
                    }
                })

            }else{
                alert("Completar su nombre!")
                $("#name").focus();
            }
        }else if(type == "chat"){
            var message = $("#message").val();
            var name = $("#submit").attr("userName");

            if(message.length > 0){
                
                $.ajax({
                    type:"POST",
                    url: "",
                    data: "name="+name+"&message="+message,
                    dataType: 'html',
                    success: function(data){
                        send(data);
                        var JSONdata = JSON.parse(data);
                        var nameData = JSONdata[0].name;
                        var messageData = JSONdata[0].message;
                        var sesionData = JSONdata[0].sesion;
                        var dateTime = JSONdata[0].dataTime;
                        $("#containerMessages").append('<li class="meMessage"><label>Yo: </label> '+messageData+' time:'+dateTime+'</li></li>');

                        $("#message").val('').focus();
                    }
                
                })

            }else{
                alert("Ingrese un msj!")
                $("#message").focus();
            }
        }
    })
})