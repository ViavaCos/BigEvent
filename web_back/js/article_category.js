$(function () {
    category.query(function (res) {
        console.log(res);
        if (res.code === 200) {
            // var htmlStr = template('tmp', res);
            // $('#categoryWrapper tbody').html(htmlStr);
            // console.log(htmlStr);

            // 利用模板引擎，将数据和模板渲染成html结构
            $('#categoryWrapper tbody').html(template('tmp', res));
        }
    })

})