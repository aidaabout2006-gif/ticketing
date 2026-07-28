import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DashboardCard from "../../components/dashboard/DashboardCard";

import { getDashboardData } from "../../api/dashboard.api";

export default function Dashboard() {
  const [data, setData] = useState({
    tickets: [],
    categories: [],
    priorities: [],
    statuses: [],
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const result = await getDashboardData();
    setData(result);
  }

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: 700,
        }}
      >
        داشبورد
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="تعداد تیکت‌ها"
            value={data.tickets.length}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="دسته‌بندی‌ها"
            value={data.categories.length}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="اولویت‌ها"
            value={data.priorities.length}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="وضعیت‌ها"
            value={data.statuses.length}
          />
        </Grid>
      </Grid>
    </>
  );
}