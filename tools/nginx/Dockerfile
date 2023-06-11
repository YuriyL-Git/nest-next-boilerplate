FROM nginx as runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY https_key.key /etc/nginx/conf.d/https_key.key
COPY https_certificate.crt /etc/nginx/conf.d/https_certificate.crt


RUN mkdir -p /etc/nginx/sites-available/ && echo 'server { listen 80; listen [::]:80; server_name _; return 307 https://$host$request_uri; }' > /etc/nginx/sites-available/server.conf
RUN ls -lA /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
