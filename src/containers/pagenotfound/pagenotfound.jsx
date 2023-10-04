
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    return <>
    <h1>Page Not Found </h1>    
    <Button onClick={handleGoBack}>Go Back</Button>
    </>
}

export default PageNotFound;