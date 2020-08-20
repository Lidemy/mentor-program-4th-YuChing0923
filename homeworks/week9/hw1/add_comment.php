<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (empty($_POST['content'])) {
    header("Location: index.php?errMsg=1");
    exit();
  }

  $nickname = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];

    $sql = sprintf(
      "SELECT * FROM yuching0923_users WHERE username='%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $nickname = $row['nickname'];
  }
  $content = $_POST['content'];
  $sql = sprintf(
    "INSERT INTO yuching0923_comments(nickname, content) values('%s', '%s')",
    $nickname,
    $content
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>