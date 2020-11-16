import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {connectorType} from "./PaginationContainer";
import PaginationItem from '@material-ui/lab/PaginationItem';
import {Link} from 'react-router-dom';


export const PaginationNew: React.FC<connectorType> = ({callHistory}) => {

    return (
        <Pagination shape={'round'} variant={'text'} style={{alignSelf: 'center'}}
                    count={callHistory?.pages_count || 10} color='standard'
                    renderItem={(item) => {
                        return (
                            <PaginationItem
                                component={Link}
                                className={'outlined'}
                                to={`/settings/main/page/${item.page}`}
                                {...item}
                            />
                        )
                    }}
        />
    );
};
