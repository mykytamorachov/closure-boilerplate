module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    closureBuilder:  {
      options: {
        // [OPTIONAL] You can define an alternative path of the builder.
        //    If set it trumps 'closureLibraryPath' which will not be required.
        builder: './node_modules/google-closure-library/closure/bin/build/closurebuilder.py',

        // [REQUIRED] One of the two following options is required:
        inputs: './tests/emailvalidator_test.js', // input files (can just be the entry point)
        //namespaces: ['example'], // namespaces

        // [OPTIONAL] Define the Python binary:
        //pythonBinary: '/path/to/binary/python/',

        // [OPTIONAL] The location of the compiler.jar
        // This is required if you set the option "compile" to true.
        compilerFile: './scripts/tools/compiler.jar',

        // [OPTIONAL] output_mode can be 'list', 'script' or 'compiled'.
        //    If compile is set to true, 'compiled' mode is enforced.
        //    Default is 'script'.
        output_mode: 'script',

        // [OPTIONAL] if we want builder to perform compile
        compile: false, // boolean

        compilerOpts: {
          /**
           * Go wild here...
           * any key will be used as an option for the compiler
           * value can be a string or an array
           * If no value is required use null
           */
          compilation_level: 'SIMPLE'
        },
        // [OPTIONAL] Set exec method options
        execOpts: {
          /**
           * Set maxBuffer if you got message "Error: maxBuffer exceeded."
           * Node default: 200*1024
           */
          maxBuffer: 999999 * 1024
        }
      },

      // any name that describes your operation
      tests: {

        inputs: './tests/emailvalidator_test.js',
        namespaces: ['example.emailValidator', 'goog.testing.jsunit', 'myTestNamespace'],
        // [REQUIRED] paths to be traversed to build the dependencies
        src: ['tests/', 'node_modules/google-closure-library/closure', 'node_modules/google-closure-library/third_party'],

        // [OPTIONAL] if not set, will output to stdout
        dest: './bin/deps.js'
      }
    },


    closureCompiler:  {

      options: {
        // [REQUIRED] Path to closure compiler
        compilerFile: './scripts/tools/compiler.jar',

        // [OPTIONAL] set to true if you want to check if files were modified
        // before starting compilation (can save some time in large sourcebases)
        checkModified: true,

        // [OPTIONAL] Set Closure Compiler Directives here
        compilerOpts: {
          /**
           * Keys will be used as directives for the compiler
           * values can be strings or arrays.
           * If no value is required use null
           *
           * The directive 'externs' is treated as a special case
           * allowing a grunt file syntax (<config:...>, *)
           *
           * Following are some directive samples...
           */
          compilation_level: 'SIMPLE'

        },
        // [OPTIONAL] Set exec method options
        execOpts: {
          /**
           * Set maxBuffer if you got message "Error: maxBuffer exceeded."
           * Node default: 200*1024
           */
          maxBuffer: 999999 * 1024
        },
        // [OPTIONAL] Java VM optimization options
        // see https://code.google.com/p/closure-compiler/wiki/FAQ#What_are_the_recommended_Java_VM_command-line_options?
        // Setting one of these to 'true' is strongly recommended,
        // and can reduce compile times by 50-80% depending on compilation size
        // and hardware.
        // On server-class hardware, such as with Github's Travis hook,
        // TieredCompilation should be used; on standard developer hardware,
        // d32 may be better. Set as appropriate for your environment.
        // Default for both is 'false'; do not set both to 'true'.
        d32: false, // will use 'java -client -d32 -jar compiler.jar'
        TieredCompilation: true // will use 'java -server -XX:+TieredCompilation -jar compiler.jar'
      },

      // any name that describes your task
      targetName: {
        // [OPTIONAL] Target files to compile. Can be a string, an array of strings
        // or grunt file syntax (<config:...>, *)
        src: 'src/class.js',

        // [OPTIONAL] set an output file
        dest: 'bin/class.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.option('stack', true)
};