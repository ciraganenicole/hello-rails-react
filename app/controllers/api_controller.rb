class ApiController < ApplicationController
    include Response
  
    def random_greeting
      message = Greeting.find(Greeting.pluck(:id).sample)
      json_response({ greeting: message.greeting })
    end
  end