yarn build &&
git checkout gh-pages &&
rm -rf src *.sh *.js *json yarn.lock images &&
mv dist/* ./ &&
rm -rf dist; 
ga . &&
git commit -m 'update' &&
git push

