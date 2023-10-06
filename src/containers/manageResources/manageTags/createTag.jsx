import { useEffect, useState } from "react";
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
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Banner from "../../../_shared/components/banner/banner";
import { useLocation, useParams } from "react-router-dom";
import { apiYakshaUrl } from "../../../_api/_urls";
import { getApi, postApi } from "../../../_api/_api";
import { useFormik, FormikProvider, Field } from "formik";
import * as Yup from "yup";
const multiselectDropdown = {
  PaperProps: {
    style: {
      maxHeight: 70 * 4.5,
      width: 350,
      maxWidth: 400,
    },
  },
};

export default function CreateTag() {
  const { tenancyName, tagId } = useParams();
  const { t } = useTranslation();
  const { state } = useLocation();
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
  const [tagType, setTagType] = useState("category");
  const tagToggle = (event) => {
    setTagType(event.target.value);
  };

  const [cateReleatedSkills, setCateRelatedSkills] = useState([]);
  const categoryValidateScheme = Yup.object().shape({
    name: Yup.string().required("Category name is required!"),
  });
  const skillValidateScheme = Yup.object().shape({
    name: Yup.string().required("Skill name is required!"),
  });
  const [skillsList, setSkillsList] = useState([]);
  const formikCategory = useFormik({
    initialValues: {
      id: 0,
      name: "",
      description: "",
      idNumber: "",
      skillId: [],
    },
    validationSchema: categoryValidateScheme,
    onSubmit: async () => {
      try {
        const req = { ...formikCategory.values };
        const { status, body } = await postApi(
          `${apiYakshaUrl}/services/yaksha/Category/CreateOrUpdateCategoryAsync`,
          req
        );
        if (status === 200) {
          console.info(body);
        }
        return;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const formikSkill = useFormik({
    initialValues: {
      id: 0,
      name: "",
    },
    validationSchema: skillValidateScheme,
    onSubmit: async () => {
      try {
        const req = [{ ...formikSkill.values }];
        const { status, body } = await postApi(
          `${apiYakshaUrl}/services/yaksha/Skill/CreateOrUpdateSkillAsync`,
          req
        );
        if (status === 200) {
          console.info(body);
        }
        return;
      } catch (error) {
        console.error(error);
      }
    },
  });
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
  const loadCategory = async () => {
    try {
      const { status, body } = await getApi(
        `${apiYakshaUrl}/services/yaksha/Category/GetCategoriesById?id=${tagId}`
      );
      if (status === 200) {
        return body.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initLoad = async () => {
    if (state && state.editSkillItemType) {
      setTagType(state.editSkillItemType);
      formikSkill.values.name = state.editSkillItem.name;
      formikSkill.values.id = state.editSkillItem.id;
    } else {
      const skills = await loadSkills();
      setSkillsList(skills);
      if (tagId) {
        const category = await loadCategory();
        setCateRelatedSkills(category.skillDetails);
        formikCategory.values.name = category.name;
        formikCategory.values.id = category.id;
        setSkillsList(
          skills?.filter(
            ({ id: id1 }) =>
              !category.skillDetails.some(({ id: id2 }) => id2 === id1)
          )
        );
      }
    }
  };

  useEffect(() => {
    initLoad();
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
              value={tagType}
              onChange={tagToggle}
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

        {tagType === "category" && (
          <>
            <FormikProvider value={formikCategory}>
              <Box className="d-flex">
                <Box
                  sx={{ mr: 3, py: 3, width: 350, minWidth: 350 }}
                  className="upload-img d-flex flex-column align-center justify-center"
                >
                  <Button variant="text" color="secondary">
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
                    hidden
                  ></input>
                </Box>
                <Box className="d-flex flex-column">
                  <Box className="d-flex">
                    <Box sx={{ minWidth: 350, mr: 2 }}>
                      <Field name="name">
                        {({ field, meta }) => (
                          <>
                            <TextField
                              {...field}
                              label={t("commonForm.categoryName")}
                              variant="outlined"
                              fullWidth
                              required
                              error={meta.touched && meta.error && meta.error}
                              helperText={
                                meta.touched && meta.error && meta.error
                              }
                            />
                          </>
                        )}
                      </Field>
                    </Box>
                    <Box sx={{ minWidth: 350, maxWidth: 400 }}>
                      <FormControl fullWidth>
                        <InputLabel>{t("commonForm.assignSkills")}</InputLabel>
                        <Field name="skillId">
                          {({ field, form, meta }) => (
                            <>
                              <Select
                                {...field}
                                multiple
                                input={
                                  <OutlinedInput
                                    label={t("commonForm.assignSkills")}
                                  />
                                }
                                renderValue={(selected) => {
                                  const s = skillsList.filter((ele) =>
                                    selected.some((item) => item === ele.id)
                                  );
                                  return (
                                    s &&
                                    s.length &&
                                    s.map((ele) => ele.name).join(", ")
                                  );
                                }}
                                MenuProps={multiselectDropdown}
                              >
                                {skillsList?.map((skill, index) => (
                                  <MenuItem
                                    key={index}
                                    value={skill.id}
                                    name={skill.name}
                                  >
                                    <Checkbox
                                      checked={
                                        field.value.some(
                                          (ele) => ele === skill.id
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <ListItemText primary={skill.name} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </>
                          )}
                        </Field>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    {cateReleatedSkills.length > 0 && (
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Assigned Skills
                      </Typography>
                    )}
                    {cateReleatedSkills.length > 0 &&
                      cateReleatedSkills.map((each, index) => (
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
                <Button
                  variant="contained"
                  onClick={formikCategory.resetForm}
                  color="secondary"
                  sx={{ mr: 3 }}
                >
                  {t("common.cancel")}
                </Button>
                <Button
                  variant="contained"
                  onClick={formikCategory.handleSubmit}
                  color="primary"
                >
                  {t("common.create")}
                </Button>
              </Box>
            </FormikProvider>
          </>
        )}

        {tagType === "skill" && (
          <FormikProvider value={formikSkill}>
            <Box className="d-flex">
              <Box
                sx={{ mr: 3, py: 3, width: 350 }}
                className="upload-img d-flex flex-column align-center justify-center"
              >
                <Button variant="text" color="secondary">
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
                <input type="file" accept=".jpg , .png , .jpeg" hidden></input>
              </Box>
              <Box
                className="d-flex flex-column justify-space-between"
                sx={{ width: "calc(100% - 400px)" }}
              >
                <Box className="d-flex">
                  <Box sx={{ width: 380, mr: 2 }}>
                    <Field name="name">
                      {({ field, meta }) => (
                        <>
                          <TextField
                            {...field}
                            label={t("commonForm.skillName")}
                            variant="outlined"
                            fullWidth
                            required
                            error={meta.touched && meta.error && meta.error}
                            helperText={
                              meta.touched && meta.error && meta.error
                            }
                          />
                        </>
                      )}
                    </Field>
                  </Box>
                  <TextField
                    label={t("commonForm.subSkillName")}
                    variant="outlined"
                    sx={{ width: 380, mr: 2 }}
                  />
                  <TextField
                    label={t("commonForm.subSkillName")}
                    variant="outlined"
                    sx={{ width: 380 }}
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
              <Button
                variant="contained"
                onClick={formikSkill.resetForm}
                color="secondary"
                sx={{ mr: 3 }}
              >
                {t("common.cancel")}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={formikSkill.handleSubmit}
              >
                {t("common.create")}
              </Button>
            </Box>
          </FormikProvider>
        )}
      </Container>
    </Box>
  );
}
