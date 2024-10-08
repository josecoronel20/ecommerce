import { useContext } from 'react';
import { ContextProducts } from '../context/ContextProducts';
import { Products } from '../utils/types';

interface ContextProductstype {
    products: Products[]; // Suponiendo que tienes un tipo ProductType
  }

  export const useProducts = () => {
    const context = useContext(ContextProducts);
  
    if (!context) {
      return { products: [] };
    }
  
    return context;
  };
  
