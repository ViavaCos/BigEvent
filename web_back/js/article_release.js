$(function () {
    // 设置提示框隐藏
    $('#myModal').modal('hide');

    // 设置自动获取文章类别
    category.query(function (res) {
        // console.log(res);
        $('#categoryContent').html(template('tmp', res));
    })

    // 测试
    // $('#categoryContent').change(function () {
    //     console.log($(this).val())
    // })
})

function getNewArticle(type) {

    var fd = new FormData($('#myform')[0]);

    fd.append('state', type);

    fd.set('content', tinyMCE.activeEditor.getContent())

    article.add(fd, function (res) {
        console.log(res);

        if (res.code === 201) {
            // 清空输入框内的数据
            $('#articleTitle').val('');
            $('#exampleInputFile').val('');
            tinyMCE.activeEditor.setContent('');

            window.location.href = './article_list.html';
        } else {
            $('#myModal').modal('show');
            $('#tips').text(res.msg);
        }
    })

}

// 发布功能
$('#articleAdd').click(function () {
    // alert(1);
    getNewArticle('已发布');
})

// 存为草稿
$('#saveAsDraft').click(function () {
    getNewArticle('草稿');
})


