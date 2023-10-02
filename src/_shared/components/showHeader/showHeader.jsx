import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const ShowHeader = ({children}) => {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        if(
            location.pathname === '/start-assessment' || 
            location.pathname === '/assessment-test-tracker'
        ) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [location]);

    return (
        <>
            {showHeader && children}
        </>
    )
}

export default ShowHeader;