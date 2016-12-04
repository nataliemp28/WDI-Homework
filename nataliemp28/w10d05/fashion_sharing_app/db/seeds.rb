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
}])
