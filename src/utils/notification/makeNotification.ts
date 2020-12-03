import addNotification from "react-push-notification";

export const makePushNotification = (from:string) => {
    addNotification({
        title: `Missed call from ${from}`,
        subtitle: `Missed call from ${from}`,
        message: `Missed call from ${from}`,
        theme: 'darkblue',
        native: true
    });
};
