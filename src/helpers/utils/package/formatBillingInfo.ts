import generateRandomString from './generateRandomString.ts';

const formatBillingInfo = (billingCycle: number = 1, discountPercentage: number = 0) => {
    return {
        id: generateRandomString(10),
        billingCycle: billingCycle,
        discountPercentage: discountPercentage,
    };
};

export default formatBillingInfo;
