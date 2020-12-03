import React from 'react';

type propsType = {
    messageData: React.FC
    read_by: string
    published: string
}

export const LeftItem: React.FC<propsType> = ({messageData, read_by, published}) => {
    return (
        <div className="messenger-chat-item">
            <div className="chat-item__left">
                <div className="chat-item__text">
                    {messageData}
                </div>
                <div className="chat-item__meta">
                            <span className="mr-5">
                                read: {read_by}
                            </span>
                    <span>
                                {published}
                            </span>
                </div>

            </div>
        </div>
    );
};
