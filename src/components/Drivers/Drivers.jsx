import React, { useContext, useEffect } from 'react';
import { DriverItem } from './DriverItem/DriverItem';
import { Context } from '../Context/Context';
import Pagination from '../Pagination/Pagination';
import { IsAdmin } from '../Validate/isAdmin';
import { DriverItemContainer } from './DriverItem/DriverItemContainer';

const Drivers = function (props) {
    const {
        drivers, getDriversAction, driversPagesCount, match: { params: { n } },
    } = props;
    const { setIsVisibleNewDriverModal } = useContext(Context);

    useEffect(() => {
        if (!drivers.length) {
            getDriversAction({});
        }
    }, []);

    useEffect(() => {
        if (n && !drivers.length) {
            getDriversAction({ n });
        }
    }, [n]);

    return (
        <div className="list-items-wrapper block col-lg-9 col-12">
            <div className="block-title">
                <span>Drivers</span>
            </div>
            <div className="table-wrapper drivers-table">
                <div className="row table-head">
                    <div className="header col-12 d-flex justify-content-end pd-r-55">
                        <div
                            onClick={() => setIsVisibleNewDriverModal(true)}
                            className="header-btn header-round-btn"
                            id="new-driver-btn"
                        >
                            <span>Add a new driver</span>
                        </div>
                    </div>
                </div>

                <div className="row table-head hide-on-medium-and-down"
                     style={{ paddingLeft: '80px' }}>
                    <div className="header col-2 d-flex justify-content-start">
                        ID
                    </div>
                    <div className="header col-3 d-flex justify-content-start">
                        Name
                    </div>
                    <div className="header col-3 d-flex justify-content-start">
                        Email
                    </div>
                    <IsAdmin flag={true}>
                        <div className="header col-3 d-flex justify-content-start">
                            Phone
                        </div>
                    </IsAdmin>

                </div>
                <div className="table-content">
                    <div className="scroll-view" style={{ paddingLeft: '80px' }}>
                        {drivers.map((el) => (
                            <DriverItemContainer
                                key={el.id}
                                data={el}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination currentPage={n} data={driversPagesCount} link="/settings/drivers/page/"/>
        </div>
    );
};

export default React.memo(Drivers);
