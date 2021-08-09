export const url = (link) => {
  const baseUrl = process.env.BASIC_HOST || "http://localhost:3000/";
  return baseUrl + link;
};
