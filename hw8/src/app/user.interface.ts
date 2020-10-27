export interface User  {
    
id?: number;
name?: string;
email?: string;
}
export interface Posts {
    userId?: number;
    id?: number;
    
  }
  export interface Post {
    
    id?: number;
    body?: string;
    title?: string;
    
  }