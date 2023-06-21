const observerPointy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('extContainerCont').classList.add("slideLeft");
        document.getElementById('logoContiner').classList.add("slideUp");
      } else {
        document.getElementById('extContainerCont').classList.remove("slideLeft");
        document.getElementById('logoContiner').classList.remove("slideUp");
      }
    })
  }, {
    threshold: [0.15]
  })
  
  observerPointy.observe(document.getElementById('ext-containerBody'));
  