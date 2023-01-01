FROM node
WORKDIR /app
COPY package.jsonn /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 5000