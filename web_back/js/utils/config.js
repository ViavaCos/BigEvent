var publicURL = 'http://localhost:8000';

var URLList = {
    adminLogin: publicURL + '/admin/login',
    adminLogout: publicURL + '/admin/logout',
    getAdminInfo: publicURL + '/admin/getuser',

    category_search: publicURL + '/admin/category_search',
    category_add: publicURL + '/admin/category_add',
    category_edit: publicURL + '/admin/category_edit',
    category_delete: publicURL + '/admin/category_delete',

    article_search: publicURL + '/admin/search',
    article_del: publicURL + '/admin/article_delete',
    article_add: publicURL + '/admin/article_publish',
    article_edit: publicURL + '/admin/article_edit',
    article_showArticleCount: publicURL + '/admin/article_count',

    comment_show: publicURL + '/admin/comment_count',

    getUserInfo: publicURL + '/admin/userinfo_get',
    setUserInfo: publicURL + '/admin/userinfo_edit',

}