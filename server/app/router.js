'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/blog/:id', 'blog.getBlogById');
  app.get('/blogs', 'blog.getAboutBlogList');
};
