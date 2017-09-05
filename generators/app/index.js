'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(yosay(chalk.green('EJS Project generator')));

    var prompts = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name',
      default : this.appname // Default to current folder name
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Project description'
    },
    {
      type: 'input',
      name: 'projectAuthor',
      message: 'Author'
    },
    {
      type: 'input',
      name: 'projectAuthorWebsite',
      message: 'Author website'
    },
    ];

    this.prompt(prompts, function (props) {
      
    this.projectName = props.projectName;
    this.projectSlug = this.projectName.toString().toLowerCase()
        .replace(/\s+/g, '')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')     ;
    this.projectDescription = props.projectDescription;
    this.projectAuthor = props.projectAuthor;
    this.projectAuthorWebsite = props.projectAuthorWebsite;

      done();
    }.bind(this));
  },

  writing: {
    projectFiles: function () {
      this.template('package.json','package.json');
      this.template('Gulpfile.js','Gulpfile.js');
    },

    prototypeFiles: function () {
      this.fs.copy(
        this.templatePath('app/pages'),
        this.destinationPath('prototype/pages')
      );
      this.fs.copy(
        this.templatePath('app/components'),
        this.destinationPath('prototype/components')
      );
      this.fs.copy(
        this.templatePath('app/content'),
        this.destinationPath('prototype/content')
      );
      this.fs.copy(
        this.templatePath('app/layouts'),
        this.destinationPath('prototype/layouts')
      );
      this.fs.copy(
        this.templatePath('app/partials'),
        this.destinationPath('prototype/partials')
      );

      this.fs.copy(
        this.templatePath('app/assets/images'),
        this.destinationPath('assets/images')
      );
      this.fs.copy(
        this.templatePath('app/assets/javascript'),
        this.destinationPath('assets/javascript')
      );
      this.fs.copy(
        this.templatePath('app/assets/sass'),
        this.destinationPath('assets/sass')
      );
      this.fs.copy(
        this.templatePath('app/assets/fonts'),
        this.destinationPath('assets/fonts')
      );
    },
  },

  install: function () {
    this.installDependencies();
  }

});
