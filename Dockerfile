from node:16.14.0-alpine

RUN npm install -g @nestjs/cli@9.5.0

USER node

WORKDIR /home/node/app