import { URL } from './Constant';
import httpClient from './httpClient';

const subscriptionDetails = () => {
    return httpClient.get(URL.SUBSCRIPTION_DETAILS);
};

const subscriptionTest = (payload) => {
    return httpClient.post(URL.SUBSCRIPTION_TEST, payload);
};
const TestService = {
    subscriptionDetails,
    subscriptionTest
}
export default TestService;