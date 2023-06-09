// CN(classNames) function is for mergeing tailwind classNames together
// there are two dependencies which we need for this function

import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // this combines ceratain classes together into one
}

// number convertors  // kdyz je tam vic cisel, tak to dava carky mezi ne
export const currencyFormat = (num: number) => {
  const formattedNum =
    "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return formattedNum.replace(".00", "");
};

export const numbersFormat = (num: number) => {
  const formattedNum = num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  return formattedNum;
};
