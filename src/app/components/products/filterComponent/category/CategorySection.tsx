import React, { Ref } from 'react'

interface categorySectionProps{
    seter:React.Dispatch<React.SetStateAction<string>>;
    isInitialMount:React.MutableRefObject<boolean>
}

const CategorySection = ({seter, isInitialMount} : categorySectionProps) => {

    const handlerCategorySingle = (category:string) => {
        seter(category);
        isInitialMount.current = true;
      };
  return (
    <div>
              <p>Categoría</p>
              <ul className="flex flex-wrap gap-1">
                {[
                  "mens-shirts",
                  "mens-shoes",
                  "mens-watches",
                  "sports-accessories",
                  "womens-bags",
                  "womens-dresses",
                  "womens-jewellery",
                  "womens-shoes",
                  "womens-watches",
                  "vehicle",
                ].map((category) => (
                  <li
                    key={category}
                    onClick={() => handlerCategorySingle(category)}
                    className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

  )
}

export default CategorySection