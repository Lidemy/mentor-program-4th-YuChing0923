<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header("Location: login.php?errMsg=1");
    exit();
  }

  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = sprintf(
    "SELECT * FROM yuching0923_users WHERE username='%s' AND password='%s'",
    $username,
    $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  if ($result->num_rows === 1) {
    /*
    // 生成 token
    $token = generateToken();
    $sql = sprintf(
      "INSERT INTO tokens(token, username) VALUES('%s', '%s')",
      $token,
      $username
    );
    $result = $conn->query($sql);
    if (!$result) {
      die($conn->error);
    }
    $expire = time() + 3600 * 24 * 30;
    setcookie("token", $token, $expire);
    */

    /* 
    1. 產生 session id (token)
    2. 把 username 寫入檔案
    3. set-cookie: session-id
    */
    $_SESSION['username'] = $username;

    // 登入成功
    header("Location: index.php");
  } else {
      header('Location: login.php?errMsg=1');
  }
?>