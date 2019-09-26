var comment = {
    show: function (callBack) {
        $.get(URLList.comment_show, function (res) {
            callBack(res);
        })
    }
}