export const url = (link) => {
  const baseUrl = process.env.BASIC_HOST || "http://local.zdravcity.ru:3000/";
  return baseUrl + link;
};
