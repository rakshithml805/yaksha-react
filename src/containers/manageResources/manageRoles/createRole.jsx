import React, { useState } from 'react';
import { Box } from '@mui/material';
import Banner from '../../../_shared/components/banner/banner';
import { useParams } from 'react-router-dom';

const CreateRole = () => {
    const { tenancyName } = useParams();
    const breadcrumbs = [
        {
            name: "Dashboard",
            url: `/${tenancyName}/dashboard`
        },
        {
            name: "Manage Roles",
            url: `/${tenancyName}/roles`
        },
        {
            name: "Create Roles",
            url: ""
        }
    ]
    return (
        <Box>
            <Banner title="Manage Roles" crumbs={breadcrumbs} />
        </Box>
    )
}
export default CreateRole;