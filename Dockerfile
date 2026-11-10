# Portfolio website: static files served by nginx
FROM nginx:1.27-alpine

# Replace the default nginx site with ours
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/portfolio.conf

# Copy the website (everything in this folder except what .dockerignore excludes)
COPY . /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/nginx.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
