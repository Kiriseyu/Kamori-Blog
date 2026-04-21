初始化:
cd [盘符:\文件夹\文件夹]
git init
添加所有文件:
git add .
添加特定文件:
git add index.html
git add README.md

提交文件:
git commit -m "[打算附注的话]"

添加到远程仓库:
git remote add blog https://github.com/文件名/地址.git

查看远程仓库名称
git remote -v

添加远程仓库
git remote add [自定义远程仓库名称] [远程仓库地址]

也可后续重命名远程仓库地址：
git remote rename [oldname] [newname]

验证更改：
git remote -v

git push -u [远程仓库地址] main|master
{-u 用于建立关联关系}
后续推送可简化为
git push