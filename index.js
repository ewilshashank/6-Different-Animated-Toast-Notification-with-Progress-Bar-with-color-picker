const button = document.querySelector('button'),
    toast = document.querySelector('.toast')
closeIcon = document.querySelector('.close'),
    progress = document.querySelector('.progress');


button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);
});

const button1 = document.querySelectorAll('button')[1],
    toast1 = document.querySelectorAll('.toast')[1]
closeIcon1 = document.querySelectorAll('.close')[1],
    progress1 = document.querySelectorAll('.progress')[1];

button1.addEventListener("click", () => {
    toast1.classList.add("active");
    progress1.classList.add("active");

    setTimeout(() => {
        toast1.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress1.classList.remove("active");
    }, 5300);
});

closeIcon1.addEventListener("click", () => {
    toast1.classList.remove("active");
    setTimeout(() => {
        progress1.classList.remove("active");
    }, 300);
});

const button2 = document.querySelectorAll('button')[2],
    toast2 = document.querySelectorAll('.toast')[2]
closeIcon2 = document.querySelectorAll('.close')[2],
    progress2 = document.querySelectorAll('.progress')[2];

button2.addEventListener("click", () => {
    toast2.classList.add("active");
    progress2.classList.add("active");

    setTimeout(() => {
        toast2.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress2.classList.remove("active");
    }, 5300);
});

closeIcon2.addEventListener("click", () => {
    toast2.classList.remove("active");
    setTimeout(() => {
        progress2.classList.remove("active");
    }, 300);
})

const button3 = document.querySelectorAll('button')[3],
    toast3 = document.querySelectorAll('.toast')[3]
closeIcon3 = document.querySelectorAll('.close')[3],
    progress3 = document.querySelectorAll('.progress')[3];

button3.addEventListener("click", () => {
    toast3.classList.add("active");
    progress3.classList.add("active");

    setTimeout(() => {
        toast3.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress3.classList.remove("active");
    }, 5300);
});

closeIcon3.addEventListener("click", () => {
    toast3.classList.remove("active");
    setTimeout(() => {
        progress3.classList.remove("active");
    }, 300);
})

const button4 = document.querySelectorAll('button')[4],
    toast4 = document.querySelectorAll('.toast')[4]
closeIcon4 = document.querySelectorAll('.close')[4],
    progress4 = document.querySelectorAll('.progress')[4];

button4.addEventListener("click", () => {
    toast4.classList.add("active");
    progress4.classList.add("active");

    setTimeout(() => {
        toast4.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress4.classList.remove("active");
    }, 5300);
});

closeIcon4.addEventListener("click", () => {
    toast4.classList.remove("active");
    setTimeout(() => {
        progress4.classList.remove("active");
    }, 300);
})

const button5 = document.querySelectorAll('button')[5],
    toast5 = document.querySelectorAll('.toast')[5]
closeIcon5 = document.querySelectorAll('.close')[5],
    progress5 = document.querySelectorAll('.progress')[5];

button5.addEventListener("click", () => {
    toast5.classList.add("active");
    progress5.classList.add("active");

    setTimeout(() => {
        toast5.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        progress5.classList.remove("active");
    }, 5300);
});

closeIcon5.addEventListener("click", () => {
    toast5.classList.remove("active");
    setTimeout(() => {
        progress5.classList.remove("active");
    }, 300);
})