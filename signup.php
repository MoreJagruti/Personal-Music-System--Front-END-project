

<?php
session_start();
include("db_connect.php");

$msg = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['name'];
    $user_email = $_POST['email'];
    $user_pass = $_POST['passwod'];     // as per your input names
    $re_pass = $_POST['re_passwod'];

    if (!empty($user_name) && !empty($user_email) && !empty($user_pass) && !is_numeric($user_name)) {
        if ($user_pass === $re_pass) {
            $query = "INSERT INTO user (user, email, password) VALUES ('$user_name', '$user_email', '$user_pass')";
            mysqli_query($conn, $query);
            header("Location: login.php");
            exit();
        } else {
            $msg = "Passwords do not match. Please try again.";
        }
    }
}
?>

                           

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Website Sign Up </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Sign Up</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required>
                        
                    </div>
                    <div class="card">    
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required>                        
                    </div>
                    <div class="card">    
                        <label for="passwod">Passwod</label>
                        <input type="password" id="passwod" name="passwod" placeholder="Enter your password" required>                        
                    </div>
                    <div class="card">    
                        <label for="re-passwod">Re Passwod</label>
                        <input type="password" id="passwod" name="re_passwod" placeholder="Enter your Re-Password" required>                        
                    </div>
                    <input type="submit" name="" value="Sign up" class="submit">
                    <div class="check">
                        <input type="checkbox" id="remember" name="remember">
                        <span>Remember me </span>
                        <p>You have a account ?<a href="login.html">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="login.png" alt="">
            <!-- <h3>Incorrect Password</h3> -->
            <?php 
            if ($msg) {
                echo "<h3>$msg</h3>";
            }
            ?>
        </div>
     </header>                       
</body>
</html>