$(function () {
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