// 生成404页面
hexo.extend.generator.register("page-notfound", (locals) => ({
  path: "404.html",
  data: {
    type: "404",
    title_i18n: "title.not_found",
  },
  layout: "_pages/404",
}));

// 生成 tags 页面
hexo.extend.generator.register("page-tags", (locals) => ({
  path: hexo.route.format(hexo.config.tag_dir + "/"),
  data: {
    title_i18n: "title.tag",
  },
  layout: "_pages/tags",
}));

// 生成 categories 页面
hexo.extend.generator.register("page-categories", (locals) => ({
  path: hexo.route.format(hexo.config.category_dir + "/"),
  data: {
    title_i18n: "title.category",
  },
  layout: "_pages/categories",
}));
