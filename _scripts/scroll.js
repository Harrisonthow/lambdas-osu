//not working, 
//Idea: I want to make the brothers page so that 
//each class has their individual sub-page that spans the 
//whole space, and then potentially adds pictures popups form the side
//This is obviousilly going to take a lot of work
//
//Ths scrollToClass function is suppose to on scroll up or down scroll to 
//switch from one class to another so that it alligns automatically

var classes = document.getElementsByClassName("classes");
// Don't know how to get the group filter as identification

var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');
var count = 0;
window.onscroll = function() {
    var current = window.scrollY;
    if(oldScrollY < current){
        count--;
        scrollToClass(classes[count]);
    } else if (oldScrollY > current){
        count++;
        scrollToClass(classes[count]);
    }
    oldScrollY = current;
  }

function scrollToClass(classId) {
    var element = document.getElementById(classId);
    element.scrollIntoView({ behavior: 'smooth' });
}
