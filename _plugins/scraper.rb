require 'HTTParty'
require 'Nokogiri'

response = HTTParty.get('https://content.spaceship.com.au/data/super/investment/growthx/unit-price.json')
puts response.body, response.code, response.message, response.headers.inspect

# class Scraper
#     attr_accessor :parse
#     def initialize
#         doc = HTTParty.get('https://www.spaceship.com.au/products/super/growthx/performance')
#         @parse ||= Nokogiri::HTML(doc)
#     end

#     def get_units
#         units = parse.css("dollar").map { |unit| unit.text }.compact
#     end

#     puts units
# end

# https://content.spaceship.com.au/data/super/investment/unit-price.json