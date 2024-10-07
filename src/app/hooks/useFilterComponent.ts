import { Products } from "../utils/types";

interface useFilterComponentProp {
  productsFiltered: Products | Products[];
  subCategory: string;
  rating: number;
  price: number;
}

const useFilterComponent = ({
  productsFiltered,
  subCategory,
  rating,
  price,
}: useFilterComponentProp) => {
  if (Array.isArray(productsFiltered)) {
    const productsSubFiltered = productsFiltered.filter((product: Products) => {
      const matchSubCategory =
        subCategory !== "" ? product.category === subCategory : true;
      const matchRating =
        rating !== 0 ? product.rating <= Math.round(rating) : true;
      const matchPrice = price !== 0 ? product.price <= price : true;

      return matchSubCategory && matchRating && matchPrice;
    });

    return productsSubFiltered
  }
};

export default useFilterComponent;
