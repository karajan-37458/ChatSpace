$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox">
          <div class="Message-username-date">
            <div class="Message-username-date__username">
              ${message.user_name}
            </div>
            <div class="Message-username-date__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__text">
              ${message.body}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox">
        <div class="Message-username-date">
          <div class="Message-username-date__username">
            ${message.user_name}
          </div>
          <div class="Message-username-date__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__text">
            ${message.body}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $(".Form").on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }) 
    .done(function(data){
      let html = buildHTML(data);
      $('.Message-list').append(html);
      $('.Message-list').animate({ scrollTop: $('.Message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});