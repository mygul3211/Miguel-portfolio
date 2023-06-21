const observerPoint = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('extendedContainer').classList.add("slideRight");
        document.getElementById('Logocontainer').classList.add("move-up");
     
      } else {
        document.getElementById('extendedContainer').classList.remove("slideRight");
        document.getElementById('Logocontainer').classList.remove("move-up");
      }
    })
  }, {
    threshold: [0.15]
  })
  
  observerPoint.observe(document.getElementById('observerPoint'));
  