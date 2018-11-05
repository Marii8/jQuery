/*
jQuery

イベント(getElement等)の場合の基本的な書き方
$('セレクタ').メソッド(引数);
セレクタ：id, className, tag名
  id = #id, className= .className, tag = tagName

cssを付け替えたりする場合
$('セレクタ').css('プロパティ名', 値);

this → イベント発生元　JSと同じ　
*/

/*JSでいう、DOMContentLoadedと同じ。この中に全て書く。*/
$(function() {

  let btn = $('#btn');
  btn.mouseover(function(){
    console.log('マウスオーバーされました。');
  })

  btn.on('mouseleave', function(){
    console.log('マウスリーブしました。');
  });

  //id#btnの親要素のhtmlを取得や値の取得方法
  console.log($('#btn').parent().html());
  console.log($('#btn').parent()); //親要素のhtml
  console.log($('#btn').text()); //テキストの内容を取得
  // テキスト内容を入れたいとき
  console.log($('#btn').text('入力したい内容をセット'));

/*
$('#btn').text()); 内容を取得
$('#btn').text(’abc’)); 文字をセット

.val() ← formに入力された内容を取得。
.attr('href', '文字列') ← 属性(href, srcなどをセットする*/


/* = document.getElementById('btn').addEventListener('click', function(){
    console.log('ボタンがクリックされました。')
})*/
  $('#btn').on('click', function() {
    console.log('ボタンがクリックされました。')
    $(this).before('<button>前に追加</button>');
    $(this).after('<button>後に追加</button>');

    // let btn = $('<button>'); //ボタンタグを作る
    // btn.text('後ろに追加') //テキストを入れる
    // $(this).after(btn);

    // let btn = $('<button>').text('後ろに追加'); //メソッドチェーンにする


    // $(this).prepend('指定された要素内の前');
    // $(this).append('指定された要素内の後ろ');


// クラスを操作
    // $(this).addClass('add');
    // $(this).removeClass('add');

// toggleクラス
    $(this).toggleClass('add');

// cssの操作
    $(this).css('color', 'blue');

//fadeOut, fadeIn
    $('.hoge').fadeOut(3000); //1000ミリ秒で1秒
    $('#btn3').on('click', function(){
      $('.hoge').fadeIn(1000); //fastやslowと指定しても
    })


    $('')

  })


  // $('#btn2').on('click mouseover', addLink); //条件をclickとmouseover複数指定できる
  $('#btn2').click(addLink); //clickメソッド


// 関数化↓
function addLink(){
    let url = $('#url').val();
    let siteName = $('#site').val();
// console.log(url, siteName);
    let a = $('<a>').attr('href',url).text(siteName);
    $(a).css('display', 'block');
// console.log(a); コンソールのhrefを確認する

    $('form').after(a);
    // $('body').append(`<a href="${url}">${siteName}</a>`) body要素内の最後に追加される。その場合、scriptの後ろにきてしまう;

  // $('#site').on('mouseout', function(){
  //       let url = $('#url').val();
  //   let siteName = $('#site').val();
  //   let a = $('<a>').attr('href',url).text(siteName);
  //   $(a).css('display', 'block');

  //   $('body').append(a);
  // })
  }



});
