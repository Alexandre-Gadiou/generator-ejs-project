'use strict';
const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
        default : this.appname
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

    return this.prompt(prompts).then(props => {
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
    });
  }

  writing() {
    this._writingPackageJSON();
    this._writingGulpfile();
    this._writingPrototypeFiles();      
  }

  _writingPackageJSON() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.projectName,
        projectSlug: this.projectSlug,
        projectDescription: this.projectDescription,
        projectAuthor: this.projectAuthor,
        projectAuthorWebsite: this.projectAuthorWebsite,
      }
    );
  }

  _writingGulpfile() {
    this.fs.copy(
      this.templatePath('Gulpfile.js'),
      this.destinationPath('Gulpfile.js')
    );
  }

  _writingPrototypeFiles() {
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
  }


  install() {
    this.installDependencies({
      npm: true,
      bower: false,      
    });
  }
};