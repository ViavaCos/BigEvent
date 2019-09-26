var details = {
    query: function (article_id, callBack) {
        $.get(URLList.comment_query, function (res) {
            callBack(res);
        })
    },

    add: function (obj, callBack) {
        $.post(URLList.comment_add, obj, function (res) {
            callBack(res);
        })
    }
}