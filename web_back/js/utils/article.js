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
    },

    add: function (fd, callBack) {
        $.ajax({
            url: URLList.article_add,
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            success: function (res) {
                callBack(res);
            },
        })
    },

    edit: function (fd, callBack) {
        $.ajax({
            url: URLList.article_edit,
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            success: function (res) {
                callBack(res);
            },
        })
    },

    showArticleCount: function (callBack) {
        $.get(URLList.article_showArticleCount, function (res) {
            callBack(res);
        })

    }
}