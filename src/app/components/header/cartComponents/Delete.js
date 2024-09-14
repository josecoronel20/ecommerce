import { iconDelete } from "@/app/utils/icons";
import { hoverPointer } from "@/app/utils/styles";

export default function Delete({ productId, handlerDelete }) {
  return (
    <div
      className={`${hoverPointer} text-xs flex justify-center items-center`}
      onClick={() => handlerDelete(productId)}
    >
      {iconDelete()} <p>Eliminar</p>
    </div>
  );
}
