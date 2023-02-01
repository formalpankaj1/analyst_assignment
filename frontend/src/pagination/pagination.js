import React from 'react'

const pagination = (allusers) => {
    var noofusers = allusers.pages;
    var pages= Math.floor(noofusers/4);
    var totalusersleft = noofusers - pages*4;
    var finalnoofpages = pages
    if(totalusersleft!=0){
        finalnoofpages += 1;
    }
    const noofpages= [];
    for(let i=1;i<=(finalnoofpages);i++){
       noofpages.push(i);
    }
    return (
        <div className="pagination_header">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                {
                    noofpages.map(x => (
                        <li key={x} className="page-item" aria-current="page">
                            <a className="page-link" href={`/profiles?page=${x}`}>{x}</a>
                        </li>
                    ))
                }

                <li className="page-item">
                    <a className="page-link" href="">Next</a>
                </li>
            </ul>
        </div>
    )
}

export default pagination