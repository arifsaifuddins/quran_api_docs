function ToTop() {
  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".topscroll")

    if (window.pageYOffset >= 300) {
      toTop.classList.remove('hidden')
      toTop.classList.add('block')
    } else {
      toTop.classList.remove('block')
      toTop.classList.add('hidden')
    }
  })

  return (
    <a href="#" className="topscroll hidden">
      <i className="fixed bottom-10 mr-4 md:mr-[5%] right-0  dark:bg-green-600 dark:hover:bg-green-500  bg-green-500 px-3 py-1 cursor-pointer hover:bg-green-600 rounded-xl text-2xl w-max text-white font-bold z-10 fa fa-angle-up"></i>
    </a>
  );
}

export default ToTop;