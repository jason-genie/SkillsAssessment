# stage: 1
FROM ubuntu:latest
USER root
WORKDIR /home/app
COPY . /home/app
ENV PATH /home/app/node_modules/.bin:$PATH
# RUN npm install -g @types/express
# RUN npm install -g @types/node
# RUN npm install -g typescript
# RUN npm install -g tslint
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN npm install  
CMD ["npm", "run","start"]
