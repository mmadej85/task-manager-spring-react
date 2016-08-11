TODO List Web App
=======================

Example project to play with spring-boot and react (with the help of gradle, npm and webpack)

### Dependencies

* Spring Boot
* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Usage
Building the executable jar:
```
gradle build
```
Running the jar:
```
java -jar todo-list-x.x.x.jar
```
Running server in development:
```
gradle bootRun
```
Running ui in development:
```
npm start
```
Runnig ESLint check:
```
npm run lint
```