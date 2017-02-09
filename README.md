# generator-ejs-project

[![build Status](https://travis-ci.org/Alexandre-Gadiou/generator-ejs-project.svg)](https://travis-ci.org/Alexandre-Gadiou/enerator-ejs-project.svg?branch=master)

**generator-ejs-project** is a yeoman generator to set up a HTML-SASS-Javascript project in 5 minutes. (if nodejs already installed ...)

generator-ejs-project is based on [EJS](http://ejs.co) technology.

## Presentation

As we already know, [bootstrap 4 alpha](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) moved from LESS to SASS technology.
 
This generator enables to create a **modern** project with this packages : 

1. **Bootstrap-SASS 3.3.5**
2. **Font Awesome 4.4.0**
3. **jQuery 3.1.1**

## Getting Started

1. Install [nodejs](https://nodejs.org/)

2. Install G
	
	* 	`npm install -g gulp`
		
3. Install Bower
	
	* 	`npm install -g bower`
		
4. Install Yeoman

	* 	`npm install -g yo`		

## Installation

1. Download [generator-ejs-project](https://github.com/Alexandre-Gadiou/generator-ejs-project/archive/master.zip)

2. Install

	* 	`cd generator-ejs-project`
		
	* 	`npm link`
		
## Usage	

As promised, you can now generate the project.

### Project generation

To generate the project, you need to run this command  :

```
yo ejs-project
```

Then answer to Mr yeoman questions

### Start the prototype	

To start the prototype, you just need to run this command  :

```
gulp
```

This command creates a new folder `prototype/dist` which is browsersynch root (the server).
