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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox
      component="section"
      py={12}
      sx={{ width: "100%", marginTop: "-12rem" }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ margin: "0 auto" }}
        >
          {/* Make cards area bigger (lg={8}) */}
          <Grid item xs={12} lg={8} sx={{ margin: "0 auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Programming languages"
                    description="C#, JavaScript, HTML, CSS, SQL"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Frameworks and Libraries"
                    description="Entity Framework, ASP.NET Core, .NET, React, SignalR"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Tools and apps"
                    description="visual studio, postman, SQL Server Management Studio, docker, git, github"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Languages"
                    description="Arabic (native),French (fluent), English (intermediate), Spanish (intermediate)"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
