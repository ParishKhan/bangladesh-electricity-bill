export const decideDecimal = (num: number) => {
    if(Math.floor((num - Math.floor(num)) * 10) <= 3) return Math.trunc(num);
    return Math.trunc(num) + 1;
}