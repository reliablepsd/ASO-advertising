var $ = jQuery.noConflict()
jQuery(function () {
  isElementExist(".flavor-row-new", btnMore)
})

// Helper if element exist then call function
function isElementExist(_el, _cb) {
  var elem = document.querySelector(_el)

  if (document.body.contains(elem)) {
    try {
      _cb()
    } catch (e) {
      console.log(e)
    }
  }
}

function btnMore() {
  jQuery(".flavor-row-new").each(function (index, element) {
    const startElement = 32;
    const amountElement = 18;
    const $this = jQuery(this);
    const $flavorItems = $this.find(".flavor-new-item");
    const amountFlavor = $flavorItems.length;
    let i = 1;

    if (amountFlavor > startElement + i * amountElement) {
      $this.addClass("btn-on-mob").append('<div class="flavor-btns"><a href="#!" class="flavor-btn-more">LOAD MORE FLAVORS</a></div>');

      $this.on("click", ".flavor-btn-more", function () {
        const visibleElements = startElement + i * amountElement;
        const styleString = `<style>@media (max-width: 1250px) {.btn-on-mob.flavor-${index} .flavor-new-item:nth-of-type(-n+${visibleElements}) { display: block; }}</style>`;

        if (visibleElements < amountFlavor) {
          $this.addClass(`flavor-${index}`).find("style").remove().end().append(styleString);
          i++;
        } else {
          $this.addClass(`flavor-${index}`).find("style").remove().end().append(styleString);
          $this.addClass("flavor-all-visible");
        }
      });
    }
  });
}