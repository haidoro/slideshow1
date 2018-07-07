# JavaScriptでFadeするスライダー

## 画像の移動
`document.getElementById('slideshow')`で#slideshowを特定して、`appendChild()`で#slideshowの最初の子要素を最後に移動する。最初の子要素の特定は、特定した親要素から`children[0]`を使う事で実現。これは配列となっているので、特定の子要素を指定することができる。

## タイマー
3秒ごとに画像を切り替える（移動させる）には、setInterval()を活用。

## Fade
fadein,fadeoutはCSSのクラス名で対応。opacityプロパティとtransitionで操作。JavaScriptではclass名「alt」を付け替えることのみ対応した。

HTML
```
<div id="slideshow" class="slideshow">
		<img src="imgs/room1.jpg" alt="" />
		<img src="imgs/room2.jpg" alt="" class="alt" />
		<img src="imgs/room3.jpg" alt="" class="alt" />
		<img src="imgs/room4.jpg" alt="" class="alt" />
	</div>
```

CSS
```
.slideshow{
	width:480px;
	height:320px;
	margin:0 10px 20px;
	position:relative;
	display:inline-block;
}
.slideshow img{
	position:absolute;
	top:0;
	left:0;
	border:5px solid #fff;
	opacity:1;
	transition: opacity 0.5s;
}
.slideshow img.alt{
	opacity: 0;
}
```

JavaScript
```
var slide = document.getElementById('slideshow');
setInterval(function(){
	slide.appendChild(slide.children[0]);
	slide.children[0].classList.remove('alt');
	slide.children[3].classList.add('alt');	
},3000);
```