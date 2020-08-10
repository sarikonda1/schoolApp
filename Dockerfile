# Usage:
#
#    Build image:
#    docker build -t angular-starter .
#
#    Run image (on localhost:8080):
#    docker run --name angular-starter -p 8080:80 angular-starter
#
#    Run image as virtual host (read more: https://github.com/jwilder/nginx-proxy):
#    docker run -e VIRTUAL_HOST=angular-starter.your-domain.com --name angular-starter angular-starter

# Stage 1, based on Node.js, to build and compile Angular

FROM node:latest as builder

COPY package.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install --no-optional && mkdir /af-app && npm install node-sass && mv ./node_modules ./af-app

WORKDIR /af-app

COPY . .

RUN node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --prod --build-optimizer=false

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:alpine

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/app.academyfront.com.crt /etc/nginx/app.academyfront.com.crt
COPY ./docker/nginx/app.academyfront.com.key /etc/nginx/app.academyfront.com.key
#COPY ./docker/certbot/conf /etc/letsencrypt/
#COPY ./docker/certbot/www /var/www/certbot
                                  
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/AcademyFrontApp

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /af-app/dist /usr/share/nginx/html/AcademyFrontApp

CMD ["nginx", "-g", "daemon off;"]
