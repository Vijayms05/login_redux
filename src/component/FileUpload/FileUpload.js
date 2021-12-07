import React, { useState } from 'react';
import { ACCESS_KEY_ID, REGION_NAME, S3_BUCKET_NAME, SECRET_ACCESS_KEY_ID } from './constant';
import config from './config';
import s3 from './Digitalocean'
const S3_BUCKET = S3_BUCKET_NAME;
const REGION = REGION_NAME;
const ACCESS_KEY = ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = SECRET_ACCESS_KEY_ID;

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
// }

const FileUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = (file) => {
        // if (file.target.files && e.target.files[0]) {
        const blob = file;
        const params = {
            Body: blob,
            Bucket: `${config.bucketName}`,
            Key: blob.name
        };
        // Sending the file to the Spaces
        s3.putObject(params)
            .on('build', request => {
                request.httpRequest.headers.Host = `${config.digitalOceanSpaces}`;
                request.httpRequest.headers['Content-Length'] = blob.size;
                request.httpRequest.headers['Content-Type'] = blob.type;
                request.httpRequest.headers['x-amz-acl'] = 'public-read';
            })
            .send((err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // If there is no error updating the editor with the imageUrl
                    const imageUrl = `${config.digitalOceanSpaces}` + blob.name
                    console.log(imageUrl, blob.name)
                }
            });
        // }
    };
    // const handleUpload = async (file) => {
    //     uploadFile(file, config)
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err))
    // }

    return <div>
        <div>File Upload</div>
        <input type="file" onChange={handleFileInput} />
        <button onClick={() => handleUpload(selectedFile)}> Upload</button>
    </div>
}

export default FileUpload;