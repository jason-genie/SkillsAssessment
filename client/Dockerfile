# stage: 1
# FROM node:12.2.0-alpine
# WORKDIR /app
# COPY . /app
# ENV PATH /app/node_modules/.bin:$PATH
# RUN npm install -g @vue/cli
# RUN npm install -g vue-template-compiler
# RUN npm install -g @vue/babel-preset-app
# RUN echo '*********************************** Installing npm Install ************************************'
# RUN npm install -g typescript
# RUN npm install -g @vue/cli-service
# RUN npm install -g @vue/cli-plugin-typescript
# RUN npm install -g @vue/cli-plugin-babel
# RUN npm install -g tslint
FROM ubuntu:latest
USER root
WORKDIR /home/app
COPY . /home/app
ENV PATH /home/app/node_modules/.bin:$PATH
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN node -v
RUN npm -v
RUN npm i -g nodemon
RUN nodemon -v
RUN npm install
CMD ["npm", "run", "serve"]
