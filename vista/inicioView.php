<!DOCTYPE html>
<html lang="en" class="h-100"><head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>Socket.io</title>
	<link rel="stylesheet" href="assets/css/bootstrap.css" crossorigin="anonymous">
</head>
<body class="d-flex h-100 text-center text-white bg-dark">
    
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Socket.io</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="?url=inicio">Inicio</a>
        <a class="nav-link" href="?url=registro">Registros</a>
      </nav>
    </div>
  </header>

  <main class="px-3" style="margin: auto;">
  		<div id="wrapper">
	    	<div id="header">
	    		Bienvenido <span id="userName" style="color:red"></span>
	    	</div>

	    	<div id="content">

	    		<ul id="containerMessages"></ul>
	    		
	    	</div>

	    	<div id="footer">
	    		<form id="formChat" type="name">
	    			<table>
	    				<tr>
	    					<td width="90%"> <input type="text" placeholder="Cual es tu numbro?" id="name" autofocus autocomplete="off"></td>
	    					<td><input type="submit" value="Ingresar" id="submit"></td>
	    				</tr>
	    			</table>
	    		</form>
	    	</div>
	    </div>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://google.com/" class="text-white">@Kappa</a>.</p>
  </footer>
</div>

</body>
<script type="text/javascript" src="assets/js/jquery.js"></script>
<script type="text/javascript">
	var url = "127.0.0.1:12345";
</script>

<script type="text/javascript" src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/charts.js"></script>
<script type="text/javascript" src="assets/js/socket.js"></script>
<script type="text/javascript" src="assets/js/contenido.js"></script>
</html>