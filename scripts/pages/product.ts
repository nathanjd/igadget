$$("body") {
  # Add a class for page specific styling
  add_class("_product")
  
  $(".//div[@id='LayoutColumn3']") {
    move_here("//div[@id='SideNewProducts']", "top")
  }

  $(".//div[@id='ProductDetails']") {
    $(".//div[contains(@class, 'ProductMain')]") {
      move_here("//form[@id='frmWishList']", "bottom") {
        $("./p[1]") {
          text() {
            set("")
          }
        }
      }

      $(".//form[@id='productDetailsAddToCartForm']") {
        move_here(".//div[contains(@class, 'BulkDiscount')]", "bottom")
      }
    }
  }

  remove(".//div[@id='SideProductAddToWishList']")
}