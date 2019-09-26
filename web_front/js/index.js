$(function () {
    article.query({
        perpage: 5
    }, function (res) {
        console.log(res);
        $('#focus_list').html(template('tmp', res));
    })
})