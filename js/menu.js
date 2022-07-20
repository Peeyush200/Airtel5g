var menuList = document.getElementById("menu_list");
var selectBtnMobile = document.getElementById("select_btn_mobile");
var containerSection = document.querySelector(".container");
var menuHeight = menuList.clientHeight;

function menuListFunction(e) {
  if (e && e.target && e.target.attributes && e.target.attributes.data && e.target.attributes.data.nodeValue) {
    var getIdSection = e.target.attributes.data.nodeValue;
    var sectionTopOffset = document.getElementById(getIdSection).offsetTop;
    window.scroll({ top: sectionTopOffset - menuHeight, left: 0, behavior: "smooth" });
  }
}

function windowOnScroll() {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    var menuListItem = menuList.querySelectorAll("li");
    if (menuListItem) {
      for (var i = 0; i < menuListItem.length; i++) {
        var picId = menuListItem[i].querySelector("a").getAttribute("data");
        var offsetTop = document.getElementById(picId).offsetTop;
        var secHeight = document.getElementById(picId).clientHeight;
        if (offsetTop - scrollPosY - menuHeight <= 3) {
          menuListItem[i].className = "active";
          selectBtnMobile.innerText=menuListItem[i].children[0].innerHTML;
        } else {
          menuListItem[i].className = "";
        }
        if (offsetTop - scrollPosY - menuHeight + secHeight <= 0) {
          menuListItem[i].className = "";
        }
      }
    }
}

function selectBtnMobileFunction(event) {
  if (containerSection) {
    containerSection.classList.toggle("active");
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#select_btn_mobile')) {
    if (containerSection.classList.contains('active')) {
      containerSection.classList.remove('active');
    }
  }
}

menuList.addEventListener("click", menuListFunction);
window.addEventListener("scroll", windowOnScroll);
selectBtnMobile.addEventListener("click", selectBtnMobileFunction);
