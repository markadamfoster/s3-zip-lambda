const AWS = require('aws-sdk')
const s3Zip = require('s3-zip')

/*
  From https://github.com/orangewise/s3-zip/blob/master/aws_lambda.md
*/

exports.handler = function (event, context) {
  console.log('event', event)
  
  const region = event.region
  const bucket = event.bucket
  const folder = event.folder
  const files = event.files
  const zipFileName = event.zipFileName

  // Create body stream
  try {

    const body = s3Zip.archive({ region: region, bucket: bucket}, folder, files)
    const zipParams = { params: { Bucket: bucket, Key: folder + zipFileName } }
    const zipFile = new AWS.S3(zipParams)
    zipFile.upload({ Body: body })
      .on('httpUploadProgress', function (evt) { console.log(evt) })
      .send(function (e, r) { 
        if (e) {
          const err = 'zipFile.upload error ' + e
          console.log(err)         
          context.fail(err)
        } 
        console.log(r) 
        context.succeed(r)
      })

  } catch (e) {
    const err = 'catched error: ' + e
    console.log(err)    
    context.fail(err)
  }

}