# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE locations RESTART IDENTITY")

Location.create!([{
  city_country: "Rome, Italy",
  approx_cost: "499",
  best_time_to_visit: "Spring",
  sun_venue: false,
  image: "https://c.tadst.com/gfx/750x500/roman-calendar.jpg?1"
}, {
  city_country: "Bridgetown, Barbados",
  approx_cost: "1500",
  best_time_to_visit: "Anytime!",
  sun_venue: true,
  image: "http://www.telegraph.co.uk/content/dam/Travel/Destinations/Caribbean/Barbados/barbados_overview_WorthingBeach-xlarge.jpg"
}, {
  city_country: "Waikiki, Hawaii",
  approx_cost: "3000",
  best_time_to_visit: "Summer or Spring",
  sun_venue: true,
  image: "http://imgstocks.com/wp-content/uploads/2013/11/Beach-sunset-wallpaper-dekstop-hd-13268-wallpaper-hdwallsize-com-1280x800.jpg"
}, {
  city_country: "Copenhagen, Denmark",
  approx_cost: "395",
  best_time_to_visit: "Anytime but winter!",
  sun_venue: false,
  image: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-126140612_super%20.jpg?sharp=10&vib=20&w=1200"
}])
