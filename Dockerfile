FROM node:alpine

# Create app directory
RUN mkdir -p usr/src/evisa-admin
WORKDIR usr/src/evisa-admin

# Install app dependencies
COPY package.json /usr/src/evisa-admin
COPY yarn.lock /usr/src/evisa-admin
RUN yarn

# Bundle app source
COPY . /usr/src/evisa-admin
RUN yarn build

CMD [ "yarn", "start:prod" ]
