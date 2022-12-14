const blog = class {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
    }
    
    getId = () => this.id;
  
    setId = (id) => this.id = id;
    
    getComments = () => this.comments;
  
    setComments = (comments) => this.comments = comments;
  
};
export default blog;