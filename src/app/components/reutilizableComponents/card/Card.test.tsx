import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import { ContextProducts } from "../../../context/ContextProducts";
import { ContextCart } from "../../../context/ContextCart";


//agrega mockup de contexto ya que al no obtener los productos por el contexto el cart no se renderiza
const mockupProduct = {
  id: 1,
  quantity: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ["beauty", "mascara"],
  brand: "Essence",
  sku: "RCH45Q1A",
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  warrantyInformation: "1 month warranty",
  shippingInformation: "Ships in 1 month",
  availabilityStatus: "Low Stock",
  reviews: [
    {
      rating: 2,
      comment: "Very unhappy with my purchase!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "John Doe",
      reviewerEmail: "john.doe@x.dummyjson.com",
    },
    {
      rating: 2,
      comment: "Not as described!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Nolan Gonzalez",
      reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Very satisfied!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Scarlett Wright",
      reviewerEmail: "scarlett.wright@x.dummyjson.com",
    },
  ],
  returnPolicy: "30 days return policy",
  minimumOrderQuantity: 24,
  meta: {
    createdAt: "2024-05-23T08:56:21.618Z",
    updatedAt: "2024-05-23T08:56:21.618Z",
    barcode: "9164035109868",
    qrCode: "https://assets.dummyjson.com/public/qr-code.png",
  },
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
};

const mockContextProductsValue = {
  products: [
    {
      id: 1,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 3,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 4,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  ],
  loading: false, // Añade el estado de 'loading'
  error: null, // Añade el valor para 'error'
};

const mockAddToCart = jest.fn;
const mockHandlerDelete = jest.fn;
const mockHandlerQuantity = jest.fn;
const mockSetCartItem = jest.fn;

const mockContextCartValue = {
  cartItems: [
    {
      id: 1,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 3,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 4,
      quantity: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  ],
  addToCart: mockAddToCart,
  handlerDelete: mockHandlerDelete,
  handlerQuantity: mockHandlerQuantity,
  setCartItems: mockSetCartItem,
};

describe("card render", () => {
  it("deberia renderizar correctamente los elementos de la card", () => {
    render(
      <ContextProducts.Provider value={mockContextProductsValue}>
        <ContextCart.Provider value={mockContextCartValue}>
          <Card product={mockupProduct} />
        </ContextCart.Provider>
      </ContextProducts.Provider>
    );

    expect(screen.getByRole("img")).toBeInTheDocument;
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument;
    expect(screen.getByRole("paragraph")).toBeInTheDocument;
    expect(screen.getByRole("button")).toBeInTheDocument;
  });
});
