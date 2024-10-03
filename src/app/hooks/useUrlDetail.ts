interface useUrlDetailProps {
  category: string;
  id: number;
}

export const useUrlDetail = ({ category, id }: useUrlDetailProps) => {
  let urlDetail;

  if (category.includes("-")) {
    urlDetail = "/" + category.split("-")[0] + "/" + id;
  } else {
    urlDetail = "/" + category + "/" + id;
  }

  return urlDetail;
};
