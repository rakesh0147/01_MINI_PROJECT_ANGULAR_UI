FROM nginx:latest

COPY /dist/contact-ui /usr/share/nginx/html

EXPOSE 80