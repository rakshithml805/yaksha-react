import React, {useState, useEffect} from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const CountDown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    const deadLine = "October, 31, 2023";

    const getTime = () => {
        const time = Date.parse(deadLine) - Date.now();
        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60)%24));
        setMins(Math.floor((time/1000/60)%60));
        setSecs(Math.floor((time/1000)%60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadLine), 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <List className="d-inline-flex">
            <ListItem>
                <ListItemText>{hours < 10 ? "0" + hours : hours}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>{mins < 10 ? "0" + mins : mins}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>{secs < 10 ? "0" + secs : secs}</ListItemText>
            </ListItem>
        </List>
    )
}

export default CountDown;