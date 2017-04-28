$(function(){

	var ref=new Firebase(
		"https://merovex-comments.firebaseio.com/"),
		postRef=ref.child(slugify(window.location.pathname)
	);
	postRef.on("child_added",function(snapshot){
		var post=snapshot.val();
		console.log(post);
		// if (post.keep != ''){
			$(".comments").prepend('<div class="comment row">'+"<h4>"+post.name+"</h4>"+'<div class="profile-image"><img src="http://www.gravatar.com/avatar/'+post.md5Email+'?s=100&d=retro"/></div> '+'<span class="date">'+moment(post.timestamp).fromNow()+"</span><p>"+post.message+"</p></div>")
		// }
	});

	$("#comment").submit(function(){
		var a=postRef.push();
		console.log(a);
		var v=$("#b_9x58ff43d5b0de49bac9ad4e21_72de3b22a5").val();
		a.set({
			name:       $("#name").val(),
			message:    $("#message").val().substring(0,2500),
			md5Email:   md5($("#email").val()),
			keep: 		v, 
			timestamp:   Firebase.ServerValue.TIMESTAMP
		});

		$("input[type=text], textarea").val("");
		return false
	})
});

function slugify(text){
	return text.toString().toLowerCase().trim().replace(/&/g, "-and-").replace(/[\s\W-]+/g,"-").replace(/[^a-zA-Z0-9-_]+/g,"")
}
