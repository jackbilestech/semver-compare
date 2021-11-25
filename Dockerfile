# Container image that runs your code
FROM node:14

# Copies your code file from your action repository to the filesystem path `/` of the container
WORKDIR /action/utils
COPY ./utils ./
RUN npm install

COPY entrypoint.sh /entrypoint.sh
# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]