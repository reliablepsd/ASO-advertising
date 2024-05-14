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
  // add class for block with headline article
  jQuery(".flavor-new-item._headline").closest(".flavor-row-new").addClass("_have-headline");

  jQuery(".flavor-row-new").each(function (index, element) {

    const startElement = 32;
    const amountElement = 18;
    const $this = jQuery(this);
    const $flavorItems = $this.find(".flavor-new-item");
    const amountFlavor = $flavorItems.length;
    let i = 1;

    if (amountFlavor > startElement + i * amountElement) {
      $this.addClass("btn-on-mob flavor-all-hide").append('<div class="flavor-btns"><a href="#!" class="flavor-btn-hide">HIDE FLAVORS</a><a href="#!" class="flavor-btn-more">LOAD MORE FLAVORS</a></div>');

      $this.on("click", ".flavor-btns > a", function () {
        let visibleElements = startElement;
        if (jQuery(this).hasClass("flavor-btn-more")){
          visibleElements = startElement + i * amountElement;
          i++;
          $this.removeClass("flavor-all-hide");
          if (visibleElements >= amountFlavor) {
            $this.addClass("flavor-all-visible").removeClass("flavor-all-hide");
          }
        } else if (jQuery(this).hasClass("flavor-btn-hide")){
          i--;
          visibleElements = startElement + (i - 1) * amountElement;
          $this.removeClass("flavor-all-visible");
          if (visibleElements <= startElement) {
            $this.addClass("flavor-all-hide");
          }
        }
        let styleString = `<style>@media (max-width: 1250px) {.btn-on-mob.flavor-${index} .flavor-new-item:nth-of-type(-n+${visibleElements}) { display: block; }}</style>`;

        $this.addClass(`flavor-${index}`).find("style").remove().end().append(styleString);

      });
    }
  });
}