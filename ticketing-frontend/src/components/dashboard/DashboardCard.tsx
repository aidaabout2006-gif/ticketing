import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: number;
}

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 4,
        height: 180,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "0.25s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}