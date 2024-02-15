import { ITeamManagementFilter } from '../../interface/filter.interface';

export const sortingFilters = (data: Array<ITeamManagementFilter>): Array<ITeamManagementFilter> => {
    const filter: Array<ITeamManagementFilter> = data?.map((value: ITeamManagementFilter, index: number) => {
        if (index === 0) {
            return { ...value, rules: 'WHERE' };
        } else {
            return { ...value, rules: value?.rules };
        }
    });

    return filter;
};

export const markingFilters = (data: Array<ITeamManagementFilter>, id: number): Array<ITeamManagementFilter> => {
    if (data?.length == 0) {
        return [...data, { rules: 'WHERE', id: 1, filter: 'select', condition: 'select', searchText: '' }];
    }

    return [...data, { rules: 'AND', id: id, filter: 'select', condition: 'select', searchText: '' }];
};
