<?php
session_start(); 
include 'db_connect.php';

$msg = false; // Fixed variable name from $masg to $msg

if (isset($_POST['name']) && isset($_POST['password'])) {
    $user_name = $_POST['name'];
    $user_pass = $_POST['password'];

    $query = "SELECT * FROM user WHERE user='" . $user_name . "' AND password='" . $user_pass . "' LIMIT 1";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['username'] = $user_name; // Optional session store
        header("Location: index.php");
        exit(); // Important to stop script after redirect
    } else {
        $msg = "Incorrect Password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Website Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post" action="">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required>
                    </div>
                    <div class="card">    
                        <label for="password">Password</label> <!-- Fixed 'passwod' to 'password' -->
                        <input type="password" id="password" name="password" placeholder="Enter your password" required>                        
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" id="remember" name="remember">
                        <span>Remember me</span>
                        <p>Don't have an account yet? <a href="signup.html">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>

        <div class="right_bx1">
            <img src="login.png" alt="">
            <?php 
                if ($msg) {
                    echo '<h3 style="color:red;">' . $msg . '</h3>';
                }
            ?>
        </div>
    </header>                       
</body>
</html>
