type fnData = {
    selectedId: string[]
    sendSmsAction: Function
    message: string
    isVisibleInput: boolean
    isSelectedAll: boolean
    isFromChat: boolean
    media_url: string
}

type data = {
    action: string
    ids: string[] | string
    message: string
    not_answering?: boolean
    media_url?: string
}

type smsSendT<T> = ({}: T) => boolean

export const sendSMSFn: smsSendT<fnData> = ({
    selectedId, sendSmsAction, message,
    isVisibleInput, isSelectedAll, isFromChat, media_url
}) => {
    // @ts-ignore
    const { sms_template } = window;
    const data: data = {
        action: 'sendSMS',
        ids: selectedId,
        message: sms_template,
        media_url,
    };
    if (isVisibleInput) {
        if (message.trim().length > 0) {
            data.message = message;
            sendSmsAction({ data, isFromChat });
            return true;
        } if (isVisibleInput && !media_url) {
            alert('Can\'t send empty SMS !');
            return false;
        }
    }

    if (isSelectedAll) {
        data.ids = 'all';
    }

    if (selectedId.length === 0) {
        data.not_answering = true;
        data.ids = '';
    }
    if (media_url) {
        data.media_url = media_url;
    }
    sendSmsAction({ data, isFromChat });
    return true;
};
