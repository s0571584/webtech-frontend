#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:s0571584/webtech-frontend.git master:gh-pages

cd -