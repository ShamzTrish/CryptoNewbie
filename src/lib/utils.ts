// CN(classNames) function is for mergeing tailwind classNames together 
// there are two dependencies which we need for this function

import { twMerge } from "tailwind-merge";
import { ClassValue, clsx} from 'clsx'

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs)) // this combines ceratain classes together into one
}