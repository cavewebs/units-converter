import { getAllCategories as getAllConversionCategories } from "./conversion-data"

export const getAllCategories = () => {
  return getAllConversionCategories().map((category) => ({
    name: category.name,
    slug: category.slug,
  }))
}

