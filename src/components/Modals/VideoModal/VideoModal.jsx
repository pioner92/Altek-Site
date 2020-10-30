import React, { useState } from 'react';

const VideoModal = (props) => {
    const { setVisible, addNewDriverAction } = props;
    const [name, setName] = useState('');
    const [veh_id, setVeh_id] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeId = (e) => {
        setVeh_id(e.target.value);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const addNewDriver = () => {
        if (name, veh_id, phone, email) {
            const driverData = {
                name, veh_id, phone, email,
            };
            addNewDriverAction(driverData);
        } else {
            alert('All fields are required');
        }
        setVisible(false);
    };

    return (
        <div id="new-driver-modal" className="mymodal">
            <div onClick={(e) => props.closeModal(e, setVisible)} className="mymodal-bg-blur">
                {/* <div className="mymodal-wrapper"> */}
                <video width="90%" controls >
                    {/* <source src={vidos} type="video/mp4"/> */}
                    {/* <source src={vidos} type="video/mp4"/> */}
                </video>
                {/* </div> */}
            </div>
        </div>
    );
};

export default React.memo(VideoModal);
