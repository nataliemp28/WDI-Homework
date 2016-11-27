require_relative "shelter"
class Client

  attr_accessor :first_name
  attr_accessor :last_name
  attr_accessor :pets

  def initialize(first_name, last_name, pets)
    @first_name = first_name
    @last_name = last_name
    @pets = []
  end

      def add_pet(pet)
        @pets << pet
      end

    def remove_pet(pet)
      @shelter << pet
    end

    def to_s
  "--> #{@first_name} #{@last_name} #{@pets}"
    end
  # 
  # joe = Client.new "joe", "smith", ["christie", "fluffy"]
  # @client.add_client(joe)
  #


end
