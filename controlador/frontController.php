<?php

	/**
	 * Clase del controlador principal
	 */
	class frontController {
		
		private $url_;

		public function __construct($_URL){
			if(isset($_URL["url"])){
				$this->url_ = $_URL["url"];
				$this->goDirrection();
			}else{
				die("<script>window.location = '?url=inicio'</script>");
			}
		}

		private function goDirrection(){
			if(file_exists("controlador/{$this->url_}Controller.php")){
				require_once("controlador/{$this->url_}Controller.php");
			}else{
				die("<script>window.location = '?url=inicio'</script>");
			}
		}
	}


?>