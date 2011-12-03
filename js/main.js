// JavaScript Document


//要素をクリックしたときにアノテーションを表示する
function showAnnotation(obj){
	//alert(obj);
$(obj).addClass("onmouse");}



//要素をクリックしたときにコメント追加ボックスを表示する
function addComment(obj){
		
}

$(document).ready(function(){
	$(".annotation").click(function(e){
		//alert("X="+e.pageX+"  Y="+e.pageY);
		//.anchorはdisplay:none
		$(e.target).after("<div class='anchor'><p class='anchor_text'>ANNOTATION COMMENT</div>");
		//.annotation_beforeの時点でdisplay:block
		//onAnnotationでアニメーションスタート
		$(".anchor").addClass("annotation_before").css("top",e.pageY-10).css("left",e.pageX-10).addClass("onAnnotation");
		//
		$(".anchor_text").addClass("showText");
		///div.anochorからmouseが去ったら閉じるアニメーションスタート 最終的にdisplay:none;
		$(".anchor").mouseleave(function(e){
				$(e.target).addClass("closeAnnotation");
				$(e.target).children(".anchor_text").addClass("hideText");		
					});
		
		});
});