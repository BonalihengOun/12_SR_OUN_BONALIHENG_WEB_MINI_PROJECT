import { getAllCategoryService } from "@/service/category.service";
import React from "react";

const CategoryPage = async () => {
  const categoryData = await getAllCategoryService();
  return (
    <main>
      <h1>Categoory Page</h1>
      {categoryData?.payload?.map((cate) => (
        <div>{cate.categoryName}</div>
      ))}
    </main>
  );
};

export default CategoryPage;
