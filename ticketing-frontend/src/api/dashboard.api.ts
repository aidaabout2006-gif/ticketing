import api from "./axios";

export async function getDashboardData() {
  const [
    tickets,
    categories,
    priorities,
    statuses,
  ] = await Promise.all([
    api.get("/tickets"),
    api.get("/categories"),
    api.get("/priorities"),
    api.get("/statuses"),
  ]);

  return {
    tickets: tickets.data,
    categories: categories.data,
    priorities: priorities.data,
    statuses: statuses.data,
  };
}