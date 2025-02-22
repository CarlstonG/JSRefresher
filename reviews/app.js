// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let currenItem = 0;

  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currenItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  })

//   function showPerson(person) {

//   }
  const showPerson = (person) => {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContext = item.name;
        job.textContent = item.job;
        info.textContent = item.text;

  }

nextBtn.addEventListener('click', function () {
    // currenItem++;
    // if (currenItem > reviews.length - 1){
    //     currenItem = 0;
    // }
    // showPerson(currenItem);

    //   ternary 
    currenItem = (currenItem + 1) > (reviews.length - 1) ? 0 : (currenItem + 1);
    showPerson(currenItem);

})
prevBtn.addEventListener('click', function () {
//     currenItem--;
//     if (currenItem < 0){
//     currenItem > reviews.length - 1

// }
//     showPerson(currenItem);

    //   ternary 
   currenItem = (currenItem + 1) < (reviews.length - 1) ? 0 : (currenItem - 1);
   showPerson(currenItem);

})
// show random person
randomBtn.addEventListener('click', function () {

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });