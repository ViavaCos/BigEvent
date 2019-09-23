var category = {
    query: function (callBack) {
        $.get(URLList.category_search, function (res) {
            callBack(res);
        })
    }
}