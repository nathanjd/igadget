# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()

  # Rewrite relative img and script paths to absolute
  absolutize()

  rewrite_aspnet_scripts()

  # Add mobile meta tags
  clean_mobile_meta_tags()

  # Remove styles and comments
  remove_all_styles()
  remove_html_comments()

  add_assets()

  remove(".//div[@id='AjaxLoading']")

  # Set up carousels.
  $(".//div[contains(@class, 'FeaturedProducts') or contains(@class, 'NewProducts') or contains(@class, 'TopSellers') or contains(@class, 'PopularProducts') or contains(@class, 'CategoryContent') or contains(@class, 'SideRelatedProducts') or contains(@class, 'SideRecentlyViewed') or @id='SimilarProductsByCustomerViews' or @id='BrandContent'][count(*) > 0]") {
    attribute("data-ur-set", "carousel")
    attribute("data-ur-infinite", "disabled")

    # 3 wide will not fit on a portrait iPhone
    attribute("data-ur-fill", 2)

    $(".//ul[contains(@class, 'ProductList')]") {
      attribute("data-ur-carousel-component", "scroll_container")

      $("./li") {
        attribute("data-ur-carousel-component", "item")
      }
    }

    insert("div") {
      attribute("data-ur-carousel-component", "dots")
    }

    $(".//a[contains(., 'Add To Cart')]") {
      add_class('button add-to-cart')
    }
    $(".//a[contains(., 'Choose Options')]") {
      add_class('button choose-options')
    }
  }

  # Set up accordions.
  $(".//div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice' or @id='ProductByCategory' or contains(@class, 'BrandList')][count(*) > 0]") {
    attribute("data-ur-set", "toggler")

    $(".//*[self::h2 or self::h3]") {
      add_class("mw_bar")
      attribute("data-ur-toggler-component", "button")

      insert("div", class: "mw_indicator")
    }

    $(".//div[contains(@class, 'BlockContent') or contains(@class, 'FindByCategory')]") {
      attribute("data-ur-toggler-component", "content")

      $('.//a') {
        insert("div", class: "mw_arrow")
      }
    }
  }

  # Move breadcrumbs.
  $(".//div[@id='Wrapper']") {
    move_here(".//div[contains(@class, 'Breadcrumb')]", "top")
  }

  # Remove newsletter subscription
  remove(".//div[contains(@class, 'NewsletterSubscription')]")

  # Remove modal as it does not behave well on mobile. It appends the modal to
  #   the end of the body with element level styles that cannot be overriden.
  #   An error is thrown :(, but it is preferable to the default behaviour.
  remove(".//script[contains(@src, 'fancybox')]")

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
