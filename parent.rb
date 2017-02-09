class Parent

		attr_reader :person
    def initialize(person) 
      @person = person
    end 

    def hello
      puts "Dad, say hi #{person} "
    end 
end

class Child < Parent 
  def initialize(person)
    @person = person
    super
  end
end 	

father = Parent.new("sister")
son = Child.new("brother")
son.hello => Dad, say hi brother