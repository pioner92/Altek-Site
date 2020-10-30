import React, {useState} from 'react';
import {sendSMSFn} from '../../../utils/sendSMSFn';
import {closeModalAndClearSelectedId} from '../../../utils/closeModals';
import {getFileUrl} from '../../../utils/getFileUrl/getFileUrl';
import attachIcon from '../../../static/icons/attach.svg';
import trashIcon from '../../../static/icons/trash.svg';

const NewSmsModal = (props) => {
    const {
        setVisible, sendSmsAction, selectedId, setIsVisibleSentSmsNotification,
        clearSelectedDrivers, isSelectedAll, sendFileAction,
    } = props;

    const [isVisibleInput, setIsVisibleInput] = useState(false);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    const onChangeOptions = ({target}) => {
        const {options} = target
        if (options.selectedIndex === 1) {
            setIsVisibleInput(true);
        } else {
            setIsVisibleInput(false);
        }
    };

    const onChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const sendSMS = () => {
        const isSent = sendSMSFn({
            selectedId,
            sendSmsAction,
            message,
            isVisibleInput,
            isSelectedAll,
            isFromChat: false,
            media_url: fileUrl,
        });
        if (isSent) {
            setVisible(false);
            setIsVisibleSentSmsNotification(true);
            clearSelectedDrivers();
        }
    };

    const onChangeFilePicker = (e) => {
        setFile(e.target.files[0]);
        getFileUrl(e.target.files[0])
            .then((data) => {
                setFileUrl(data);
            });
    };

    const onCloseModal = (e) => {
        closeModalAndClearSelectedId(e, setVisible, selectedId, clearSelectedDrivers);
    };

    const filterFileName = (filename) => (filename.length >= 17 ? `${filename.slice(0, 17)}....${filename.split('.')
        .pop()}` : filename);

    return (
        <div id="new-sms-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur"/>
            <div className="mymodal-wrapper">
                <div className="mymodal-header">
                    <span>Send a message</span>
                </div>
                <div className="mymodal-content new-sms-modal">
                    <div className="modal-form justify-content-center">
                        <select onChange={onChangeOptions} className="modal-select" name="type">
                            <option value="updateLocation">Update location</option>
                            <option value="customMessage">Custom message</option>
                        </select>
                    </div>
                    {isVisibleInput
                    && <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} className="modal-form justify-content-center">
                        <div className="pos-relative w-100">
                            <input onChange={onChangeInput} value={message}
                                   className="modal-input new-sms-modal-input"
                                   type="text"/>
                            <ButtonFilePicker callback={onChangeFilePicker}/>
                        </div>
                        <div className="new-sms-modal_attached">
                            {file
                                ? <div className="w-100 row justify-content-between align-items-end">
                                    <span className="mt-2">{filterFileName(file.name)}</span>
                                    <div className="new-sms-modal-delete">
                                        <img src={trashIcon} alt="Delete"/>
                                    </div>
                                </div>
                                : <span> </span>
                            }
                        </div>
                    </div>
                    }

                    <div className="modal-buttons">
                        <button onClick={sendSMS} className="modal-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ButtonFilePicker = ({callback}) => (
    <label className="new-sms-modal-attach" htmlFor='file-picker'>
        <img src={attachIcon} alt="Attach"/>
        <input onChange={callback} hidden={true} id='file-picker' type='file'
               accept="image/png, image/jpeg, image/gif"/>
    </label>
);

export default React.memo(NewSmsModal);
