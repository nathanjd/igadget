# Place holder/example file
$$("body") {
  # Add a class for page specific styling
  add_class("_home")

  $(".//span[@class='Logo1stWord']") {
    log("Look Ma, I fetched something! ", fetch("text()"))
  }

  # Remove shopping cart summary
  remove(".//div[@id='SideCartContents']")
}