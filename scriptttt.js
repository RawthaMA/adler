let sideCon = document.querySelector('.side-container')
let menu = document.getElementById('menu')

let drawer = document.querySelector('.drawer')


menu.addEventListener('click', function () {
   
    if (sideCon.style.width === '4%') {
        sideCon.style.width = '15%';
        sideCon.style.transition = '1s'
    } else {
        sideCon.style.width = '4%';
        sideCon.style.transition = '1s'
    }
    // sidenav js ends here!!

    if (drawer.style.top === '-300px') {
        drawer.style.top = '56px';
        drawer.style.transition = '1s'


    } else {
        drawer.style.top = '-300px';
        drawer.style.transition = '1s'
    }
});




// menuDropDown starts here >>>>>>

let listOflist = document.querySelector('.listOflist')
let list = document.querySelector('.li-1')
let listOflist1 = document.querySelector('.listOflist1')
let list1 = document.querySelector('.li-2')
let listOflist2 = document.querySelector('.listOflist2')
let list2 = document.querySelector('.li-3')


list.addEventListener('click', function () {
    listOflist.classList.toggle('open');
    listOflist1.classList.remove('open');
    listOflist2.classList.remove('open');
});

list1.addEventListener('click', function () {
    listOflist1.classList.toggle('open');
    listOflist.classList.remove('open');
    listOflist2.classList.remove('open');
});

list2.addEventListener('click', function () {
    listOflist2.classList.toggle('open');
    listOflist.classList.remove('open');
    listOflist1.classList.remove('open');
});

