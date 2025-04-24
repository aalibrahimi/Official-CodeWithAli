import { create } from "zustand";

interface HoverItemState {
  hoveredItem: number,
  setHoveredItem: (hoveredItem: number) => void
}
export const HoveredItemStore = create<HoverItemState>()((set) => ({
  hoveredItem: 0,
  setHoveredItem: (hoveredItem: number) => set({ hoveredItem })
}))

// Made this with Chat, ty chat! --> I want to know how this truly works though. Ali, help me understand what's going on?
interface MerchVariantState {
  merchColor: { [itemId: number | string]: string };
  setMerchColor: (itemId: number | string, color: string) => void;
}
export const MerchVariantStore = create<MerchVariantState>()((set) => ({
  merchColor: {},
  setMerchColor: (itemId, color) =>
    set((state) => ({
      merchColor: {
        ...state.merchColor,
        [itemId]: color,
      },
    })),
}));