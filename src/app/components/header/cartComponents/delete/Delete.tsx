import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { hoverPointer } from "../../../../utils/styles";
import { HandlerDeleteParams } from "../../../../utils/types";

export default function Delete({ productId, handlerDelete }: {productId:number; handlerDelete:HandlerDeleteParams} ) {
  return (
    <button
      className={`${hoverPointer} text-xs flex justify-center items-center`}
      onClick={() => handlerDelete(productId)}
    >
      {<TrashIcon className="size-5 text-colorDark1"/>} <p>Eliminar</p>
    </button>
  );
}
