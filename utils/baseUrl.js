const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://abev-react.envytheme.com"
    : "http://localhost:2131";

export default baseUrl;
