$(function () {

    function getArticleId(str) {
        str = str.substr(1);

        var tempArr = str.split('&');
        var tempObj = {}

        tempArr.forEach(function (item) {
            item = item.split('=');
            tempObj[item[0]] = item[1]
            // console.log(item)
        });

        return tempObj;
    }

    function formatTime(time) {

        time = (Date.now() - time) / 1000;
        var day = Math.floor(time / (24 * 3600));
        var hours = Math.floor(time % (24 * 3600) / 3600);
        var minutes = Math.floor(time % (24 * 3600) % 3600 / 60);

        var timeStr = '';
        var flag = false;

        if (day > 0) {
            timeStr += day + '天';
            flag = true;
        }

        if (hours > 0) {
            timeStr += hours + '小时';
            flag = true;
        }

        if (minutes > 0) {
            timeStr += minutes + '分钟';
            flag = true;
        }

        timeStr += '之前';

        if (!flag) {
            timeStr = '刚刚';
        }


        return timeStr;

        // console.log(day, hours, minutes);
    }

    // formatTime(1569384400535);

    // var id = window.location.search.substr(4);
    var id = window.location.search;
    id = getArticleId(id).id;

    article.query({
        id: id
    }, function (res) {
        // console.log(res);
        if (res.code === 200) {
            var data = res.data;
            $('#article_title').text(data.title);
            $('#article_author').text(data.author);
            $('#article_read').text(data.read);
            $('#article_comment').text(data.comment);
            $('#article_date').text(data.date);
            $('#article_type').text(data.type);
            $('#article_content').html(data.content);
        }
    })
    // 获取评论信息
    showComment();

    function showComment() {
        details.query(id, function (res) {
            // console.log(res);
            if (res.code === 200) {

                res.data.forEach(function (item) {
                    item.dt = formatTime(item.dt);
                    // console.log(item);
                })
                // template.defaults.imports.formatTime = formatTime;
                $('#comment_list').html(template('tmp', res));
            }
        })
    }
    // 点击发表评论
    $('#btnAdd').click(function () {

        var name = $('.comment_name').val().trim();
        var content = $('.comment_input').val().trim();

        if (name === '' || content === '') {
            $('#myModal').modal('show');
            return;
        }

        // console.log(name, content, id);

        details.add({
            name: name,
            content: content,
            article_id: id
        }, function (res) {
            // console.log(res);
            if (res.code === 200) {
                showComment();
                $('.comment_name').val('');
                $('.comment_input').val('');
            }
        })
    })


})