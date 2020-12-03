import React from 'react';

type propsType = {
    messageData: React.FC
    published: string
}

export const RightItem: React.FC<propsType> = ({messageData, published}) => {
    return (
        <div className="messenger-chat-item">
            <div className="chat-item__right">
                <div className="chat-item__text">
                    {messageData}
                </div>
                <div className="chat-item__meta">
                    <span>
                        {published}
                    </span>
                </div>
            </div>
        </div>
    );
};
