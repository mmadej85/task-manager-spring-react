TODO List Web App
=======================

Example project to play with spring-boot and react (with the help of gradle, npm and webpack)

### Dependencies / Libs

* **Language**: Java 8 / Javascript (ECMA6, JSX syntax)
* **Main App Libs**: Java: Spring (Spring Boot, MVC), React
* **Build Tools**: Gradle, npm, webpack, babel, eslint
* **JavaScript Testing**: Mocha, Chai, Enzyme, Sinon


### Usage
Building the executable jar (**server + ui**):
```
gradle build
```
Running the jar (**server + ui**):
```
java -jar build\libs\todo-list-x.x.x.jar
```
Running **server** in development:
```
gradle bootRun
```
Running **ui** in development (from ui directory):
```
npm start
```
Runnig ESLint check (from ui directory):
```
npm run lint
```
Running js mocha unit test (from ui directory)
```
npm run test
```