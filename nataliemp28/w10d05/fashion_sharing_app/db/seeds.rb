# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.connection.execute("TRUNCATE products RESTART IDENTITY")

Product.create!([{
  description: "High heeled leather ankle boots",
  retailer: "Kurt Geiger",
  image: "http://media.topshop.com/wcsstore/TopShop/images/catalog/62K39FBLK_large.jpg",
  price_at_purchase: "129.99"
},{
  description: "Biker jacket",
  retailer: "All Saints",
  image: "http://sheerluxe.com/sites/default/files/2014/11/all-saints-biker-jackets-9.jpg",
  price_at_purchase: "450"
}, {
  description: "Stilettos",
  retailer: "Jimmy Choo",
  image: "https://trr-sales-images-production.s3.amazonaws.com/uploads/landing_page/image/173/JimmyChoo_DesignerShoes_TheRealReal_Luxury_Consignment.jpg",
  price_at_purchase: "699"  
}])
