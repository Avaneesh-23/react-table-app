FROM node
WORKDIR /aws-project

COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]