import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("events", "routes/events.tsx"),
  route("membership", "routes/membership.tsx"),
  route("resources", "routes/resources.tsx"),
  route("contact", "routes/contact.tsx"),
  route("board", "routes/board.tsx")
] satisfies RouteConfig;
