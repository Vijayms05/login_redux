import { URL } from './Constant';
import httpClient from './httpClient';

const register = (payload) => {
    return httpClient.post(URL.REGISTER, payload);
};
const getStreams = () => {
    return httpClient.get(URL.STREAMS);
};
const getStreamsBranches = (stream_id) => {
    return httpClient.get(URL.STREAM_BRANCHES + stream_id);
};
const getStandards = () => {
    return httpClient.get(URL.STANDARDS);
};
const getStandardsStreams = (standard_id) => {
    return httpClient.get(URL.STANDARD_STREAMS + standard_id);
};
const getIndustries = () => {
    return httpClient.get(URL.INDUSTRIES);
};
const RegisterService = {
    register,
    getStreams,
    getStreamsBranches,
    getStandards,
    getStandardsStreams,
    getIndustries,
}
export default RegisterService;