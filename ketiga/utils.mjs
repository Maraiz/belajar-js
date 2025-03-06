export function splitString(string) {
    if (typeof string !== 'string') {
      return [];
    }
  
    return Array.from(string);
  }
  
  export default function unique(array) {
    const set = new Set(array)
    return Array.from(set.values());
  }
  
   
  