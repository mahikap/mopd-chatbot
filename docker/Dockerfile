FROM nginx
SHELL ["/bin/bash", "-c"]

RUN mkdir /usr/share/nginx/html/mopd
RUN echo "<html><head><title>Hello MOPD</title></head><body>Hello MOPD!<br>" > /usr/share/nginx/html/mopd/index.html
RUN echo "$(date)" >> /usr/share/nginx/html/mopd/index.html
RUN echo "</body></html>" >> /usr/share/nginx/html/mopd/index.html
