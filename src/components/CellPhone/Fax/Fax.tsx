import React from 'react';
import styles from 'styled-components';
import attach_icon from "../../../static/icons/phone-attach.svg";
import plus_icon from "../../../static/icons/phone-plus.svg";
import trash_icon from "../../../static/icons/phone-trash.svg";
import photo_icon from "../../../static/icons/phone-photo.svg";
import doc_icon from "../../../static/icons/phone-doc.svg";

export const Fax = () => {
    return (
        <div>
            <div className="cellphone-page-header">
                <span className="cellphone-page-header__title">Send a fax</span>
            </div>
            <div className="cellphone-page-body" style={{paddingTop: 10}}>
                <div className="telephony-form">
                    <div className="c-form-group">
                        <label htmlFor="send_to" className="c-form-control">Send to</label>
                        <div className="cellphone-input_adv">
                            <input id="send_to" type="text" className="c-form-control with-expansion" placeholder="Phone number" />
                            <img className="cellphone-input__button" src={plus_icon}  />
                        </div>
                        <div className="cellphone-form-expansion">
                            <div className="cellphone-form-expansion__list">
                                <div className="cellphone-form-expansion_list__item">
                                    <span>+1 123 321 4321</span>
                                    <img src={trash_icon}/>
                                </div>
                                <div className="cellphone-form-expansion_list__item">
                                    <span>+1 123 321 4321</span>
                                    <img src={trash_icon}/>
                                </div>
                                <div className="cellphone-form-expansion_list__item">
                                    <span>+1 123 321 4321</span>
                                    <img src={trash_icon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-form-group">
                    <label htmlFor="note" className="c-form-control">Cover page notes</label>
                    <textarea id="note" className="c-form-control" placeholder="Type message here (optional)">

                    </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file" className="c-form-control">Attach files</label>
                        <label htmlFor="file" className="c-form-control file-attach with-expansion">
                            <input id="file" type="file" style={{display: 'none'}}/>
                            <div className="file-attach-area">
                                <span>My computer</span>
                                <div className="file-attach-button"><img src={attach_icon} /></div>
                            </div>
                        </label>
                        <div className="cellphone-form-expansion">
                            <div className="cellphone-form-expansion__list">
                                <div className="cellphone-form-expansion_list__item">
                                    <div className="cellphone-form-expansion_list__item__name">
                                        <img src={photo_icon}/>
                                        <span>photo.png</span>
                                        <small>7.5 mb</small>
                                    </div>
                                    <img src={trash_icon}/>
                                </div>
                                <div className="cellphone-form-expansion_list__item">
                                    <div className="cellphone-form-expansion_list__item__name">
                                        <img src={doc_icon}/>
                                        <span>task.doc</span>
                                        <small>2 mb</small>
                                    </div>
                                    <img src={trash_icon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="c-form-control large-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
