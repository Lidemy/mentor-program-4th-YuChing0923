## 跟你朋友介紹 Git

## git 簡介

git 就是一個幫你做版本控制的程式

* 一份報告有多種不同的版本，但我們希望把所有版本都保存下來。
* 有時候會需要優先使用已確定的版本，又同時需要繼續開發新版本的時候。
* 多人協作專案要加各自的新功能，或是各自修的 bug 的時候。

[windows 安裝](https://git-scm.com/)
[mac 安裝](https://git-scm.com/download/mac)


### git 基本指令
| 指令 | 用途 |
| -- | -- |
| `git init` | git 專案初始化 |
| `git status` | 檢視目前狀態 |
| `git add` | 決定檔案是否加入版本控制 |
| `git -rm cached` | 將加入版本控制的檔案移除 |
| `git commit` | 新建一個版本 |
| `git commit -am` | 合併 `add` 跟 `commit` 兩個指令 |
| `git log` | 歷史紀錄 |
| `git checkout` | 回到某個指定版本 |

### .gitignore
在 git 專案中新建一個 .gitignore 檔案。
將不想加入版本控制的檔案名稱加入 `.gitignore` 檔案中，即忽略該檔案。
**.gitignore 檔案本身要加進版本控制內。**

### branch（分支）
為什麼需要 branch：
* 一條線開發模式無法同步開發，開發新功能與 bug 修復會有衝突
* 可多人協做開發不同功能，完成後再合併

### branch 相關指令
| 指令 | 用途 |
| -- | -- |
| `git branch -v` | 檢視現有分支 |
| `git branch branch-name` | 開新分支 |
| `git branch -d` | 刪除分支 |
| `git checkout branch-name` | 切換到指定分支 |
| `git merge branch-name` | 將指定分支合併到現在所在分支 |

當有 branch 合併發生衝突時，可手動解決衝突。

`<<<<< HEAD` 為現在所在分支的檔案內容
`>>>>> conflict branch` 為衝突分支的檔案內容

手動解決後再 commit 一次，即可合併衝突。


## github 簡介
Git 是版本控制的程式，Github則是放 git responsitory 的地方。
* 多人協作、共享一份專案（responsitory）
* 放共同 .git 資料夾的地方
* 視覺化的 git

### 新增 github 專案
Github 右上加號新增專案
![](https://i.imgur.com/gawLT2v.png)

用 command line 新增本地專案
```
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/YuChing0923/test.git
git push -u origin master
```
用 command line 將已存在專案 push 到 github 上
```
git remote add origin https://github.com/YuChing0923/test.git
git push -u origin master
```

### github 相關指令
| 指令 | 用途 |
| -- | -- |
| `git push` | 將本地檔案同步到 github 上 |
| `git pull` | 將 github 檔案同步到本地端 |
| `git clone` | 將 github 上的專案複製一份下來到本地 |

### github 狀況
* 修改 commit message
``` js
git commit --amend
```

* commit 之後，後悔想刪掉

``` js
git reset HEAD^
/* HEAD^ 表示最新更新的前一個狀態，也就是上一個 commit 的狀態
（預設為`git reset HEAD^ --soft`） */
```

``` js
git reset HEAD^ --hard
/* 完全刪除上一個 commit，改過的檔案也都恢復成原狀 */
```

``` js
git reset HEAD^ --soft
/* commit 後改過的檔案還是在 */
```

* 還沒 commit，但改的東西不想要了，想回復到還沒改的狀態
``` js
git checkout -- file-name
```

* 改 branch 名稱
``` js
git branch -m new-name
```

* 把遠端的 branch 抓下來
``` js
git checkout branch-name
```