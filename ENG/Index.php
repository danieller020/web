<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Inicio de sesion</title>
</head>
<body>
    <form action="IniciarSesion.php" method="POST">
        
        <hr>
        <?php 
            if (isset($_GET['error'])) {
            ?>
            <p class="error">
                <?php
                echo $_GET['error']
                ?>
                
            </p>
        <?php    
            }
        ?>

        <hr>
        <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">BIENVENIDO A ENGEVOLUTION</div>
                    <div class="card-body">
                       
                            <div class="form-group">
                            <i class="fa-solid fa-user"></i>
                                <label for="username">Usuario</label>
                                <input type="text" class="form-control" name="Usuario" id="username" aria-describedby="usernameHelp">
                                <small id="usernameHelp" class="form-text text-muted"></small>
                               
                            </div>
                            <div class="form-group">
                            <i class="fa-solid fa-unlock"></i>
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control"  name="Clave" id="password">
                                <small id="passwordHelp" class="form-text text-muted">Recuerda nunca compartir tu contraseña.</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </form>
</body>
</html>