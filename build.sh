#!/bin/sh

cd src 
rm ReleaseBuild.zip 
zip ReleaseBuild.zip –r ../index.zip *
cd .. 
aws lambda update-function-code --function-name FirstSkill --zip-file fileb://src/ReleaseBuild.zip