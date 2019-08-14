
## How to run it localy:

##### 1. During development I was using nodejs v10.13.0. You may use nvm to install the nodejs:
```text
$ nvm install 10.13.0
```

##### 1.1 To install the NVM you may use next command:
```text
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
After instaling you probably need to restart the terminal.
For more information: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

##### 2. You may check the node version by next command:
```text
$ nvm current
```

##### 3. If you see another version less then v10.13.0, use next command to switch on v10.13.0:
```text
$ nvm use 10.13.0
```

##### 4. Open terminal in source folder of the project, check node version (see #2) and run next command to install all dependencies:
```text
$ npm install
```

##### 5. After installing all dependencies you should run the server by next command:
```text
$ npm run server
```

##### 6. Open new terminal, check node version (see #2) and run the application:
```text
$ npm run start
```
