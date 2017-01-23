FROM node:7.4-alpine

RUN npm install --save html-pdf
RUN npm install --save express
RUN npm install --save body-parser
RUN npm install --save jwt-simple
RUN npm install --save passport
RUN npm install --save passport-jwt
RUN npm install --save mongoose
ADD . /app

CMD ["node", "app/index.js"]