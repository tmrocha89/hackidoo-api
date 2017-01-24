FROM node:7.4-alpine

RUN npm install --save html-pdf
RUN npm install --save express
RUN npm install --save body-parser
RUN npm install --save jwt-simple
RUN npm install --save passport
RUN npm install --save passport-jwt
RUN npm install --save mongoose
RUN npm install -g nodemon
RUN npm install -g mocha
RUN npm install --save-dev mockgoose

WORKDIR /app

CMD ["nodemon", "-L", "index.js"]