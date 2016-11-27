require_relative "animal"
require_relative "client"
require_relative "shelter"
require_relative "pet"

@shelter = Shelter.new "Natalie's Animal Care Home"

dog = Animal.new "solomon", "boxer", "male"
cat = Animal.new "sparkles", "british blue", "female"
fluffy = Pet.new "fluffy", "persian", "female"
@shelter.add_animal(dog)
@shelter.add_animal(cat)

@client = Client.new "natalie", "pateman", ["fluffy"]
@client.add_pet(fluffy)



def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***\n\n"
  puts "0 : Add a new client to the shelter"
  puts "1 : List all the animals in the shelter"
  puts "2 : List all registered clients"
  puts "3 : Give up an animal?"
  puts "4 : Adopt an animal?"
  puts "Q : Quit\n\n"
  print "--> "
  gets.chomp
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end

def list_clients(shelter)
  shelter.clients.each_with_index do |client, index|
   puts "#{index}.\t#{client}"
  end
end

def list_pets(client)
  client.pets.each_with_index do |pet, index|
   puts "#{index}.\t#{pet}"
  end
end

response = menu

while response.upcase != "Q"
  case response
  when "0"
    puts "Add a new client to the shelter"
    puts "Client first name: "
    first_name = gets.to_s
    puts "Client last name: "
    last_name = gets.to_s
    puts "What pets do you currently have?"
    puts "Name"
    name = gets.to_s
    puts "Breed"
    breed = gets.to_s
    puts "Gender"
    gender = gets.to_s
    pets = gets.to_s
    # puts "Fave toys"
    # fave_toys = gets
    #
    list_pets = Pet.new name, breed, gender
    new_client = Client.new first_name, last_name, pets
    @shelter.add_client new_client
    puts new_client
    puts list_pets
    gets

  when "1" # See animals
    puts "List all the animals currently in the shelter"
    list_animals @shelter
    gets

  when "2" # List clients
    puts "List all registered clients"
    list_clients @shelter
    gets

  when "3" # Give up animal
    puts "Do you really want to give away your pet? Boo. Which one?"
    list_pets @client
    pet_index_remove = gets.to_i
    pet_to_remove = @client.pets[pet_index_remove]
    @client.pets.delete(pet_to_remove)
    @shelter.animals << pet_to_remove
    puts "Animals now in shelter"
    list_animals @shelter
    gets

  when "4" # Adopt animal
    puts "Cool, you'd like to adopt an animal? Which client are you?"
    list_clients @shelter
    gets
    puts "Here are the available animals"
    list_animals @shelter
    puts "Which animal would you like to adopt"
    animal_index_remove = gets.to_i
    animal_to_remove = @shelter.animals[animal_index_remove]
    @shelter.animals.delete(animal_to_remove)
    @client.pets << animal_to_remove
    puts "Your animals: "
    list_pets @client
    gets

  end
  response = menu
end
