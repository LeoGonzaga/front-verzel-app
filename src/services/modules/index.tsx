import api from "../api";

type Props = {
  name: string;
};

export const getAllModules = async () => {
  const token = await localStorage.getItem("token");
  const res = await api.get("/modules", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return { data, error: data?.email ? false : true };
};

export const createModule = async ({ name }: Props) => {
  const token = await localStorage.getItem("token");
  console.log(token, name);
  const res = await api.post("/modules", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { name },
  });
  const { data } = res;
  return { data, error: data?.name ? false : true };
  // const res = await fetch("https://app-verzel.herokuapp.com/modules", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({ name }),
  // });

  // const resJSON = await res.json();
};
