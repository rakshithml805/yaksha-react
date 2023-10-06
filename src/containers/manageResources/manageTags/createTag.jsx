import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  MenuItem,
  Checkbox,
  ListItemText,
  Grid,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Banner from "../../../_shared/components/banner/banner";
import { Form, useLocation, useParams } from "react-router-dom";
import { apiYakshaUrl } from "../../../_api/_urls";
import { getApi, postApi } from "../../../_api/_api";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 70 * 4.5,
      width: 350,
      maxWidth: 400,
    },
  },
};

const CreateTag = () => {
  const { tenancyName } = useParams();
  const { t } = useTranslation();
  const { state } = useLocation();
  const imgUpload = useRef(null);
  const tagsImg = (event) => {
    imgUpload.current.click();
  };
  const uploadFiles = (event) => {
    const fileUploaded = event.target.files[0];
    tagsImg(fileUploaded);
  };
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: `/${tenancyName}/dashboard`,
    },
    {
      name: "Manage Tags",
      url: `/${tenancyName}/tags`,
    },
    {
      name: "Create Tags",
      url: "",
    },
  ];

  const [tagValue, setTagValue] = useState("category");
  const selectTag = (event) => {
    setTagValue(event.target.value);
  };
  // const [selectedCate, setSelectedCate] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [assignedSkills, setAssignedSkills] = useState([]);
  const [selectedSkillsName, setSelectedSkillsName] = useState([]);
  const [selectedSkillIds, setSelectedSkillIds] = useState([]);

  const [selectedSkill, setSelectedSkill] = useState([]);
  const selectSkill = (event) => {
    let value = event.target.value;
    setSelectedSkill(typeof value === "string" ? value.split(",") : value);
    selectedSkillsName.push(value);
    setSelectedSkillIds(
      skillsList
        .filter(function (item) {
          return item.name == selectedSkillsName.index;
        })
        .map(function ({ id }) {
          return { id };
        })
    );
    console.log(selectedSkillIds);
  };
  // const selectCategory = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setSelectedCate(typeof value === "string" ? value.split(",") : value);
  // };

  const [cateNameError, setCateNameError] = useState(false);
  const [cateNameErrorTxt, setCateNameErrorTxt] = useState("");
  const handleSaveCategory = () => {
    setCateNameError(false);
    setCateNameErrorTxt("");
    if (categoryName !== "") {
      let data = [];
      if (state && state.type === "category") {
        data = [
          {
            id: state.data.id,
            name: categoryName,
            skillId: skillIds,
          },
        ];
      } else {
        data = [
          {
            id: 0,
            name: categoryName,
            skillId: skillIds,
          },
        ];
      }
    } else {
      setCateNameError(true);
      setCateNameErrorTxt("Category name is required!");
    }
  };

  async function saveSkill(data) {
    try {
      const { status, body } = await postApi(
        `${apiYakshaUrl}/services/yaksha/Skill/CreateOrUpdateSkillAsync`,
        data
      );
      if (status >= 400 && status <= 599) {
        console.log("Something went wrong..!!!");
        return;
      }
      if (status === 200) {
        if (body.errorMessage) {
          console.log("Something Wrong!");
          return;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [skillError, setSkillError] = useState(false);
  const [skillErrorText, setSkillErrorText] = useState("");
  const handleSkillSave = () => {
    setSkillError(false);
    setSkillErrorText("");
    if (skillName !== "") {
      let data = [];
      if (state && state.type === "skill") {
        data = [
          {
            id: state.data.id,
            name: skillName,
            level: 1,
          },
        ];
      } else {
        data = [
          {
            id: 0,
            name: skillName,
            level: 1,
          },
        ];
      }
      saveSkill(data);
    } else {
      setSkillError(true);
      setSkillErrorText("Skill name is required!");
    }
  };
  useEffect(() => {
    async function getSkills() {
      try {
        const { status, body } = await getApi(
          `${apiYakshaUrl}/services/yaksha/Skill/GetSkills`
        );
        if (status === 200) {
          setSkillsList(body.result);
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (state) {
      setTagValue(state.type);
      if (state.type === "category") {
        setCategoryName(state.data.name);
        setSkillsList(
          state.skill.filter(
            ({ id: id1 }) =>
              !state.data.skillDetails.some(({ id: id2 }) => id2 === id1)
          )
        );
        setAssignedSkills(state.data.skillDetails);
      } else {
        setSkillName(state.data.name);
      }
    } else {
      getSkills();
    }
  }, []);

  return (
    <Box>
      <Banner title="Create Tags" crumbs={breadcrumbs} />
      <Container maxWidth="xl">
        <Box className="d-flex align-center" sx={{ my: 3 }}>
          <Typography variant="h1" sx={{ mr: 5 }}>
            {t("common.create")}
          </Typography>
          <FormControl>
            <RadioGroup
              row
              name="tags"
              defaultValue="Category"
              className="d-flex align-center"
              value={tagValue}
              onChange={selectTag}
            >
              <FormControlLabel
                control={<Radio />}
                value="category"
                label={t("common.category")}
                sx={{ mr: 5 }}
              />
              <FormControlLabel
                value="skill"
                control={<Radio />}
                label={t("common.skill")}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {tagValue === "category" && (
          <>
            <Box className="d-flex">
              <Box
                sx={{ mr: 3, py: 3, width: 350, minWidth: 350 }}
                className="upload-img d-flex flex-column align-center justify-center"
              >
                <Button variant="text" color="secondary" onClick={tagsImg}>
                  <FileUploadOutlinedIcon color="error" />
                  <Typography variant="subtitle1" color="primary">
                    {t("commonForm.uploadCategoryImage")}
                  </Typography>
                </Button>
                <Box
                  sx={{ mt: 2 }}
                  className="d-flex flex-column align-center justify-center"
                >
                  <Typography variant="caption" color="grey">
                    {t("commonForm.imgFileSize")}
                  </Typography>
                  <Typography variant="caption" color="grey">
                    {t("commonForm.imgSupportFormat")}
                  </Typography>
                  <Typography variant="caption" color="grey">
                    {t("commonForm.maxResolution")}
                  </Typography>
                </Box>
                <input
                  type="file"
                  accept=".jpg , .png , .jpeg"
                  onChange={uploadFiles}
                  ref={imgUpload}
                  hidden
                ></input>
              </Box>
              <Box className="d-flex flex-column">
                <Box className="d-flex">
                  <Box sx={{ minWidth: 350, mr: 2 }}>
                    <TextField
                      label={t("commonForm.categoryName")}
                      variant="outlined"
                      fullWidth
                      required
                      value={categoryName}
                      error={cateNameError}
                      helperText={cateNameErrorTxt}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSaveCategory();
                        }
                      }}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                  </Box>
                  <Box sx={{ minWidth: 350, maxWidth: 400 }}>
                    <FormControl fullWidth>
                      <InputLabel>{t("commonForm.assignSkills")}</InputLabel>
                      <Select
                        multiple
                        value={selectedSkill}
                        onChange={selectSkill}
                        input={
                          <OutlinedInput label={t("commonForm.assignSkills")} />
                        }
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {skillsList?.map((skill, index) => (
                          <MenuItem
                            key={index}
                            value={skill.name}
                            name={skill.id}
                          >
                            <Checkbox
                              checked={selectedSkill.indexOf(skill.name) > -1}
                            />
                            <ListItemText primary={skill.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  {assignedSkills.length > 0 && (
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Assigned Skills
                    </Typography>
                  )}
                  {assignedSkills.length > 0 &&
                    assignedSkills.map((each, index) => (
                      <Chip
                        key={index}
                        label={each.name}
                        id={each.id}
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                </Box>
              </Box>
            </Box>
            <Divider sx={{ mt: 4, mb: 2 }} />
            <Box className="d-flex justify-end">
              <Button variant="contained" color="secondary" sx={{ mr: 3 }}>
                {t("common.cancel")}
              </Button>
              <Button variant="contained" color="primary">
                {t("common.create")}
              </Button>
            </Box>
          </>
        )}

        {tagValue === "skill" && (
          <Form onSubmit={handleSkillSave}>
            <Box className="d-flex">
              <Box
                sx={{ mr: 3, py: 3, width: 350 }}
                className="upload-img d-flex flex-column align-center justify-center"
              >
                <Button variant="text" color="secondary" onClick={tagsImg}>
                  <FileUploadOutlinedIcon color="error" />
                  <Typography variant="subtitle1" color="primary">
                    {t("commonForm.uploadSkillImage")}
                  </Typography>
                </Button>
                <Box
                  sx={{ mt: 2 }}
                  className="d-flex flex-column align-center justify-center"
                >
                  <Typography variant="caption" color="grey">
                    {t("commonForm.imgFileSize")}
                  </Typography>
                  <Typography variant="caption" color="grey">
                    {t("commonForm.imgSupportFormat")}
                  </Typography>
                  <Typography variant="caption" color="grey">
                    {t("commonForm.maxResolution")}
                  </Typography>
                </Box>
                <input
                  type="file"
                  accept=".jpg , .png , .jpeg"
                  onChange={uploadFiles}
                  ref={imgUpload}
                  hidden
                ></input>
              </Box>
              <Box
                className="d-flex flex-column justify-space-between"
                sx={{ width: "calc(100% - 400px)" }}
              >
                <Box className="d-flex">
                  <Box sx={{ width: 380, mr: 2 }}>
                    <TextField
                      label={t("commonForm.skillName")}
                      variant="outlined"
                      required
                      fullWidth
                      value={skillName}
                      error={skillError}
                      helperText={skillErrorText}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSkillSave();
                        }
                      }}
                      onChange={(e) => setSkillName(e.target.value)}
                    />
                  </Box>
                  <TextField
                    label={t("commonForm.subSkillName")}
                    variant="outlined"
                    sx={{ width: 380, mr: 2 }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSkillSave();
                      }
                    }}
                  />
                  <TextField
                    label={t("commonForm.subSkillName")}
                    variant="outlined"
                    sx={{ width: 380 }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSkillSave();
                      }
                    }}
                  />
                </Box>
                {/* <FormControl sx={{ width: 360 }}>
                <InputLabel>{t("commonForm.assignCategories")}</InputLabel>
                <Select
                  multiple
                  value={selectedCate}
                  onChange={selectCategory}
                  input={
                    <OutlinedInput label={t("commonForm.assignCategories")} />
                  }
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {categoriesList.map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      <Checkbox checked={selectedCate.indexOf(skill) > -1} />
                      <ListItemText primary={skill} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
              </Box>
            </Box>
            <Divider sx={{ mt: 4, mb: 2 }} />
            <Box className="d-flex justify-end">
              <Button variant="contained" color="secondary" sx={{ mr: 3 }}>
                {t("common.cancel")}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSkillSave}
              >
                {t("common.create")}
              </Button>
            </Box>
          </Form>
        )}
      </Container>
    </Box>
  );
};
export default CreateTag;
