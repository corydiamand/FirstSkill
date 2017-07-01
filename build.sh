#!/bin/sh

rm ReleaseBuild.zip 
cd src 
zip ReleaseBuild.zip –r ../index.zip *
cd .. 
aws lambda update-function-code --function-name FirstSkill --zip-file fileb://src/ReleaseBuild.zip