// Controlling Modal Window - Viewing and Exiting - jQuery
$('.productCard').click(function() {
  $('.modalWindow').css('display', 'block')
})

$('#closeModal').click(function() {
  $('.modalWindow').css('display', 'none')
})



// Grabbing the bottle name and price when product card is clicked.

// Initializing Global Variables
let productName = ""
let productFirstWord = ""
let productPrice = ""
let cartTotal = 0
let productPriceList = [['Hydro', 34], ['Zojirushi', 28], ['Thermos', 15],
['Takeya', 32], ['Brita', 24], ['CamelBak', 12], ['Vapur', 12], ['purifyou', 30]]
let productDescriptions =[
['Hydro', "The Hydro Flask Standard Mouth is an insulated, double-walled stainless steel water bottle with a powder-coated exterior and a plastic. This bottle holds 21 ounces, will not dent easily and will not deteriorate as quickly as plastic bottles. If you want a reliable water bottle capable of keeping your beverages hot or cool for hours, this is the bottle for you."],
['Zojirushi', "The Zojirushi Stainless Steel Mug holds 20 ounces and offers vacuum insulation, which keeps any of your beverages hot or cold for hours on end. This bottle has a compact design, taking minimal space all the while maximizing capacity. This bottle is another great option for keeping your beverages hot or cold for hours!"],
['Thermos', "The Thermos Hydration Bottle is composed of plastic and holds 24 ounces. This bottle is a great option if you want a lightweight, portable bottle and a great deal. The textured design of the bottle enhances grip, and its wide mouth allows for easy insertion of ice cubes to keep your beverages cool. Additionally, this bottle is dishwasher-friendly!"],
['Takeya', "The Takeya Actives Insulated Water Bottle is a double-walled stainless steel water bottle capable of holding 22 ounces. Perfect option for a gym water bottle and also for casual use. The most alluring feature of the bottle is the spout lid, which will not splash anything when you try to take a sip."],
['Brita', "The Brita Plastic Water Filter Bottle is a plastic water bottle which can hold 26 ounces. The bottle comes with a water filter, which reduces chlorine (taste and odor) and lasts for approximately 2 months! Other than its filtration capability, the bottle has a leak-proof lid, cup holder friendly design, and allows for convenient opening!"],
['CamelBak', "The CamelBak Eddy+ is a plastic water bottle which can hold 25 ounces of water. The bottle has a straw that lets you drink without tilting the bottle which can come in handy especially when multi-tasking. All you need to do is bite down on the straw and start sipping! Other than the convenient straw, CamelBak Eddy+ bottles are leak proof when closed, easy to carry using the 2 finger carry loop handle, and easy to clean since both the cap and bottle itself are dishwasher safe!"],
['Vapur', "The Vapur Wide-Mouth Anti-Bottle holds 1 liter and a great activity-friendly 'bottle.' When empty, the plastic scrunches up, allowing you to carry it without any hassle. The design allows the plastic's size to adjust depending on the amount of water inside. Therefore, these bottles can fit into any bag!"],
['purifyou', "The Purifyou Premium Bottle is made of glass and does not have any plastic touching your water (the cap is lined with stainless steel). This bottle can hold 22 ounces and is also covered in a protective silicone sleeve, allowing for easy gripping. This bottle is not recommended for those who would like to keep their beverages at a desired temperature for long periods of time, but it does provide the satisfaction of drinking from glass!"]
]
let userCart = []

function productNameL(productName){
  let tempArray = productName.split(" ")
  return tempArray[0]
}

function grabProductPrice(productPrice) {
  let tempArray = productPrice.split(" ")
  return tempArray[tempArray.length - 1]
}

$('.productCard').click(function() {
   productName = $(this).find('h2').text()
   productFirstWord = productNameL(productName)
   console.log(productFirstWord)
   productPrice = $(this).find('h3').text()
})

// Changing Modal Window information based on product card clicked.
$('.productCard').click(function() {
  let productLower = productNameL(productName)
  let productPriceTag = grabProductPrice(productPrice)

  $('.modalProductName').text($(this).find('h2').text())
  $('.modalInformation > h3').text("Price:" + " " + productPriceTag)

  let imageSRC = $(this).find('.productPicture').attr('src')
  console.log(imageSRC)

  if (imageSRC == "/static/images/vapur.png" || imageSRC == "/static/images/purifyou.png"){
    $('.modalPicture').css({'padding':'3em 6em'})
  }

  if (imageSRC == "/static/images/takeya.png") {
    $('.modalPicture').css({'padding':'3em 7.8em'})
  }

  $('.modalPicture').attr('src', $(this).find('.productPicture').attr('src'))

  // let product = productNameL($('.modalProductName').text())

  let productDescription = ""

  for (let r = 0; r < productDescriptions.length; r++) {
    for (let c = 0; c < productDescriptions[0].length; c++) {
      if (productLower === productDescriptions[r][c]) {
        productDescription = productDescriptions[r][c+1]
      }
      else {
        continue
      }
    }
  }

  $('.modalProductDescription').text(productDescription)
})

// Resetting information if user exits modal window
$("#closeModal").click(function() {
  productName = ""
  productFirstWord = ""
  productPrice = ""
  $('.modalPicture').css({'padding':'3em 9em'})
})

// Calculating user's cart total - Conversion from string to number resulted in NaN.
$('.addToCart').click(function() {
  let product = productNameL($('.modalProductName').text())
  let productPriceTag = 0

  for (let r = 0; r < productPriceList.length; r++) {
    for (let c = 0; c < productPriceList[0].length; c++) {
      if (product === productPriceList[r][c]) {
        productPriceTag = productPriceList[r][c+1]
      }
      else {
        continue
      }
    }
  }
  cartTotal += productPriceTag

  let itemName = $('.modalProductName').text()

  // Adding product to user's cart
  userCart.push(itemName)
  JSON.stringify(userCart)

  $('.modalWindow').css('display', 'none')
})

// Removing items from the cart
$('.cartItem').on('mouseover', function() {
  $(this).find('.removeItem').css('display','block')
})

$('.cartItem').on('mouseleave', function() {
  $(this).find('.removeItem').css('display','none')
})

$('.removeItem').click(function() {
  cartTotal -= productPriceList[$(this).parent().find('h4').text()]
  console.log(cartTotal)
  sessionStorage.setItem('userTotal', cartTotal)
  $('#checkoutTotal').html("<b>$" + cartTotal + "</b>")
  $(this).parent().remove()
})

// Controlling the user's total on checkout page using session storage.

// Saving cart total to session storage
$('.cartLogo').on("click", function() {
  sessionStorage.setItem('userTotal', cartTotal)
  // Storing user's cart into sesssion storage.
  sessionStorage.setItem('userCart', JSON.stringify(userCart))
})

// Saving user's first name, last name, and email address on checkout.
$('.completeOrder').click(function() {
  sessionStorage.setItem('userFirstName', $('#fName').val())
  sessionStorage.setItem('userLastName', $('#lName').val())
  sessionStorage.setItem('userEmail', $('#emailAddress').val())
})
