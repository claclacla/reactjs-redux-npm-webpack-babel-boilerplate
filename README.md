# A Reactjs Redux Npm WebPack Babel boilerplate

A Reactjs Redux Npm WebPack Babel boilerplate

--------------------------------------------------------------------------------

### To do

--------------------------------------------------------------------------------

### Packages

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software

```
node
```

--------------------------------------------------------------------------------

### Installing

```
# Copy tlp/config.json to the App root directory and define your local data
cp tpl/config.json.tpl config.json

# Install node packages
npm i

# Download the docker http server
sudo docker pull node:9.2-slim

# Go to the local web server folder
cd docker/dev/webServer

# Build the local web server
sudo docker build . -t claclacla/spa-http-server

# Run the local web server
sudo docker run -d -p 8080:8080 -v /your-path-to-the/public:/usr/src/app --name WebServer -it claclacla/spa-http-server

# Add the following address to the allowed api server client origins
http://127.0.0.1:8080 

```

--------------------------------------------------------------------------------

### Testing

```
# 

```

--------------------------------------------------------------------------------

### Development

```
# Launch webpack 
npm start

# Open the following page on your browser
http://127.0.0.1:8080

```

--------------------------------------------------------------------------------

### Production

```
# Launch webpack 
npm run build

```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [ReactJs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [NPM](https://www.npmjs.com/)
- [Babel](https://babeljs.io/)
- [WebPack](https://webpack.js.org/)