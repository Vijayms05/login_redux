import AWS from 'aws-sdk';
import { ACCESS_KEY_ID, END_POINT, REGION_NAME, S3_BUCKET_NAME, SECRET_ACCESS_KEY_ID } from './constant';

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndpoint = new AWS.Endpoint(END_POINT);
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY_ID
});
export default s3;