require 'HTTParty'

response = HTTParty.get('https://content.spaceship.com.au/data/super/investment/global-index/unit-price.json')

def get_unit(data)
    unit = Array.new
    unit << data[-1]["Buy Price"]
    unit << data[-1]["Unit Price Date"]
    return unit
end

get_unit(response)

# https://content.spaceship.com.au/data/super/investment/growthx/unit-price.json