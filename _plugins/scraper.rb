require 'HTTParty'

module SpaceshipUnitPrice
    def get_unit
        response = HTTParty.get('https://content.spaceship.com.au/data/super/investment/global-index/unit-price.json')
        unit = Array.new
        unit << response[-1]["Buy Price"]
        unit << response[-1]["Unit Price Date"]
        return unit
    end
end

# https://content.spaceship.com.au/data/super/investment/growthx/unit-price.json

Liquid::Template.register_filter(SpaceshipUnitPrice)