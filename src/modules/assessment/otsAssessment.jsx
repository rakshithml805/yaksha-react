import React, {useState} from "react";
import { Box, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { Container, Draggable } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { useTranslation } from "react-i18next";
import "./commonAssessment.scss";

const OtsAssessment = () => {
    const {t} = useTranslation();

    const question = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    const [orderListSequence, setOrderListSequence] = useState([
        {id: 1, option: "(A) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 2, option: "(B) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 3, option: "(C) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 4, option: "(D) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 5, option: "(E) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 6, option: "(F) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 7, option: "(G) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 8, option: "(H) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ]);

    const onSequenceDrop = ({ removedIndex, addedIndex }) => {
        setOrderListSequence(orderListSequence => arrayMoveImmutable(orderListSequence, removedIndex, addedIndex));
    };

    return (
        <Box>
            <Typography variant="body2" sx={{color: "#7c7c7c", fontWeight: "400", lineHeight: "2", fontSize: "14px"}}>
                {question}
            </Typography>

            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mt: 3, mb: 1}}>
                {t('testTracker.orderTheSequence')}
            </Typography>
            
            <List  className="ots-smooth-dnd">
                <Container onDrop={onSequenceDrop}>
                    {
                        orderListSequence.map(({ id, option }) => (
                            <Draggable key={id} data-number={id.toString().length === 1 ? '0'+id : id}>
                                <ListItem className="drag-handle" sx={{border: "solid 1px #cbd2dc", borderRadius: "6px", mb: 2, pl: "45px", pr: "16px"}}>
                                    <ListItemText primary={option} className="line-clamp line-clamp-2" />
                                    <ListItemSecondaryAction sx={{right: "auto", left: "15px", width: "30px"}}>
                                        <ListItemIcon className="drag-handle">
                                            <DragIndicatorOutlinedIcon />
                                        </ListItemIcon>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Draggable>
                        ))
                    }
                </Container>
            </List>
        </Box>
    )
}

export default OtsAssessment;