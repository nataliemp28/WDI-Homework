
class Shelter

  attr_reader :name
  attr_reader :capacity
  attr_accessor :animals
  attr_accessor :clients

  def initialize(name)
    @name = name
    @capacity = 10
    @animals = []
    @clients = []
  end

  def add_animal(animal)
    @animals << animal
  end

  def add_client(client)
    @clients << client
  end

end
