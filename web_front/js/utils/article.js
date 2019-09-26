var article = {
    query: function (obj, callBack) {
        $.get(URLList.article_search,
            obj,
            function (res) {
                callBack(res);
            })
    }
}