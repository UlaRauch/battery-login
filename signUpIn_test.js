document.addEventListener("DOMContentLoaded", function (event) {


    document.getElementById("goToSignUp").addEventListener("click", function () {
        openSignUpInForm("goToSignUp", "signupform", event)
    });
    document.getElementById("goToSignIn").addEventListener("click", function () {
        openSignUpInForm("goToSignIn", "signinform", event)
    });

    function openSignUpInForm(tab_id, tabcontent_id, event) {
        console.log("tab function called")

        let otherTabContent_id;
        let otherTab_id;

        if (tab_id === "goToSignIn") {
            otherTabContent_id = "signupform";
            otherTab_id = "goToSignUp";
        } else {
            otherTabContent_id = "signinform";
            otherTab_id = "goToSignIn";
        }

        document.getElementById(tabcontent_id).style.display = "block";
        console.log("style of tab " + tabcontent_id + " = block");
        document.getElementById(otherTabContent_id).style.display = "none";

        document.getElementById(tab_id).className = "tab";
        document.getElementById(otherTab_id).className = "tab active";
    }
});
/*

//tutorial: https://rudrastyh.com/javascript/tabs.html
function openSignUpInForm(tab_id, tabcontent_id, event) {
        /*
        let i;
        let tabcontent; //x
        let tablinks;

        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) { //hat nicht funktioniert
            tabcontent[i].style.display = 'none';
            console.log("set " + tabcontent[i] + " to none");
            document.getElementById(tabcontent_id).style.display = 'block';
            console.log(tabcontent_id + " should now be visible");
        }

        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = 'tab';
        }
        document.getElementById(tab_id).className = 'tab active';
    }
});
         */
/*
//code von https://www.templatemonster.com/blog/html5-css3-registration-forms/
für übungszwecke übernommen, funktioniert aktuell nicht
$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > section').not(target).hide();

    $(target).fadeIn(600);

});
*/