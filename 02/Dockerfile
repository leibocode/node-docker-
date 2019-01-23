FROM node:10.5.0

LABEL author="Lb 13508676924@163.com"

ENV PORT=3001

WORKDIR /app
COPY . /app

RUN npm install

EXPOSE ${PORT}

CMD npm run dev