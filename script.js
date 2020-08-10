var news_list = [
    "情報メディア学科の卒業生 高須さん（発表時，情報メディア学科4年生）が情報処理学会第82回全国大会で⼤会奨励賞を受賞",
    "情報メディア学専攻2年生 河村さんと，情報メディ学科4年生 高須さんが情報処理学会第82回全国大会にて，学生奨励賞を...",
    "情報メディア学科 西尾さんが「優秀発表賞」を受賞",
    "情報メディア学専攻 奥田さんが「映像メディア学会」、「東京公共交通オープンデータチャレンジ」で受賞"
]

var unit = [
    {title: "クリエイティブな視点とテクノロジの視点から情報メディア学を総合的に学ぶ", text: "情報メディア学は、セキュリティ、Web空間、IoTの情報分野、CG/VR、映像、サウンドのデジタル表現技術からなり、人や社会とコンピュータとのあり方などを含む幅広い学問です。"},
    {title: "3つの研究分野", text: "情報メディア学を学ぶために、当学科では、３つの研究分野（セキュリティ／Web空間、デジタル表現、IoT／センシング）から構成されています。"},
    {title: "4ユニットからなる専門科目群", text: "これらの研究領域を学ぶために、4つのユニットから構成される専門科目群を配置しています。希望する将来の職業、希望進路に応じ、各ユニットを組み合わせることができます。特に、各ユニットの演習では、学んできた知識や技術を活かした創造的な力を養い、情報メディア社会を先導している先端的領域の専門性を着実に修得することができます。"}
]

var lab_info = [
    { name: "情報セキュリティ研究室", title: "サイバーセキュリティ技術に関する研究", text: "情報セキュリティ研究室では、安全安心な社会基盤の実現を目指し、サイバーセキュリティ技術分野(ネットワークセキュリティ、暗号、リスクマネジメント、CSIRT運用等）を研究テーマとしています。サイバーセキュリティの世界は、刻々と変化し続ける新たな脅威を意識しておく必要があります。..." },
    { name: "Web工学研究室", title: "IT技術を用いてWebを人の役に立てる研究", text: "インターネット上には多種多様な情報が数多く存在します。Wikipadiaやソーシャルネットワークなど、複数の人々が協力して作りあげている集合知は有効な知識源です。これらの情報から必要な部分だけを抜き出したり、統合して有効活用することが望まれます。..." },
    { name: "先端情報システム研究室", title: "システムズ・エンジニアリング応用の異文化コミュニケーション技術の研究。", text: "インターネットの進展の中で、既存組織の垣根（製造業、金融業などの間の壁）が崩れ、不特定多数の組織・個人が有機的に繋がって新規ビジネスを興すことが可能となってきました。そこでは、異文化組織・個人の間で多様なサービス･機能が生まれつつあります。" },
    { name: "先端情報システム研究室", title : "自然言語処理の基礎と応用に関する研究", text: "人は言葉を用いて、意思や感情、知識や思想を伝えています。この言葉には、話し言葉、書き言葉だけでなく、手話、ボディランゲイジ、アイコンタクトも含まれます。また、世界中には、様々な母国語が存在しています。..." },
    { name: "知的メディア研究グループ", title: "ソーシャルメディアを活用するための知的処理技術の研究", text: "LINE, Twitterに代表されるソーシャルメディアは、人々の日々の思いを反映する巨大なテキスト情報です。そこで話される内容やユーザ同士の関係を分析することで、世論の動向から友達関係の深さまで、幅広い情報を得ることができます。..." },
    { name: "音メディア表現研究室", title: "複合メディアによるコンピュータ音楽と対話の研究", text: "当研究室は、コンピュータ音楽と音声対話システムの二つを大きな柱として研究しています。コンピュータ音楽では、デジタル表現ならではの新たなエフェクトとしてのモーフィング音、や音色変換合成を行っています。また映像や舞踊との複合メディアの自動生成、および作品制作も行っています。..." },
    { name: "コンピュータグラフィック研究室", title: "コンピュータグラフィックスとアニメーション・ゲームの研究", text: "実写と見分けがつかないレベルのCG映像をつくる技術や、イラストや貼り絵のように人間の描く絵を創り出す技術、漫画のテクニックを使ったアニメーション技術や，VRを活用したシステム，また超高解像度コンテンツなど，新しいコンテンツ制作技術を研究しています。" },
    { name: "ビジュアルコンピューティング研究室", title: "画像・映像コンテンツの視覚心理に関する研究", text: "情報化が進むと共に、大画面・高精細のディスプレイで画像・映像コンテンツを眼にする機会が増えてきています。私たちのメディア応用研究室では、画像・映像を評価してみようということで、視覚心理の観点から、大画面表示における臨場感表示の研究、" },
    { name: "メディア応用研究室", title: "画像・映像コンテンツの視覚心理に関する研究", text: "情報化が進むと共に、大画面・高精細のディスプレイで画像・映像コンテンツを眼にする機会が増えてきています。私たちのメディア応用研究室では、画像・映像を評価してみようということで、視覚心理の観点から、大画面表示における臨場感表示の研究。..." },
    { name: "アクセシブルテクノロジー研究室", title: "人間情報工学・アクセシブルデザイン・コミュニケーション支援技術の研究", text: "情報技術の発展により、人と情報機器との共存場面が増し、人間の情報処理機能の理解やコミュニケーション支援技術の開発が重要になってきました。このために当研究室では、人間中心設計というキーワードを挙げ、人の生活を豊かにする電子情報支援技術に関する研究をしています。..." },
    { name: "知的計算システム研究室", title: "コンピュータを高速かつ知的にする研究", text: "当研究室では、画像や映像を知的に処理し、人々の暮らしに役立てる事を主な目的としています。具体的には映像内の人の行動や特定物体の高速認識、イラスト等の画像生成、拡張現実感などの研究を行っています。..." },
    { name: "実空間コンピューティング", title: "IoTとモバイル技術で安心安全社会を目指す", text: "岩井研究室は、スマートフォンやIoTを中心とした環境センサ、ウエアラブルセンサにより人々の生活を支援し、安心安全を保つ社会を目指しています。経済的なコストと使い易さを考慮し、高信頼、省電力を実現した持続可能なシステムの構築を目指します。..." },
    { name: "エネルギー情報システム研究グループ", title: "風力発電システムに関する研究", text: "近年、環境汚染、地球温暖化などの問題が深刻になっています。風力、太陽光に代表される再生可能エネルギーの利用は、これらの諸問題に対する有力な対策の一つです。当研究室では、効率的に風の持つエネルギーを電力に変換するための電力変換システムや、風力発電機の制御方法等に関する研究を行っています。" }
];

