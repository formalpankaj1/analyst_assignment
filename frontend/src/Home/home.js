import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Pagination from '../pagination/pagination.js'
import { getAllUsers } from "../store/profileslice";

function Home() {
    const dispatch = useDispatch();
    const allprofiles = useSelector((state) => state.profile)
    const [showDetails, setShowDetails] = useState(-1);
    const [currentid, setCurrentid] = useState(-1);
    useEffect(() => {
        dispatch(getAllUsers());
    },[])

    const handleclick = (id) => {
        if (showDetails != -1) {
            if (currentid == id) {
                setShowDetails(-1);
            } else {
                setShowDetails(id);
                setCurrentid(id);
            }
        } else {
            setShowDetails(id);
            setCurrentid(id)
        }

    }
    
    return (
        <div>
            <div className="wholediv">
                <div className="maindiv">
                    {
                        
                        allprofiles.map((x) => (
                            <div key={x.id} className="document_div">
                                <div id={x.id} className="titlediv">
                                    <div className="name_style" >
                                        <span className="name_span_style" >{x.company.name}</span>
                                    </div>
                                    <div className="subdivs_style">
                                        <span><b className="headings_style">CONTACT</b></span>
                                        <span style={{ fontFamily: 'sans-serif', marginTop: '1rem' }}>{x.name}</span>
                                    </div>
                                    <div className="subdivs_style" >
                                        <span><b className="headings_style">CITY</b></span>
                                        <span className="headings_value_style" >{x.address.city}</span>
                                    </div>
                                    <div className="subdivs_style">
                                        <span><b className="headings_style">STATE</b></span>
                                        <span className="headings_value_style">{x.address.city}</span>
                                    </div>
                                    <div className="viewdetail_style" >
                                        <span><button onClick={() => { handleclick(x.id) }} className='view_detail_btn' > {showDetails != x.id ? "View Details" : "Hide Details"}</button></span>
                                    </div>

                                </div>
                                {showDetails == x.id ?
                                    <div className="viewdetailpage">
                                        <div className="description">
                                            <h3 style={{ fontFamily: 'sans-serif' }}>Description</h3>
                                            <p>
                                                {
                                                    x.company.name
                                                } is a biggest company which has catching phases as :
                                                {
                                                    x.company.catchPhrase
                                                }
                                                {
                                                    x.company.bs
                                                }
                                            </p>
                                        </div>
                                        <div className="pairofdivs">
                                            <div className="Combinationofdivs">
                                                <div className="each_div">
                                                    <b className="each_div_heading" >Contact Person</b>
                                                    <p>{x.username}</p>
                                                </div>

                                                <div className="each_div">
                                                    <b className="each_div_heading" >Designation</b>
                                                    <p>{x.company.bs}</p>
                                                </div>

                                                <div className="each_div">
                                                    <b className="each_div_heading" >Emails</b>
                                                    <p>{x.email}</p>
                                                </div>

                                                <div className="each_div">
                                                    <b className="each_div_heading" >Phones</b>
                                                    <p>{x.phone}</p>
                                                </div>
                                            </div>
                                            <div className="Combinationofdivs">
                                                <div className="each_div">
                                                    <b className="each_div_heading" >Address</b>
                                                    <p>{x.address.street}, {x.address.suite}, {x.address.city}, {x.address.zipcode}</p>
                                                </div>
                                                <div className="each_div">
                                                    <b className="each_div_heading" >City</b>
                                                    <p>{x.address.city}</p>
                                                </div>
                                                <div className="each_div">
                                                    <b className="each_div_heading" >State</b>
                                                    <p>{x.address.city}</p>
                                                </div>
                                                <div>
                                                    <b className="each_div_heading" >Country</b>
                                                    <p>{x.address.city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>

                        ))
                    }
                </div>
            </div>
            <Pagination pages={allprofiles.length} />
        </div>

    );
}

export default Home;
