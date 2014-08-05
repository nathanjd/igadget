$(".//div[@id='Footer']") {
  # Extract the first two sentences.
  $('./p') {
    inner() {
      replace(/\.(?=([^"]*"[^"]*")*[^"]*$)/, ".<br/>")
    }
  }
  # remove('./p')
  # insert("p", "All prices are in USD")
  # insert("p", "Copyright 2014 iGadgetCommerce.")

  insert("p", "powered by:", class: "mw-footer")
  insert("div", class: "moovweb-logo")
}