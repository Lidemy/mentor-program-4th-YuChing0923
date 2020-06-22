## 交作業流程

1. 新開一支當週的 branch （如第一週 `git branch week1`）
2. 切換到當週 branch （`git checkout week1`）
3. 開始寫作業，寫完後要先自我檢討
4. 寫完之後將作業 commit 上去（`git commit -am "commit 內容"`）
5. 將檔案 push 到 github 上（`git push origin week1`）
6. 到自己的 github create pull request
7. 把 pull request 的連結複製到學習系統上繳交作業
8.作業改完後助教會 merge 回 master
9. 本地端切換到 master 並把最新的變動 pull 下來（`git pull origin master`）
10. 把已 merge 的本地 branch 刪除（`git branch -d week1`）