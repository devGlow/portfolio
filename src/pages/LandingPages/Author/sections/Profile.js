/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

import MKTypography from "components/MKTypography";
import Tooltip from "@mui/material/Tooltip";
// Images
import profilePicture from "assets/images/avatar.jpg";
import img1 from "assets/images/Microsoft_SQL_Server_Logo.svg.png";
import img2 from "assets/images/net.png";
import img3 from "assets/images/mongodb_original_wordmark_logo_icon_146425.png";
import img4 from "assets/images/docker2.png";
import img5 from "assets/images/Postman-Logo-Vector-768x768.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Burce Mars"
              size="xxl"
              shadow="xl"
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <MKTypography variant="h3">Sofia B.</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    .Net dev developer
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                My name is Sofia. I am a 31-year-old .NET Backend Developer. I
                graduated in 2017 from an engineering school after five years of
                study in software engineering. I currently work in the public
                sector, where I design, develop, and maintain applications using
                .NET technologies. While my main focus is backend development, I
                can also work on the frontend with React and Material UI.
                <br />
                <br />
                <p dir="rtl">
                  أنا مهندسة معلوميات بالغة من العمر 31 عامًا. تخرجت عام 2017 من
                  مدرسة الهندسة المعلوماتية بعد خمس سنوات من الدراسة في هندسة
                  البرمجيات. أعمل حاليًا في القطاع العمومي حيث أقوم بتصميم
                  التطبيقات وتطويرها.
                </p>
              </MKTypography>
              <br></br>
              <MKTypography
                variant="body1"
                fontWeight="light"
                color="text"
              ></MKTypography>
            </Grid>

            <Grid container item xs={6} mx="auto">
              <MKBox textAlign="center">
                <MKTypography variant="h3" mt={6} mb={3}>
                  Used technologies
                </MKTypography>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={4} lg={2}>
                    <Tooltip title="Microsoft SQL Server">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox component="img" src={img1} width="100%" />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} lg={2}>
                    <Tooltip title=".Net">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox component="img" src={img2} width="100%" />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} lg={2}>
                    <Tooltip title="MongoDB">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox component="img" src={img3} width="100%" />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} lg={2}>
                    <Tooltip title="Docker">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox component="img" src={img4} width="100%" />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} lg={2}>
                    <Tooltip title="React">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox
                          component="img"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                          width="100%"
                        />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} lg={2}>
                    <Tooltip title="Postman">
                      <MKBox
                        opacity={0.5}
                        component="a"
                        href="#"
                        target="_blank"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MKBox component="img" src={img5} width="100%" />
                      </MKBox>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
