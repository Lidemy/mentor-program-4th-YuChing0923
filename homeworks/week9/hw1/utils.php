<?php
function generateToken(){
  $s = "";
  for ($i=0; $i <= 16; $i++) {
    $s .= chr(rand(65,90));
  }
  return $s;
}

function getUserFromToken($token) {
  global $conn;
  $sql = sprintf(
    "select username from tokens where token = '%s'",
    $token
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $username = $row['username'];

  $sql = sprintf(
    "SELECT * FROM yuching0923_users WHERE username = '%s'",
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  return $row; // username, id, nickname
}
?>