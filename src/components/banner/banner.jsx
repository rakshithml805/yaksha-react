import React from "react";
import { Container, Box, Typography, Breadcrumbs, Button } from '@mui/material';
import { NavLink } from "react-router-dom";

const Banner = (props) => {
    const {title, crumbs, bannerButton} = props;

    const total = crumbs.length - 1;

    return (
        <Box className="banner">
            <Container maxWidth="xl">
                <Box className="d-flex justify-space-between align-center">
                    <Box className="d-flex flex-column justify-space-between" sx={{height: "65px", pb: 1}}>
                        <Breadcrumbs sx={{mb:1}}>
                            {crumbs.map((each, index) => (
                                <Typography variant="caption" key={index} color={(total === index) ? 'white' : "text.offwhite" }>
                                    {(each.url !== "") && (
                                        <NavLink underline="hover" to={each.url} >
                                            {each.name}
                                        </NavLink>
                                    )}
                                    {(each.url === "") && (
                                        each.name
                                    )}
                                </Typography>
                            ))}
                        </Breadcrumbs>
                        <Typography variant='h1' color="white">{title}</Typography>
                    </Box>
                    {(bannerButton) && (
                        <NavLink to={bannerButton[1]}>
                            <Button variant="banner">
                                {bannerButton[0]}
                            </Button>
                        </NavLink>
                    )}
                </Box>
            </Container>
        </Box>
    )
};
export default Banner;
