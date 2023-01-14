FROM nginx:latest

COPY /dist/contact-ui /usr/share/nginx/html

expose 80

