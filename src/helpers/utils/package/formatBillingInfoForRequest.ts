import { IPackageBillingInfo } from '../../../state/features/billingAndPackage/package/package.interface.ts';

const formatBillingInfoForRequest = (billingInfos: IPackageBillingInfo[], price: number) => {
    const length = billingInfos.length;
    const newBillingInfos = [];

    for (let i = 0; i < length; i++) {
        const element = billingInfos[i];
        const id = element.id;
        const billingCycle = element.billingCycle ? element.billingCycle : 1;
        const discountPercentage = element.discountPercentage ? element.discountPercentage : 0;
        let monthlyPriceAfterDiscount = 0;
        let totalPriceAfterDiscount = 0;

        if (discountPercentage) {
            monthlyPriceAfterDiscount = price - (price / 100) * discountPercentage;
            totalPriceAfterDiscount = monthlyPriceAfterDiscount * billingCycle;
        } else {
            monthlyPriceAfterDiscount = price;
            totalPriceAfterDiscount = price * billingCycle;
        }

        newBillingInfos.push({
            id: id,
            billingCycle: billingCycle,
            discountPercentage: discountPercentage,
            monthlyPriceAfterDiscount: monthlyPriceAfterDiscount,
            totalPriceAfterDiscount: totalPriceAfterDiscount,
        });
    }

    return newBillingInfos;
};

export default formatBillingInfoForRequest;
