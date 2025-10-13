import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("events", "routes/events.tsx"),
  route("sponsors", "routes/sponsors.tsx"),
  route("join", "routes/join.tsx"),
  route("membership", "routes/membership.tsx"),
  route("resources", "routes/resources.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
