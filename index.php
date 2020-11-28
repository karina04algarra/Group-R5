<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "r5";

    $link = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

    if(!$link) {
        echo "Error 404";
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pantalla4</title>
</head>
<body>
    <form method="post">
        <h1>Completar Datos</h1>
        <h2>Compra de Soat</h2>
        <input type="text" name="placa" placeholder="Placa">
        <input type="text" name="correo" placeholder="Correo">
        <input type="text" name="telefono" placeholder="Telefono">
        <input type="text" name="marca" placeholder="Marca">
        <input type="text" name="linea" placeholder="Linea">
        <input type="text" name="modelo" placeholder="Modelo">
        <input type="text" name="nombre" placeholder="Nombre">
        <input type="text" name="apellido" placeholder="Apellido">
        <input type="text" name="id" placeholder="Id">
        <input type="text" name="numId" placeholder="NumId">
        <input type="text" name="ciudad" placeholder="Ciudad">
        <input type="text" name="direccion" placeholder="Direccion">
        <input type="text" name="banco" placeholder="Banco">
        <input type="text" name="numTarjeta" placeholder="NumTarjeta">
        <input type="submit" name="register" />
    </form>
    
</body>

<?php
    if(isset($_POST['register'])) {
        $placa = $_POST['placa'];
        $correo = $_POST['correo'];
        $telefono = $_POST['telefono'];
        $marca = $_POST['marca'];
        $linea = $_POST['linea'];
        $modelo = $_POST['modelo'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $id = $_POST['id'];
        $numId = $_POST['numId'];
        $ciudad = $_POST['ciudad'];
        $direccion = $_POST['direccion'];
        $banco = $_POST['banco'];
        $numTarjeta = $_POST['numTarjeta'];


        $insertar = "INSERT INTO datos VALUES('$placa', '$correo', '$telefono', 
                                                '$marca', '$linea', '$modelo', '$nombre', 
                                                '$apellido', '$id', '$numId', '$ciudad', 
                                                '$direccion', '$banco', '$numTarjeta')";

        $ejecutar = mysqli_query($link, $insertar);

        if(!$ejecutar) {
            echo "Error 404";
        }
    }
?>

</html>