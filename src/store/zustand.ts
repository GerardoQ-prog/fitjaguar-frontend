import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface CarProductsState {
  products: any[];
  addProduct: (product: any) => void;
  removeProduct: (id: number) => void;
}

const useCarProductsStore = create<CarProductsState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        addProduct: (by) =>
          set((state) => ({ products: [by, ...state.products] })),
        removeProduct: (id) =>
          set((state) => ({
            products: state.products.filter((item) => item.id !== id),
          })),
      }),
      { name: "carProductsStore" }
    )
  )
);

export default useCarProductsStore;
