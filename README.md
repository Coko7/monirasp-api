# monirasp-backend

## What is it?

A simple backend API written in Express.js that allows you to display your Raspberry Pi temperature on a cool website. **_Is it overkill?_** _Well, if you are here, that means you were looking for it right?_

## Prequisites

**_⚠️ This project only works if your Raspberry Pi runs on [Raspbian](https://www.raspbian.org/). ⚠️_**

Please make sure you have both [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/) installed.

## Installation

Simply run the following command to install to install the required dependencies on your system:

```sh
npm i
```

## Running the server

First, run the bash script that monitors your Raspberry Pi temperature:

```bash
chmod +x tempmon.sh
./tempmon.sh
```

Then, start the Express server to make data available through the Express API:

```bash
npm start
```

## Accessing the API

Once everything is running, you can access your Pi temperature at [http://localhost:3000/temperature](http://localhost:3000/temperature).
