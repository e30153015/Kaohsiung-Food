$(function () {
    $('.content').hide();
    $('#serch').click(function () {
        $('.content').show();
        $('.content-list').html('');
        axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=ed80314f-e329-4817-bfbb-2d6bc772659e&limit=287')
            .then(function (response) {
                var arr = response.data.result.records;
                arr.map(function (item) {
                    if ($('#dist').val() === (item.Zipcode !== null && item.Zipcode.slice(0, 3))) {
                        src =
                            `
               <div class="col-md-4 list">
                    <h2>${item.Name}</h2>\
                    <img src=${item.Picture1} class='img-responsive center-block'>\
                    <p class="description">${item.Description}</p>\
                    <p><i class="glyphicon glyphicon-flag"></i> 地址 - ${item.Add}</p>\
                    <p><i class="glyphicon glyphicon-earphone"></i> 電話 - ${item.Tel}</p>\
                    <p><i class="glyphicon glyphicon-time"></i> 營業時間 - ${item.Opentime}</p>\
                    <a href="https://www.google.com.tw/maps/place/${item.Add}" target=_blank>\
                        <i class="fa fa-map-marker" aria-hidden="true"></i>\
                        點我前往GoogleMap\
                      </a>\
                </div>
                            `
                        $('.content-list').append(src);
                    }
                })
            })
            .catch(function (error) {
                alert('API Error');
            });
        $('html, body').animate({
            scrollTop: $('#list').offset().top
        }, 800);
    })
})
