# The official nodejs docker image
FROM node:10.18.1-slim

# Copy package.json only to temp folder, install its dependencies,
# set workdir and copy the dependnecies there
# This way, dependnecies are cached without the need of cacheing all files.
COPY .npmrc /tmp/.npmrc  
ADD package.json /tmp/package.json
ENV HELM_LATEST_VERSION="v3.0.2"
RUN apt-get clean && apt-get update \
	&& apt-get install -y make python \
	&& cd /tmp \
	&& npm install \
	&& rm -f /tmp/.npmrc \
	&& mkdir -p /home/app \
	&& cp -a /tmp/node_modules /home/app/ \
	&& rm -Rf /tmp/*

# install helm
RUN apt-get install -y wget && wget https://get.helm.sh/helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz && \
    tar -xvf helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz && \
    mv linux-amd64/helm /usr/bin/helm && \
    rm -rf helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz linux-amd64

WORKDIR /home/app

# Copy the rest of the files to the container workdir
ADD . /home/app

ENV PORT=8080
EXPOSE ${PORT}

CMD ["npm", "start"]
