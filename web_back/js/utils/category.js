var category = {
    /**
     * 类别查询功能
     * @param {*} callBack 回调函数 
     */
    query: function (callBack) {
        $.get(URLList.category_search, function (res) {
            callBack(res);
        })
    },

    /**
     * 添加类别功能
     * @param {*} name  类别名称
     * @param {*} slug  别名
     * @param {*} callBack  回调函数
     */
    add: function (name, slug, callBack) {
        $.post(URLList.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },

    /**
     * 删除类别功能
     * @param {*} id 文章id
     * @param {*} callBack  回调函数
     */
    delete: function (id, callBack) {
        $.post(URLList.category_delete, {
            id: id
        }, function (res) {
            callBack(res);
        })
    },

    /**
     * 类别编辑功能
     * @param {*} id 文章id
     * @param {*} name  类别名称
     * @param {*} slug  别名
     * @param {*} callBack  回调函数
     */
    edit: function (id, name, slug, callBack) {
        $.post(URLList.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    }
}