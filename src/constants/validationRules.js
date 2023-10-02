import i18n from 'i18n';
export const validationRules = {
    REQUIRED: {
        value: true,
        message: i18n.t('errorMsg.required'),
        // message: 'This field is required',
    },
    FIRST_NAME: {
        value: /^[A-Za-z]+$/,
        message: i18n.t('errorMsg.firstname'),
    },
    LAST_NAME: {
        value: /^[A-Za-z]+$/,
        message: i18n.t('errorMsg.lastname'),
    },
    EMAIL: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: i18n.t('errorMsg.email'),
    },
    URL: {
        value:
          /^(http|https):\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,16}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
        message: i18n.t('errorMsg.url'),
    },
    NUMBER: {
        value: /^[0-9]+$/,
        message: i18n.t('errorMsg.number'),
    },
    DURATION: {
        value:
          /^(1[0-2]|[0][0-9]):([3][0,1]|[1,2][0-9]|[0][0-9]):(1[0-9]|[2][0-4]|[0][0-9])$/,
        message: i18n.t('errorMsg.duration'),
    }
}