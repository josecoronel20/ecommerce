//context Cart types
export interface CartItems {
    id: number;
    quantity: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
  
    returnPolicy: string;
    minimumOrderQuantity: Number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
  
    thumbnail: string;
  }

  export type HandlerQuantityParams = 
    ({productId, operation}:{productId: number;
    operation: "suma" | "resta"}) => void
  

  export type HandlerDeleteParams = (productId: number) => void;


  export interface CartContextType {
    cartItems: CartItems[];
    addToCart: (product: CartItems) => void;
    handlerDelete: HandlerDeleteParams;
    handlerQuantity: HandlerQuantityParams;
  }
  
  //context products types
  export interface Products {
    id: number;
    quantity: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
  
    returnPolicy: string;
    minimumOrderQuantity: Number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
  
    thumbnail: string;
  }

  export interface ContextProductstype{
    products:Products[];
    loading:boolean;
    error:null
  }