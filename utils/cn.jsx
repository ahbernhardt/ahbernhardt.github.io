import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default cn = (input = ClassValue) => {
    return twMerge(clsx(input))
}