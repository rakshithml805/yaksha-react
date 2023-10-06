import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Tab,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Select,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { TabContext, TabList, TabPanel } from "@mui/lab/";
import { useNavigate, useParams } from "react-router-dom";
// import { DELETE_CATEGORY, DELETE_SKILL } from "../../../_store/actions/actions";
import { apiYakshaUrl } from "../../../_api/_urls";
import { getApi, getByIdApi } from "../../../_api/_api";
import Banner from "../../../_shared/components/banner/banner";
import cardImg from "../../../assets/card-image.jpeg";
// import DeleteDialog from "../../../_shared/components/deleteDialog/DeleteDialog";

const button = ["Create Tags", "create-tag"];
const tagImg = {
  width: "112px",
  height: "77px",
  borderRadius: "5px",
};
const TagLists = () => {
  const { tenancyName } = useParams();
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);
  const [skill, setSkill] = useState([]);
  const [searchCate, setSearchCate] = useState("");
  const [searchSkill, setSearchSkill] = useState("");

  const breadcrumbs = [
    {
      name: "Dashboard",
      url: `/${tenancyName}/dashboard`,
    },
    {
      name: "Manage Tags",
      url: "",
    },
  ];

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const { status, body } = await getApi(
          `${apiYakshaUrl}/services/yaksha/Category/GetCategoryDetails`
        );
        if (status === 200) {
          setCategory(body.result);
        }
      } catch (error) {
        console.error(error);
      }
      try {
        const { status, body } = await getApi(
          `${apiYakshaUrl}/services/yaksha/Skill/GetSkills`
        );
        if (status === 200) {
          setSkill(body.result);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyAPI();
  }, []);
  let navigate = useNavigate();
  const handleEditCategory = (item) => {
    async function GetCategoryById() {
      try {
        const { status, body } = await getByIdApi(
          `${apiYakshaUrl}/services/yaksha/Category/GetCategoriesById`,
          item.id
        );
        if (status === 200) {
          console.log(body);
          let data = body.result;
          navigate("create-tag", { state: { data, type: "category", skill } });
        }
      } catch (error) {
        console.log(error);
      }
    }
    GetCategoryById();
    // navigate("create-tag", { state: { item, type: "category" } });
  };

  const handleEditSkill = (item) => {
    navigate("create-tag", { state: { item, type: "skill" } });
  };

  const [value, setValue] = useState("categories");
  const tabChange = (event, newValue) => {
    setValue(newValue);
  };

  const [categoryValue, setCategoryValue] = useState(0);
  const cateSelect = (event) => {
    setCategoryValue(event.target.value);
  };

  // Delete feature for later release
  //   const [deleteItem, setDeleteItem] = React.useState("");
  //   const [dialog, setDialog] = React.useState(false);
  //   const [tagDelete, setTagDelete] = React.useState(false);
  //   const dialogOpen = (item) => {
  //     setDeleteItem(item);
  //     setDialog(true);
  //   };
  //   const dialogClose = () => {
  //     setDeleteItem("");
  //     setDialog(false);
  //     setTagDelete(false);
  //   };
  //   const deleteTag = () => {
  //     setTagDelete(true);
  //   };
  return (
    <Box>
      <Banner
        title={t("manageTags.manageTags")}
        crumbs={breadcrumbs}
        bannerButton={button}
      />
      <Container maxWidth="xl">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={tabChange}
              textColor="inherit"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#AC0521",
                },
              }}
              sx={{
                ".Mui-selected": {
                  color: "#AC0521",
                },
              }}
            >
              <Tab value="categories" label={t("common.categories")} />
              <Tab value="skills" label={t("common.skills")} />
            </TabList>
          </Box>
          <TabPanel value="categories" sx={{ py: 1, px: 0 }}>
            <Grid container spacing={3} sx={{ mb: 3, pt: 2 }}>
              <Grid item xs={12} md={6} lg={4}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setSearchCate(e.target.value)}
                >
                  <InputLabel htmlFor="outlined-search">
                    {t("commonForm.search")}
                  </InputLabel>
                  <OutlinedInput
                    placeholder={t("commonForm.search")}
                    id="outlined-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchOutlinedIcon color="primary" />
                        </IconButton>
                      </InputAdornment>
                    }
                    label={t("commonForm.search")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {category
                ?.filter((each) => {
                  return searchCate.toLowerCase() === ""
                    ? each
                    : each.name.toLowerCase().includes(searchCate);
                })
                .map((each, index) => (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <Card sx={{ border: "1px solid", borderColor: "divider" }}>
                      <CardContent
                        className="d-flex p-relative"
                        sx={{ minHeight: "130px", maxHeight: "130px" }}
                      >
                        <Box sx={{ mr: 3 }}>
                          <img src={cardImg} style={tagImg} />
                        </Box>
                        <Box className="d-flex flex-column">
                          <Typography variant="subtitle1">
                            {each.name}
                          </Typography>
                          <Box className="d-flex" sx={{ mt: 2 }}>
                            <Box sx={{ mr: 6 }}>
                              <Typography variant="body1">
                                {each.skillCount}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.skills")}
                              </Typography>
                            </Box>
                            <Box sx={{ mr: 6 }}>
                              <Typography variant="body1">0</Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.assessments")}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="body1">0</Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.questions")}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className="p-absolute d-flex"
                          sx={{ top: 5, right: 5, zIndex: 1000 }}
                        >
                          <EditOutlinedIcon
                            color="warning"
                            sx={{ cursor: "pointer" }}
                            onClick={() => handleEditCategory(each)}
                          />
                          {/* {each.skillCount === 0 && (
                            <DeleteForeverOutlinedIcon
                              color="error"
                              onClick={() => dialogOpen(each.name)}
                              sx={{ cursor: "pointer", ml: 2 }}
                            />
                          )} */}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
          <TabPanel value="skills" sx={{ py: 1, px: 0 }}>
            <Grid container spacing={3} sx={{ mb: 3, pt: 2 }}>
              <Grid item xs={12} md={6} lg={4}>
                {category.length && (
                  <FormControl fullWidth>
                    <InputLabel id="selectCategory">
                      {t("commonForm.selectCategory")}
                    </InputLabel>
                    <Select
                      labelId="categories"
                      id="selectCaetgory"
                      value={categoryValue}
                      label={t("commonForm.selectCategory")}
                      onChange={cateSelect}
                    >
                      <MenuItem value={0}>
                        {t("commonForm.selectCategory")}
                      </MenuItem>
                      {category.map((each, index) => (
                        <MenuItem key={index} value={each.id}>
                          {each.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setSearchSkill(e.target.value)}
                >
                  <InputLabel htmlFor="outlined-search">
                    {t("commonForm.search")}
                  </InputLabel>
                  <OutlinedInput
                    placeholder={t("commonForm.search")}
                    id="outlined-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchOutlinedIcon color="primary" />
                        </IconButton>
                      </InputAdornment>
                    }
                    label={t("commonForm.search")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {skill
                ?.filter((each) => {
                  return searchSkill.toLowerCase() === ""
                    ? each
                    : each.name.toLowerCase().includes(searchSkill);
                })
                .map((each, index) => (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <Card sx={{ border: "1px solid", borderColor: "divider" }}>
                      <CardContent
                        className="d-flex p-relative"
                        sx={{ minHeight: "130px", maxHeight: "130px" }}
                      >
                        <Box sx={{ mr: 3 }}>
                          <img src={cardImg} style={tagImg} />
                        </Box>
                        <Box className="d-flex flex-column">
                          <Typography variant="subtitle1">
                            {each.name}
                          </Typography>
                          <Box className="d-flex" sx={{ mt: 2 }}>
                            <Box sx={{ mr: 6 }}>
                              <Typography variant="body1">0</Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.categories")}
                              </Typography>
                            </Box>
                            <Box sx={{ mr: 6 }}>
                              <Typography variant="body1">0</Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.assessments")}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="body1">0</Typography>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                {t("common.questions")}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className="p-absolute d-flex"
                          sx={{ top: 5, right: 5, zIndex: 1000 }}
                        >
                          <EditOutlinedIcon
                            color="warning"
                            sx={{ cursor: "pointer" }}
                            onClick={() => handleEditSkill(each)}
                          />
                          {/* <DeleteForeverOutlinedIcon
                            color="error"
                            sx={{ cursor: "pointer", ml: 2 }}
                          /> */}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
      {/* Delete feature for later release
      <DeleteDialog
        open={dialog}
        item={deleteItem}
        deleteStatus={tagDelete}
        handleClose={dialogClose}
        handleDelete={deleteTag}
      /> */}
    </Box>
  );
};
export default TagLists;
