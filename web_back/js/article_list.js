$(function () {

    var totalPage = '';

    getArticle();
    // 页面载入后获取数据
    function getArticle(page) {
        article.query({
            page: page
        }, function (res) {
            // console.log(res);
            if (res.code === 200) {
                $('#articleContent').html(template('tmp', res));
                totalPage = res.totalPage;

                // 通过插件设置分页效果
                $('.pagination').twbsPagination({

                    totalPages: totalPage,
                    visiblePages: 7,
                    first: '首页',
                    prev: '上一页',
                    next: '下一页',
                    last: '尾页',
                    onPageClick: function (event, page) {
                        // 设置分页切换效果
                        getArticle(page);
                    }

                });
            }
        })
    }

    category.query(function (res) {
        if (res.code === 200) {
            // console.log(res);
            $('#selCategory').html(template('tmp1', res));
        }
    })

})