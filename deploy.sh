

set -e


npm run build


cd dist


git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/ddlawrence1/module11.git main:gh-pages


cd -
