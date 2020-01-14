

$(document).ready(function(){
    $(".project1").on("click", function(){
       
        $('.projectGitLink').html('<a href="https://github.com/Jasper8628/GroupProjectOne">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://jasper8628.github.io/GroupProjectOne/">Project link</a>');
        $('.projectStory').html("It's a site that allows the players of the magic gathering game"+"</br>"+"to search the cards depending on varaity of serch methods and build their own card deck and import it to the game");

    });
    $(".project2").on("click", function() { 
        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Day-planner">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Day-planner/">Project link</a>');
        $('.projectStory').html("It's a site that allows the user to save all his important meetings and tasks during the work day"+"</br>"+" from 9 AM till 5 PM");
    });
    $(".project3").on("click", function project3Function() {

        $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Weather-Dashboard">GiHub Page</a>');
        $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Weather-Dashboard/.">Project link</a>');
        $('.projectStory').html("It's a site that allows the user to know the weather in details for 5 days depending on the city he searchs for, also it saves the cities that has been searched for, so you can return to it any time ");
     });

  });





