'use strict';

module.exports = app => {
  class BlogController extends app.Controller {
    async getBlogById() {
      const id = this.ctx.params.id;
      const res = await this.service.blog.getBlogById(id);
      this.ctx.body = res;
    }
    /**
     * 列表简介
     */
    async getAboutBlogList() {
      const res = await this.service.blog.getBlogList();
      this.ctx.body = res;
    }
  }
  return BlogController;
};
