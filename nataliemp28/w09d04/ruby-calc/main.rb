calculating = true
while calculating do

  puts "Welcome to Nat's Ruby Calculator"

  puts "What calculation would you like to do? subtract, multiply, add, divide, power, sqrt, moon_weight, mortgage_payment ?"

  calc = gets.chomp
#
# if calc == "mortgage"
#   puts "enter your principal amount"
#     principal = gets.to_f
#   puts "what's your interest rate?"
#     interest = gets.to_f
#   puts "number of payments?"
#     no_of_payments = gets.to_f
#   puts "your monthly mortage payment will be #{princial }"
#
# else

  puts "enter your first number "
  first_number = gets.to_f

  if calc == "sqrt"
    answer = Math.sqrt(first_number)
    puts "your answer is #{answer}"

  elsif calc == "moon_weight"
    puts "your answer is #{first_number * 0.2}"

  else
    puts "enter your second number "
    second_number = gets.to_f

    if calc == "add"
      puts "your answer is #{first_number + second_number}"
    elsif
      calc == "subtract"
      puts "your answer is #{first_number - second_number}"
    elsif
      calc == "multiply"
      puts "your answer is #{first_number * second_number}"
    elsif
      calc == "divide"
      puts "your answer is #{first_number / second_number}"
    elsif
      calc == "power"
      puts "your answer is #{first_number ** second_number }"
    else
      puts "Select something valid please"
    end
  end
end
  print "Do you want to calculate again? "

  calculating = gets.chomp == 'y'
end
puts "Okay see you later"
