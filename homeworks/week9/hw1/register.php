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
      <div>
        <a class="board__submit-btn" href="index.php">回留言板</a>
        <a class="board__submit-btn" href="login.php">登入</a>
      </div>
      <h1 class="board__title">註冊</h1>
      <?php 
        if (!empty($_GET['errMsg'])) {
          $msg = '';
          if ($_GET['errMsg'] === '1') {
            $msg = '請輸入資料';
          } else if ($_GET['errMsg'] === '2') {
            $msg = '帳號已被註冊';
          }
          echo '<div class="content_empty">' . $msg . '</div>';
        }
        ?>
      <form class="board__new-comment-form" method="POST" action="handle_register.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" />
        </div>
        <div class="board__nickname">
          <span>帳號：</span>
          <input type="text" name="username" />
        </div>
        <div class="board__nickname">
          <span>密碼：</span>
          <input type="password" name="password" />
        </div>
        <input class="board__submit-btn" type="submit" />
      </form>
  </main>
</body>
</html>