import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const ShowFooter = ({children}) => {
    const location = useLocation();
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        if(location.pathname === '/start-assessment') {
            setShowFooter(false);
        } else {
            setShowFooter(true);
        }
    }, [location]);

    return (
        <>
            {showFooter && children}
        </>
    )
}

export default ShowFooter;