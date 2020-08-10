echo "$(pwd)"
npm install --no-optional
npm uninstall node-sass
npm install node-sass
#ng lint
node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --prod --build-optimizer=false
