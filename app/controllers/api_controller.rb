class ApiController < ApplicationController
    include Response
  
    def random_greeting
      message = Greeting.find(Greeting.pluck(:id).sample)
      json_response({ message: message })
    end
  end