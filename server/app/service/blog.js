'use strict';
module.exports = app => {
  class BlogService extends app.Service {
    async getBlogList() {
      const result = await this.ctx.model.about_blog.findAll();
      return result;
    }
    async getBlogById() {
      return null;
    }
  }
  return BlogService;
};
