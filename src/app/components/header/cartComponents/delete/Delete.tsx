import { iconDelete } from "../../../../utils/icons";
import { hoverPointer } from "../../../../utils/styles";
import { HandlerDeleteParams } from "../../../../utils/types";

export default function Delete({ productId, handlerDelete }: {productId:number; handlerDelete:HandlerDeleteParams} ) {
  return (
    <div
      className={`${hoverPointer} text-xs flex justify-center items-center`}
      onClick={() => handlerDelete(productId)}
    >
      {iconDelete()} <p>Eliminar</p>
    </div>
  );
}
