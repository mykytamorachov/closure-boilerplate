#!/bin/bash

python ./tools/calcdeps.py -i ../src/tests/emailvalidator_test.js -p ../node_modules/google-closure-library/closure -p ../src -o script > ../bin/deps.js

