import { IFeatureListType } from '../../../state/features/billingAndPackage/package/package.interface.ts';

const formatFeatureListForRequest = (featureList: IFeatureListType[]) => {
    const length = featureList.length;
    const newFeatureList = [];

    for (let i = 0; i < length; i++) {
        const element = featureList[i];
        if (element.status) {
            newFeatureList.push({ key: element.key, limit: element.limit, maxLimit: element.maxLimit });
        }
    }

    return newFeatureList;
};

export default formatFeatureListForRequest;
