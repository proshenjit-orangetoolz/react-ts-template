import { IPackageBillingInfo } from '../../../state/features/billingAndPackage/package/package.interface.ts';

const checkIsMonthSelect = (selectedMonthList: IPackageBillingInfo[], currentMonthValue = 0) => {
    return selectedMonthList.some((monthItem) => Number(monthItem.billingCycle) === Number(currentMonthValue));
};

export default checkIsMonthSelect;
