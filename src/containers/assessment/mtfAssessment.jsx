import React, {useState} from "react";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { Container, Draggable } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { useTranslation } from "react-i18next";

const MtfAssessment = () =>  {
    const {t} = useTranslation();

    const question = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const orderListQuestion = [
        {id: 1, mtfItem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 2, mtfItem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 3, mtfItem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: 4, mtfItem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ];

    const [orderListAnswer, setOrderListAnswer] = useState([
        { id: "1", text: "01 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { id: "2", text: "02 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { id: "3", text: "03 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { id: "4", text: "04 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }
    ]);

    const onDrop = ({ removedIndex, addedIndex }) => {
        setOrderListAnswer(orderListAnswer => arrayMoveImmutable(orderListAnswer, removedIndex, addedIndex));
    };

    return (
        <Box>
            <Typography variant="body2" sx={{color: "#7c7c7c", fontWeight: "400", lineHeight: "2", fontSize: "14px"}}>
                {question}
            </Typography>

            <Typography variant="h6" sx={{color: "#676767", fontSize: "18px !important", fontWeight: "500", mt: 3, mb: 1}}>
                {t('testTracker.matchTheFollowing')}
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <List>
                        {
                            orderListQuestion.map((list) => (
                                <ListItem key={list.id} sx={{border: "solid 1px #cbd2dc", borderRadius: "6px", mb: 2}}>
                                    <ListItemText primary={list.mtfItem} className="line-clamp line-clamp-2" />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop}>
                            {orderListAnswer.map(({ id, text }) => (
                            <Draggable key={id}>
                                <ListItem className="drag-handle" sx={{border: "solid 1px #cbd2dc", borderRadius: "6px", mb: 2, pl: "45px", pr: "16px"}}>
                                    <ListItemText primary={text} className="line-clamp line-clamp-2" />
                                    <ListItemSecondaryAction sx={{right: "auto", left: "15px", width: "30px"}}>
                                        <ListItemIcon className="drag-handle">
                                            <DragIndicatorOutlinedIcon />
                                        </ListItemIcon>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Draggable>
                            ))}
                        </Container>
                    </List>
                </Grid>
            </Grid>

        </Box>
    )
}

export default MtfAssessment;