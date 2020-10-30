import React from 'react';
import {Link} from "react-router-dom";

const Pagination = ({data, currentPage,link}) => {
    if(!currentPage){
        currentPage = 1
    }

    const nexPage = () => {
        let prevPage = +currentPage+1
        if(data.includes(prevPage)){
            return prevPage
        }
        else {
            return data.slice(-1)
        }
    }
    const prevPage = ()=>{
        let prevPage = +currentPage-1
        if(data.includes(prevPage)){
            return prevPage
        }
        else {
            return 1
        }
    }
    return (
        <div className="pagination">
            <Link to={link+prevPage()}>
                <div className="pagination-elem pagination-prev">
                    <span>Previous</span>
                </div>
            </Link>
            {data?.map((el, index) => {
                let active=''
                if(el === +currentPage){
                    active='active'
                }
                return (
                    <Link key={index} to={link+el}>
                        <div   className={"pagination-elem "+active}>
                            <span>{el}</span>
                        </div>
                    </Link>
                )
            })}
            <Link to={link+nexPage()}>
                <div className="pagination-elem pagination-next">
                    <span>Next</span>
                </div>
            </Link>
        </div>
    );
};

export default Pagination;
