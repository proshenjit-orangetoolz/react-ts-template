export const STATUS = {
    PENDING: 0,
    PROCESSING: 1,
    COMPLETE: 2,
    FAILED: 3,
};

export const GLOBAL_DELAY = {
    DEBOUNCE: 1000,
    RESPONSE: 1000,
};

export const BASIC_SETTING_MODAL_TYPE = {
    EDIT_CREDIT: 1,
    SMS_FORWARD: 2,
    CALL_FORWARD: 3,
    NOTIFICATION_SENDER: 4,
};

export const COLOR_PALETTE_DEFAULT = 'default';
export const COLOR_PALETTE_INHERIT = 'inherit';
export const COLOR_PALETTE_PRIMARY = 'primary';
export const COLOR_PALETTE_SECONDARY = 'secondary';
export const COLOR_PALETTE_WARNING = 'warning';
export const COLOR_PALETTE_SUCCESS = 'success';
export const COLOR_PALETTE_INFO = 'info';
export const COLOR_PALETTE_ERROR = 'error';

export const PHONE_NUMBER_FORMAT = [
    {
        title: 'USA',
        value: '+1',
    },
    {
        title: 'BAN',
        value: '+880',
    },
    {
        title: 'CHN',
        value: '+86',
    },
];
export const STATUS_PENDING_POPOVER = 103;
export const STATUS_APPLIED_PUBLISHED_POPOVER = 104;
export const USER_STATUS = {
    APPLIED: 'APPLIED' as const,
    PUBLISHED: 'PUBLISHED' as const,
    DISABLE: 'DISABLE' as const,
    ACTIVE: 'ACTIVE' as const,
    PENDING: 'PENDING' as const,
    INACTIVE: 'INACTIVE' as const,
};

export const PAYMENT_STATUS = {
    PAID: 'PAID',
    UNPAID: 'UNPAID',
    FREE: 'FREE',
};

export const SETTINGS = {
    CODE_SNIPPET: {
        POSITION: {
            HEADER: '1',
            FOOTER: '2',
        },
        PAGE: {
            LOGIN: '1',
            REGISTRATION: '2',
        },
    },
};

export const CREDIT_SETTING_MODAL_TYPE = {
    SMS: {
        type: 'SMS',
        credit: 0.01,
    },
    MMS: {
        type: 'MMS',
        credit: 0.04,
    },
    RINGLESS_VOICE_MAIL: {
        type: 'RINGLESS VOICEMAIL',
        credit: 0.02,
    },
};

export const SETTINGS_TYPE = {
    ADD: {
        TYPE: 'ADD',
        LABEL: 'Add',
    },
    EDIT: {
        TYPE: 'EDIT',
        LABEL: 'Edit',
    },
    DELETE: {
        TYPE: 'DELETE',
        LABEL: 'Delete',
    },
};

export const MODAL_TYPE = {
    ADD: {
        TYPE: 'ADD',
        LABEL: 'Add',
    },
    EDIT: {
        TYPE: 'EDIT',
        LABEL: 'Edit',
    },
    DELETE: {
        TYPE: 'DELETE',
        LABEL: 'Delete',
    },
};

export const LIST_TYPE = {
    ALL: 'ALL',
    ARCHIVE: 'ARCHIVE',
    TRASH: 'TRASH',
};

export const STATUS_FILTER = [
    {
        filter: 'All',
        status: 'ALL',
        label: 'All',
    },
    {
        filter: 'Today',
        status: 'TODAY',
        label: "Today's",
    },
    {
        filter: '7 Days',
        status: 'WEEK',
        label: 'Last 7 Days',
    },
    {
        filter: '1 Month',
        status: 'MONTH',
        label: 'Last 1 Month',
    },
    {
        filter: '12 Months',
        status: 'YEAR',
        label: 'Last 12 Months',
    },
];

export const USER__HAS__PACKAGE__TYPE__PAID = 1;
export const USER__HAS__PACKAGE__TYPE__FREE = '2';

// -------- System notification 'Send to field values*'

export const SYSTEM__ALERT__ALL_USERS = 1;
export const SYSTEM__ALERT__ALL_AGENCIES = 2;
export const SYSTEM__ALERT__SELECTED_USERS_ONLY = 3;
export const SYSTEM__ALERT__ALL_USERS_AND_AGENCIES = 4;
export const SYSTEM__ALERT__SELECTED_AGENCIES_ONLY = 5;
export const SYSTEM__ALERT__SELECTED_AGENCIES_AND_USERS = 6;
export const SYSTEM__ALERT__ALL_USERS_UNDER_SELECTED_AGENCIES = 7;
