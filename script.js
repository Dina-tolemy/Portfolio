var img1=$('<img src="./assets/Images/Arena.jpg" style="width:400px; hieght=600px;">');
var img3=$('<img src="https://user-images.githubusercontent.com/55872249/70845940-8a309480-1ea8-11ea-8368-95d737dc55ce.png" alt="weather2" style="width:400px; hieght=600px;"></img>');
var img2=$('<img src="https://user-images.githubusercontent.com/55872249/70368243-3fd57380-18fc-11ea-91f5-2a26903189b8.png" alt="Annotation 2019-12-07 141045"style="width:400px; hieght=600px; ">');
var img5=$('<img src="https://user-images.githubusercontent.com/55872249/74914360-6b093280-5416-11ea-8a7f-fe7fd11a8a09.png"> alt="Eat-Da-Burger" style="width:400px; hieght=600px;')
var img4=$('<img src="https://user-images.githubusercontent.com/55872249/69898061-4b7ae480-13a8-11ea-8d23-25adb9a0c01e.png" alt="correct" style="width:400px; hieght=600px;">');
$(document).ready(function(){
   
   

    $(".project1").on("click", function(){
       
        $('.projectGitLink').html('<a href="https://github.com/Jasper8628/GroupProjectOne">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://jasper8628.github.io/GroupProjectOne/">Project link</a>');
        $('.projectStory').html("It's a site that allows the players of the magic gathering game to search the cards depending on varaity of serch methods and build their own card deck and import it to the game");
        $('.projectStory').append('</br>');
        $('.projectStory').append(img1);
    });
    $(".project2").on("click", function() { 
        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Day-planner">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Day-planner/">Project link</a>');
        $('.projectStory').html("It's a site that allows the user to save all his important meetings and tasks during the work day"+"</br>"+" from 9 AM till 5 PM");
        $('.projectStory').append('</br>');
        $('.projectStory').append(img2);
    });
    $(".project3").on("click", function project3Function() {

        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Weather-Dashboard">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Weather-Dashboard/.">Project link</a>');
        $('.projectStory').html("It's a site that allows the user to know the weather in details for 5 days depending on the city he searchs for, also it saves the cities that has been searched for, so you can return to it any time ");
        $('.projectStory').append('</br>');
       $('.projectStory').append(img3);

     });

     $(".project4").on("click", function() { 
        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Coding-quiz">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Coding-quiz/">Project link</a>');
        $('.projectStory').html("It's a simple Java script quiz with a timer and the score is the time left."+"</br>"+"it shows the score at the end and it keeps the scores and shows the highest");
        $('.projectStory').append('</br>');
        $('.projectStory').append(img4);
    });

    $(".project5").on("click", function() { 
        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Eat-Da-Burger">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href=" https://sheltered-island-53524.herokuapp.com/">Project link</a>');
        $('.projectStory').html("It's burger logger with MySQL, Node, Express, Handlebars and ORM ."+"</br>"+"It lets the user save their burgers and devour it.");
        $('.projectStory').append('</br>');
        $('.projectStory').append(img5);
    });


  });





