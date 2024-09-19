import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quantity from "./Quantity";

const mockupProduct = {
  id: 4,
  quantity: 2,
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

const mockupHandleQuantity = jest.fn(({ productId, operation }) => {
  if (operation === "suma") {
    productId.quantity = productId.quantity++;
  } else if (operation === "resta") {
    if (productId > 1) {
      productId.quantity = productId.quantity--;
    } else {
      productId.quantity = 1;
    }
  }
});

describe("componente quantity", () => {
  it("se espera que renderice los botones correctamente", () => {
    render(
      <Quantity
        product={mockupProduct}
        handlerQuantity={mockupHandleQuantity}
      />
    );

    const buttonMas = screen.getByText("+");
    const buttonMenos = screen.getByText("-");
    const quantity = screen.getByText("2");

    expect(buttonMas).toBeInTheDocument();
    expect(buttonMenos).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  it("se espera el correcto funcionamiento del boton +", () => {
    render(
      <Quantity
        product={mockupProduct}
        handlerQuantity={mockupHandleQuantity}
      />
    );

    const buttonMas = screen.getByText("+");
    const quantity = screen.getByText("2");

    expect(quantity).toBeInTheDocument();

    fireEvent.click(buttonMas);

    expect(mockupHandleQuantity).toHaveBeenCalledWith({
      productId: mockupProduct.id,
      operation: "suma",
    });

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  //   it("se espera el correcto funcionamiento del boton -", () => {
  //     render(
  //       <Quantity
  //         product={mockupProduct}
  //         handlerQuantity={mockupHandleQuantity}
  //       />
  //     );

  //     const buttonMenos = screen.getByText("-");
  //     const quantity = screen.getByText("2");

  //     fireEvent.click(buttonMenos)

  //     expect(screen.getByText('1')).toBeInTheDocument()
  //   });
});