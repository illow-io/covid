#!/usr/bin/env bash

package_name=$1
package_version=v$2

rm -rf artifacts $package_version
mkdir artifacts $package_version
cp -r dist $package_version/
cp package.json $package_version/
cd $package_version
npm i --only=prod
cd ..
tar -zcf artifacts/$package_name-$package_version.tar.gz $package_version
rm -r $package_version