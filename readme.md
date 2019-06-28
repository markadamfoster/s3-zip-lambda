# s3-zip-lambda

## Intro
This is a simple Lambda function that, when invoked, will take the passed in s3 bucket, zip the files, and steam down the zip file.

This code was orginally copied from [](https://github.com/orangewise/s3-zip/blob/master/aws_lambda.md).

## Local Dev Setup

1. clone this repo
2. run `yarn install`

## AWS Lamba Setup

- create a Lambda function which has access to the needed S3 bucket(s) where the images will be stored.
- Set up environment variables: 
  - S3_REGION ("us-east-1" or equivalent)
  - S3_BUCKET (name of the bucket where images will be stored)
- 

## Deployment to AWS Lambda

- zip up `index.js` & `node_modules`
- upload zip file to AWS Lamba function console