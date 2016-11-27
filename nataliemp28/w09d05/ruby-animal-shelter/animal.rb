class Animal

  attr_accessor :name
  attr_accessor :breed
  attr_accessor :gender
  attr_accessor :fave_toys

  def initialize(name, breed, gender)
  @name = name
  @breed = breed
  @gender = gender
  @fave_toys = []
  end

  def add_toy(toy)
    @fave_toys << toy
  end

  def to_s
  "--> #{@name}"
  end

end
