<?php
	

	if(file_exists("controlador/frontController.php")){

		require_once("controlador/frontController.php");

	}else{

		die("Error 001: No existe el controlador principal!");
		
	}


	session_start();

	$objControler = new frontController($_REQUEST);


?>