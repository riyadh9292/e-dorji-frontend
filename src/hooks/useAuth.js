export const useToken = () => {
  const hasToken = localStorage.getItem("token");
  return hasToken ? true : false;
};

// export const useClearUser = () => {
//   localStorage.removeItem("token");
//   return "success";
// };
