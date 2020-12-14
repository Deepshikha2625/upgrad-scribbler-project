//For Edit and Save Button Snippet
var j="editButton";
var numberOfLikes=0;
function edit_and_save(){
    var postArea=document.getElementById('postContent');
    if(j=="editButton"){
        j="saveButton";
        postArea.contentEditable="true";
        postArea.style.border="2px solid lightblue";  
        document.getElementById('buttonText').innerHTML="Save";
        document.getElementById('buttonSymbol').setAttribute('class','fa fa-save');
    }
    else if(j=="saveButton"){
        j="editButton";
        postArea.contentEditable="false";
        postArea.style.border="0px solid lightblue";  
        document.getElementById('buttonText').innerHTML="Edit";
        document.getElementById('buttonSymbol').setAttribute('class','fa fa-edit');
    }
}
//Snippet For Like activation 
function likeUpdate(){
    var j=document.getElementById('likeButton');
    if(numberOfLikes==0){
        numberOfLikes++;
        j.innerHTML='Liked!';
        document.getElementById('like-active').innerHTML="1 person likes this!";
    }
    else if(numberOfLikes>0){
        numberOfLikes++;
        j.innerHTML='Liked!';
        document.getElementById('like-active').innerHTML= numberOfLikes+" people have liked this!";
    }
}

// Snippet for comment button
function addcomment(id){
    console.log(id.value);
    document.getElementById('comment-Add-activation').innerHTML+='<p id="addcomment">'+id.value+'</p>';
      var input=document.getElementById('usercomment');
      input.value="";
      input.placeholder="Leave a comment...";
    document.getElementById('usercomment').value=""
}