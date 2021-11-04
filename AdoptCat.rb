# AdoptCat.rb
require 'uri'
require 'net/http'
require 'csv'
require 'json'

#Location of server
uri = URI('http://localhost:3000/cats')

#Generate welcome message and start gathering data from user
puts "Welcome to Adopt A Cat: The Preferred Tool for Finding Your Perfect Cat "
puts "Please answer a few questions to recieve personalized matches"
puts "You can press enter to skip any question"
puts "What gender would you like your cat to be? Please enter male or female"
genderInput = gets.chomp
puts "What color would you like your cat to be? Please enter one of the following:"
puts "black, white, orange, tabby, brown, tortoise-shell, gray, cream, red"
colorInput = gets.chomp
puts "What age would you like your cat to be? Please enter an integer between 0 and 20"
ageInput = gets.chomp
puts "What size would you like your cat to be? Please enter small, medium, or large"
sizeInput = gets.chomp
puts "What hair length would you like your cat to have? Please enter short, medium, long, or hairless"
hairInput = gets.chomp
puts "Would you like this as a CSV file?"
csvInput = gets.chomp
puts "Thank you for answering."



#Generate query params by checking user inputs
params = {}
if (genderInput =='male' || genderInput == 'female')
	params.store('gender', genderInput)
end
if (colorInput =='black' || colorInput == 'white')
	params.store('color', colorInput)
end
#if (ageInput. < 20 && ageInput>=0)
#	params.store('age', ageInput)
#end
if (sizeInput =='small' || sizeInput == 'medium'|| sizeInput == 'large')
	params.store('size', sizeInput)
end
if (hairInput =='short' || hairInput == 'medium'|| hairInput == 'long'|| hairInput == 'hairless')
	params.store('hair', hairInput)
end
#add params onto uri so it can query
uri.query = URI.encode_www_form(params)

#Make GET request
res = Net::HTTP.get_response(uri)
puts res.body if res.is_a?(Net::HTTPSuccess)


#If user wanted a csv file, translate the data from the server into an array of hashes
#Organize CSV by data types and then generate CSV by inputing data from each hash
if (csvInput =='y')
	catArray = JSON.parse res.body
	headers = ["name", "gender", "color", "age", "size", "hair", "daysUnadopted"]
	CSV.open("adoptable_Cats.csv", "w") do |csv|
  csv << headers
  catArray.each do |cat|
    csv << CSV::Row.new(cat.keys, cat.values)
  end
end
end