// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'bootstrap': 'vendor/bootstrap/dist',
  'jquery': 'vendor/jquery/dist',
  'tether': 'vendor/tether/dist',
  'ng2-translate': 'vendor/ng2-translate'
};

/** User packages configuration. */
const packages: any = {
  'jquery': {
    main: 'jquery.min',
    format: 'global',
    defaultExtension: 'js'
  },
  'bootstrap': {
    main: 'js/bootstrap.min',
    format: 'global',
    defaultExtension: 'js'
  },
  'tether': {
    main: 'js/tether.min',
    format: 'global',
    defaultExtension: 'js'
  },
  'ng2-translate': {
    defaultExtension: 'js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/submissions',
  'app/intro',
  'app/program',
  'app/venue',
  'app/comittee',
  'app/registration',
  'app/previous-editions',
  'app/banquet',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
