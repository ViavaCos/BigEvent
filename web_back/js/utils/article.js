var article = {
    query: function (obj, callBack) {
        $.get(URLList.article_search,
            obj,
            function (res) {
                callBack(res);
            })
    },

    del: function (id, callBack) {
        $.get(URLList.article_del, {
            id: id
        }, function (res) {
            callBack(res);
        })
    }
}