var carousel = [
    {title: "野中 直樹さん", text: "実空間コンピューティング研究室（岩井研究室）所属" },
    {title: "野澤 奈央さん", text: "ビジュアルコンピューティング研究室（高橋研究室）所属"},
    {title: "　M.E.さん　", text: "メディア応用研究室（鉄谷・井ノ上研究室）所属"}
];



$(document).ready(function(){
  for(var i in news_list){
      $('#news-list').append('<div class="list-group-item list-group-item-action fade_off"><p>'+news_list[i]+'</p></div>');
  }
  for(var i in lab_info){
    $("#lab-icon").append('<a class="list-group-item list-group-item-action show fade_off" id="list-menu-'+i+'" data-toggle="list" href="#tab-content-'+i+'"role="tab" aria-controls="tab-content-'+i+'">'+lab_info[i]["name"]+'</a>');
    $("#lab-details").append('<div class="tab-pane fade position-absolute" id="tab-content-'+i+'" role="tabpanel" aria-labelledby="tab-menu-'+i+'"></div>');
    if(i==0 || i==6 || i==8 || i==9){
      $('#tab-content-'+i).append('<h3 class="lab-title">'+lab_info[i]["name"]+'</h3><img src="./img/lab-img-'+i+'.png" class="lab-imgs"><img src="./img/lab-img-'+i+'-2.png" class="lab-imgs"><h5 class="lab-sub-title">'+lab_info[i]["title"]+'</h5><p class="lab-explanation">'+lab_info[i]["text"]+'</p><button type="button" class="btn btn-outline-info m-4 lab-btn">details　></button>');
    }else{
      $('#tab-content-'+i).append('<h3 class="lab-title">'+lab_info[i]["name"]+'</h3><img src="./img/lab-img-'+i+'.png" class="lab-imgs"><h5 class="lab-sub-title">'+lab_info[i]["title"]+'</h5><p class="lab-explanation">'+lab_info[i]["text"]+'</p><button type="button" class="btn btn-outline-info m-4 lab-btn">details　></button>');
    }
  };
  for(var i in unit){
    $('.unit').eq(i).html('<div class="col-md"><div class="m-3 pt-2"><h4>'+unit[i]["title"]+'</h4></div><div class="p-4"><p>'+unit[i]["text"]+'</p></div></div>');
  }
  for(var i in carousel){
    $('#carousel-item')
      .append('<div class="carousel-item"><img src="./img/student-'+i+'.jpg" class="slide-img"><div class="carousel-caption d-none d-md-block"><h5 class="slide-text rounded">　'+carousel[i]["title"] +'　</h5><p class="slide-text rounded">　'+carousel[i]["text"]+'　</p></div></div>');
  }
  $('.list-group-item-action').eq(news_list.length).addClass('active show');
  $('.tab-pane').eq(0).addClass('active show');
  $('.carousel-item').eq(0).addClass('active');
});

$(function (){
    //ロード後
    $('.myfade').addClass('fade_in');
    $('.mainfade').addClass('mainfade_in');
  
    //要素が可視範囲に入ったら
    $(window).scroll(function (){
      $(".fade_off").each(function(){
  
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (scroll > imgPos - windowHeight + windowHeight/6){
          $(this).addClass("fade_on");
        } else {
          // $(this).removeClass("fade_on");  //見えなくなった際の再消しは無し
        }
      });
    });
  
    // スクロールのオフセット値
    var offsetY = -10;
    // スクロールにかかる時間
    var time = 500;
    // ページ内リンクのみを取得
    $('a[href^=#]').click(function() {
      // 移動先となる要素を取得
      var target = $(this.hash);
      if (!target.length) return ;
      // 移動先となる値
      var targetY = target.offset().top+offsetY;
      // スクロールアニメーション
      $('html,body').animate({scrollTop: targetY}, time, 'swing');
      // ハッシュ書き換えとく
      window.history.pushState(null, null, this.hash);
      // デフォルトの処理はキャンセル
      return false;
    });
  });