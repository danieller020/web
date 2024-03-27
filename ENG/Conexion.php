<?php

    $host = "localhost";
    $User = "root";
    $pass = "";

    $db = "proyecto";

    $conexion = mysqli_connect($host, $User , $pass, $db);

    if (!$con) {
     echo "Conexion fallida";
    }

