var category = {
    query: function (callBack) {
        $.get(URLList.category_search, function (res) {
            callBack(res);
        })
    },

    add: function (name, slug, callBack) {
        $.post(URLList.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },

    delete: function (id, callBack) {
        $.post(URLList.category_delete, {
            id: id
        }, function (res) {
            callBack(res);
        })
    }
}