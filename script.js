let navBtn =document.getElementById('nav-btn')

navBtn.addEventListener("click" , function(){
    let sideCon =document.querySelector('.side-container')
    let mainCon =document.querySelector('.main-container')

    mainCon.style.width = "80%"

    sideCon.style.display = "block"



    let closeSidecon = document.getElementById('close-sidecon')
    closeSidecon.addEventListener("click" , function(){
        mainCon.style.width = "100%"
        sideCon.style.display = "none"

    })
})



let list11=[ {'MainCategory':'Setup','SubCategory':'OnboardProcess','Menulist':'List1'},
    {'MainCategory':'Setup','SubCategory':'OnboardProcess','Menulist':'List2'},
    {'MainCategory':'Setup','SubCategory':'OnboardProcess','Menulist':'List3'},
    {'MainCategory':'Setup','SubCategory':'OnboardProcess','Menulist':'List4'},
    {'MainCategory':'Setup','SubCategory':'EmployeeGroup','Menulist':'List1' },
    {'MainCategory':'Setup','SubCategory':'EmployeeGroup','Menulist':'List2'},
];





let listOflist =document.querySelector('.listOflist')
let list =document.querySelector('.li-1')
let listOflist1 =document.querySelector('.listOflist1')
let list1 =document.querySelector('.li-2')
let listOflist2 =document.querySelector('.listOflist2')
let list2 =document.querySelector('.li-3')



list.addEventListener('click', function() {
    if (listOflist.style.display === 'none' || listOflist.style.display === '') {
      listOflist.style.display = 'block'; 
    } else {
      listOflist.style.display = 'none'; 
    }

    listOflist1.style.display = 'none'; 
    listOflist2.style.display = 'none'; 

    
  });
  list1.addEventListener('click', function() {
    if (listOflist1.style.display === 'none' || listOflist1.style.display === '') {
      listOflist1.style.display = 'block';
    } else {
      listOflist1.style.display = 'none'; 
    }
    listOflist.style.display = 'none'; 
    listOflist2.style.display = 'none'; 

  });

  list2.addEventListener('click', function() {
    if (listOflist2.style.display === 'none' || listOflist2.style.display === '') {
      listOflist2.style.display = 'block'; 
    } else {
      listOflist2.style.display = 'none'; 
    }
    listOflist.style.display = 'none'; 
    listOflist1.style.display = 'none'; 

  });


