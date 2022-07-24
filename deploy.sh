yarn build &&
git checkout gh-pages &&
rm -rf src *.sh *.js *.json yarn.lock &&
mv dist/* ./ &&
rm -rf dist; 
git add . &&
git commit -m 'update' &&
git push &&
git checkout -

