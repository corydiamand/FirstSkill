#!/bin/sh

cd src 
rm ReleaseBuild.zip 
zip -r ReleaseBuild.zip *
cd .. 
aws lambda update-function-code --function-name FirstSkill --zip-file fileb://src/ReleaseBuild.zip