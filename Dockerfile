FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run tsc
EXPOSE 4000
CMD ["npm", "run", "start"]
