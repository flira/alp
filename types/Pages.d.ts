export interface Pages {
  pages: PageResponse[];
};

export interface PageResponse {
  content: {
    protected: boolean;
    rendered: string;      
  } 
  title: {
    rendered: string;
  };
};