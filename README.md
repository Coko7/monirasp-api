# monirasp-api

## What is it?

A simple API written in Express.js that allows you to display your Raspberry Pi temperature on a cool website. **_Is it overkill?_** _Well, if you are here, that means you were looking for it right?_

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

Once everything is running, you can access your Pi temperature at [GET http://localhost:3000/temperature](http://localhost:3000/temperature).

Alternatively, you can try the API directly with an actual website. There is an example website in the [frontend](./frontend) folder. You may serve the website statically with a webserver such as **Apache** or **Nginx** or access it directly from your browser.
