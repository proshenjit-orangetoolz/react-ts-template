import {
    USER_PACKAGE_LIMIT_KEY__ADD_DOLLAR_BALANCE,
    USER_PACKAGE_LIMIT_KEY__EMAIL_REQUEST,
    USER_PACKAGE_LIMIT_KEY__LOCATION,
    USER_PACKAGE_LIMIT_KEY__REVIEW_REQUEST,
    USER_PACKAGE_LIMIT_KEY__SMS_REQUEST,
    USER_PACKAGE_LIMIT_KEY__TEAM_MEMBER,
} from '../../constant/packageFeatureConstants.ts';
import generateRandomString from './generateRandomString.ts';

type featureListType = {
    key: number;
    limit: number;
    maxLimit: number;
};

const generateFeatureObject = (name: string, key: number, limit: number, max_limit: number) => {
    return {
        id: generateRandomString(10),
        key: key,
        featureName: name,
        status: true,
        limit: limit,
        maxLimit: max_limit,
    };
};

const formatFeatureLimitList = (featureList: featureListType[]) => {
    const length = featureList.length;
    const dollarBalance = [];
    const teamMemberFeatures = [];
    const reviewFeatures = [];

    for (let i = 0; i < length; i++) {
        const key = featureList[i].key;
        const limit = featureList[i].limit;
        const maxLimit = featureList[i].maxLimit;

        if (key === USER_PACKAGE_LIMIT_KEY__ADD_DOLLAR_BALANCE) {
            dollarBalance.push(generateFeatureObject('Balance', key, limit, maxLimit));
        } else if (key === USER_PACKAGE_LIMIT_KEY__TEAM_MEMBER) {
            teamMemberFeatures.push(generateFeatureObject('Team Member', key, limit, maxLimit));
        } else if (key === USER_PACKAGE_LIMIT_KEY__LOCATION) {
            reviewFeatures.push(generateFeatureObject('Location', key, limit, maxLimit));
        } else if (key === USER_PACKAGE_LIMIT_KEY__EMAIL_REQUEST) {
            reviewFeatures.push(generateFeatureObject('Send Review Requests', key, limit, maxLimit));
        } else if (key === USER_PACKAGE_LIMIT_KEY__SMS_REQUEST) {
            reviewFeatures.push(generateFeatureObject('Send Email feedback requests', key, limit, maxLimit));
        } else if (key === USER_PACKAGE_LIMIT_KEY__REVIEW_REQUEST) {
            reviewFeatures.push(generateFeatureObject('Send SMS feedback requests', key, limit, maxLimit));
        }
    }

    return {
        dollarBalance,
        teamMemberFeatures,
        reviewFeatures,
    };
};

export default formatFeatureLimitList;
