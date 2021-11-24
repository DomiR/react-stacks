#!/usr/bin/env sh
set -eu
mkdir -p dist/commonjs
echo '{ "type": "commonjs" }' > dist/commonjs/package.json
mkdir -p dist/module
echo '{ "type": "module" }' > dist/module/package.json
