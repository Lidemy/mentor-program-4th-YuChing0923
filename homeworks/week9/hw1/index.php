<?php
session_start();
require_once('conn.php');
require_once("utils.php");

/*
$username = NULL;
if (!empty($_COOKIE['token'])) {
  $user = getUserFromToken($_COOKIE['token']);
  $username = $user['username'];
  $nickname = $user['nickname'];
}
*/

/*
1. 從 cookie 裡讀取 PHPSESSID (token)
2. 從檔案裡讀取 session id 的內容
3. 放到 $_SESSION
*/
$username = NULL;
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


$result = $conn->query("SELECT * FROM yuching0923_comments ORDER BY id DESC");

if (!$result) {
  die("Error:" . $conn->error);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <?php if (!$username) { ?>
    <a class="board__submit-btn" href="register.php">註冊</a>
    <a class="board__submit-btn" href="login.php">登入</a>
    <?php } else { ?>
    <a class="board__submit-btn" href="logout.php">登出</a>
    <?php }?>
      <h1 class="board__title">Comments</h1>
      <?php if ($username) { ?>
      <form class="board__new-comment-form" method="POST" action="add_comment.php">
        <p>歡迎回來， <?php echo $nickname; ?>！！</p>
        <textarea name="content" rows="5"></textarea>
        <?php 
        if (!empty($_GET['errMsg'])) {
          $msg = '';
          if ($_GET['errMsg'] === '1') {
            $msg = '請輸入內容';
          }
          echo '<div class="content_empty">' . $msg . '</div>';
        }
        ?>
        <input class="board__submit-btn" type="submit" />
      </form>
      <?php } else { ?>
      <h3>請登入以發布留言</h3>
      <?php }?>
      <div class="board__hr"></div>
      <section>
        <?php
          while ($row = $result->fetch_assoc()) {
        ?>
        <div class="card">
          <div class="card__avatar"></div>
          <div class="card__body">
              <div class="card__info">
                <span class="card__author">
                  <?php echo $row['nickname']; ?>
                </span>
                <span class="card__time">
                  <?php echo $row['created_at']; ?>
                </span>
              </div>
              <p class="card__content">
                <?php echo $row['content']; ?>
              </p>
          </div>
        </div>
        <?php }?>
      </section>

  </main>
</body>
</html>