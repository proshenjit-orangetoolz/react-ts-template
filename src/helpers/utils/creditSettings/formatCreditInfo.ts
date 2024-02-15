const formatCreditInfo = (id: string | number, provider: string, value: number, status: string) => {
    return {
        id: id,
        value: value,
        providerShortName: provider,
        status: status,
    };
};

export default formatCreditInfo;
