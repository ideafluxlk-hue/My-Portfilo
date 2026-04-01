/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('shadow-header') 
                         : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== PORTFOLIO TABS ===============*/
const tabs = document.querySelectorAll('.portfolio__tab'),
      contents = document.querySelectorAll('.portfolio__content')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        contents.forEach(content =>{
            content.classList.remove('active-content')
        })
        target.classList.add('active-content')

        tabs.forEach(tab =>{
            tab.classList.remove('active-tab')
        })
        tab.classList.add('active-tab')
    })
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        }
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUpElement = document.getElementById('scroll-up')
	window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll')
						  : scrollUpElement.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== BACKGROUND MUSIC ===============*/
const musicToggle = document.getElementById('music-toggle'),
      bgMusic = document.getElementById('bg-music');
let isPlaying = false;

if(musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
        if(isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('music-playing');
            musicToggle.innerHTML = "<i class='bx bx-music'></i>";
        } else {
            bgMusic.play().catch(error => {
                console.log("Audio play failed:", error);
            });
            musicToggle.classList.add('music-playing');
            musicToggle.innerHTML = "<i class='bx bx-pause' ></i>";
        }
        isPlaying = !isPlaying;
    });
}
