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

        $(".//input[@type='image']") {
          attribute("type", "submit")
          attribute("value", "Add To Wish List")
          add_class("add-to-wish-list")
        }
      }

      $(".//form[@id='productDetailsAddToCartForm']") {
        move_here(".//div[contains(@class, 'BulkDiscount')]", "bottom") {
          $('./input') {
            attribute("type", "submit")
            attribute("value", "Add To Cart")
            add_class("add-to-cart")
          }
        }
      }
    }
  }

  $(".//div[@id='ProductReviews']/a") {
    add_class("write-a-review")
    remove("./img")
    text() {
      set("Write a Review")
    }
  }

  remove(".//div[@id='SideProductAddToWishList']")
}