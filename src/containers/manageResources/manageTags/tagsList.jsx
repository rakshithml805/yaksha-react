import { useEffect, useState } from "react";
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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { TabContext, TabList, TabPanel } from "@mui/lab/";
import { useNavigate, useParams } from "react-router-dom";
import { apiYakshaUrl } from "../../../_api/_urls";
import { getApi } from "../../../_api/_api";
import Banner from "../../../_shared/components/banner/banner";
import cardImg from "../../../assets/card-image.jpeg";

const tagImgStyle = {
  width: "112px",
  height: "77px",
  borderRadius: "5px",
  zoom: "0.9",
  border: "1px solid",
};

export default function TagLists() {
  const { tenancyName } = useParams();
  const { t } = useTranslation();
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
  const button = ["Create Tags", "create-tag"];
  const [tagView, setTagView] = useState("categories");
  const tabChange = (event, newValue) => {
    setTagView(newValue);
  };
  const [searchCate, setSearchCate] = useState("");
  const [searchSkill, setSearchSkill] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

  const loadSkills = async () => {
    try {
      const { status, body } = await getApi(
        `${apiYakshaUrl}/services/yaksha/Skill/GetSkills`
      );
      if (status === 200) {
        return body.result;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadCategories = async () => {
    try {
      const { status, body } = await getApi(
        `${apiYakshaUrl}/services/yaksha/Category/GetCategoryDetails`
      );
      if (status === 200) {
        return body.result;
      }
    } catch (error) {
      console.error(error);
    }
  };
  let navigate = useNavigate();
  const handleEditCategory = ({ id }) => navigate(`edit-tag/${id}`);
  const handleEditSkill = (item) => {
    let editSkillItem = item;
    navigate(`edit-tag/${item.id}`, {
      state: { editSkillItem, editSkillItemType: "skill" },
    });
  };
  const initLoad = async () => {
    const cateData = await loadCategories();
    const skillData = await loadSkills();
    setCategoriesList(cateData);
    setSkillsList(skillData);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return (
    <Box>
      <Banner
        title={t("manageTags.manageTags")}
        crumbs={breadcrumbs}
        bannerButton={button}
      />
      <Container maxWidth="xl">
        <TabContext value={tagView}>
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
                  onChange={(e) => setSearchCate(e.target.value.toLowerCase())}
                  value={searchCate}
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
              {categoriesList
                ?.filter((each) => {
                  return searchCate === ""
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
                        <Box sx={{ mr: 2 }}>
                          <img src={cardImg} style={tagImgStyle} />
                        </Box>
                        <Box className="d-flex flex-column">
                          <Typography variant="subtitle1">
                            {each.name}
                          </Typography>
                          <Box className="d-flex" sx={{ mt: 2 }}>
                            <Box sx={{ mr: 4 }}>
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
                            <Box sx={{ mr: 4 }}>
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
                <FormControl
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setSearchSkill(e.target.value.toLowerCase())}
                  value={searchSkill}
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
              {skillsList
                ?.filter((each) => {
                  return searchSkill === ""
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
                          <img src={cardImg} style={tagImgStyle} />
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
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}
