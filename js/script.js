
var PersonalInfo = document.getElementById('PersonalInfo');
var Education = document.getElementById('Education');
var Experience = document.getElementById('Experience');
var Contact = document.getElementById('Contact');


var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');



function displayPersonalInfo(){
    PersonalInfo.style.transform="translateX(0)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";
    

    btn1.style.color="#42f1f1";
    btn2.style.color="#fff";
    btn3.style.color="#fff";
    btn4.style.color="#fff";
    

    PersonalInfo.style.transitionDelay=".5s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
    

}
function displayEducation(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(0)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";
    

    btn1.style.color="#fff";
    btn2.style.color="#42f1f1";
    btn3.style.color="#fff";
    btn4.style.color="#fff";;
    

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay=".5s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
    
}
function displayExperience(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(0)";
    Contact.style.transform="translateX(100%)";
    

    btn1.style.color="#fff ";
    btn2.style.color="#fff";
    btn3.style.color="#42f1f1";
    btn4.style.color="#fff";
    

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay=".5s";
    Contact.style.transitionDelay="0s";
    
}
function displayContact(){
    
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(0)";
    

    btn1.style.color="#fff";
    btn2.style.color="#fff";
    btn3.style.color="#fff";
    btn4.style.color="#42f1f1";
    

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay=".5s";
   
}
