FROM node:7.8.0
WORKDIR /usr/src/react
COPY . /usr/src/react/
RUN npm install
EXPOSE 3000