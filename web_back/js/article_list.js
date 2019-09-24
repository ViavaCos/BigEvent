$(function () {
    // 隐藏提示框
    $('#tips').hide();

    var totalPage = '';
    var type = '';
    var state = '';
    var currentPage = '';
    var id;

    getArticle();
    // 页面载入后获取数据
    function getArticle() {
        article.query({
            page: currentPage,
            type: type,
            state: state
        }, function (res) {
            // console.log(res);
            if (res.code === 200) {
                $('#articleContent').html(template('tmp', res));
                if (totalPage != res.totalPage) {
                    totalPage = res.totalPage;

                    // 摧毁重建
                    $('.pagination').twbsPagination('destroy');

                }

                // $('.pagination').twbsPagination('destroy');
                // totalPage = res.totalPage;
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
                        currentPage = page;
                        getArticle();
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


    // 筛选功能
    $('#btnSearch').click(function () {
        // alert(1);

        type = $('#selCategory').val();
        state = $('#selStatus').val();

        // console.log(type, state);

        getArticle();
    })


    // 删除功能
    $('#articleContent').on('click', '.del', function () {
        $('#myModal').modal('show');
        id = $(this).attr('data-id');

        // 隐藏提示框
        $('#tips').hide();
        
    })
    $('#exit').click(function () {
        article.del(id, function (res) {
            // console.log(res);

            if (res.code === 200) {
                getArticle();
                $('#myModal').modal('hide');
            } else {
                $('#tips').show().text(res.msg);
            }
        })
    })

})