const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById('code-layout').classList.add("slideIn");
      document.getElementById('target-img').classList.add("push-up");
    } else {
      document.getElementById('code-layout').classList.remove("slideIn");
      document.getElementById('target-img').classList.remove("push-up");
    }
  })
}, {
  threshold: [0.15]
})

observer.observe(document.getElementById('image-wrapper'));
